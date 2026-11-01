// 월드 렌더링: 지역별 픽셀아트 패럴랙스 배경 (하늘 → 먼 산 → 중경 소품 → 지면)
import { W, H, GROUND_Y, BIOMES, SCROLL_PX, toScreen } from './constants.js';
import { state } from './state.js';
import { shade } from './draw.js';
import { bake, drawPix } from './pixel.js';

const BG = 2;                 // 배경 픽셀 한 칸 (월드 단위)
const PERIOD = 800;           // 산맥 레이어 반복 폭 (월드 단위)
const TILE = 64;              // 지면 타일 반복 폭

export function getBiome(dist) {
    // 다음 지역 시작 전까지가 이 지역 (보스 관문의 x99.999m도 포함)
    return BIOMES.find((b, i) => dist < (BIOMES[i + 1]?.from ?? Infinity)) ?? BIOMES[BIOMES.length - 1];
}

let worldT = 0;
export function updateWorldTime(dt) { worldT += dt; }

const wrap = (v, m) => ((v % m) + m) % m;
const snap = (v, u = BG) => Math.round(v / u) * u;
const isDark = b => b.from >= 1500;

// 지역별 배경 구성
const LOOK = {
    '초원':      { prop: 'tree', gap: 150, snow: true, top: 'grass', dirt: '#8a5a3a' },
    '숲':        { prop: 'pine', gap: 70, top: 'grass', dirt: '#5a3a28' },
    '사막':      { prop: 'cactus', gap: 210, top: 'sand', dirt: '#b8884a' },
    '화산':      { prop: 'volcano', gap: 280, top: 'rock', dirt: '#4a1e14' },
    '설원':      { prop: 'snowpine', gap: 110, snow: true, top: 'snow', dirt: '#5a6a8a' },
    '어둠의 땅': { prop: 'spire', gap: 170, top: 'rock', dirt: '#2a1a40' },
};

const PROPS = {
    tree: `
....kkkkkk....
..kkGGgggggk..
.kGGGggggggghk
kGGgggggggghhk
kGgggggggghhhk
kggggggghhhhhk
.kgggghhhhhhk.
..kkkkOOkkkk..
.....kOOk.....
.....kOOk.....
....kkOOkk....`,
    pine: `
......kk......
.....kGgk.....
....kGgghk....
...kGgggghk...
....kkgghk....
...kGgggghk...
..kGggggghhk..
...kkggghkk...
..kGggggghhk..
.kGgggggghhhk.
kGgggggggghhhk
.kkkkkOOkkkkk.
.....kOOk.....
.....kOOk.....`,
    cactus: `
.....kkk.....
....kGgGk....
....kgggk....
.kk.kgggk....
kGgkkgggk.kk.
kgggkgggkkGgk
kgggggggkgggk
.kgggggggggk.
..kkkgggkkk..
....kgggk....
....kgggk....
....kgggk....
...kkkkkkk...`,
    volcano: `
..........kkkkkk..........
.........kffFFffk.........
........kOkffffkOk........
.......kOOOkkkkOOOk.......
......kOOoOOOOOOoOOk......
.....kOOoooOOOOOOoOOk.....
....kOOooOOOOOOOOOOOOk....
...kOOoOOOOOfOOOOOoOOOk...
..kOOOOOOOOOfOOOOOOOOOOk..
.kOOoOOOOOOOfOOOOOOOoOOOk.
kOOOOOOOOOOOOOOOOOOOOOOOOk`,
    snowpine: `
......kk......
.....kwwk.....
....kwwiik....
...kwwiiihk...
....kkiihk....
...kwwiiihk...
..kwwgggghhk..
...kkgggkkk...
..kwwggghhhk..
.kwgggggghhhk.
kwwgggggggghhk
.kkkkkOOkkkkk.
.....kOOk.....
.....kOOk.....`,
    spire: `
....k....
...kPk...
...kpk...
..kpppk..
..kpFpk..
..kpppk..
.kppppvk.
.kppppvk.
.kpFppvk.
.kppppvk.
kpppppvvk
kpppppvvk
kkkkkkkkk`,
};

const cache = new Map();

function canvas(w, h) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    return [c, c.getContext('2d')];
}

// 하늘: 단계 색 띠 + 경계 디더링 (화면 좌표, 1칸 = 4px)
function skyLayer(biome, horizon) {
    const k = 'sky_' + biome.name;
    if (cache.has(k)) return cache.get(k);
    const [c, x] = canvas(W, Math.ceil(horizon) + 4);
    const n = 7, u = 4;
    const bandH = Math.ceil((horizon + 4) / n / u) * u;
    const cols = Array.from({ length: n }, (_, i) => shade(biome.sky, -0.5 + (i / (n - 1)) * 0.8));
    cols.forEach((col, i) => {
        x.fillStyle = col;
        x.fillRect(0, i * bandH, W, bandH);
        if (i + 1 < n) {
            x.fillStyle = cols[i + 1];
            const y0 = (i + 1) * bandH - u * 2;
            for (let yy = 0; yy < 2; yy++) {
                for (let xx = (yy % 2) * u; xx < W; xx += u * 2) x.fillRect(xx, y0 + yy * u, u, u);
            }
        }
    });
    cache.set(k, c);
    return c;
}

// 주기 함수로 만든 계단식 능선 (반복되는 레이어)
function ridgeLayer(key, color, cap, base, amp, f1, f2, seed) {
    if (cache.has(key)) return cache.get(key);
    const pw = PERIOD / BG, ph = Math.ceil((amp + 40) / BG);
    const [c, x] = canvas(pw, ph);
    const TAU = Math.PI * 2;
    for (let i = 0; i < pw; i += 2) {
        const u = i / pw;
        const hgt = amp * (0.5 + 0.28 * Math.sin(u * TAU * f1 + seed) + 0.14 * Math.sin(u * TAU * f2 + seed * 3) + 0.08 * Math.sin(u * TAU * (f2 * 3 + 1) + seed));
        const top = ph - Math.round(hgt / BG);
        x.fillStyle = color;
        x.fillRect(i, top, 2, ph - top);
        if (cap && hgt > amp * 0.7) {
            x.fillStyle = cap;
            x.fillRect(i, top, 2, Math.min(6, Math.round((hgt - amp * 0.7) / BG) + 2));
        }
        // 능선 윗줄 밝게
        x.fillStyle = shade(color, 0.12);
        x.fillRect(i, top, 2, 1);
    }
    const out = { c, base, ph };
    cache.set(key, out);
    return out;
}

// 지면 타일: 윗면(풀/모래/눈/바위) + 앞면 벽돌
function groundTile(biome, look) {
    const k = 'ground_' + biome.name;
    if (cache.has(k)) return cache.get(k);
    const tw = TILE / BG, th = Math.ceil((H - GROUND_Y + 60) / BG);
    const [c, x] = canvas(tw, th);
    const top = shade(biome.accent, 0.1), topHi = shade(biome.accent, 0.4), topLo = shade(biome.accent, -0.25);
    const face = look.dirt, faceLo = shade(look.dirt, -0.35), faceHi = shade(look.dirt, 0.18);
    // 윗면 (15칸 = 30 월드)
    x.fillStyle = top; x.fillRect(0, 0, tw, 15);
    x.fillStyle = topHi; x.fillRect(0, 0, tw, 1);
    for (let i = 0; i < tw; i += 4) {
        x.fillStyle = topHi;
        x.fillRect(i + 1, 2 + (i % 8 ? 0 : 3), 1, 1);
        x.fillStyle = topLo;
        x.fillRect(i + 2, 7 + ((i * 3) % 5), 2, 1);
    }
    if (look.top === 'grass') {
        x.fillStyle = topHi;
        for (let i = 0; i < tw; i += 6) { x.fillRect(i, 4, 1, 2); x.fillRect(i + 1, 3, 1, 1); }
    }
    x.fillStyle = topLo; x.fillRect(0, 14, tw, 1);
    // 앞면 벽돌
    x.fillStyle = face; x.fillRect(0, 15, tw, th - 15);
    for (let r = 0, y = 15; y < th; r++, y += 8) {
        const off = r % 2 ? 8 : 0;
        x.fillStyle = faceLo;
        x.fillRect(0, y, tw, 1);
        for (let i = -off; i < tw; i += 16) {
            x.fillRect(i, y, 1, 8);
            x.fillStyle = faceHi; x.fillRect(i + 3, y + 3, 2, 2); x.fillStyle = faceLo;
        }
    }
    // 아래로 갈수록 어둡게
    x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(0, 31, tw, th);
    x.fillStyle = 'rgba(0,0,0,0.25)'; x.fillRect(0, 47, tw, th);
    cache.set(k, c);
    return c;
}

// 해/달 (블록 원)
function orb(ctx, cx, cy, r, color, glow) {
    const u = 4;
    for (let y = -r; y <= r; y += u) {
        for (let x = -r; x <= r; x += u) {
            const d = Math.hypot(x + u / 2, y + u / 2);
            if (d <= r) { ctx.fillStyle = color; ctx.fillRect(cx + x, cy + y, u, u); }
            else if (d <= r + u * 2) { ctx.fillStyle = glow; ctx.fillRect(cx + x, cy + y, u, u); }
        }
    }
}

const stars = Array.from({ length: 60 }, (_, i) => ({ x: (i * 137) % W, y: (i * 61) % 220, p: i * 1.7 }));
const clouds = Array.from({ length: 5 }, (_, i) => ({ x: i * 190 + 30, y: 36 + (i * 37) % 80, w: 3 + (i % 3) }));
const flakes = Array.from({ length: 50 }, (_, i) => ({ x: (i * 97) % W, y: (i * 53) % H, s: 0.5 + ((i * 7) % 10) / 10 }));

// 하늘·해·별·구름 (화면 좌표)
export function renderSky(ctx) {
    const biome = getBiome(state.distance);
    const scroll = state.distance * SCROLL_PX;
    const dark = isDark(biome);
    const horizon = toScreen(0, GROUND_Y).y;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(skyLayer(biome, horizon), 0, 0);

    if (dark) {
        for (const s of stars) {
            if (Math.sin(worldT * 1.3 + s.p) > -0.2) {
                ctx.fillStyle = Math.sin(worldT * 2 + s.p) > 0.6 ? '#ffffff' : '#a9b6dc';
                ctx.fillRect(s.x, s.y, 2, 2);
            }
        }
        orb(ctx, 640, 88, 16, '#f4ecd8', 'rgba(255,240,220,0.18)');
    } else {
        orb(ctx, 640, 88, 20, '#fff3b0', 'rgba(255,250,210,0.35)');
        for (const cl of clouds) {
            const cx = snap(wrap(cl.x - worldT * 8 - scroll * 0.05, W + 160) - 80, 4);
            const w = cl.w * 16;
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(cx, cl.y, w, 8);
            ctx.fillRect(cx + 8, cl.y - 8, w - 20, 8);
            ctx.fillRect(cx + 16, cl.y - 12, w - 40, 4);
            ctx.fillStyle = 'rgba(160,190,230,0.8)';
            ctx.fillRect(cx, cl.y + 8, w, 4);
        }
    }
}

function drawRepeat(ctx, img, off, y, wWorld, hWorld) {
    const o = snap(wrap(off, wWorld));
    for (let x = -o; x < W; x += wWorld) ctx.drawImage(img, x, y, wWorld, hWorld);
}

// 지형 (월드 좌표, 카메라 변환 안에서 호출)
export function renderWorld(ctx) {
    const biome = getBiome(state.distance);
    const look = LOOK[biome.name] ?? LOOK['초원'];
    const scroll = state.distance * SCROLL_PX;
    ctx.imageSmoothingEnabled = false;

    // 먼 산맥 2겹
    const far = ridgeLayer('far_' + biome.name, shade(biome.sky, -0.12), look.snow ? '#f4f4f4' : null, GROUND_Y, 120, 2, 5, 1.3);
    drawRepeat(ctx, far.c, scroll * 0.06, far.base - far.ph * BG, PERIOD, far.ph * BG);
    const near = ridgeLayer('near_' + biome.name, shade(biome.accent, -0.45), null, GROUND_Y + 2, 56, 3, 7, 4.1);
    drawRepeat(ctx, near.c, scroll * 0.15, near.base - near.ph * BG, PERIOD, near.ph * BG);

    // 중경 소품
    const pal = look.prop === 'cactus' ? { g: '#5a9a3a', G: '#8ac860', h: '#2a5a28' }
        : look.prop === 'volcano' ? { o: '#8a3a28', O: '#5a2418' } : {
        g: shade(biome.accent, -0.15), G: shade(biome.accent, 0.2), h: shade(biome.accent, -0.45),
        o: shade(biome.ground, -0.2), O: shade(biome.ground, -0.45),
    };
    const spr = bake('prop_' + biome.name, PROPS[look.prop], pal);
    const off = scroll * 0.4;
    const span = W + spr.w * BG * 2;
    for (let x0 = 0; x0 < span; x0 += look.gap) {
        const x = snap(wrap(x0 - off, span) - spr.w * BG);
        const s = ((x0 / look.gap) % 3 === 1) ? 1.5 : 1;
        drawPix(ctx, spr, x, GROUND_Y + 2 - spr.h * BG * s, BG * s);
    }
    // 지면
    const tile = groundTile(biome, look);
    drawRepeat(ctx, tile, scroll, GROUND_Y, TILE, tile.height * BG);
}

// 눈·불씨 (화면 좌표, 월드 위에 덮어 그림)
export function renderWeather(ctx) {
    const biome = getBiome(state.distance);
    const scroll = state.distance * SCROLL_PX;
    if (biome.name === '설원') {
        ctx.fillStyle = 'rgba(255,255,255,0.85)';
        flakes.forEach(f => {
            const x = snap(wrap(f.x - worldT * 20 * f.s - scroll * 0.6, W));
            const y = snap(wrap(f.y + worldT * 40 * f.s, H));
            ctx.fillRect(x, y, f.s > 1 ? 4 : 2, f.s > 1 ? 4 : 2);
        });
    } else if (biome.name === '화산' || biome.name === '어둠의 땅') {
        const ember = biome.name === '화산';
        flakes.forEach(f => {
            const x = snap(wrap(f.x - scroll * 0.6 + Math.sin(worldT + f.y) * 10, W));
            const y = snap(wrap(f.y - worldT * 30 * f.s, H));
            ctx.fillStyle = ember ? (f.s > 1 ? '#ffe14a' : '#ff9a2e') : (f.s > 1 ? '#c9a8ff' : '#8b5fbf');
            ctx.fillRect(x, y, 2, 2);
        });
    }
}
