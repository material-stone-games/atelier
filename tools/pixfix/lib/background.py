# ② 배경과 투명도: 가장자리 색으로 배경 종류를 짐작하고, 칸 단위로 배경을 지움
import numpy as np
from scipy import ndimage

from .color import oklab, dist, chroma


def _kmeans(x, k, iters=20):
    cent = [x[0]]
    for _ in range(k - 1):
        d = np.min([((x - c) ** 2).sum(1) for c in cent], 0)
        cent.append(x[d.argmax()])
    cent = np.array(cent, float)
    for _ in range(iters):
        lab = ((x[:, None] - cent[None]) ** 2).sum(2).argmin(1)
        for i in range(k):
            if (lab == i).any():
                cent[i] = x[lab == i].mean(0)
    return cent, lab


def estimate(rgb, alpha):
    """배경 추정. kind: alpha(이미 투명) / solid(단색) / checker(체크무늬) / chroma(마젠타·초록 같은 키 색)"""
    if alpha is not None and (alpha < 128).any():
        return dict(kind='alpha', colors=np.zeros((0, 3)), labs=np.zeros((0, 3)), tol=0.0)
    H, W, _ = rgb.shape
    b = max(2, min(H, W) // 100)
    border = np.concatenate([rgb[:b].reshape(-1, 3), rgb[-b:].reshape(-1, 3),
                             rgb[:, :b].reshape(-1, 3), rgb[:, -b:].reshape(-1, 3)])
    if len(border) > 20000:
        border = border[np.random.default_rng(0).choice(len(border), 20000, replace=False)]
    lab = oklab(border)
    cent, lbl = _kmeans(lab, 3)
    share = np.bincount(lbl, minlength=3) / len(lbl)
    keep = [i for i in range(3) if share[i] >= 0.12]
    # 거의 같은 군집은 합침
    merged = []
    for i in sorted(keep, key=lambda i: -share[i]):
        if all(dist(cent[i], cent[j]) > 0.04 for j in merged):
            merged.append(i)
    colors = np.array([border[lbl == i].mean(0) for i in merged])
    labs = oklab(colors)
    spread = max(np.sqrt(((lab[lbl == i] - cent[i]) ** 2).sum(1)).mean() for i in merged)
    tol = float(max(0.06, 3 * spread))
    if len(merged) >= 2:
        kind = 'checker'
    elif chroma(labs[0]) > 0.12:
        kind = 'chroma'
    else:
        kind = 'solid'
    return dict(kind=kind, colors=colors, labs=labs, tol=tol)


def _near(lab, bg):
    """배경색까지 거리 (k,H,W)와 '배경으로 볼 만큼 가까운가'. 회색 배경이면 채도 차이도 따로 봄
    (밝기는 비슷해도 살짝 누런 크림색·뼈색은 그림으로 남기려고)"""
    d = np.stack([dist(lab, c) for c in bg['labs']])
    cd = np.stack([np.abs(chroma(lab) - chroma(c)) for c in bg['labs']])
    near = (d < bg['tol']) & (cd < 0.02)
    return d, near


def checker_layers(rgb, bg):
    """체크무늬 두 색 각각에 가까운 픽셀 마스크 (2,H,W). 진짜 체크무늬 구멍은 두 색이 비슷한 양으로 섞여 있고,
    흰 칼날처럼 배경색을 닮은 그림은 한 색으로 쏠림. AI가 그린 체크무늬는 칸이 들쭉날쭉해서 모양 대신 비율로 봄"""
    if bg['kind'] != 'checker' or len(bg['labs']) < 2:
        return None
    d, nr = _near(oklab(rgb), dict(bg, labs=bg['labs'][:2]))
    lbl = d.argmin(0)
    near = nr.any(0)
    return np.stack([near & (lbl == 0), near & (lbl == 1)]).astype(np.float32)


def fg_mask(rgb, alpha, bg):
    """원본 해상도의 대략적인 전경 마스크 (프레임 나누기와 격자 찾기용)"""
    if bg['kind'] == 'alpha':
        return alpha >= 128
    _, near = _near(oklab(rgb), bg)
    return ~near.any(0)


def cell_opaque(colors, frac, bg, layers=None):
    """칸 단위 배경 판정. 가장자리에서 이어진 배경 후보만 지우고,
    안쪽에 갇힌 후보는 체크무늬·키 색일 때만 지움 (흰 눈동자 같은 건 살림)"""
    cand = frac < 0.5
    if bg['kind'] == 'alpha':
        return ~cand, dict(enclosed=0)
    lbl, n = ndimage.label(cand)
    edge = set(np.unique(np.concatenate([lbl[0], lbl[-1], lbl[:, 0], lbl[:, -1]]))) - {0}
    remove = np.isin(lbl, list(edge))
    enclosed = 0
    if bg['kind'] in ('checker', 'chroma'):
        near = np.argmin([dist(oklab(colors), c) for c in bg['labs']], 0)
        for k in set(range(1, n + 1)) - edge:
            reg = lbl == k
            if bg['kind'] == 'chroma':
                hole = True
            elif layers is not None:
                a, b = layers[reg].mean(0)
                hole = reg.sum() >= 2 and min(a, b) >= 0.25 * (a + b)
            else:
                share = np.bincount(near[reg], minlength=len(bg['labs'])) / reg.sum()
                hole = reg.sum() >= 4 and (share >= 0.2).sum() >= 2
            if hole:
                remove |= reg
                enclosed += int(reg.sum())
    return ~remove, dict(enclosed=enclosed)

