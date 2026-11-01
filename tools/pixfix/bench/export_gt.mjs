// 판타지 아이들의 글자 격자 스프라이트를 정답 데이터(JSON)로 내보냄
// 사용: node tools/pixfix/bench/export_gt.mjs > tools/pixfix/bench/gt.json
import { readFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const js = path.resolve(here, '../../../public/demo-games/fantasy-idle/js');
const { PAL } = await import(pathToFileURL(path.join(js, 'pixel.js')));
const S = await import(pathToFileURL(path.join(js, 'sprites.js')));

// icons.js의 SHAPES는 내보내지 않으므로 소스에서 꺼냄
const iconSrc = readFileSync(path.join(js, 'icons.js'), 'utf8');
const shapesSrc = iconSrc.slice(iconSrc.indexOf('const SHAPES'), iconSrc.indexOf('// 아이콘 ID'));
const SHAPES = new Function(shapesSrc + '\nreturn SHAPES;')();

// 적 몸 색 슬롯(c/C/x/e)은 슬라임 초록으로 채움
const ENEMY = { c: '#38b764', C: '#a7f070', x: '#257179', e: '#f4f4f4' };

const rowsOf = art => {
    const rows = (Array.isArray(art) ? art : art.split('\n')).map(r => r.replace(/\s+$/, '')).filter(r => r.length);
    const w = Math.max(...rows.map(r => r.length));
    return rows.map(r => r.padEnd(w, '.'));
};
const toPixels = (art, pal = {}) => {
    const rows = rowsOf(art);
    return {
        w: rows[0].length, h: rows.length,
        px: rows.map(r => [...r].map(ch => (ch === '.' || ch === ' ') ? null : (pal[ch] ?? PAL[ch] ?? ENEMY[ch] ?? '#ff00ff'))),
    };
};

const out = {};
for (const [k, art] of Object.entries(SHAPES)) out['icon_' + k] = toPixels(art);
for (const [k, v] of Object.entries(S)) {
    if (typeof v === 'string' && v.includes('\n')) out[k] = toPixels(v, ENEMY);
    else if (Array.isArray(v) && typeof v[0] === 'string' && v[0].includes('\n')) out[k] = toPixels(v[0], ENEMY);
}
for (const [k, v] of Object.entries(S.WEAPONS ?? {})) {
    const art = typeof v === 'string' ? v : v?.art;
    if (typeof art === 'string') out['weapon_' + k] = toPixels(art, ENEMY);
}
process.stdout.write(JSON.stringify(out));
