#!/usr/bin/env python
"""pixfix — AI가 만든 픽셀아트를 실제 픽셀 격자로 되돌리고 깔끔하게 정리

사용 예:
  python tools/pixfix/pixfix.py 입력.png                       # 결과는 입력 옆 pixfix-out/ 폴더
  python tools/pixfix/pixfix.py 입력.webp --profile icon -o out/
  python tools/pixfix/pixfix.py 폴더/ --profile prop             # 폴더 안 이미지 전부

결과: 이름.png(스프라이트 시트) · 이름.json(프레임 정보) · 이름.report.html(검사 리포트와 미리보기)
"""
import argparse
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib import pipeline, report, palette as palmod  # noqa: E402
from lib.color import hex_of  # noqa: E402

EXTS = {'.png', '.webp', '.jpg', '.jpeg', '.gif', '.bmp'}


def parse_size(s):
    w, h = s.lower().split('x')
    return int(w), int(h)


def main(argv=None):
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8')
    ap = argparse.ArgumentParser(description='AI 픽셀아트 자동 정리')
    ap.add_argument('inputs', nargs='+', help='이미지 파일 또는 폴더')
    ap.add_argument('-o', '--out', help='결과 폴더 (기본: 입력 옆 pixfix-out/)')
    ap.add_argument('--profile', default='character', choices=list(pipeline.PROFILES), help='종류 (기본 character)')
    ap.add_argument('--scale', type=float, help='픽셀 한 칸이 원본에서 몇 px인지 직접 지정')
    ap.add_argument('--native', action='store_true', help='이미 실제 크기 픽셀아트 (격자 복원 생략)')
    ap.add_argument('--frames', type=int, help='가로로 같은 폭 N개 프레임으로 나눔')
    ap.add_argument('--single', action='store_true', help='프레임을 나누지 않고 한 장으로 처리')
    ap.add_argument('--frame-size', type=parse_size, help='프레임 크기 WxH 격자로 나눔')
    ap.add_argument('--palette', help='마스터 팔레트 (#hex 목록 텍스트 또는 PNG). 모든 색을 여기에 맞춤')
    ap.add_argument('--outline', choices=['auto', 'add', 'off'], help='auto: 끊긴 곳만 이음 / add: 없으면 둘러 줌 / off')
    ap.add_argument('--perfect', action='store_true', default=None, help='외곽선 계단의 겹친 L자 칸 지우기 (화풍에 따라)')
    ap.add_argument('--holes', action='store_true', default=None, help='한 칸짜리 투명 구멍 메우기')
    ap.add_argument('--stabilize', choices=['auto', 'normal', 'strong', 'rebuild', 'off'], help='프레임 사이 지글거림 잡기. auto(캐릭터·소품 기본): strong으로 해 보고 그래도 깜빡이면 rebuild / strong: 프레임별 흔들림을 다수결로 / normal: 4칸 이상 변화는 지킴(눈 깜빡임 등) / rebuild: 기준 프레임 조각을 옮긴 것으로만 다시 만듦')
    ap.add_argument('--base', type=int, help='기준 프레임 번호(1부터). 기본은 자동')
    ap.add_argument('--merge', type=float, help='이 거리보다 가까운 색은 합침 (기본 0.045, 클수록 색이 줄어듦)')
    ap.add_argument('--noise', type=float, help='잡티로 볼 최대 색 차이 (기본 0.07)')
    ap.add_argument('--max-colors', type=int, help='처음 묶을 최대 색 수 (기본 48)')
    ap.add_argument('--upscale', type=int, default=0, help='확대본도 저장 (예: 4)')
    a = ap.parse_args(argv)

    files = []
    for s in a.inputs:
        p = Path(s)
        if p.is_dir():
            files += sorted(f for f in p.iterdir() if f.suffix.lower() in EXTS)
        else:
            files.append(p)
    master = palmod.load_master(a.palette) if a.palette else None

    for f in files:
        out = Path(a.out) if a.out else f.parent / 'pixfix-out'
        out.mkdir(parents=True, exist_ok=True)
        res = pipeline.run(f, a.profile, scale=a.scale, native=True if a.native else None,
                           n_frames=a.frames, frame_size=a.frame_size, master=master, single=a.single,
                           base=(a.base - 1 if a.base else None), stabilize=a.stabilize, outline=a.outline, perfect=a.perfect, holes=a.holes, merge=a.merge, noise=a.noise, max_colors=a.max_colors)
        rgba = pipeline.to_rgba(res['sheet'], res['palette'])
        Image.fromarray(rgba).save(out / f'{f.stem}.png')
        if a.upscale > 1:
            Image.fromarray(np.kron(rgba, np.ones((a.upscale, a.upscale, 1), np.uint8))).save(out / f'{f.stem}@{a.upscale}x.png')
        meta = dict(res['meta'], image=f'{f.stem}.png', palette=[hex_of(c) for c in res['palette']],
                    profile=a.profile, source=f.name)
        (out / f'{f.stem}.json').write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding='utf-8')
        rep = res['report']
        (out / f'{f.stem}.report.json').write_text(json.dumps(rep, ensure_ascii=False, indent=2, default=str), encoding='utf-8')
        report.write_html(out / f'{f.stem}.report.html', res, f.name)
        flag = '확인 필요' if any(k == 'warn' for k, _ in rep['warnings']) else '통과'
        print(f"[{flag}] {f.name} → {out / (f.stem + '.png')}  "
              f"{meta['frames']}프레임 {meta['frameWidth']}×{meta['frameHeight']} · 색 {len(res['palette'])}개 · 픽셀 {rep['grid']['pixel']}px")
        for _, t in rep['warnings']:
            print('   - ' + t)


if __name__ == '__main__':
    main()
