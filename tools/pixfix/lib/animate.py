# ⑥ 애니메이션 안정화: AI는 프레임마다 그림을 새로 그려서, 움직이지 않는 곳도 칸이 조금씩 달라 지글거림
#
# 부위 이름을 몰라도 되는 방법:
#  1) 프레임마다, 다른 프레임들을 이 프레임에 맞게 옮겨 봄. 칸마다 "다른 프레임을 어느 쪽으로 몇 칸 옮기면
#     이 근처와 가장 잘 맞나"(움직임)를 찾음 → 숨쉬기로 1칸 내려앉은 몸, 흔들린 깃털도 옮긴 그림으로 설명됨
#  2) 이 프레임 + 옮긴 다른 프레임들로 칸마다 다수결 → 프레임마다 따로 생긴 흔들림은 표가 모자라 지워짐
#  3) 다수결과 다른 칸 중
#     - 색 차이가 작고 제각각인 칸 → 노이즈 → 다수결 값으로
#     - 색 차이가 커도 몇 칸짜리로 흩어진 것 → 노이즈 → 다수결 값으로
#     - 덩어리째 일관되게 바뀐 것(새로 나타난 부분, 일부러 바꾼 색) → 진짜 변화 → 둠
#  그러면 같은 부분은 모든 프레임에서 같은 색 번호를 갖게 됨
import numpy as np
from scipy import ndimage

from .color import dist
from .cleanup import MARK

MODES = {
    # normal: 4칸 이상 덩어리 변화는 진짜로 봄 (한 프레임만 눈 감기 같은 작은 변화도 지킴)
    # strong: AI가 프레임마다 다시 그린 그림용. 20칸 미만 변화와 색만 바뀐 덩어리는 다수결로 되돌림
    'normal': dict(radius=2, win=2, pen=0.02, tol=0.12, keep=4, recolor=4, passes=2, agree=0.6, smooth=5),
    'strong': dict(radius=2, win=2, pen=0.02, tol=0.3, keep=20, recolor=10 ** 9, passes=2, agree=0.6, smooth=5),
    # rebuild: 기준 프레임 하나만 믿고, 다른 프레임은 '기준 프레임 조각을 1칸 옮긴 것'으로만 다시 만듦.
    # 옮겼을 때 잘 맞는 곳(잔차 15% 이하)만 움직임으로 인정. AI가 프레임마다 방패·칼 모양까지 다르게 그린 경우용
    'rebuild': dict(radius=1, win=2, pen=0.03, smooth=9, max_resid=0.15),
}


def shift(a, dy, dx, fill=-1):
    """out[y, x] = a[y + dy, x + dx] (밖은 fill)"""
    H, W = a.shape
    out = np.full_like(a, fill)
    out[max(0, -dy):min(H, H - dy), max(0, -dx):min(W, W - dx)] = \
        a[max(0, dy):min(H, H + dy), max(0, dx):min(W, W + dx)]
    return out


def differ(a, b):
    return (a != b) & ((a >= 0) | (b >= 0))


def split(sheet, marks, fw):
    n = sheet.shape[1] // fw
    return ([sheet[:, k * fw:(k + 1) * fw].copy() for k in range(n)],
            [marks[:, k * fw:(k + 1) * fw].copy() for k in range(n)])


def join(frames, marks):
    return np.concatenate(frames, 1), np.concatenate(marks, 1)


def medoid(frames):
    n = len(frames)
    d = np.zeros((n, n))
    for i in range(n):
        for j in range(i + 1, n):
            d[i, j] = d[j, i] = differ(frames[i], frames[j]).sum()
    return int(d.sum(1).argmin())


def align(frames, marks, base, axes, r=2):
    """프레임 전체를 ±r칸 옮겨 기준 프레임과 가장 잘 맞는 위치로 (AI 프레임의 좌우 흔들림 잡기)"""
    b = frames[base]
    moved = []
    for i, f in enumerate(frames):
        if i == base:
            moved.append([0, 0])
            continue
        def score(dy, dx):
            s = shift(f, dy, dx)
            return ((s == b) & (b >= 0)).sum()
        s0 = score(0, 0)
        cand = [(score(dy, dx), dy, dx) for dy in (range(-r, r + 1) if 'y' in axes else [0])
                for dx in (range(-r, r + 1) if 'x' in axes else [0])]
        s, dy, dx = max(cand, key=lambda c: (c[0], -abs(c[1]) - abs(c[2])))
        if s > s0 * 1.03 and (dy or dx):
            frames[i] = shift(f, dy, dx)
            marks[i] = shift(marks[i], dy, dx, 0)
        else:
            dy = dx = 0
        moved.append([-int(dx), -int(dy)])
    return moved


def motion_predict(f, b, radius, win, pen, smooth=5, max_resid=None):
    """칸마다 b를 어떻게 옮기면 f 근처와 가장 잘 맞는지 찾아 'f처럼 옮긴 b'를 만듦.
    움직임은 덩어리로 일어나므로, 고른 이동을 주변 5×5에서 다수결로 한 번 더 고름 (우연히 맞은 이동 걸러냄)"""
    vs = [(dy, dx) for dy in range(-radius, radius + 1) for dx in range(-radius, radius + 1)]
    shifted = [shift(b, dy, dx) for dy, dx in vs]
    costs = np.stack([ndimage.uniform_filter(differ(f, s).astype(float), size=2 * win + 1, mode='constant')
                      + pen * (abs(dy) + abs(dx)) for s, (dy, dx) in zip(shifted, vs)])
    best = costs.argmin(0)
    if max_resid is not None:
        # 옮겨도 잘 안 맞는 곳(= 움직임이 아니라 다르게 그린 곳)은 옮기지 않음
        z = vs.index((0, 0))
        resid = np.take_along_axis(costs, best[None], 0)[0] - pen * np.abs(np.array(vs)[best]).sum(-1)
        best[resid > max_resid] = z
    votes = np.stack([ndimage.uniform_filter((best == k).astype(float), size=smooth, mode='nearest') for k in range(len(vs))])
    votes[vs.index((0, 0))] += 1e-6
    best = votes.argmax(0)
    pred = np.choose(best, shifted)
    vec = np.array(vs)[best]
    return pred, vec


def consensus(frames, i, p):
    """프레임 i와, i에 맞게 옮긴 다른 프레임들의 칸별 다수결. 동점이면 i 자신"""
    f = frames[i]
    V = [f]
    moving = 0
    for j, g in enumerate(frames):
        if j != i:
            pred, vec = motion_predict(f, g, p['radius'], p['win'], p['pen'], p['smooth'])
            V.append(pred)
            moving += int(((vec != 0).any(-1) & (f >= 0)).sum())
    V = np.stack(V)
    counts = (V[None] == V[:, None]).sum(1)
    best = counts.argmax(0)
    win = np.take_along_axis(V, best[None], 0)[0]
    # 다른 프레임들이 충분히 한목소리일 때만 바꿈 (움직임 경계처럼 저마다 다른 곳은 그대로)
    need = max(2, int(np.ceil(p['agree'] * (len(frames) - 1))))
    strong = np.take_along_axis(counts, best[None], 0)[0] >= need
    return np.where(strong, win, f), moving // max(1, len(frames) - 1)


def stabilize_one(f, pred, pal_lab, mk, p):
    diff = differ(f, pred)
    both = (f >= 0) & (pred >= 0)
    de = np.zeros(f.shape)
    de[both] = dist(pal_lab[f[both]], pal_lab[pred[both]])
    small = diff & both & (de < p['tol'])
    big = diff & ~small
    snap = np.zeros(f.shape, bool)
    kept_recolor = kept_new = 0

    # 작은 색 차이: 덩어리째 같은 색 → 같은 색으로 바뀌었으면 일부러 바꾼 것(빛나는 눈 등)
    lbl, n = ndimage.label(small, structure=np.ones((3, 3)))
    for k in range(1, n + 1):
        reg = lbl == k
        if reg.sum() >= p['recolor']:
            pairs = list(zip(pred[reg], f[reg]))
            top = max(set(pairs), key=pairs.count)
            if pairs.count(top) >= 0.8 * len(pairs):
                kept_recolor += int(reg.sum())
                continue
        snap |= reg
    # 큰 차이: 흩어진 1~2칸은 노이즈, 덩어리는 진짜 변화
    lbl, n = ndimage.label(big, structure=np.ones((3, 3)))
    for k in range(1, n + 1):
        reg = lbl == k
        if reg.sum() < p['keep']:
            snap |= reg
        else:
            kept_new += int(reg.sum())
    out = f.copy()
    out[snap] = pred[snap]
    mk[snap] = MARK['stable']
    return out, dict(snapped=int(snap.sum()), kept_recolor=kept_recolor, kept_new=kept_new)


def flicker(frames):
    """깜빡임: 앞뒤 프레임은 같은데 가운데만 다른 칸 수 (반복 재생 기준)"""
    n = len(frames)
    if n < 3:
        return 0
    return int(sum(((frames[(t - 1) % n] == frames[(t + 1) % n]) & differ(frames[t], frames[(t - 1) % n])).sum()
                   for t in range(n)))


def stats(frames):
    n = len(frames)
    steps = [int(differ(frames[t], frames[(t + 1) % n]).sum()) for t in range(n)]
    area = [int((f >= 0).sum()) for f in frames]
    return dict(flicker=flicker(frames), steps=steps, area=area)


def run(sheet, marks, meta, pal_lab, mode='normal', base=None):
    if mode == 'auto':
        # strong(다수결)과 rebuild(기준 프레임만)를 둘 다 해 보고, 두 결과가 크게 다르면(실루엣 면적의 35% 넘게)
        # 원본이 프레임마다 다르게 그려진 것 → rebuild. 아니면 프레임별 흔들림일 뿐 → strong
        s1, m1, i1 = run(sheet.copy(), marks.copy(), meta, pal_lab, 'strong', base)
        if meta['frames'] < 2:
            return s1, m1, i1
        s2, m2, i2 = run(sheet.copy(), marks.copy(), meta, pal_lab, 'rebuild', base)
        gap = float(differ(s1, s2).sum() / max(1, (s1 >= 0).sum()))
        pick = (s2, m2, i2, 'auto→rebuild') if gap > 0.35 else (s1, m1, i1, 'auto→strong')
        pick[2]['mode'] = pick[3]
        pick[2]['strong_vs_rebuild'] = round(gap, 3)
        return pick[:3]
    fw = meta['frameWidth']
    frames, mks = split(sheet, marks, fw)
    info = dict(mode=mode, before=stats(frames))
    if len(frames) < 2 or mode == 'off':
        info['after'] = info['before']
        return sheet, marks, info
    p = MODES[mode]
    b = medoid(frames) if base is None else int(base)
    info['base'] = b
    info['offsets'] = align(frames, mks, b, 'x' if meta['anchorMode'] == 'bottom' else 'xy')
    per = [dict(snapped=0, kept_recolor=0, kept_new=0, moving=0) for _ in frames]
    if mode == 'rebuild':
        for i in range(len(frames)):
            if i == b:
                continue
            pred, vec = motion_predict(frames[i], frames[b], p['radius'], p['win'], p['pen'], p['smooth'], p['max_resid'])
            ch = differ(frames[i], pred)
            mks[i][ch] = MARK['stable']
            per[i].update(snapped=int(ch.sum()), moving=int(((vec != 0).any(-1) & (pred >= 0)).sum()))
            frames[i] = pred
    for _ in range(0 if mode == 'rebuild' else p['passes']):
        cons = [consensus(frames, i, p) for i in range(len(frames))]
        for i, (c, mv) in enumerate(cons):
            frames[i], s = stabilize_one(frames[i], c, pal_lab, mks[i], p)
            per[i]['snapped'] += s['snapped']
            per[i]['kept_recolor'] = s['kept_recolor']
            per[i]['kept_new'] = s['kept_new']
            per[i]['moving'] = mv
    info['frames'] = per
    info['after'] = stats(frames)
    sheet, marks = join(frames, mks)
    return sheet, marks, info
