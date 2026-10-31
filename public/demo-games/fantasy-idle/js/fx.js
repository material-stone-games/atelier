// 코인·팝업 텍스트는 화면 좌표, 나머지는 월드 좌표
// 게임 감각(Juice) 효과: 화면 흔들림, 히트스톱, 참격, 링, 코인, 투사체, 비네트
import { W, H, VIEW_FLOOR } from './constants.js';
import { sfx } from './sfx.js';

export const fx = {
    shake: 0,        // 현재 흔들림 세기(px)
    hitstop: 0,      // 남은 정지 시간(s)
    slowmo: 0,       // 남은 슬로모션 시간(s)
    hurtFlash: 0,    // 플레이어 피격 붉은 비네트
    goldBump: 0,     // 골드 카운터 튕김
    slashes: [],
    rings: [],
    coins: [],
    projectiles: [],
    texts: [],       // 팝업 텍스트(+G, 상태 표시 등)
    ui: [],          // 화면 전환과 무관한 UI 파티클
};

export function resetFx() {
    fx.shake = 0; fx.hitstop = 0; fx.slowmo = 0; fx.hurtFlash = 0;
    fx.slashes = []; fx.rings = []; fx.coins = []; fx.projectiles = []; fx.texts = [];
}

export function addShake(amount) { fx.shake = Math.min(14, Math.max(fx.shake, amount)); }
export function addHitstop(sec) { fx.hitstop = Math.max(fx.hitstop, sec); }

export function spawnSlash(x, y, color = '#ffffff', size = 34, dir = 1) {
    fx.slashes.push({ x, y, color, size, dir, life: 0.18, maxLife: 0.18 });
}

export function spawnRing(x, y, color, maxR = 40, life = 0.35, width = 3) {
    fx.rings.push({ x, y, color, maxR, life, maxLife: life, width });
}

export function spawnCoins(x, y, n) {
    for (let i = 0; i < n; i++) {
        fx.coins.push({
            x, y, vx: (Math.random() - 0.3) * 160, vy: -140 - Math.random() * 120,
            t: 0, phase: 'pop', spin: Math.random() * 6,
            delay: 0.35 + Math.random() * 0.25,
        });
    }
}

export function spawnText(x, y, text, color, size = 12) {
    fx.texts.push({ x, y, text, color, size, life: 0.9, maxLife: 0.9, vy: -50 });
}

// 투사체: 도착 시 onHit 호출
export function spawnProjectile(x, y, tx, ty, color, speed, onHit) {
    const dx = tx - x, dy = ty - y;
    const d = Math.hypot(dx, dy) || 1;
    fx.projectiles.push({ x, y, vx: dx / d * speed, vy: dy / d * speed, life: d / speed, color, onHit });
}

export function spawnUiBurst(x, y, color) {
    for (let i = 0; i < 10; i++) {
        const a = (Math.PI * 2 * i) / 10 + Math.random() * 0.3;
        const sp = 70 + Math.random() * 60;
        fx.ui.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 0.4, maxLife: 0.4, color, size: 2 + Math.random() * 2 });
    }
    fx.ui.push({ ring: true, x, y, color, life: 0.35, maxLife: 0.35, maxR: 30 });
}

// HUD 골드 위치 (코인이 날아갈 곳)
const GOLD_TARGET = { x: 22, y: 40 };

export function updateFx(dt) {
    fx.shake = Math.max(0, fx.shake - dt * 30);
    fx.hurtFlash = Math.max(0, fx.hurtFlash - dt * 2.5);
    fx.goldBump = Math.max(0, fx.goldBump - dt * 4);

    for (const s of fx.slashes) s.life -= dt;
    fx.slashes = fx.slashes.filter(s => s.life > 0);
    for (const r of fx.rings) r.life -= dt;
    fx.rings = fx.rings.filter(r => r.life > 0);

    for (const c of fx.coins) {
        c.t += dt; c.spin += dt * 10;
        if (c.phase === 'pop') {
            c.x += c.vx * dt; c.y += c.vy * dt; c.vy += 600 * dt;
            if (c.y > VIEW_FLOOR - 3) { c.y = VIEW_FLOOR - 3; c.vy *= -0.45; c.vx *= 0.6; }
            if (c.t > c.delay) { c.phase = 'fly'; c.t = 0; c.sx = c.x; c.sy = c.y; }
        } else {
            const p = Math.min(1, c.t / 0.45);
            const e = p * p;
            c.x = c.sx + (GOLD_TARGET.x - c.sx) * e;
            c.y = c.sy + (GOLD_TARGET.y - c.sy) * e - Math.sin(p * Math.PI) * 60;
            if (p >= 1) { c.done = true; fx.goldBump = 1; sfx.coin(); }
        }
    }
    fx.coins = fx.coins.filter(c => !c.done);

    for (const p of fx.projectiles) {
        p.x += p.vx * dt; p.y += p.vy * dt; p.life -= dt;
        if (p.life <= 0) p.onHit?.();
    }
    fx.projectiles = fx.projectiles.filter(p => p.life > 0);

    for (const t of fx.texts) { t.y += t.vy * dt; t.vy *= 0.94; t.life -= dt; }
    fx.texts = fx.texts.filter(t => t.life > 0);

    for (const p of fx.ui) {
        if (!p.ring) { p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= 0.9; p.vy *= 0.9; }
        p.life -= dt;
    }
    fx.ui = fx.ui.filter(p => p.life > 0);
}

// 월드 레이어 효과 (흔들림 변환 안에서 그림)
export function renderWorldFx(ctx) {
    for (const s of fx.slashes) {
        const p = 1 - s.life / s.maxLife;
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.scale(s.dir, 1);
        ctx.globalAlpha = 1 - p;
        ctx.strokeStyle = s.color;
        ctx.lineCap = 'round';
        const r = s.size * (0.8 + p * 0.4);
        const start = -1.6 + p * 0.6, end = 1.1 + p * 0.3;
        ctx.lineWidth = 7 * (1 - p) + 1;
        ctx.beginPath();
        ctx.arc(0, 0, r, start, end);
        ctx.stroke();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2 * (1 - p) + 0.5;
        ctx.beginPath();
        ctx.arc(0, 0, r - 3, start + 0.2, end - 0.1);
        ctx.stroke();
        ctx.restore();
    }
    for (const r of fx.rings) {
        const p = 1 - r.life / r.maxLife;
        ctx.globalAlpha = 1 - p;
        ctx.strokeStyle = r.color;
        ctx.lineWidth = r.width * (1 - p) + 0.5;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.maxR * (0.2 + 0.8 * Math.sqrt(p)), 0, Math.PI * 2);
        ctx.stroke();
    }
    ctx.globalAlpha = 1;
    for (const p of fx.projectiles) {
        const a = Math.atan2(p.vy, p.vx);
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(a);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(-12, 0); ctx.lineTo(4, 0); ctx.stroke();
        ctx.fillStyle = '#e0e0e0';
        ctx.beginPath(); ctx.moveTo(7, 0); ctx.lineTo(2, -3); ctx.lineTo(2, 3); ctx.fill();
        ctx.restore();
    }
}

// 화면 공간 효과 (HUD 위)
export function renderScreenFx(ctx) {
    for (const c of fx.coins) {
        const sx = Math.abs(Math.cos(c.spin));
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.scale(Math.max(0.2, sx), 1);
        ctx.fillStyle = '#f5c518';
        ctx.beginPath(); ctx.arc(0, 0, 4, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#fff2a0';
        ctx.fillRect(-1, -2, 2, 3);
        ctx.strokeStyle = '#a07808';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
    }
    for (const t of fx.texts) {
        const p = 1 - t.life / t.maxLife;
        const pop = p < 0.15 ? 0.6 + p / 0.15 * 0.6 : 1.2 - Math.min(0.2, (p - 0.15));
        ctx.globalAlpha = Math.min(1, t.life / 0.3);
        ctx.font = `bold ${Math.round(t.size * pop)}px monospace`;
        ctx.textAlign = 'center';
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(0,0,0,0.8)';
        ctx.strokeText(t.text, t.x, t.y);
        ctx.fillStyle = t.color;
        ctx.fillText(t.text, t.x, t.y);
    }
    ctx.globalAlpha = 1;
    ctx.textAlign = 'left';

    if (fx.hurtFlash > 0) {
        const g = ctx.createRadialGradient(W / 2, H / 2, H * 0.35, W / 2, H / 2, W * 0.7);
        g.addColorStop(0, 'rgba(255,0,0,0)');
        g.addColorStop(1, `rgba(220,20,20,${0.55 * fx.hurtFlash})`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
    }
}

export function renderUiFx(ctx) {
    for (const p of fx.ui) {
        const a = p.life / p.maxLife;
        ctx.globalAlpha = a;
        if (p.ring) {
            ctx.strokeStyle = p.color;
            ctx.lineWidth = 2 * a + 0.5;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.maxR * (1 - a * 0.8), 0, Math.PI * 2); ctx.stroke();
        } else {
            ctx.fillStyle = p.color;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        }
    }
    ctx.globalAlpha = 1;
}
