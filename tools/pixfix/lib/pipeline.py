# 전체 흐름: 불러오기 → 프레임 나누기 → ① 격자 → ② 배경 → ③ 팔레트 → ④ 청소 → ⑤ 가독성 → 시트 조립
import numpy as np
from PIL import Image
from scipy import ndimage

from . import grid, background, palette, cleanup, outline, animate
from .color import oklab
from .cleanup import MARK

# 종류별 기본값. 규칙은 같고 숫자만 다름
PROFILES = {
    # outline: auto = 끊긴 곳만 이음(없으면 경고), add = 없으면 바깥에 둘러 줌, off = 손대지 않음
    # perfect: 외곽선 계단의 겹친 L자 칸 지우기. 화풍 문제라 기본은 끔 (--perfect로 켬)
    # stabilize: 프레임 사이 지글거림 잡기 (auto / strong / normal / rebuild / off). 이펙트는 모양이 크게 변해서 끔
    #   auto = strong으로 해 보고 그래도 많이 깜빡이면 rebuild
    'character': dict(outline='auto', dust=2, anchor='bottom', perfect=False, stabilize='auto'),
    'prop':      dict(outline='auto', dust=2, anchor='bottom', perfect=False, stabilize='auto'),
    'icon':      dict(outline='auto', dust=0, anchor='center', perfect=False, single=True, stabilize='normal'),
    'effect':    dict(outline='off', dust=0, anchor='center', perfect=False, stabilize='off'),
    'tile':      dict(outline='off', dust=0, anchor='none', perfect=False, no_bg=True, stabilize='off'),
}
DEFAULTS = dict(holes=False, merge=0.045, noise=0.07, rare_frac=0.004, rare_dist=0.09, max_colors=48)


def load(path):
    img = Image.open(path)
    has_alpha = img.mode in ('RGBA', 'LA', 'PA') or (img.mode == 'P' and 'transparency' in img.info)
    a = np.asarray(img.convert('RGBA')).astype(np.float64)
    return a[..., :3], (a[..., 3] if has_alpha else None)


def split_frames(mask, n_frames=None, frame_size=None, single=False):
    """프레임 영역 [(x0, x1, y0, y1)]. 지정이 없으면 세로로 빈 줄(틈)을 찾아 나눔"""
    H, W = mask.shape
    if frame_size:
        fw, fh = frame_size
        return [(x, x + fw, y, y + fh) for y in range(0, H - fh + 1, fh) for x in range(0, W - fw + 1, fw)]
    if single:
        return [(0, W, 0, H)]
    if n_frames:
        fw = W / n_frames
        return [(int(round(i * fw)), int(round((i + 1) * fw)), 0, H) for i in range(n_frames)]
    # 떨어진 작은 얼룩(배경 잡티)이 프레임 사이 틈을 메우지 않도록 작은 덩어리는 빼고 셈
    lbl, n = ndimage.label(mask)
    if n > 1:
        sizes = ndimage.sum(mask, lbl, range(1, n + 1))
        mask = np.isin(lbl, 1 + np.where(sizes >= max(4, 0.002 * sizes.max()))[0])
    occ = mask.sum(0) >= max(1, int(H * 0.005))
    gap = max(3, int(W * 0.008))
    segs, s, last = [], None, -10 ** 9
    for x in range(W):
        if occ[x]:
            if s is None:
                s = x
            last = x
        elif s is not None and x - last > gap:
            segs.append([s, last + 1])
            s = None
    if s is not None:
        segs.append([s, last + 1])
    if not segs:
        return [(0, W, 0, H)]
    # 아주 좁은 조각(떨어진 반짝이 등)은 가까운 프레임에 붙임
    med = np.median([b - a for a, b in segs])
    i = 0
    while i < len(segs) and len(segs) > 1:
        a, b = segs[i]
        if b - a < 0.2 * med:
            j = i - 1 if i > 0 and (i == len(segs) - 1 or a - segs[i - 1][1] <= segs[i + 1][0] - b) else i + 1
            segs[j] = [min(segs[j][0], a), max(segs[j][1], b)]
            segs.pop(i)
            i = 0
        else:
            i += 1
    # 프레임이라면 조각들 크기가 비슷해야 함. 크기가 제각각이면 한 그림의 떨어진 부분(스피커와 소리 물결 등)
    if len(segs) > 1:
        ws = np.array([b - a for a, b in segs], float)
        hs = np.array([np.ptp(np.where(mask[:, a:b].any(1))[0]) + 1 for a, b in segs], float)
        if ws.min() < 0.6 * ws.max() or hs.min() < 0.7 * hs.max():
            segs = [[segs[0][0], segs[-1][1]]]
    out = []
    for k, (a, b) in enumerate(segs):
        lo = (segs[k - 1][1] + a) // 2 if k > 0 else 0
        hi = (b + segs[k + 1][0]) // 2 if k + 1 < len(segs) else W
        rows = np.where(mask[:, a:b].any(1))[0]
        pad = max(4, (b - a) // 10)
        out.append((lo, hi, max(0, rows.min() - pad), min(H, rows.max() + 1 + pad)))
    return out


def _looks_native(rgb, alpha):
    H, W, _ = rgb.shape
    if max(H, W) > 320:
        return False
    q = np.round(rgb.reshape(-1, 3)).astype(int)
    if alpha is not None:
        q = q[alpha.reshape(-1) >= 128]
    return len(np.unique(q, axis=0)) <= 64


def run(path, profile='character', scale=None, native=None, n_frames=None, frame_size=None,
        master=None, single=False, base=None, **over):
    prof = dict(PROFILES[profile])
    prof.update(DEFAULTS)
    prof.update({k: v for k, v in over.items() if v is not None})
    rgb, alpha = load(path)
    warnings = []
    rep = dict(source=str(path), profile=profile, size=[int(rgb.shape[1]), int(rgb.shape[0])])

    # ② 배경 추정 (프레임 나누기에 필요해서 먼저)
    if prof.get('no_bg'):
        bg = dict(kind='none', colors=np.zeros((0, 3)), labs=np.zeros((0, 3)), tol=0.0)
        mask = np.ones(rgb.shape[:2], bool)
    else:
        bg = background.estimate(rgb, alpha)
        mask = background.fg_mask(rgb, alpha, bg)
        if not mask.any():
            # 전부 배경으로 보이면 (가장자리까지 꽉 찬 그림) 배경이 없다고 봄
            bg = dict(kind='none', colors=np.zeros((0, 3)), labs=np.zeros((0, 3)), tol=0.0)
            mask = np.ones(rgb.shape[:2], bool)
    rep['background'] = dict(kind=bg['kind'], colors=[('#%02x%02x%02x' % tuple(int(v) for v in c)) for c in bg['colors']],
                             tol=round(bg['tol'], 3))

    layers = background.checker_layers(rgb, bg)
    regions = split_frames(mask, n_frames, frame_size, single or (prof.get('single') and not (n_frames or frame_size)))
    if native is None:
        native = _looks_native(rgb, alpha)

    # ① 격자: 프레임마다 픽셀 크기를 찾고 중앙값으로 맞춤 (AI 그림은 전체에 걸쳐 격자가 조금씩 어긋나서 프레임별로 셈)
    if native:
        g = dict(p=1.0, confidence=0.0)
    elif scale:
        g = dict(p=float(scale), confidence=0.0)
    else:
        ests = [grid.estimate(rgb[y0:y1, x0:x1], mask[y0:y1, x0:x1]) for (x0, x1, y0, y1) in regions]
        ps = [e['p'] for e in ests if e['p'] > 1.0]
        if not ps:
            native = True
            g = dict(p=1.0, confidence=max(e['confidence'] for e in ests))
        else:
            g = dict(p=float(np.median(ps)), confidence=float(np.median([e['confidence'] for e in ests if e['p'] > 1.0])))
    rep['grid'] = dict(native=bool(native), pixel=round(g['p'], 3), confidence=round(g['confidence'], 2))
    if not native and g['confidence'] < 0.08:
        warnings.append(('warn', f"격자 신뢰도가 낮습니다({g['confidence']:.2f}). --scale로 픽셀 크기를 직접 지정해 보세요."))

    frames, marks, per = [], [], []
    for (x0, x1, y0, y1) in regions:
        sub, sm = rgb[y0:y1, x0:x1], mask[y0:y1, x0:x1]
        cm = layers[:, y0:y1, x0:x1] if layers is not None else None
        if native:
            colors, frac, cmc = sub, sm.astype(float), (np.moveaxis(cm, 0, -1) if cm is not None else None)
            fp = 1.0
        else:
            p = g['p']
            fg = grid.estimate(sub, sm, pmin=p * 0.97, pmax=p * 1.03, force=True)
            fp = fg['p']
            bx = grid.boundaries(fg['_px'], fg['_lo'][0], fg['_hi'][0], fp, fg['ox'])
            by = grid.boundaries(fg['_py'], fg['_lo'][1], fg['_hi'][1], fp, fg['oy'])
            colors, frac, cmc = grid.sample(sub, sm, bx, by, cm)
            cmc = cmc if cm is not None else None
        opaque, binfo = background.cell_opaque(colors, frac, bg, cmc) if bg['kind'] != 'none' else (np.ones(frac.shape, bool), dict(enclosed=0))
        mk = np.zeros(opaque.shape, np.int8)
        ys, xs = np.where(opaque)
        if len(xs) == 0:
            continue
        sl = (slice(ys.min(), ys.max() + 1), slice(xs.min(), xs.max() + 1))
        frames.append((colors[sl], opaque[sl]))
        marks.append(mk[sl])
        per.append(dict(region=[int(x0), int(y0), int(x1 - x0), int(y1 - y0)], pixel=round(fp, 3),
                        cells=[int(xs.max() - xs.min() + 1), int(ys.max() - ys.min() + 1)], enclosed_bg=binfo['enclosed']))
    if not frames:
        raise SystemExit('전경을 찾지 못했습니다. 배경과 그림 색이 너무 비슷하거나 이미지가 비어 있습니다.')
    rep['frames'] = per

    # ③ 팔레트 (모든 프레임 공통)
    allc = np.concatenate([c[o] for c, o in frames])
    pal, index, pinfo = palette.build(allc, merge=prof['merge'], rare_frac=prof['rare_frac'],
                                      rare_dist=prof['rare_dist'], max_colors=prof['max_colors'], master=master)
    idxs, k = [], 0
    for c, o in frames:
        idx = np.full(o.shape, -1, int)
        n = int(o.sum())
        idx[o] = index[k:k + n]
        k += n
        idxs.append(idx)
    rep['palette'] = pinfo

    # ④ 청소
    pal_lab = oklab(pal)
    cnt = dict(halo=0, speckle=0, dust=0, hole=0, perfect=0)
    halo_ok = bg['kind'] not in ('alpha', 'none') and not native
    for idx, mk in zip(idxs, marks):
        if halo_ok:
            cnt['halo'] += cleanup.halo(idx, pal_lab, bg['labs'], mk)
        cnt['speckle'] += cleanup.despeckle(idx, pal_lab, mk, noise=prof['noise'])
        cnt['dust'] += cleanup.dust(idx, mk, prof['dust'])
        if prof['holes']:
            cnt['hole'] += cleanup.holes(idx, mk)

    # ⑤ 외곽선
    dark = pal_lab[:, 0] < outline.DARK_L
    cov0 = outline.coverage(idxs, dark)
    oinfo = dict(coverage_before=round(float(cov0), 3), gaps=0, added=0, mode='none')
    if prof['outline'] != 'off':
        pal, oi = outline.outline_index(idxs, pal, dark)
        pal_lab = oklab(pal)
        dark = pal_lab[:, 0] < outline.DARK_L
        if cov0 >= 0.75:
            oinfo['mode'] = 'gap'
            for idx, mk in zip(idxs, marks):
                oinfo['gaps'] += outline.fill_gaps(idx, dark, oi, mk)
        elif prof['outline'] == 'add':
            oinfo['mode'] = 'add'
            for i in range(len(idxs)):
                idxs[i], marks[i], n = outline.add_outline(idxs[i], oi, marks[i])
                oinfo['added'] += n
        if prof['perfect']:
            # 계단 정리는 실제 외곽선 색에만 (어두운 칼자루·그림자까지 건드리지 않게)
            only = np.zeros(len(pal), bool)
            only[oi] = True
            for idx, mk in zip(idxs, marks):
                cnt['perfect'] += cleanup.pixel_perfect(idx, only, mk)
    oinfo['coverage_after'] = round(float(outline.coverage(idxs, dark)), 3)
    rep['cleanup'] = cnt
    rep['outline'] = oinfo

    sheet, smarks, meta = assemble(idxs, marks, prof['anchor'])

    # ⑥ 애니메이션 안정화 (프레임이 2개 이상일 때)
    sheet, smarks, ainfo = animate.run(sheet, smarks, meta, oklab(pal), prof['stabilize'], base)
    rep['animation'] = ainfo

    # 안 쓰는 색 정리
    used = np.unique(sheet[sheet >= 0])
    remap = -np.ones(len(pal) + 1, int)
    remap[used] = np.arange(len(used))
    sheet = np.where(sheet >= 0, remap[sheet], -1)
    pal = pal[used]
    idxs, _ = animate.split(sheet, smarks, meta['frameWidth'])
    rep['palette']['final'] = int(len(pal))
    rep['contrast'] = outline.contrast(idxs, pal)
    rep['sheet'] = meta
    rep['warnings'] = warnings + checks(rep)
    return dict(sheet=sheet, marks=smarks, palette=pal, frames=idxs, meta=meta, report=rep,
                original=(rgb, alpha), regions=regions)


def _anchor(idx, mode):
    h, w = idx.shape
    if mode == 'bottom':
        ys, xs = np.where(idx >= 0)
        low = xs[ys >= ys.max() - 1]
        return (low.min() + low.max() + 1) / 2, h
    if mode == 'center':
        return w // 2, h // 2
    return 0, 0


def assemble(idxs, marks, mode):
    """프레임을 같은 크기 칸에 기준점을 맞춰 가로로 늘어놓음"""
    anc = [_anchor(i, mode) for i in idxs]
    L = int(np.ceil(max(a[0] for a in anc)))
    R = int(np.ceil(max(i.shape[1] - a[0] for i, a in zip(idxs, anc))))
    T = int(np.ceil(max(a[1] for a in anc)))
    B = int(np.ceil(max(i.shape[0] - a[1] for i, a in zip(idxs, anc))))
    fw, fh = L + R, T + B
    sheet = np.full((fh, fw * len(idxs)), -1, int)
    sm = np.zeros(sheet.shape, np.int8)
    for k, (idx, mk, (ax, ay)) in enumerate(zip(idxs, marks, anc)):
        ox, oy = k * fw + int(round(L - ax)), int(round(T - ay))
        h, w = idx.shape
        sheet[oy:oy + h, ox:ox + w] = idx
        sm[oy:oy + h, ox:ox + w] = mk
    return sheet, sm, dict(frameWidth=fw, frameHeight=fh, frames=len(idxs), anchor=[L, T], anchorMode=mode)


def checks(rep):
    """리포트용 판정 (경고만 모음)"""
    w = []
    pi = rep['palette']
    if pi['final'] > 32:
        w.append(('warn', f"색이 {pi['final']}개로 많습니다. --merge 값을 올리면 더 줄어듭니다."))
    o = rep['outline']
    if o['mode'] != 'none' and o['coverage_after'] < 0.85:
        hint = ' --outline add로 바깥 외곽선을 둘러 줄 수 있습니다.' if o['mode'] == 'gap' or o['coverage_after'] < 0.6 else ''
        w.append(('warn', f"외곽선이 실루엣의 {o['coverage_after'] * 100:.0f}%만 감쌉니다.{hint}"))
    elif o['mode'] == 'none' and o['coverage_before'] < 0.6 and rep['profile'] not in ('effect', 'tile'):
        w.append(('info', f"외곽선이 거의 없습니다({o['coverage_before'] * 100:.0f}%). 필요하면 --outline add."))
    low = [k for k, v in rep['contrast'].items() if v['de'] < 0.15]
    if low:
        w.append(('warn', '이 배경에서 실루엣이 묻혀 보일 수 있습니다: ' + ', '.join(low)))
    a = rep.get('animation', {})
    if a.get('after') and len(a['after']['area']) > 1:
        ar = a['after']['area']
        if (max(ar) - min(ar)) > 0.12 * max(ar):
            w.append(('warn', f"프레임마다 면적이 많이 다릅니다({min(ar)}~{max(ar)}칸). 모양이 흔들리는 원본일 수 있습니다."))
        if a.get('mode') in ('normal', 'strong', 'auto→strong') and a['after']['flicker'] > 0.25 * np.mean(ar):
            w.append(('warn', f"정리 뒤에도 깜빡임이 {a['after']['flicker']}칸입니다. 원본이 프레임마다 다르게 그려졌다면 --stabilize rebuild를 써 보세요."))
        st = a['after']['steps']
        if len(st) > 2 and st[-1] > 2.5 * max(1, np.median(st[:-1])):
            w.append(('warn', f"마지막→첫 프레임 변화({st[-1]}칸)가 다른 프레임 사이({int(np.median(st[:-1]))}칸)보다 커서 반복할 때 튈 수 있습니다."))
    sizes = {tuple(f['cells']) for f in rep['frames']}
    if len(rep['frames']) > 1 and len({s[1] for s in sizes}) > 1:
        hs = [f['cells'][1] for f in rep['frames']]
        if max(hs) - min(hs) > max(2, 0.08 * max(hs)):
            w.append(('warn', f"프레임마다 키가 다릅니다({min(hs)}~{max(hs)}칸). 원본 형태가 흔들렸을 수 있습니다."))
    return w


def to_rgba(idx, pal):
    out = np.zeros(idx.shape + (4,), np.uint8)
    m = idx >= 0
    out[m, :3] = np.round(pal[idx[m]]).astype(np.uint8)
    out[m, 3] = 255
    return out
