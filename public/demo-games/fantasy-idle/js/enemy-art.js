// 적 캐릭터 아트: 발 중심(0,0) 기준, 왼쪽(플레이어 쪽)을 바라봄
import { shade, roundRect, outlined } from './draw.js';

const ART = {
    slime: 'slime', poison_slime: 'slime',
    goblin: 'brute', gob_chief: 'brute', orc: 'brute', orc_warrior: 'brute', troll: 'brute', forest_giant: 'brute',
    bat: 'bat', fire_bat: 'bat',
    spirit: 'spirit', mushroom: 'mushroom', scorpion: 'scorpion',
    skeleton: 'skeleton', skel_archer: 'skeleton',
    lava_golem: 'golem', fire_mage: 'caster', lich: 'caster',
    ancient_dragon: 'dragon', shadow_lord: 'lord',
    yeti: 'brute', frost_giant: 'brute', ice_spirit: 'spirit', ice_wraith: 'spirit',
    frost_wolf: 'wolf', ice_golem: 'golem',
    shadow_knight: 'lord', death_knight: 'lord', wraith: 'spirit', void_bat: 'bat',
};

const BRUTE = {
    goblin:       { ears: true,  weapon: 'dagger' },
    gob_chief:    { ears: true,  weapon: 'club', crown: true },
    orc:          { tusks: true, weapon: 'axe' },
    orc_warrior:  { tusks: true, weapon: 'axe', helm: true },
    troll:        { tusks: true, weapon: 'club', hunch: true },
    forest_giant: { weapon: 'log', moss: true, hunch: true },
    yeti:         { weapon: 'club', horns: true, hunch: true },
    frost_giant:  { weapon: 'log', horns: true, hunch: true, helm: true },
};

// a: 공격 진행도(0~1), walk: 이동 중 여부
export function drawEnemyArt(ctx, e, t, flash, a, walk) {
    const base = flash ? '#ffffff' : e.color;
    const kind = ART[e.type] ?? 'brute';
    const fn = { slime, brute, bat, spirit, mushroom, scorpion, skeleton, golem, caster, dragon, lord, wolf }[kind];
    fn(ctx, e, t, base, a, walk);
}

// 공격 팔 들어올림 정도 (0 → 1 → 내려침)
function armRaise(a) {
    if (a <= 0) return 0;
    if (a < 0.5) return a / 0.5;
    if (a < 0.62) return 1 - (a - 0.5) / 0.12 * 1.6;
    return -0.6 * (1 - (a - 0.62) / 0.38);
}

function eye(ctx, x, y, r, glow) {
    if (glow) {
        ctx.fillStyle = glow;
        ctx.shadowColor = glow;
        ctx.shadowBlur = 6;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        return;
    }
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#111';
    ctx.beginPath(); ctx.arc(x - r * 0.35, y + r * 0.1, r * 0.55, 0, Math.PI * 2); ctx.fill();
}

function slime(ctx, e, t, c, a) {
    const w = e.w * 1.15, h = e.h * 1.1;
    const wob = Math.sin(t * 6) * 0.08 - (a > 0 && a < 0.5 ? a * 0.3 : 0);
    const sw = w * (1 + wob), sh = h * (1 - wob);
    ctx.beginPath();
    ctx.moveTo(-sw / 2, 0);
    ctx.bezierCurveTo(-sw / 2, -sh * 0.9, -sw * 0.2, -sh * 1.15, 0, -sh * 1.1);
    ctx.bezierCurveTo(sw * 0.25, -sh * 1.1, sw / 2, -sh * 0.8, sw / 2, 0);
    ctx.closePath();
    const g = ctx.createLinearGradient(0, -sh, 0, 0);
    g.addColorStop(0, shade(c, 0.3)); g.addColorStop(1, shade(c, -0.25));
    outlined(ctx, g);
    ctx.globalAlpha *= 0.7;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.ellipse(sw * 0.12, -sh * 0.75, sw * 0.1, sh * 0.14, -0.5, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha /= 0.7;
    eye(ctx, -sw * 0.22, -sh * 0.5, 2.6);
    eye(ctx, -sw * 0.02, -sh * 0.52, 2.6);
    if (e.type === 'poison_slime') {
        ctx.fillStyle = '#c0ff60';
        for (let i = 0; i < 3; i++) {
            const by = -((t * 12 + i * 7) % 20) - sh * 0.6;
            ctx.globalAlpha *= 0.6;
            ctx.beginPath(); ctx.arc(-4 + i * 4, by, 1.6, 0, Math.PI * 2); ctx.fill();
            ctx.globalAlpha /= 0.6;
        }
    }
}

function brute(ctx, e, t, c, a, walk) {
    const o = BRUTE[e.type] ?? {};
    const w = e.w, h = e.h;
    const ph = t * 9;
    const swing = walk ? Math.sin(ph) * w * 0.12 : 0;
    const bob = walk ? -Math.abs(Math.sin(ph)) * 1.5 : Math.sin(t * 2.5) * 0.6;
    const legH = h * 0.24;
    const skin = c, dark = shade(c, -0.35);
    // 다리
    for (const [lx, s] of [[w * 0.14, -swing], [-w * 0.14, swing]]) {
        roundRect(ctx, lx + s - w * 0.1, -legH - 1, w * 0.2, legH + 1, 2);
        outlined(ctx, dark);
    }
    ctx.save();
    ctx.translate(0, bob);
    if (o.hunch) ctx.rotate(-0.12);
    // 몸통
    roundRect(ctx, -w / 2, -h * 0.72, w, h * 0.5, w * 0.25);
    const g = ctx.createLinearGradient(-w / 2, 0, w / 2, 0);
    g.addColorStop(0, shade(skin, 0.15)); g.addColorStop(1, shade(skin, -0.2));
    outlined(ctx, g);
    // 허리 천
    ctx.fillStyle = flashSafe(c, '#5a3a1e');
    ctx.fillRect(-w / 2 + 1, -h * 0.3, w - 2, h * 0.08);
    if (o.moss) {
        ctx.fillStyle = flashSafe(c, '#3e8a2a');
        for (let i = 0; i < 4; i++) {
            ctx.beginPath(); ctx.arc(-w * 0.35 + i * w * 0.24, -h * 0.72, w * 0.14, 0, Math.PI * 2); ctx.fill();
        }
    }
    // 머리
    const hr = w * 0.3;
    const hx = -w * 0.18, hy = -h * 0.8;
    if (o.ears) {
        ctx.beginPath();
        ctx.moveTo(hx + hr * 0.5, hy - hr * 0.2); ctx.lineTo(hx + hr * 1.6, hy - hr * 0.9); ctx.lineTo(hx + hr * 0.7, hy + hr * 0.3);
        ctx.closePath(); outlined(ctx, skin);
    }
    ctx.beginPath(); ctx.arc(hx, hy, hr, 0, Math.PI * 2);
    outlined(ctx, shade(skin, 0.08));
    eye(ctx, hx - hr * 0.45, hy - hr * 0.1, Math.max(1.8, hr * 0.22), o.helm ? '#ff4030' : null);
    // 찡그린 눈썹
    ctx.strokeStyle = 'rgba(0,0,0,0.7)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(hx - hr * 0.85, hy - hr * 0.5); ctx.lineTo(hx - hr * 0.1, hy - hr * 0.3); ctx.stroke();
    if (o.tusks) {
        ctx.fillStyle = '#f4ecd0';
        ctx.beginPath(); ctx.moveTo(hx - hr * 0.7, hy + hr * 0.45); ctx.lineTo(hx - hr * 0.6, hy + hr * 0.05); ctx.lineTo(hx - hr * 0.45, hy + hr * 0.45); ctx.fill();
    }
    if (o.horns) {
        ctx.fillStyle = flashSafe(c, '#f0ead8');
        for (const s of [-1, 1]) {
            ctx.beginPath();
            ctx.moveTo(hx + s * hr * 0.35, hy - hr * 0.7);
            ctx.quadraticCurveTo(hx + s * hr * 1.2, hy - hr * 1.3, hx + s * hr * 0.9, hy - hr * 1.8);
            ctx.lineTo(hx + s * hr * 0.6, hy - hr * 0.8);
            ctx.closePath();
            ctx.fill();
        }
    }
    if (o.helm) {
        ctx.beginPath(); ctx.arc(hx, hy, hr * 1.05, Math.PI * 1.05, Math.PI * 1.95);
        ctx.lineTo(hx + hr, hy - hr * 0.1); ctx.lineTo(hx - hr, hy - hr * 0.1); ctx.closePath();
        outlined(ctx, flashSafe(c, '#707a88'));
    }
    if (o.crown) {
        ctx.fillStyle = '#f0c040';
        ctx.beginPath();
        ctx.moveTo(hx - hr * 0.7, hy - hr * 0.8);
        for (let i = 0; i <= 4; i++) ctx.lineTo(hx - hr * 0.7 + i * hr * 0.35, hy - hr * (i % 2 ? 1.1 : 1.5));
        ctx.lineTo(hx + hr * 0.7, hy - hr * 0.8);
        ctx.closePath(); ctx.fill();
    }
    // 무기 든 팔
    const r = armRaise(a);
    ctx.save();
    ctx.translate(-w * 0.32, -h * 0.6);
    ctx.rotate(-0.3 + r * 2.2);
    ctx.strokeStyle = shade(skin, -0.1);
    ctx.lineCap = 'round';
    ctx.lineWidth = Math.max(3, w * 0.16);
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, h * 0.25); ctx.stroke();
    ctx.translate(0, h * 0.25);
    _weapon(ctx, o.weapon, h, c);
    ctx.restore();
    ctx.restore();
}

function flashSafe(c, col) { return c === '#ffffff' ? '#ffffff' : col; }

function _weapon(ctx, kind, h, c) {
    const L = h * 0.5;
    if (kind === 'dagger') {
        ctx.fillStyle = '#5a3418'; ctx.fillRect(-1, -2, 2, 4);
        ctx.beginPath(); ctx.moveTo(-1.5, -2); ctx.lineTo(0, -L * 0.6); ctx.lineTo(1.5, -2); ctx.closePath();
        outlined(ctx, flashSafe(c, '#d8dde6'), 'rgba(0,0,0,0.5)', 1);
    } else if (kind === 'axe') {
        ctx.strokeStyle = '#6a4220'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(0, 4); ctx.lineTo(0, -L); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, -L); ctx.quadraticCurveTo(-L * 0.55, -L * 0.85, -L * 0.45, -L * 0.45); ctx.lineTo(0, -L * 0.6); ctx.closePath();
        outlined(ctx, flashSafe(c, '#c8ced8'));
    } else {
        // club / log
        const thick = kind === 'log' ? 5 : 3.5;
        ctx.beginPath();
        ctx.moveTo(-thick * 0.4, 3); ctx.lineTo(-thick, -L); ctx.quadraticCurveTo(0, -L - thick * 1.5, thick, -L); ctx.lineTo(thick * 0.4, 3);
        ctx.closePath();
        outlined(ctx, flashSafe(c, kind === 'log' ? '#6a4a28' : '#8a5a30'));
    }
}

function bat(ctx, e, t, c) {
    const w = e.w, h = e.h;
    const flap = Math.sin(t * 22);
    for (const s of [1, -1]) {
        ctx.beginPath();
        ctx.moveTo(0, -h * 0.5);
        ctx.quadraticCurveTo(s * w * 0.6, -h * (1.2 + flap * 0.6), s * w * 1.05, -h * (0.4 + flap * 0.5));
        ctx.lineTo(s * w * 0.7, -h * 0.35);
        ctx.lineTo(s * w * 0.45, -h * 0.25);
        ctx.closePath();
        outlined(ctx, shade(c, s > 0 ? -0.2 : 0));
    }
    ctx.beginPath(); ctx.ellipse(0, -h * 0.4, w * 0.3, h * 0.5, 0, 0, Math.PI * 2);
    outlined(ctx, c);
    // 귀
    ctx.beginPath(); ctx.moveTo(-w * 0.2, -h * 0.75); ctx.lineTo(-w * 0.12, -h * 1.15); ctx.lineTo(-w * 0.02, -h * 0.8); ctx.fill();
    eye(ctx, -w * 0.13, -h * 0.5, 1.8, e.type === 'fire_bat' ? '#ffe040' : '#ff3030');
    if (e.type === 'fire_bat') {
        ctx.globalAlpha *= 0.5;
        ctx.fillStyle = '#ffa020';
        ctx.beginPath(); ctx.arc(w * 0.25, -h * 0.3 + Math.sin(t * 15) * 2, 3, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha /= 0.5;
    }
}

function spirit(ctx, e, t, c) {
    const w = e.w, h = e.h;
    const fl = Math.sin(t * 4) * 2;
    ctx.save();
    ctx.shadowColor = c; ctx.shadowBlur = 12;
    ctx.globalAlpha *= 0.85;
    ctx.beginPath();
    ctx.moveTo(0, -h);
    ctx.bezierCurveTo(-w * 0.8, -h, -w * 0.7, -h * 0.3, -w * 0.2, -h * 0.15 + fl);
    ctx.quadraticCurveTo(w * 0.2, -h * 0.05 - fl, w * 0.55, -h * 0.25 + fl);
    ctx.bezierCurveTo(w * 0.7, -h * 0.6, w * 0.5, -h, 0, -h);
    const g = ctx.createRadialGradient(-w * 0.1, -h * 0.7, 1, 0, -h * 0.6, w);
    g.addColorStop(0, '#ffffff'); g.addColorStop(0.4, shade(c, 0.3)); g.addColorStop(1, shade(c, -0.2));
    ctx.fillStyle = g; ctx.fill();
    ctx.restore();
    // 머리장식: 숲 정령은 잎사귀, 얼음 계열은 결정, 망령은 없음
    if (e.type === 'spirit') {
        ctx.fillStyle = flashSafe(c, '#2e9a50');
        ctx.beginPath(); ctx.ellipse(w * 0.1, -h * 1.02, w * 0.3, 2.5, -0.4, 0, Math.PI * 2); ctx.fill();
    } else if (e.type !== 'wraith') {
        ctx.fillStyle = flashSafe(c, '#e8fbff');
        for (const [dx, hgt] of [[-0.2, 0.25], [0.05, 0.38], [0.28, 0.22]]) {
            ctx.beginPath();
            ctx.moveTo(w * dx - 3, -h * 0.98); ctx.lineTo(w * dx, -h * (0.98 + hgt)); ctx.lineTo(w * dx + 3, -h * 0.98);
            ctx.fill();
        }
    }
    const eyeCol = e.type === 'wraith' ? '#ff4060' : e.type === 'spirit' ? '#1a3a2a' : '#1a3050';
    eye(ctx, -w * 0.25, -h * 0.68, Math.max(1.8, w * 0.1), eyeCol);
    eye(ctx, w * 0.02, -h * 0.68, Math.max(1.8, w * 0.1), eyeCol);
}

function mushroom(ctx, e, t, c, a, walk) {
    const w = e.w, h = e.h;
    const ph = t * 10;
    const hop = walk ? -Math.abs(Math.sin(ph)) * 2 : 0;
    // 발
    ctx.fillStyle = '#e8d8b8';
    for (const s of [-1, 1]) {
        ctx.beginPath(); ctx.ellipse(s * w * 0.18 + (walk ? Math.sin(ph) * s * 2 : 0), -1.5, 3, 2, 0, 0, Math.PI * 2); ctx.fill();
    }
    ctx.save();
    ctx.translate(0, hop);
    roundRect(ctx, -w * 0.28, -h * 0.6, w * 0.56, h * 0.58, 4);
    outlined(ctx, flashSafe(c, '#f2e2c4'));
    eye(ctx, -w * 0.15, -h * 0.35, 1.8);
    eye(ctx, w * 0.06, -h * 0.35, 1.8);
    // 갓
    const squash = a > 0 && a < 0.5 ? a * 0.2 : 0;
    ctx.beginPath();
    ctx.ellipse(0, -h * 0.58, w * 0.62 * (1 + squash), h * 0.42 * (1 - squash), 0, Math.PI, 0);
    ctx.closePath();
    outlined(ctx, c);
    ctx.fillStyle = flashSafe(c, '#fff4e0');
    for (const [sx, sy, r] of [[-0.3, -0.75, 0.1], [0.12, -0.86, 0.12], [0.36, -0.68, 0.08]]) {
        ctx.beginPath(); ctx.arc(w * sx, h * sy, w * r, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
}

function scorpion(ctx, e, t, c, a, walk) {
    const w = e.w, h = e.h;
    const legs = walk ? Math.sin(t * 18) * 1.5 : 0;
    ctx.strokeStyle = shade(c, -0.4);
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 3; i++) {
        const lx = -w * 0.2 + i * w * 0.2;
        ctx.beginPath(); ctx.moveTo(lx, -h * 0.35); ctx.lineTo(lx - 3 + (i % 2 ? legs : -legs), 0); ctx.stroke();
    }
    ctx.beginPath(); ctx.ellipse(0, -h * 0.4, w * 0.42, h * 0.32, 0, 0, Math.PI * 2);
    outlined(ctx, c);
    // 꼬리 (공격 시 앞으로 찌름)
    const r = armRaise(a);
    ctx.strokeStyle = shade(c, -0.1);
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(w * 0.35, -h * 0.45);
    ctx.quadraticCurveTo(w * 0.7, -h * 1.4, w * 0.15 - r * w * 0.35, -h * 1.45 + r * h * 0.3);
    ctx.stroke();
    ctx.fillStyle = flashSafe(c, '#402010');
    ctx.beginPath(); ctx.arc(w * 0.15 - r * w * 0.35, -h * 1.45 + r * h * 0.3, 3, 0, Math.PI * 2); ctx.fill();
    // 집게
    for (const dy of [-0.15, 0.1]) {
        ctx.beginPath(); ctx.ellipse(-w * 0.55, -h * (0.45 + dy), w * 0.14, h * 0.13, 0, 0, Math.PI * 2);
        outlined(ctx, shade(c, 0.1));
    }
    eye(ctx, -w * 0.3, -h * 0.55, 1.5, '#000');
}

function skeleton(ctx, e, t, c, a, walk) {
    const w = e.w, h = e.h;
    const ph = t * 9;
    const swing = walk ? Math.sin(ph) * 3 : 0;
    const bone = flashSafe(c, '#e8e2c8');
    ctx.strokeStyle = bone;
    ctx.lineCap = 'round';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(-2, -h * 0.35); ctx.lineTo(-2 + swing, 0);
    ctx.moveTo(2, -h * 0.35); ctx.lineTo(2 - swing, 0);
    ctx.stroke();
    // 갈비
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, -h * 0.35); ctx.lineTo(0, -h * 0.72); ctx.stroke();
    for (let i = 0; i < 3; i++) {
        const y = -h * (0.45 + i * 0.08);
        ctx.beginPath(); ctx.ellipse(0, y, w * 0.3, 1.6, 0, 0, Math.PI * 2); ctx.stroke();
    }
    // 두개골
    ctx.beginPath(); ctx.arc(-1, -h * 0.84, w * 0.3, 0, Math.PI * 2);
    outlined(ctx, bone);
    ctx.fillStyle = '#1a1010';
    ctx.beginPath(); ctx.arc(-w * 0.15, -h * 0.85, 2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(w * 0.06, -h * 0.85, 2, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ff4040';
    ctx.fillRect(-w * 0.15 - 0.6, -h * 0.85 - 0.6, 1.2, 1.2);
    ctx.fillRect(-1.5 - w * 0.08, -h * 0.74, 5, 1);
    // 팔 / 무기
    const r = armRaise(a);
    ctx.save();
    ctx.translate(-2, -h * 0.66);
    if (e.type === 'skel_archer') {
        ctx.strokeStyle = bone; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(-w * 0.45, 2); ctx.stroke();
        ctx.strokeStyle = flashSafe(c, '#8a5a2a'); ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(-w * 0.2, 2, h * 0.32, Math.PI * 0.6, Math.PI * 1.4); ctx.stroke();
        ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.lineWidth = 0.8;
        const pull = a > 0 && a < 0.5 ? a * 8 : 0;
        ctx.beginPath(); ctx.moveTo(-w * 0.2 - h * 0.18, 2 - h * 0.27); ctx.lineTo(-w * 0.2 + pull, 2); ctx.lineTo(-w * 0.2 - h * 0.18, 2 + h * 0.27); ctx.stroke();
    } else {
        ctx.rotate(-0.3 + r * 2.2);
        ctx.strokeStyle = bone; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, h * 0.25); ctx.stroke();
        ctx.translate(0, h * 0.25);
        _weapon(ctx, 'dagger', h * 1.2, c);
    }
    ctx.restore();
}

function golem(ctx, e, t, c, a, walk) {
    const w = e.w, h = e.h;
    const ph = t * 6;
    const sway = walk ? Math.sin(ph) * 2 : 0;
    const glow = flashSafe(c, e.type === 'ice_golem' ? '#c8f6ff' : '#ffb020');
    const block = (x, y, bw, bh) => {
        roundRect(ctx, x, y, bw, bh, 3);
        outlined(ctx, shade(c, -0.25));
        ctx.strokeStyle = glow; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(x + bw * 0.2, y + bh * 0.3); ctx.lineTo(x + bw * 0.5, y + bh * 0.55); ctx.lineTo(x + bw * 0.4, y + bh * 0.85); ctx.stroke();
    };
    block(-w * 0.4 + sway, -h * 0.28, w * 0.32, h * 0.28);
    block(w * 0.08 - sway, -h * 0.28, w * 0.32, h * 0.28);
    block(-w / 2, -h * 0.75, w, h * 0.5);
    block(-w * 0.3, -h, w * 0.5, h * 0.3);
    eye(ctx, -w * 0.15, -h * 0.86, 2.2, glow);
    const r = armRaise(a);
    ctx.save();
    ctx.translate(-w * 0.45, -h * 0.65);
    ctx.rotate(-0.2 + r * 1.8);
    block(-w * 0.15, 0, w * 0.3, h * 0.38);
    ctx.restore();
}

function caster(ctx, e, t, c, a) {
    const w = e.w, h = e.h;
    const fl = Math.sin(t * 3) * 1.5;
    const lich = e.type === 'lich';
    const glow = lich ? '#60ffb0' : '#ffb030';
    // 로브
    ctx.beginPath();
    ctx.moveTo(-w * 0.5, 0);
    ctx.lineTo(-w * 0.25, -h * 0.75);
    ctx.lineTo(w * 0.25, -h * 0.75);
    ctx.lineTo(w * 0.55 + fl, 0);
    ctx.quadraticCurveTo(0, -4 + fl, -w * 0.5, 0);
    const g = ctx.createLinearGradient(0, -h, 0, 0);
    g.addColorStop(0, shade(c, 0.1)); g.addColorStop(1, shade(c, -0.4));
    outlined(ctx, g);
    // 후드
    ctx.beginPath(); ctx.arc(0, -h * 0.8, w * 0.32, 0, Math.PI * 2);
    outlined(ctx, shade(c, -0.15));
    ctx.fillStyle = '#0a0410';
    ctx.beginPath(); ctx.arc(-w * 0.07, -h * 0.78, w * 0.22, 0, Math.PI * 2); ctx.fill();
    eye(ctx, -w * 0.16, -h * 0.8, 1.6, glow);
    eye(ctx, -w * 0.0, -h * 0.8, 1.6, glow);
    if (lich) {
        ctx.fillStyle = '#f0c040';
        ctx.beginPath(); ctx.moveTo(-w * 0.3, -h * 0.98);
        for (let i = 0; i <= 4; i++) ctx.lineTo(-w * 0.3 + i * w * 0.15, -h * (i % 2 ? 1.02 : 1.12));
        ctx.lineTo(w * 0.3, -h * 0.98); ctx.fill();
    }
    // 지팡이
    const r = armRaise(a);
    ctx.save();
    ctx.translate(-w * 0.4, -h * 0.5);
    ctx.rotate(-0.15 + r * 0.6);
    ctx.strokeStyle = '#5a3a20'; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(0, h * 0.5); ctx.lineTo(0, -h * 0.45); ctx.stroke();
    ctx.fillStyle = glow;
    ctx.shadowColor = glow; ctx.shadowBlur = 10 + Math.sin(t * 8) * 4 + r * 10;
    ctx.beginPath(); ctx.arc(0, -h * 0.5, 4 + r * 2, 0, Math.PI * 2); ctx.fill();
    ctx.shadowBlur = 0;
    ctx.restore();
}

function dragon(ctx, e, t, c, a, walk) {
    const w = e.w, h = e.h;
    const flap = Math.sin(t * 5);
    const ph = t * 6;
    const r = armRaise(a);
    // 날개 (뒤)
    ctx.beginPath();
    ctx.moveTo(w * 0.05, -h * 0.65);
    ctx.lineTo(w * 0.35, -h * (1.35 + flap * 0.2));
    ctx.lineTo(w * 0.65, -h * (1.1 + flap * 0.15));
    ctx.lineTo(w * 0.45, -h * 0.6);
    ctx.closePath();
    outlined(ctx, shade(c, -0.3));
    // 꼬리
    ctx.strokeStyle = shade(c, -0.1);
    ctx.lineWidth = 7; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(w * 0.3, -h * 0.35); ctx.quadraticCurveTo(w * 0.7, -h * 0.1, w * 0.62, -h * (0.55 + Math.sin(t * 3) * 0.1)); ctx.stroke();
    // 다리
    const sw = walk ? Math.sin(ph) * 4 : 0;
    for (const [lx, s] of [[-w * 0.2, sw], [w * 0.15, -sw]]) {
        roundRect(ctx, lx + s - 5, -h * 0.3, 10, h * 0.3, 3); outlined(ctx, shade(c, -0.3));
    }
    // 몸
    ctx.beginPath(); ctx.ellipse(0, -h * 0.45, w * 0.4, h * 0.28, 0, 0, Math.PI * 2);
    outlined(ctx, c);
    ctx.fillStyle = flashSafe(c, '#e8b860');
    ctx.beginPath(); ctx.ellipse(-w * 0.12, -h * 0.35, w * 0.2, h * 0.14, 0, 0, Math.PI * 2); ctx.fill();
    // 목 + 머리
    const nx = -w * 0.42 - r * w * 0.12, ny = -h * 0.95 + r * h * 0.2;
    ctx.strokeStyle = c; ctx.lineWidth = 11;
    ctx.beginPath(); ctx.moveTo(-w * 0.2, -h * 0.55); ctx.quadraticCurveTo(-w * 0.32, -h * 0.9, nx, ny); ctx.stroke();
    ctx.save();
    ctx.translate(nx, ny);
    ctx.rotate(r * 0.3);
    ctx.beginPath(); ctx.ellipse(-4, 0, 11, 7, 0, 0, Math.PI * 2); outlined(ctx, c);
    ctx.fillStyle = flashSafe(c, '#f0e0c0');
    ctx.beginPath(); ctx.moveTo(2, -5); ctx.lineTo(10, -14); ctx.lineTo(6, -4); ctx.fill();
    eye(ctx, -6, -2, 2, '#ffe040');
    if (a > 0.45 && a < 0.8) {
        ctx.fillStyle = 'rgba(160,255,80,0.8)';
        ctx.beginPath(); ctx.moveTo(-14, 2); ctx.lineTo(-40, -6); ctx.lineTo(-40, 12); ctx.fill();
    }
    ctx.restore();
}

function lord(ctx, e, t, c, a) {
    const w = e.w, h = e.h;
    const fl = Math.sin(t * 2.5) * 3;
    const r = armRaise(a);
    // 망토
    ctx.beginPath();
    ctx.moveTo(-w * 0.25, -h * 0.8);
    ctx.quadraticCurveTo(w * 0.5, -h * 0.6, w * 0.55 + fl, 0);
    ctx.lineTo(-w * 0.1, 0);
    ctx.closePath();
    outlined(ctx, flashSafe(c, '#200840'));
    // 다리
    roundRect(ctx, -w * 0.25, -h * 0.3, w * 0.2, h * 0.3, 3); outlined(ctx, shade(c, -0.4));
    roundRect(ctx, w * 0.02, -h * 0.3, w * 0.2, h * 0.3, 3); outlined(ctx, shade(c, -0.4));
    // 갑옷 몸통
    roundRect(ctx, -w * 0.32, -h * 0.75, w * 0.6, h * 0.48, 8);
    const g = ctx.createLinearGradient(-w * 0.3, 0, w * 0.3, 0);
    g.addColorStop(0, shade(c, 0.2)); g.addColorStop(1, shade(c, -0.3));
    outlined(ctx, g);
    ctx.strokeStyle = flashSafe(c, '#c060ff');
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(-w * 0.15, -h * 0.68); ctx.lineTo(-w * 0.02, -h * 0.5); ctx.lineTo(w * 0.1, -h * 0.68); ctx.stroke();
    // 투구 + 뿔
    ctx.fillStyle = flashSafe(c, '#d8d0e8');
    for (const s of [-1, 1]) {
        ctx.beginPath();
        ctx.moveTo(s * w * 0.12 - w * 0.04, -h * 0.9);
        ctx.quadraticCurveTo(s * w * 0.35, -h * 1.0, s * w * 0.3, -h * 1.18);
        ctx.lineTo(s * w * 0.06 - w * 0.04, -h * 0.95);
        ctx.fill();
    }
    ctx.beginPath(); ctx.arc(-w * 0.04, -h * 0.85, w * 0.17, 0, Math.PI * 2);
    outlined(ctx, shade(c, -0.1));
    eye(ctx, -w * 0.12, -h * 0.86, 2, '#ff40ff');
    eye(ctx, -w * 0.01, -h * 0.86, 2, '#ff40ff');
    // 대검
    ctx.save();
    ctx.translate(-w * 0.32, -h * 0.6);
    ctx.rotate(-0.4 + r * 2.4);
    ctx.fillStyle = '#e0b040'; ctx.fillRect(-5, h * 0.18, 10, 3);
    ctx.beginPath(); ctx.moveTo(-3, h * 0.18); ctx.lineTo(-3, -h * 0.45); ctx.lineTo(0, -h * 0.55); ctx.lineTo(3, -h * 0.45); ctx.lineTo(3, h * 0.18); ctx.closePath();
    ctx.shadowColor = '#a040ff'; ctx.shadowBlur = 8;
    outlined(ctx, flashSafe(c, '#3a2060'), '#c080ff', 1);
    ctx.shadowBlur = 0;
    ctx.restore();
}

function wolf(ctx, e, t, c, a, walk) {
    const w = e.w, h = e.h;
    const ph = t * 14;
    const gait = walk ? Math.sin(ph) : 0;
    const r = armRaise(a);
    const dark = shade(c, -0.35);
    // 다리 4개 (대각선끼리 같이 움직임)
    for (const [lx, s] of [[-w * 0.3, gait], [-w * 0.15, -gait], [w * 0.2, -gait], [w * 0.35, gait]]) {
        roundRect(ctx, lx + s * 3 - 2, -h * 0.5, 4, h * 0.5, 2);
        outlined(ctx, dark);
    }
    // 꼬리
    ctx.strokeStyle = c;
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(w * 0.4, -h * 0.75);
    ctx.quadraticCurveTo(w * 0.65, -h * (0.9 + Math.sin(t * 6) * 0.15), w * 0.6, -h * 1.15);
    ctx.stroke();
    // 몸통
    ctx.beginPath(); ctx.ellipse(0, -h * 0.68, w * 0.45, h * 0.32, 0, 0, Math.PI * 2);
    const g = ctx.createLinearGradient(0, -h, 0, -h * 0.35);
    g.addColorStop(0, shade(c, 0.2)); g.addColorStop(1, shade(c, -0.2));
    outlined(ctx, g);
    // 머리 (공격 시 앞으로 물어뜯음)
    ctx.save();
    ctx.translate(-w * 0.42 - r * w * 0.15, -h * 0.95 + r * h * 0.15);
    ctx.beginPath(); ctx.ellipse(0, 0, w * 0.2, h * 0.28, 0, 0, Math.PI * 2);
    outlined(ctx, c);
    // 주둥이
    ctx.beginPath(); ctx.ellipse(-w * 0.18, h * 0.08, w * 0.14, h * 0.13, 0, 0, Math.PI * 2);
    outlined(ctx, shade(c, 0.15));
    ctx.fillStyle = '#202830';
    ctx.beginPath(); ctx.arc(-w * 0.3, h * 0.03, 1.6, 0, Math.PI * 2); ctx.fill();
    // 귀
    ctx.beginPath(); ctx.moveTo(0, -h * 0.2); ctx.lineTo(w * 0.06, -h * 0.55); ctx.lineTo(w * 0.13, -h * 0.15); ctx.closePath();
    outlined(ctx, dark);
    eye(ctx, -w * 0.08, -h * 0.05, 1.8, '#60d0ff');
    if (a > 0.45 && a < 0.7) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath(); ctx.moveTo(-w * 0.28, h * 0.14); ctx.lineTo(-w * 0.25, h * 0.24); ctx.lineTo(-w * 0.22, h * 0.14); ctx.fill();
    }
    ctx.restore();
}
