# ③ 팔레트: 모든 프레임이 한 팔레트를 함께 씀. 거의 같은 색은 합치고, 몇 칸만 쓰인 비슷한 색은 흡수
import numpy as np

from .color import oklab, dist, rgb_of


def _weighted_kmeans(x, w, k, iters=30):
    cent = [x[w.argmax()]]
    for _ in range(k - 1):
        d = np.min([((x - c) ** 2).sum(1) for c in cent], 0)
        if d.max() <= 1e-12:
            break
        cent.append(x[d.argmax()])
    cent = np.array(cent, float)
    for _ in range(iters):
        lab = ((x[:, None] - cent[None]) ** 2).sum(2).argmin(1)
        new = cent.copy()
        for i in range(len(cent)):
            m = lab == i
            if m.any():
                new[i] = (x[m] * w[m, None]).sum(0) / w[m].sum()
        if np.allclose(new, cent):
            break
        cent = new
    return lab


def build(rgb_cells, merge=0.045, rare_frac=0.004, rare_dist=0.09, max_colors=48, master=None):
    """rgb_cells: (N,3) 불투명 칸 색들. 반환: palette_rgb(n,3), index(N,), info"""
    q = np.round(rgb_cells).astype(int)
    uniq, inv, cnt = np.unique(q, axis=0, return_inverse=True, return_counts=True)
    inv = inv.reshape(-1)
    lab_u = oklab(uniq)
    lab = _weighted_kmeans(lab_u, cnt.astype(float), min(max_colors, len(uniq)))
    groups = [np.where(lab == i)[0] for i in np.unique(lab)]

    def summarize(gs):
        w = np.array([cnt[g].sum() for g in gs], float)
        rgbm = np.array([(uniq[g] * cnt[g, None]).sum(0) / cnt[g].sum() for g in gs])
        return w, rgbm, oklab(rgbm)

    # 1) 거리 merge 미만인 색 쌍을 계속 합침
    merged_pairs = 0
    while len(groups) > 1:
        w, rgbm, labm = summarize(groups)
        d = dist(labm[:, None], labm[None])
        np.fill_diagonal(d, np.inf)
        i, j = np.unravel_index(d.argmin(), d.shape)
        if d[i, j] >= merge:
            break
        groups[i] = np.concatenate([groups[i], groups[j]])
        groups.pop(j)
        merged_pairs += 1

    # 2) 드물고 다른 색과 가까운 색은 가까운 색에 흡수 (드물어도 확 다른 색은 눈·반짝임일 수 있어 남김)
    total = cnt.sum()
    rare_absorbed = 0
    changed = True
    while changed and len(groups) > 1:
        changed = False
        w, rgbm, labm = summarize(groups)
        order = np.argsort(w)
        for i in order:
            if w[i] >= max(2, rare_frac * total):
                break
            d = dist(labm[i], labm)
            d[i] = np.inf
            j = int(d.argmin())
            if d[j] < rare_dist and w[j] > w[i]:
                groups[j] = np.concatenate([groups[j], groups[i]])
                groups.pop(i)
                rare_absorbed += 1
                changed = True
                break

    w, rgbm, labm = summarize(groups)
    # 대표색: 실제로 가장 많이 쓰인 색이 무리의 대부분이면 그 색, 아니면 평균
    pal = []
    for g, m in zip(groups, rgbm):
        top = g[cnt[g].argmax()]
        pal.append(uniq[top].astype(float) if cnt[top] >= 0.6 * cnt[g].sum() else m)
    pal = np.array(pal)
    snapped = 0
    if master is not None and len(master):
        mlab = oklab(master)
        near = dist(oklab(pal)[:, None], mlab[None]).argmin(1)
        snapped = int((dist(oklab(pal), mlab[near]) > 1e-6).sum())
        pal = master[near]
    # 같은 색으로 겹친 항목 정리
    uniq_pal, remap = np.unique(np.round(pal).astype(int), axis=0, return_inverse=True)
    remap = remap.reshape(-1)
    owner = np.zeros(len(uniq), int)
    for gi, g in enumerate(groups):
        owner[g] = remap[gi]
    index = owner[inv]
    # 밝은 색부터가 아니라 어두운 색부터 (외곽선이 0번 근처에 오도록)
    order = np.argsort(oklab(uniq_pal)[:, 0])
    rank = np.empty_like(order)
    rank[order] = np.arange(len(order))
    info = dict(input_colors=int(len(uniq)), merged=merged_pairs, rare_absorbed=rare_absorbed,
                snapped=snapped, colors=int(len(uniq_pal)))
    return uniq_pal[order].astype(float), rank[index], info


def load_master(path):
    """마스터 팔레트: 줄마다 #rrggbb 가 있는 텍스트, 또는 PNG(쓰인 색 전부)"""
    if path.lower().endswith('.png'):
        from PIL import Image
        a = np.asarray(Image.open(path).convert('RGBA')).reshape(-1, 4)
        a = a[a[:, 3] > 127, :3]
        return np.unique(a, axis=0).astype(float)
    cols = []
    for line in open(path, encoding='utf-8'):
        for tok in line.replace(',', ' ').split():
            if tok.startswith('#') and len(tok) == 7:
                cols.append(rgb_of(tok))
    return np.array(cols)
