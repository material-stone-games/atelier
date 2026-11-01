"""애니메이션 안정화 측정

정답 스프라이트로 4프레임 idle을 만들고(기본 / 몸 1칸 내려앉음 / 위쪽 왼편이 1칸 흔들림 / 기본),
시트 한 장으로 붙여 AI 그림처럼 망가뜨린 뒤 되돌림. 프레임마다 정답과 칸 단위로 맞춰 봄.

사용: python tools/pixfix/bench/bench_anim.py [--seed N] [--stabilize normal|strong|off|all]
"""
import argparse
import zlib
import sys
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
sys.path.insert(0, str(HERE))
from bench import load_gt, degrade  # noqa: E402
from lib import pipeline, animate  # noqa: E402
from lib.color import oklab, dist  # noqa: E402

CHARS = ['SLIME', 'BRUTE_BODY', 'CASTER', 'DARK_KNIGHT', 'GOLEM', 'KNIGHT_BODY', 'LORD', 'MUSHROOM',
         'SKELETON', 'SPIRIT', 'BAT', 'WOLF', 'SCORPION', 'DRAGON', 'BRUTE_BIG_BODY', 'knight_idle_0']


def make_anim(g):
    h, w = g.shape[:2]
    f0 = np.zeros((h + 1, w + 1, 4), np.uint8)
    f0[1:, :w] = g
    split = int((h + 1) * 0.55)
    f1 = f0.copy()                                  # 숨쉬기: 위쪽이 1칸 내려앉음
    f1[1:split + 1] = f0[:split]
    f1[0] = 0
    f2 = f0.copy()                                  # 위쪽 왼편 절반이 오른쪽으로 1칸 (깃털 흔들림)
    q = (h + 1) // 3
    hw = (w + 1) // 2
    f2[:q, 1:hw + 1] = f0[:q, :hw]
    f2[:q, 0] = 0
    return [f0, f1, f2, f0.copy()]


def redraw(f, rng, level=1.0):
    """AI가 프레임마다 다시 그린 것 흉내: 명암 덩어리 바뀜, 외곽 들쭉날쭉, 칸 뒤섞임 (프레임마다 따로)"""
    f = f.copy()
    h, w = f.shape[:2]
    op = f[..., 3] > 0
    cols = np.unique(f[op][:, :3], axis=0)
    lum = cols.astype(float) @ [0.3, 0.59, 0.11]
    ys, xs = np.where(op)
    # 명암 덩어리: 몇 군데를 밝기가 이웃한 색으로 바꿈
    for _ in range(int(rng.poisson(3 * level))):
        k = rng.integers(len(ys))
        cy, cx = ys[k], xs[k]
        r = rng.integers(1, 3)
        for y in range(max(0, cy - r), min(h, cy + r + 1)):
            for x in range(max(0, cx - r), min(w, cx + r + 1)):
                if f[y, x, 3] and rng.random() < 0.7:
                    i = int(np.where((cols == f[y, x, :3]).all(1))[0][0])
                    order = np.argsort(np.abs(lum - lum[i]))
                    if len(order) > 1:
                        f[y, x, :3] = cols[order[1]]
    # 칸 뒤섞임: 일부 칸이 이웃 칸 색을 가져옴
    for k in rng.choice(len(ys), int(len(ys) * 0.03 * level), replace=False):
        y, x = ys[k], xs[k]
        dy, dx = [(-1, 0), (1, 0), (0, -1), (0, 1)][rng.integers(4)]
        if 0 <= y + dy < h and 0 <= x + dx < w and f[y + dy, x + dx, 3]:
            f[y, x] = f[y + dy, x + dx]
    # 외곽 들쭉날쭉: 경계에서 몇 칸 빼거나 더함
    for _ in range(int(rng.poisson(4 * level))):
        k = rng.integers(len(ys))
        y, x = ys[k], xs[k]
        nb = [(y + dy, x + dx) for dy, dx in [(-1, 0), (1, 0), (0, -1), (0, 1)] if 0 <= y + dy < h and 0 <= x + dx < w]
        empty = [(yy, xx) for yy, xx in nb if not f[yy, xx, 3]]
        if empty:
            if rng.random() < 0.5:
                f[y, x] = 0
            else:
                yy, xx = empty[rng.integers(len(empty))]
                f[yy, xx] = f[y, x]
    return f


def sheet_of(frames, gap=6):
    h, w = frames[0].shape[:2]
    out = np.zeros((h, (w + gap) * len(frames) - gap, 4), np.uint8)
    for k, f in enumerate(frames):
        out[:, k * (w + gap):k * (w + gap) + w] = f
    return out


def score(out_frames, gt_frames):
    """프레임마다 정답과 위치를 맞춰(±3칸, 모든 프레임 같은 이동) 칸 단위 정확도"""
    best = None
    H = max(f.shape[0] for f in out_frames + gt_frames) + 8
    W = max(f.shape[1] for f in out_frames + gt_frames) + 8

    def canvas(f, y, x):
        c = np.zeros((H, W, 4), np.uint8)
        c[y:y + f.shape[0], x:x + f.shape[1]] = f
        return c
    G = [canvas(g, 4, 4) for g in gt_frames]
    gl = [oklab(g[..., :3].astype(float)) for g in G]
    for dy in range(-3, 4):
        for dx in range(-3, 4):
            accs = []
            for o, g, l in zip(out_frames, G, gl):
                if 4 + dy < 0 or 4 + dx < 0 or 4 + dy + o.shape[0] > H or 4 + dx + o.shape[1] > W:
                    accs = None
                    break
                O = canvas(o, 4 + dy, 4 + dx)
                ao, ag = O[..., 3] > 0, g[..., 3] > 0
                same = (~ao & ~ag) | (ao & ag & (dist(oklab(O[..., :3].astype(float)), l) < 0.04))
                region = ao | ag
                accs.append(float(same[region].mean()))
            if accs and (best is None or np.mean(accs) > np.mean(best)):
                best = accs
    return best or [0.0] * len(out_frames)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--seed', type=int, default=1)
    ap.add_argument('--stabilize', default='all')
    ap.add_argument('--show', action='store_true')
    ap.add_argument('--redraw', type=float, default=1.0, help='프레임마다 다시 그린 흔들림 세기 (0이면 없음)')
    a = ap.parse_args()
    gts = load_gt()
    modes = ['off', 'normal', 'strong'] if a.stabilize == 'all' else [a.stabilize]
    tmp = Path(tempfile.mkdtemp())
    res = {m: [] for m in modes}
    for name in CHARS:
        if name not in gts:
            continue
        rng = np.random.default_rng(a.seed + zlib.crc32(name.encode()) % 1000)
        gtf = make_anim(gts[name])
        noisy = [redraw(f, rng, a.redraw) for f in gtf] if a.redraw > 0 else gtf
        im, s, kind = degrade(sheet_of(noisy), rng)
        p = tmp / f'{name}.png'
        im.save(p)
        gfl = animate.flicker([np.where(f[..., 3] > 0, f[..., 0].astype(int) * 65536 + f[..., 1].astype(int) * 256 + f[..., 2], -1) for f in gtf])
        line = f'{name:16s} {kind:8s}'
        for m in modes:
            r = pipeline.run(p, 'character', stabilize=m, n_frames=None)
            fw = r['meta']['frameWidth']
            rgba = pipeline.to_rgba(r['sheet'], r['palette'])
            outs = [rgba[:, k * fw:(k + 1) * fw] for k in range(r['meta']['frames'])]
            if len(outs) != len(gtf):
                acc, fl = [0.0], -1
            else:
                acc = score(outs, gtf)
                fl = r['report']['animation']['after']['flicker']
            res[m].append((np.mean(acc), fl, gfl))
            line += f' | {m}: 정확도 {np.mean(acc):.3f} 깜빡임 {fl}'
        if a.show:
            print(line + f' (정답 깜빡임 {gfl})')
    print()
    for m in modes:
        arr = np.array(res[m], float)
        ok = arr[:, 1] >= 0
        print(f'{m:7s} 칸 정확도 평균 {arr[:, 0].mean():.3f} · 깜빡임 평균 {arr[ok, 1].mean():.1f} (정답 {arr[ok, 2].mean():.1f}) · 프레임 수 틀림 {int((~ok).sum())}')


if __name__ == '__main__':
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    main()
