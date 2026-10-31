// 월드 렌더링, 바이옴, 다층 패럴랙스 배경
import { W, H, GROUND_Y, BIOMES, SCROLL_PX, toScreen } from './constants.js';
import { state } from './state.js';
import { shade } from './draw.js';

// 현재 바이옴 반환
export function getBiome(dist) {
    return BIOMES.find(b => dist >= b.from && dist <= b.to) ?? BIOMES[BIOMES.length - 1];
}

// 배경 별/구름 (정적 생성)
const stars = Array.from({ length: 70 }, () => ({
    x: Math.random() * W, y: Math.random() * (GROUND_Y * 0.7), r: Math.random() * 1.4 + 0.4,
}));
const clouds = Array.from({ length: 6 }, (_, i) => ({
    x: i * 160 + 40, y: 40 + Math.random() * 70, w: 50 + Math.random() * 50,
}));
const flakes = Array.from({ length: 50 }, () => ({ x: Math.random() * W, y: Math.random() * H, s: 0.5 + Math.random() }));

let worldT = 0;

export function updateWorldTime(dt) {
    worldT += dt;
}

const wrap = (v, m) => ((v % m) + m) % m;

// 하늘·해·별·구름 (화면 좌표)
export function renderSky(ctx) {
    const biome = getBiome(state.distance);
    const scroll = state.distance * SCROLL_PX;
    const dark = biome.from >= 1500;

    // 하늘 그라데이션
    const horizon = toScreen(0, GROUND_Y).y;
    const sky = ctx.createLinearGradient(0, 0, 0, horizon);
    sky.addColorStop(0, shade(biome.sky, -0.35));
    sky.addColorStop(1, shade(biome.sky, 0.25));
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, horizon + 2);

    // 해 / 달
    const glow = ctx.createRadialGradient(640, 90, 4, 640, 90, 70);
    glow.addColorStop(0, dark ? 'rgba(255,240,220,0.9)' : 'rgba(255,250,210,1)');
    glow.addColorStop(0.3, dark ? 'rgba(255,200,160,0.25)' : 'rgba(255,240,170,0.35)');
    glow.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(560, 10, 160, 160);
    ctx.fillStyle = dark ? '#f4e8d8' : '#fff8d0';
    ctx.beginPath(); ctx.arc(640, 90, dark ? 14 : 20, 0, Math.PI * 2); ctx.fill();

    // 별 (어두운 바이옴)
    if (dark) {
        ctx.fillStyle = '#ffffff';
        stars.forEach(s => {
            ctx.globalAlpha = 0.5 + Math.sin(worldT * 1.3 + s.x) * 0.4;
            ctx.fillRect(s.x, s.y, s.r, s.r);
        });
        ctx.globalAlpha = 1;
    }

    // 구름 (밝은 바이옴)
    if (!dark) {
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        clouds.forEach(cl => {
            const cx = wrap(cl.x - worldT * 8 - scroll * 0.05, W + 140) - 70;
            ctx.beginPath();
            ctx.arc(cx, cl.y, cl.w * 0.28, 0, Math.PI * 2);
            ctx.arc(cx + cl.w * 0.3, cl.y - 8, cl.w * 0.32, 0, Math.PI * 2);
            ctx.arc(cx + cl.w * 0.62, cl.y, cl.w * 0.25, 0, Math.PI * 2);
            ctx.fill();
        });
    }
}

// 지형 (월드 좌표, 카메라 변환 안에서 호출)
export function renderWorld(ctx) {
    const biome = getBiome(state.distance);
    const scroll = state.distance * SCROLL_PX;
    const dark = biome.from >= 1500;

    // 원경 산맥 (2겹)
    _mountains(ctx, scroll * 0.06, GROUND_Y - 70, 60, shade(biome.sky, -0.15), 0.004, 1);
    _mountains(ctx, scroll * 0.15, GROUND_Y - 35, 45, shade(biome.accent, -0.45), 0.007, 2);

    // 중경 실루엣
    _renderMidground(ctx, biome, scroll * 0.4);

    // 지면: 윗면(걷는 면) + 앞면
    const top = ctx.createLinearGradient(0, GROUND_Y, 0, GROUND_Y + 30);
    top.addColorStop(0, shade(biome.accent, 0.12));
    top.addColorStop(1, biome.ground);
    ctx.fillStyle = top;
    ctx.fillRect(0, GROUND_Y, W, 30);
    const face = ctx.createLinearGradient(0, GROUND_Y + 30, 0, H + 40);
    face.addColorStop(0, shade(biome.ground, -0.3));
    face.addColorStop(1, shade(biome.ground, -0.6));
    ctx.fillStyle = face;
    ctx.fillRect(0, GROUND_Y + 30, W, H - GROUND_Y + 60);
    // 윗면 가장자리 하이라이트
    ctx.fillStyle = shade(biome.accent, 0.35);
    ctx.fillRect(0, GROUND_Y, W, 2);
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, GROUND_Y + 30, W, 2);

    // 지면 디테일 (지면 속도로 스크롤)
    const tuftCol = shade(biome.accent, dark ? 0.2 : 0.3);
    for (let i = 0; i < 26; i++) {
        const x = wrap(i * 37 + (i * 53) % 17 - scroll, W + 40) - 20;
        const y = GROUND_Y + 4 + ((i * 7) % 22);
        ctx.fillStyle = tuftCol;
        if (biome.name === '초원' || biome.name === '숲') {
            ctx.beginPath();
            ctx.moveTo(x - 3, y + 3); ctx.lineTo(x - 1, y - 3); ctx.lineTo(x, y + 2); ctx.lineTo(x + 2, y - 4); ctx.lineTo(x + 3, y + 3);
            ctx.fill();
        } else {
            ctx.fillRect(x, y, 3, 2);
        }
    }
    ctx.fillStyle = 'rgba(0,0,0,0.22)';
    for (let i = 0; i < 14; i++) {
        const x = wrap(i * 61 + 13 - scroll, W + 40) - 20;
        const y = GROUND_Y + 38 + ((i * 11) % 18);
        ctx.beginPath(); ctx.ellipse(x, y, 5 + (i % 3) * 2, 2.5, 0, 0, Math.PI * 2); ctx.fill();
    }
}

function _mountains(ctx, off, baseY, amp, color, freq, seed) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, GROUND_Y);
    for (let x = 0; x <= W; x += 8) {
        const u = x + off;
        const y = baseY - amp * (0.5 + 0.3 * Math.sin(u * freq + seed) + 0.2 * Math.sin(u * freq * 2.7 + seed * 3));
        ctx.lineTo(x, y);
    }
    ctx.lineTo(W, GROUND_Y);
    ctx.closePath();
    ctx.fill();
}

function _renderMidground(ctx, biome, off) {
    const col = shade(biome.accent, -0.3);
    ctx.fillStyle = col;
    if (biome.name === '초원' || biome.name === '숲') {
        const n = biome.name === '숲' ? 9 : 5;
        for (let i = 0; i < n; i++) {
            const tx = wrap(i * (W / n) + 40 - off, W + 80) - 40;
            const s = 0.8 + ((i * 7) % 5) * 0.12;
            ctx.fillStyle = shade(biome.accent, -0.55);
            ctx.fillRect(tx - 3 * s, GROUND_Y - 30 * s, 6 * s, 30 * s);
            ctx.fillStyle = col;
            ctx.beginPath();
            ctx.arc(tx, GROUND_Y - 42 * s, 18 * s, 0, Math.PI * 2);
            ctx.arc(tx - 12 * s, GROUND_Y - 32 * s, 13 * s, 0, Math.PI * 2);
            ctx.arc(tx + 12 * s, GROUND_Y - 32 * s, 13 * s, 0, Math.PI * 2);
            ctx.fill();
        }
    } else if (biome.name === '사막') {
        for (let i = 0; i < 4; i++) {
            const tx = wrap(i * 220 + 80 - off, W + 80) - 40;
            ctx.beginPath();
            ctx.roundRect(tx - 5, GROUND_Y - 50, 10, 50, 5);
            ctx.roundRect(tx - 17, GROUND_Y - 38, 8, 20, 4);
            ctx.roundRect(tx - 17, GROUND_Y - 24, 14, 7, 3);
            ctx.roundRect(tx + 9, GROUND_Y - 44, 8, 22, 4);
            ctx.roundRect(tx + 3, GROUND_Y - 28, 14, 7, 3);
            ctx.fill();
        }
    } else if (biome.name === '화산') {
        for (let i = 0; i < 3; i++) {
            const tx = wrap(i * 280 + 100 - off, W + 160) - 80;
            ctx.fillStyle = col;
            ctx.beginPath();
            ctx.moveTo(tx, GROUND_Y);
            ctx.lineTo(tx + 50, GROUND_Y - 90);
            ctx.lineTo(tx + 70, GROUND_Y - 90);
            ctx.lineTo(tx + 120, GROUND_Y);
            ctx.fill();
            ctx.fillStyle = `rgba(255,120,30,${0.6 + Math.sin(worldT * 3 + i) * 0.3})`;
            ctx.fillRect(tx + 52, GROUND_Y - 92, 16, 4);
        }
    } else if (biome.name === '설원') {
        for (let i = 0; i < 7; i++) {
            const tx = wrap(i * 120 + 30 - off, W + 80) - 40;
            for (let k = 0; k < 3; k++) {
                ctx.fillStyle = k === 0 ? '#e8f0ff' : col;
                ctx.beginPath();
                ctx.moveTo(tx, GROUND_Y - 70 + k * 18);
                ctx.lineTo(tx - 18 - k * 4, GROUND_Y - 36 + k * 16);
                ctx.lineTo(tx + 18 + k * 4, GROUND_Y - 36 + k * 16);
                ctx.fill();
            }
        }
    } else {
        // 어둠의 땅: 뾰족한 첨탑
        for (let i = 0; i < 5; i++) {
            const tx = wrap(i * 170 + 50 - off, W + 80) - 40;
            ctx.fillStyle = col;
            ctx.beginPath();
            ctx.moveTo(tx - 14, GROUND_Y); ctx.lineTo(tx - 4, GROUND_Y - 80 - (i % 2) * 30); ctx.lineTo(tx + 14, GROUND_Y);
            ctx.fill();
            ctx.fillStyle = `rgba(200,80,255,${0.5 + Math.sin(worldT * 2 + i) * 0.3})`;
            ctx.fillRect(tx - 5, GROUND_Y - 50, 3, 3);
        }
    }
}

// 눈·불씨 (화면 좌표, 월드 위에 덮어 그림)
export function renderWeather(ctx) {
    const biome = getBiome(state.distance);
    const scroll = state.distance * SCROLL_PX;
    // 날씨 / 환경 입자
    if (biome.name === '설원') {
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        flakes.forEach(f => {
            const x = wrap(f.x - worldT * 20 * f.s - scroll * 0.6, W);
            const y = wrap(f.y + worldT * 40 * f.s, H);
            ctx.fillRect(x, y, 2 * f.s, 2 * f.s);
        });
    } else if (biome.name === '화산') {
        flakes.forEach(f => {
            const x = wrap(f.x - scroll * 0.6 + Math.sin(worldT + f.y) * 10, W);
            const y = wrap(f.y - worldT * 30 * f.s, H);
            ctx.fillStyle = `rgba(255,${120 + f.s * 80},40,${0.5 + Math.sin(worldT * 5 + f.x) * 0.3})`;
            ctx.fillRect(x, y, 2, 2);
        });
    }
}
