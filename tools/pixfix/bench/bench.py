"""pixfix 정확도 측정

1) 망가뜨리기 시험: 깔끔한 정답 스프라이트를 AI 그림처럼 망가뜨린 뒤(확대·흐림·잡음·압축·배경) 되돌려서 정답과 비교
2) 그대로 두기 시험: 이미 깔끔한 스프라이트를 넣으면 거의 안 바뀌어야 함

사용: python tools/pixfix/bench/bench.py [개수] [--seed N] [--only 이름]
정답: bench/gt.json (export_gt.mjs로 만든 판타지 아이들 스프라이트) + 기사 idle 시트
"""
import argparse
import io
import json
import sys
import tempfile
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE.parent))
from lib import pipeline  # noqa: E402
from lib.color import oklab, dist, rgb_of  # noqa: E402

KNIGHT = HERE.parents[2] / 'public/demo-games/fantasy-idle/sprites/knight-idle.png'


def load_gt():
    out = {}
    for k, v in json.load(open(HERE / 'gt.json', encoding='utf-8')).items():
        a = np.zeros((v['h'], v['w'], 4), np.uint8)
        for j, row in enumerate(v['px']):
            for i, c in enumerate(row):
                if c:
                    a[j, i, :3] = rgb_of(c)
                    a[j, i, 3] = 255
        out[k] = a
    if KNIGHT.exists():
        sh = np.asarray(Image.open(KNIGHT).convert('RGBA'))
        out['knight_idle_0'] = sh[:, :42].copy()
    return out


def degrade(gt, rng):
    """AI 그림 흉내: 소수점 배율 확대, 칸마다 색 흔들림, 흐림, 잡음, 압축, 배경(흰색/체크무늬/키 색)"""
    h, w = gt.shape[:2]
    pad = 3
    g = np.zeros((h + 2 * pad, w + 2 * pad, 4), np.uint8)
    g[pad:pad + h, pad:pad + w] = gt
    # 칸마다 색을 조금씩 흔듦 (AI 그림의 칸 안 색이 고르지 않은 것)
    jit = rng.normal(0, 5, g.shape[:2] + (3,))
    g = g.astype(float)
    g[..., :3] = np.clip(g[..., :3] + jit * (g[..., 3:] > 0), 0, 255)
    s = rng.uniform(7, 16)
    W, H = int(round(g.shape[1] * s)), int(round(g.shape[0] * s))
    big = np.asarray(Image.fromarray(g.astype(np.uint8)).resize((W, H), Image.NEAREST)).astype(float)
    kind = rng.choice(['white', 'checker', 'magenta', 'gray'])
    Y, X = np.mgrid[0:H, 0:W]
    if kind == 'white':
        bg = np.full((H, W, 3), 250.0)
    elif kind == 'gray':
        bg = np.full((H, W, 3), 128.0)
    elif kind == 'magenta':
        bg = np.zeros((H, W, 3)) + [255, 0, 255]
    else:
        c = rng.uniform(8, 20)
        par = ((X // c + Y // c) % 2)[..., None]
        bg = np.where(par, 228.0, 252.0) * np.ones(3)
    a = big[..., 3:] / 255
    img = big[..., :3] * a + bg * (1 - a)
    im = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
    im = im.filter(ImageFilter.GaussianBlur(rng.uniform(0.4, 1.2)))
    arr = np.asarray(im).astype(float) + rng.normal(0, rng.uniform(2, 6), (H, W, 3))
    im = Image.fromarray(np.clip(arr, 0, 255).astype(np.uint8))
    buf = io.BytesIO()
    im.save(buf, 'JPEG', quality=int(rng.integers(70, 92)))
    return Image.open(io.BytesIO(buf.getvalue())).convert('RGB'), s, kind


def compare(res_rgba, gt):
    """정답과 위치를 맞춰(±4칸) 비교. 모양 일치(IoU), 색 일치(같은 자리 불투명 칸 중 색 차이 0.04 미만)"""
    ra = res_rgba[..., 3] > 0
    ga = gt[..., 3] > 0
    best = None
    H = max(ra.shape[0], ga.shape[0]) + 10
    W = max(ra.shape[1], ga.shape[1]) + 10
    G = np.zeros((H, W), bool)
    Gc = np.zeros((H, W, 3))
    G[5:5 + ga.shape[0], 5:5 + ga.shape[1]] = ga
    Gc[5:5 + ga.shape[0], 5:5 + ga.shape[1]] = gt[..., :3]
    for dy in range(-4, 5):
        for dx in range(-4, 5):
            y0, x0 = 5 + dy, 5 + dx
            if y0 < 0 or x0 < 0 or y0 + ra.shape[0] > H or x0 + ra.shape[1] > W:
                continue
            R = np.zeros((H, W), bool)
            Rc = np.zeros((H, W, 3))
            R[y0:y0 + ra.shape[0], x0:x0 + ra.shape[1]] = ra
            Rc[y0:y0 + ra.shape[0], x0:x0 + ra.shape[1]] = res_rgba[..., :3]
            iou = (R & G).sum() / max((R | G).sum(), 1)
            if best is None or iou > best[0]:
                both = R & G
                de = dist(oklab(Rc[both]), oklab(Gc[both])) if both.any() else np.zeros(0)
                best = (iou, float((de < 0.04).mean()) if len(de) else 0.0)
    return best


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('n', nargs='?', type=int, default=0, help='시험할 스프라이트 수 (0 = 전부)')
    ap.add_argument('--seed', type=int, default=1)
    ap.add_argument('--only')
    ap.add_argument('--show', action='store_true', help='하나씩 결과 출력')
    a = ap.parse_args()
    gts = load_gt()
    names = [k for k in gts if (not a.only or a.only in k)]
    rng = np.random.default_rng(a.seed)
    if a.n:
        names = list(rng.choice(names, min(a.n, len(names)), replace=False))
    tmp = Path(tempfile.mkdtemp())

    rows = []
    for name in names:
        gt = gts[name]
        im, s, kind = degrade(gt, rng)
        p = tmp / f'{name}.png'
        im.save(p)
        prof = 'icon' if name.startswith('icon_') else 'character'
        try:
            res = pipeline.run(p, prof)
            out = pipeline.to_rgba(res['sheet'], res['palette'])
            iou, col = compare(out, gt)
            px = res['report']['grid']['pixel']
        except SystemExit as e:
            iou, col, px = 0.0, 0.0, 0
        # 그대로 두기 시험
        q = tmp / f'{name}_clean.png'
        Image.fromarray(gt).save(q)
        r2 = pipeline.run(q, prof)
        o2 = pipeline.to_rgba(r2['sheet'], r2['palette'])
        same = compare(o2, gt)
        changed = int((r2['marks'] > 0).sum())
        rows.append((name, kind, s, px, iou, col, same[0], same[1], changed))
        if a.show:
            print(f'{name:22s} {kind:8s} 배율 {s:5.2f} → {px:6.2f}  모양 {iou:.3f} 색 {col:.3f} | 깨끗한 입력: 모양 {same[0]:.3f} 색 {same[1]:.3f} 바뀐 칸 {changed}')

    arr = np.array([r[2:] for r in rows], float)
    scale_ok = np.abs(arr[:, 1] - arr[:, 0]) / arr[:, 0] < 0.03
    print(f'\n시험 {len(rows)}개')
    print(f'  픽셀 크기 맞힘: {scale_ok.mean() * 100:.1f}%')
    print(f'  모양 일치(IoU) 평균 {arr[:, 2].mean():.3f} · 중앙값 {np.median(arr[:, 2]):.3f} · 0.95 이상 {(arr[:, 2] >= 0.95).mean() * 100:.0f}%')
    print(f'  색 일치 평균 {arr[:, 3].mean():.3f}')
    print(f'  깨끗한 입력 그대로 유지: 모양 {arr[:, 4].mean():.3f} · 색 {arr[:, 5].mean():.3f} · 바뀐 칸 합계 {int(arr[:, 6].sum())}')
    bad = sorted(rows, key=lambda r: r[4])[:8]
    print('  가장 안 된 것: ' + ', '.join(f'{r[0]}({r[1]}, IoU {r[4]:.2f})' for r in bad))
    bad2 = sorted(rows, key=lambda r: -r[8])[:8]
    print('  깨끗한 입력에서 많이 바뀐 것: ' + ', '.join(f'{r[0]}({r[8]})' for r in bad2 if r[8]))


if __name__ == '__main__':
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    main()
