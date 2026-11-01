# ⑦ 검사 리포트 + 미리보기 HTML (이미지를 안에 넣은 파일 하나)
import base64
import html
import io
import json

import numpy as np
from PIL import Image

from .pipeline import to_rgba
from .color import hex_of

MARK_STYLE = {  # 단계 번호 → (이름, 표시 색)
    1: ('번진 테두리 제거', '#ff5ccd'), 2: ('잡티 정리', '#ffd23f'), 3: ('먼지 제거', '#ff8a3d'),
    4: ('구멍 메움', '#3dd6ff'), 5: ('계단 정리', '#9b7bff'), 6: ('외곽선 이음', '#4dff88'),
    7: ('외곽선 추가', '#4d9bff'), 8: ('갇힌 배경 제거', '#ff4d4d'), 9: ('프레임 맞춤', '#00e5ff'),
}


def _png(arr):
    b = io.BytesIO()
    Image.fromarray(arr).save(b, 'PNG')
    return 'data:image/png;base64,' + base64.b64encode(b.getvalue()).decode()


def _scale_for(w, h, maxw=760, maxh=360):
    return max(1, min(maxw // max(w, 1), maxh // max(h, 1), 12))


def _status(rep):
    items = []
    g = rep['grid']
    items.append(('격자', 'ok' if g['native'] or g['confidence'] >= 0.08 else 'warn',
                  '원본이 이미 실제 크기' if g['native'] else f"픽셀 한 칸 ≈ {g['pixel']}px (신뢰도 {g['confidence']})"))
    b = rep['background']
    items.append(('배경', 'ok', f"{ {'alpha': '투명', 'solid': '단색', 'checker': '체크무늬', 'chroma': '키 색', 'none': '없음'}[b['kind']] } {' '.join(b['colors'])}"))
    p = rep['palette']
    items.append(('색', 'ok' if p['final'] <= 32 else 'warn',
                  f"{p['input_colors']}색 → {p['final']}색 (비슷한 색 {p['merged']}번 합침, 드문 색 {p['rare_absorbed']}개 흡수)"))
    c = rep['cleanup']
    items.append(('청소', 'ok', f"번진 테두리 {c['halo']} · 잡티 {c['speckle']} · 먼지 {c['dust']} · 구멍 {c['hole']} · 계단 {c['perfect']}칸"))
    o = rep['outline']
    if o['mode'] == 'none':
        items.append(('외곽선', 'ok', f"손대지 않음 (감싼 비율 {o['coverage_before'] * 100:.0f}%)"))
    else:
        items.append(('외곽선', 'ok' if o['coverage_after'] >= 0.85 else 'warn',
                      f"감싼 비율 {o['coverage_before'] * 100:.0f}% → {o['coverage_after'] * 100:.0f}% (이음 {o['gaps']}칸, 추가 {o['added']}칸)"))
    a = rep.get('animation')
    if a and len(a['before']['area']) > 1:
        if a['mode'] == 'off' or 'base' not in a:
            items.append(('프레임', 'ok', f"안정화 끔 · 깜빡임 {a['before']['flicker']}칸"))
        else:
            fr = a['frames']
            items.append(('프레임', 'ok' if a['after']['flicker'] <= max(4, 0.2 * a['before']['flicker']) else 'warn',
                          f"{a['mode']} · 기준 {a['base'] + 1}번 · 깜빡임 {a['before']['flicker']} → {a['after']['flicker']}칸 · "
                          f"맞춤 {sum(f['snapped'] for f in fr)}칸 · 진짜 변화로 둔 칸 {sum(f['kept_new'] + f['kept_recolor'] for f in fr)} · "
                          f"프레임 이동 {a['offsets']}"))
    worst = min(rep['contrast'].items(), key=lambda kv: kv[1]['de'])
    items.append(('배경 대비', 'ok' if worst[1]['de'] >= 0.15 else 'warn', f"가장 약한 배경: {worst[0]} (차이 {worst[1]['de']:.2f})"))
    return items


def write_html(path, res, title):
    rep, pal = res['report'], res['palette']
    sheet = to_rgba(res['sheet'], pal)
    H, W = sheet.shape[:2]
    s = _scale_for(W, H)
    big = np.kron(sheet, np.ones((s, s, 1), np.uint8))

    # 바뀐 칸 표시: 결과 위에 단계 색 테두리
    ov = big.copy()
    ov[..., 3] = np.where(ov[..., 3] > 0, 90, 0)
    for code, (_, col) in MARK_STYLE.items():
        ys, xs = np.where(res['marks'] == code)
        rgb = [int(col[i:i + 2], 16) for i in (1, 3, 5)]
        for y, x in zip(ys, xs):
            y0, x0 = y * s, x * s
            ov[y0:y0 + s, x0:x0 + s] = rgb + [255]
            if s >= 4:
                ov[y0 + 1:y0 + s - 1, x0 + 1:x0 + s - 1, 3] = 140

    rgb, alpha = res['original']
    o = np.concatenate([rgb, (alpha if alpha is not None else np.full(rgb.shape[:2], 255.0))[..., None]], 2).astype(np.uint8)
    oi = Image.fromarray(o)
    if oi.width > 900:
        oi = oi.resize((900, int(oi.height * 900 / oi.width)), Image.LANCZOS)
    orig = np.asarray(oi)

    m = res['meta']
    frames = [sheet[:, k * m['frameWidth']:(k + 1) * m['frameWidth']] for k in range(m['frames'])]
    fs = _scale_for(m['frameWidth'], m['frameHeight'], 220, 220)
    frame_urls = [_png(np.kron(f, np.ones((fs, fs, 1), np.uint8))) for f in frames]

    used = np.bincount(res['sheet'][res['sheet'] >= 0], minlength=len(pal))
    sw = ''.join(f'<div class="sw"><i style="background:{hex_of(c)}"></i><code>{hex_of(c)}</code><small>{n}</small></div>'
                 for c, n in zip(pal, used))
    rows = ''.join(f'<tr><th>{html.escape(k)}</th><td><b class="{st}">{"통과" if st == "ok" else "확인"}</b></td><td>{html.escape(v)}</td></tr>'
                   for k, st, v in _status(rep))
    warns = ''.join(f'<li>{html.escape(t)}</li>' for _, t in rep['warnings']) or '<li class="none">경고 없음</li>'
    legend = ''.join(f'<span><i style="background:{c}"></i>{n}</span>' for code, (n, c) in MARK_STYLE.items()
                     if (res['marks'] == code).any())
    bgs = ''.join(f'<figure style="background:{v["hex"]}"><img src="{frame_urls[0]}"><figcaption>{html.escape(k)} · {v["de"]:.2f}</figcaption></figure>'
                  for k, v in rep['contrast'].items())

    doc = f'''<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>pixfix · {html.escape(title)}</title><style>
:root{{--bg:#14151f;--panel:#1d1f2c;--line:#2e3144;--text:#e8e9f0;--dim:#9a9db3;--ok:#4dd68c;--warn:#ffb340}}
*{{box-sizing:border-box}}body{{margin:0;background:var(--bg);color:var(--text);font:14px/1.5 system-ui,'Malgun Gothic',sans-serif}}
main{{max-width:1100px;margin:0 auto;padding:24px 16px 64px}}h1{{font-size:20px;margin:0 0 4px}}h2{{font-size:15px;margin:28px 0 10px;color:var(--dim);font-weight:600}}
.sub{{color:var(--dim);margin:0 0 16px}}.card{{background:var(--panel);border:1px solid var(--line);border-radius:10px;padding:14px;overflow:auto}}
.chk{{background-image:conic-gradient(#2a2c3b 25%,#22242f 0 50%,#2a2c3b 0 75%,#22242f 0);background-size:16px 16px}}
img{{image-rendering:pixelated;display:block;max-width:100%}}table{{border-collapse:collapse;width:100%}}th,td{{text-align:left;padding:7px 10px;border-bottom:1px solid var(--line);vertical-align:top}}
th{{width:90px;color:var(--dim);font-weight:500}}b.ok{{color:var(--ok)}}b.warn{{color:var(--warn)}}ul{{margin:0;padding-left:18px}}li.none{{color:var(--dim);list-style:none;margin-left:-18px}}
.row{{display:flex;gap:14px;flex-wrap:wrap;align-items:flex-start}}.legend{{display:flex;gap:12px;flex-wrap:wrap;margin-top:10px;color:var(--dim);font-size:12px}}
.legend i,.sw i{{display:inline-block;width:12px;height:12px;border-radius:2px;margin-right:5px;vertical-align:-2px}}
.sws{{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:6px}}.sw{{font-size:12px}}.sw small{{color:var(--dim);margin-left:6px}}
figure{{margin:0;padding:10px;border-radius:8px}}figcaption{{font-size:11px;margin-top:6px;color:#000;background:#fffc;padding:1px 6px;border-radius:4px;display:inline-block}}
.anim{{display:flex;gap:16px;align-items:center}}button{{background:#2e3144;color:var(--text);border:0;border-radius:6px;padding:6px 12px;cursor:pointer}}
</style></head><body><main>
<h1>{html.escape(title)}</h1><p class="sub">{html.escape(rep['profile'])} · {m['frames']}프레임 · 프레임 {m['frameWidth']}×{m['frameHeight']}px · 색 {len(pal)}개</p>
<div class="card"><table>{rows}</table></div>
<h2>경고</h2><div class="card"><ul>{warns}</ul></div>
<h2>원본</h2><div class="card chk"><img src="{_png(orig)}" style="image-rendering:auto"></div>
<h2>결과 (×{s})</h2><div class="card chk"><img src="{_png(big)}"></div>
<h2>바뀐 칸</h2><div class="card chk"><img src="{_png(ov)}"><div class="legend">{legend or '바뀐 칸 없음'}</div></div>
<h2>애니메이션</h2><div class="card chk anim"><img id="an" src="{frame_urls[0]}"><div><button id="pp">일시정지</button> <label>fps <input id="fps" type="range" min="1" max="16" value="6"></label> <span id="fn"></span></div></div>
<h2>게임 배경 위에서 (숫자: 가장자리와 배경의 색 차이, 0.15 미만이면 묻힘)</h2><div class="row">{bgs}</div>
<h2>팔레트</h2><div class="card"><div class="sws">{sw}</div></div>
</main><script>
const F={json.dumps(frame_urls)};let i=0,on=true;const im=document.getElementById('an'),fn=document.getElementById('fn'),fps=document.getElementById('fps');
function tick(){{if(on){{i=(i+1)%F.length;im.src=F[i];fn.textContent=(i+1)+' / '+F.length}}setTimeout(tick,1000/+fps.value)}}
document.getElementById('pp').onclick=e=>{{on=!on;e.target.textContent=on?'일시정지':'재생'}};fn.textContent='1 / '+F.length;tick();
</script></body></html>'''
    with open(path, 'w', encoding='utf-8') as f:
        f.write(doc)
