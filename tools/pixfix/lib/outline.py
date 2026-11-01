# ⑤ 가독성: 외곽선이 끊긴 곳을 잇거나 없으면 둘러 주고, 게임 배경 위에서 실루엣이 묻히는지 잼
import numpy as np

from .color import oklab, dist, rgb_of
from .cleanup import MARK, N4, _nb

DARK_L = 0.4          # OKLab 밝기가 이보다 낮으면 외곽선 후보
DEFAULT_OUTLINE = np.array([26, 28, 44], float)   # 판타지 아이들 PAL.k

# 대비 검사용 배경 (판타지 아이들 바이옴의 하늘·땅 + 밤)
TEST_BGS = {
    '초원 하늘': '#8fd3ff', '초원 땅': '#38b764', '사막': '#e8c170',
    '화산': '#5a2a2a', '설원': '#e8f0ff', '밤·동굴': '#1a1c2c',
}


def boundary(idx):
    tr = np.stack([_nb(idx, dy, dx) < 0 for dy, dx in N4]).any(0)
    return (idx >= 0) & tr


def coverage(frames, dark):
    b = d = 0
    for idx in frames:
        m = boundary(idx)
        b += m.sum()
        d += (m & (idx >= 0) & dark[np.maximum(idx, 0)]).sum()
    return d / b if b else 1.0


def outline_index(frames, pal, dark):
    """외곽선 색: 경계에서 가장 많이 쓰인 어두운 색. 없으면 PAL.k를 팔레트에 추가"""
    counts = np.zeros(len(pal), int)
    for idx in frames:
        m = boundary(idx)
        np.add.at(counts, idx[m], 1)
    counts[~dark] = 0
    if counts.max() > 0:
        return pal, int(counts.argmax())
    return np.vstack([pal, DEFAULT_OUTLINE]), len(pal)


def exterior(idx):
    """바깥(가장자리와 이어진 투명 칸). 반지 안쪽 같은 구멍은 빠짐"""
    from scipy import ndimage
    P = np.pad(idx < 0, 1, constant_values=True)
    lbl, _ = ndimage.label(P)
    return (lbl == lbl[0, 0])[1:-1, 1:-1]


def fill_gaps(idx, dark, oi, marks):
    """바깥에 드러난 밝은 경계 칸 하나가 외곽선 줄 한가운데 끼어 있으면(양쪽 반대편이 외곽선) → 외곽선 색.
    한쪽으로만 외곽선이 붙은 칸(뿔·발톱 끝)이나 길게 이어진 밝은 경계(깃대)는 그림의 의도라 둠"""
    from scipy import ndimage
    H, W = idx.shape
    ext = exterior(idx)
    touch = np.stack([_nb(np.where(ext, 1, 0), dy, dx) == 1 for dy, dx in N4]).any(0)
    edge = touch | np.pad(np.zeros((H - 2, W - 2), bool), 1, constant_values=True)
    b = (idx >= 0) & edge
    db = b & dark[np.maximum(idx, 0)]
    lbl, n = ndimage.label(b & ~db, structure=np.ones((3, 3)))
    cnt = 0
    for k in range(1, n + 1):
        ys, xs = np.where(lbl == k)
        if len(ys) != 1:
            continue
        y, x = ys[0], xs[0]
        vs = [(dy, dx) for dy in (-1, 0, 1) for dx in (-1, 0, 1)
              if (dy or dx) and 0 <= y + dy < H and 0 <= x + dx < W and db[y + dy, x + dx]]
        if any(a[0] * b[0] + a[1] * b[1] < 0 for i, a in enumerate(vs) for b in vs[i + 1:]):
            idx[y, x] = oi
            marks[y, x] = MARK['gap']
            cnt += 1
    return cnt


def add_outline(idx, oi, marks):
    """바깥에 1칸 외곽선을 두름 (캔버스가 사방 1칸 커짐)"""
    idx2 = np.pad(idx, 1, constant_values=-1)
    marks2 = np.pad(marks, 1)
    near = np.stack([_nb(idx2, dy, dx) >= 0 for dy, dx in N4]).any(0)
    m = (idx2 < 0) & near
    idx2[m] = oi
    marks2[m] = MARK['outline']
    return idx2, marks2, int(m.sum())


def contrast(frames, pal):
    """배경별로 실루엣이 얼마나 드러나나. 가장자리 칸과 그 바로 안쪽 칸 각각의 배경과의 색 차이(중앙값) 중 큰 값.
    어두운 외곽선이 어두운 배경에 묻혀도 안쪽 색이 드러나면 모양은 읽힘. 0.15 미만이면 묻혀 보일 수 있음"""
    lab = oklab(pal)
    edge, ring = [], []
    for idx in frames:
        b = boundary(idx)
        nb = np.stack([np.pad(b, 1)[1 + dy:1 + dy + b.shape[0], 1 + dx:1 + dx + b.shape[1]] for dy, dx in N4]).any(0)
        r = (idx >= 0) & ~b & nb
        edge.append(lab[idx[b]])
        ring.append(lab[idx[r]])
    edge = np.concatenate(edge) if edge else np.zeros((0, 3))
    ring = np.concatenate(ring) if ring else np.zeros((0, 3))
    out = {}
    for name, hx in TEST_BGS.items():
        bl = oklab(rgb_of(hx))
        e = float(np.median(dist(edge, bl))) if len(edge) else 0.0
        r = float(np.median(dist(ring, bl))) if len(ring) else 0.0
        out[name] = dict(hex=hx, de=max(e, r))
    return out
