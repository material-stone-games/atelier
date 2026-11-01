# ① 격자 복원: AI가 "픽셀 한 칸"을 몇 px로 그렸는지 찾아 실제 픽셀로 되돌림
#
# 칸 경계에서만 색이 바뀌므로, 열(행)마다 "옆 칸과의 색 차이"를 더한 1차원 신호를 만들면
# 경계 위치에 봉우리가 일정한 간격(= 픽셀 크기)으로 늘어섬. 그 간격과 시작 위치를 찾음
import numpy as np


def edge_profiles(rgb, mask):
    """경계 위치별 색 변화 세기. 배경끼리의 경계(체크무늬 등)는 빼려고 전경이 낀 곳만 셈"""
    dx = np.abs(np.diff(rgb, axis=1)).sum(2) * (mask[:, 1:] | mask[:, :-1])
    dy = np.abs(np.diff(rgb, axis=0)).sum(2) * (mask[1:, :] | mask[:-1, :])
    px = np.zeros(rgb.shape[1] + 1)
    py = np.zeros(rgb.shape[0] + 1)
    px[1:-1] = dx.sum(0)
    py[1:-1] = dy.sum(1)
    return px, py


def _fit(prof, lo, hi, p, offsets):
    """격자선 근처(±tol)에 모인 경계 세기 비율 − 우연히 모일 비율.
    2배 간격은 경계를 놓쳐서, 절반 간격은 우연히 걸리는 몫이 커져서 점수가 내려감 → 진짜 간격에서 가장 높음"""
    pos = np.arange(lo, hi + 1)
    w = prof[lo:hi + 1]
    tot = max(w.sum(), 1e-9)
    tol = min(1.0, 0.2 * p)
    d = np.abs(((pos[None, :] - offsets[:, None] + p / 2) % p) - p / 2)
    band = d <= tol
    return (band * w[None, :]).sum(1) / tot - band.mean(1)


def estimate(rgb, mask, pmin=2.0, pmax=64.0, force=False):
    """픽셀 크기 p와 x/y 시작 위치를 찾음. 반환: dict(p, ox, oy, confidence)
    confidence는 0~1 (격자선에 경계가 얼마나 모였나). 0.03 미만이면 이미 실제 크기로 봄"""
    ys, xs = np.where(mask)
    if len(xs) == 0:
        return dict(p=1.0, ox=0.0, oy=0.0, confidence=0.0)
    lo_x, hi_x = int(xs.min()), int(xs.max()) + 1
    lo_y, hi_y = int(ys.min()), int(ys.max()) + 1
    px, py = edge_profiles(rgb, mask)
    if not force:
        pmax = min(pmax, max(pmin + 0.1, min(hi_x - lo_x, hi_y - lo_y) / 3))

    def score(p, step):
        offs = np.arange(0, p, step)
        sx, sy = _fit(px, lo_x, hi_x, p, offs), _fit(py, lo_y, hi_y, p, offs)
        ix, iy = sx.argmax(), sy.argmax()
        return (sx[ix] + sy[iy]) / 2, offs[ix], offs[iy]

    coarse = [(p,) + score(p, 0.5) for p in np.arange(pmin, max(pmax, pmin + 0.01), 0.1)]
    pc, best = max(coarse, key=lambda c: c[1])[:2]
    if best < 0.03 and not force:
        return dict(p=1.0, ox=0.0, oy=0.0, confidence=float(best))
    a, b = (pmin, pmax) if force else (pc - 0.15, pc + 0.15)
    fine = [(p,) + score(p, 0.1) for p in np.arange(max(pmin, a), max(min(pmax, b), max(pmin, a) + 0.001), 0.01)]
    p, s, ox, oy = max(fine, key=lambda c: c[1])
    return dict(p=float(p), ox=float(ox), oy=float(oy), confidence=float(s), _px=px, _py=py,
                _lo=(lo_x, lo_y), _hi=(hi_x, hi_y))


def boundaries(prof, lo, hi, p, o):
    """예측한 경계를 근처의 실제 봉우리로 당겨 맞춤. AI 그림은 칸 크기가 조금씩 들쭉날쭉해서 필요함"""
    k0 = int(np.floor((lo - o) / p)) - 1
    k1 = int(np.ceil((hi - o) / p)) + 1
    pred = o + p * np.arange(k0, k1 + 1)
    pred = pred[(pred >= lo - p) & (pred <= hi + p)]
    sm = np.convolve(prof, [0.25, 0.5, 0.25], mode='same')
    ints = np.clip(np.round(pred).astype(int), 0, len(sm) - 1)
    thr = 0.3 * np.percentile(sm[ints], 90) if len(ints) else 0
    out = []
    r = max(1, int(round(p * 0.3)))
    for b in pred:
        bi = int(round(b))
        a0, a1 = max(0, bi - r), min(len(sm) - 1, bi + r)
        if a1 <= a0:
            out.append(b)
            continue
        j = a0 + int(np.argmax(sm[a0:a1 + 1]))
        out.append(float(j) if sm[j] >= thr and sm[j] > 0 else b)
    out = np.array(out)
    # 순서가 꼬이거나 너무 붙으면 예측값으로 되돌림
    for i in range(1, len(out)):
        if out[i] - out[i - 1] < 0.5 * p:
            out[i] = max(pred[i], out[i - 1] + 0.5 * p)
    return out


def sample(rgb, fgmask, bx, by, extra=None):
    """칸마다 가운데 절반 영역에서 대표색을 뽑음. 반환: colors(ny,nx,3), fg(ny,nx) 전경 비율,
    extra(k,H,W) 마스크들의 칸별 평균 (ny,nx,k)"""
    H, W, _ = rgb.shape
    ny, nx = len(by) - 1, len(bx) - 1
    colors = np.zeros((ny, nx, 3))
    frac = np.zeros((ny, nx))
    ex = np.zeros((ny, nx, 0 if extra is None else len(extra)))
    for j in range(ny):
        y0, y1 = by[j], by[j + 1]
        m = (y1 - y0) * 0.25
        ya, yb = int(np.clip(round(y0 + m), 0, H - 1)), int(np.clip(round(y1 - m), 0, H))
        if yb <= ya:
            yb = ya + 1
        for i in range(nx):
            x0, x1 = bx[i], bx[i + 1]
            m = (x1 - x0) * 0.25
            xa, xb = int(np.clip(round(x0 + m), 0, W - 1)), int(np.clip(round(x1 - m), 0, W))
            if xb <= xa:
                xb = xa + 1
            blk = rgb[ya:yb, xa:xb].reshape(-1, 3)
            fm = fgmask[ya:yb, xa:xb].reshape(-1)
            frac[j, i] = fm.mean()
            if extra is not None:
                ex[j, i] = extra[:, ya:yb, xa:xb].mean((1, 2))
            # 전경 픽셀만으로 색을 뽑아 배경색이 섞여 드는 걸 막음
            colors[j, i] = np.median(blk[fm] if fm.any() else blk, 0)
    return colors, frac, ex
