# ④ 픽셀 청소. idx: (H,W) 팔레트 번호, -1은 투명. marks: 바뀐 칸에 단계 번호를 적어 미리보기에 표시
#
# 원칙: "눈에 띄지 않는 차이"만 노이즈로 봄. 주변과 확 다른 한 칸(눈, 반짝임)은 의도한 것일 수 있어 남김
import numpy as np
from scipy import ndimage

from .color import dist

MARK = dict(halo=1, speckle=2, dust=3, hole=4, perfect=5, gap=6, outline=7, enclosed=8, stable=9)
N4 = ((-1, 0), (1, 0), (0, -1), (0, 1))


def _nb(idx, dy, dx):
    P = np.pad(idx, 1, constant_values=-1)
    H, W = idx.shape
    return P[1 + dy:1 + dy + H, 1 + dx:1 + dx + W]


def halo(idx, pal_lab, bg_labs, marks):
    """실루엣 가장자리에서 배경색 쪽으로 섞인 칸(번진 테두리)을 투명으로"""
    if len(bg_labs) == 0:
        return 0
    n = 0
    H, W = idx.shape
    tr = np.stack([_nb(idx, dy, dx) < 0 for dy, dx in N4]).any(0)
    for y, x in zip(*np.where((idx >= 0) & tr)):
        c = pal_lab[idx[y, x]]
        nbs = [idx[y + dy, x + dx] for dy in (-1, 0, 1) for dx in (-1, 0, 1)
               if (dy or dx) and 0 <= y + dy < H and 0 <= x + dx < W and idx[y + dy, x + dx] >= 0
               and idx[y + dy, x + dx] != idx[y, x]]
        if not nbs:
            continue
        m = max(set(nbs), key=nbs.count)
        dbg = np.min(dist(c, bg_labs))
        if dbg < 0.6 * dist(c, pal_lab[m]) and dbg < 0.25:
            idx[y, x] = -1
            marks[y, x] = MARK['halo']
            n += 1
    return n


def despeckle(idx, pal_lab, marks, noise=0.12, passes=2):
    """주변 4칸과 하나도 안 맞고, 3칸 이상이 같은 색이며, 그 색과 차이가 작은 칸 → 그 색으로"""
    n = 0
    for _ in range(passes):
        nbs = np.stack([_nb(idx, dy, dx) for dy, dx in N4])
        cand = (idx >= 0) & ~(nbs == idx[None]).any(0)
        changed = 0
        for y, x in zip(*np.where(cand)):
            v = [c for c in nbs[:, y, x] if c >= 0]
            if len(v) < 3:
                continue
            m = max(set(v), key=v.count)
            if v.count(m) >= 3 and dist(pal_lab[idx[y, x]], pal_lab[m]) < noise:
                idx[y, x] = m
                marks[y, x] = MARK['speckle']
                changed += 1
        n += changed
        if not changed:
            break
    return n


def dust(idx, marks, max_size):
    """본체와 떨어진 아주 작은 조각(먼지) 제거"""
    if max_size <= 0:
        return 0
    lbl, k = ndimage.label(idx >= 0, structure=np.ones((3, 3)))
    if k <= 1:
        return 0
    sizes = ndimage.sum(np.ones_like(lbl), lbl, range(1, k + 1))
    n = 0
    for i, s in enumerate(sizes, 1):
        if s <= max_size and s < sizes.max():
            m = lbl == i
            idx[m] = -1
            marks[m] = MARK['dust']
            n += int(s)
    return n


def holes(idx, marks):
    """상하좌우가 모두 막힌 한 칸짜리 투명 구멍 메우기"""
    nbs = np.stack([_nb(idx, dy, dx) for dy, dx in N4])
    H, W = idx.shape
    inside = np.zeros_like(idx, bool)
    inside[1:-1, 1:-1] = True
    cand = (idx < 0) & (nbs >= 0).all(0) & inside
    n = 0
    for y, x in zip(*np.where(cand)):
        v = list(nbs[:, y, x])
        idx[y, x] = max(set(v), key=v.count)
        marks[y, x] = MARK['hole']
        n += 1
    return n


def pixel_perfect(idx, dark, marks):
    """외곽선 계단에서 겹친 L자 칸 제거.
    두 팔이 서로 반대쪽으로 이어지는 계단(대각선)일 때만 지우고, 두 팔이 직각으로 뻗는 진짜 모서리는 둠"""
    H, W = idx.shape

    def D(y, x):
        return 0 <= y < H and 0 <= x < W and idx[y, x] >= 0 and dark[idx[y, x]]

    def T(y, x):
        return not (0 <= y < H and 0 <= x < W) or idx[y, x] < 0

    n = 0
    for y in range(H):
        for x in range(W):
            if not D(y, x):
                continue
            for vy in (-1, 1):
                for hx in (-1, 1):
                    if not (D(y + vy, x) and D(y, x + hx) and T(y - vy, x) and T(y, x - hx)):
                        continue
                    flat = D(y, x + 2 * hx) and D(y + vy, x - hx)    # 완만한 계단
                    steep = D(y + 2 * vy, x) and D(y - vy, x + hx)   # 가파른 계단
                    if flat or steep:
                        idx[y, x] = -1
                        marks[y, x] = MARK['perfect']
                        n += 1
                        break
                else:
                    continue
                break
    return n
