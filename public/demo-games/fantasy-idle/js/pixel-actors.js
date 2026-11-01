// 픽셀아트 캐릭터 그리기: 기사와 적 (발 중앙 0,0 기준)
import { bake, drawPix, drawPixRot } from './pixel.js';
import * as S from './sprites.js';
import { shade } from './draw.js';

export const KNIGHT_PX = 2;      // 기사 픽셀 한 칸 (월드 단위)
const ENEMY_PX = 1.5;            // 적 기본 픽셀 한 칸

const KNIGHT_ARM = `
.kk.
kbBk
kbBk
kbBk
kBBk`;

// 바닥 그림자 (납작한 픽셀 타원)
export function pixShadow(ctx, x, y, w, alpha = 0.3) {
    const u = 2;
    w = Math.max(8, Math.round(w / u) * u);
    ctx.fillStyle = `rgba(10,8,24,${alpha})`;
    ctx.fillRect(Math.round(x - w / 2 + u), Math.round(y - u), w - u * 2, u * 2);
    ctx.fillRect(Math.round(x - w / 2), Math.round(y - u / 2), w, u);
}

const snap = (v, u) => Math.round(v / u) * u;

// ── 기사 ───────────────────────────────────────────
// o: { t, walk, armA, swordA, lean, lunge, hurt, flash, dead, blink }
export function drawKnightPix(ctx, x, footY, o = {}) {
    const P = KNIGHT_PX;
    const t = o.t ?? 0;
    const walk = !!o.walk;
    const ph = t * 11;
    const bob = walk ? -snap(Math.abs(Math.sin(ph)) * 2.5, P) : (Math.sin(t * 3) > 0.6 ? -P : 0);
    const flash = !!o.flash;
    const dead = o.dead ?? 0;
    const hurt = o.hurt ?? 0;

    pixShadow(ctx, x + (o.lunge ?? 0) * 0.5, footY, 30 - dead * 4);

    ctx.save();
    if (o.blink) ctx.globalAlpha *= 0.45;
    ctx.translate(x + (o.lunge ?? 0) - hurt * 4, footY);
    if (dead > 0) {
        const fall = Math.min(1, dead * 1.25);
        const e = 1 - Math.pow(1 - fall, 3);
        ctx.translate(-e * 6, -Math.sin(Math.min(1, dead) * Math.PI) * 6 * (1 - fall * 0.5));
        ctx.rotate(-e * Math.PI / 2);
    }
    ctx.rotate((o.lean ?? 0) - hurt * 0.15);

    const legKey = !walk ? 'stand' : (Math.sin(ph) > 0 ? 'walkA' : 'walkB');
    const legs = bake('kl_' + legKey, S.KNIGHT_LEGS[legKey]);
    const body = bake('k_body', S.KNIGHT_BODY);
    const shield = bake('k_shield', S.KNIGHT_SHIELD);
    drawPix(ctx, legs, -Math.floor(legs.w / 2) * P, -legs.h * P, P, { flash });
    ctx.translate(0, bob);
    const bx = -9 * P, by = -(legs.h + body.h - 1) * P;
    drawPix(ctx, body, bx, by, P, { flash });
    drawPix(ctx, shield, bx + 1 * P, by + 11 * P + (walk ? snap(Math.sin(ph) * 1, P) : 0), P, { flash });

    // 검 든 팔: 어깨에서 팔 → 건틀릿 → 검 (attackPose 각도 그대로 사용)
    const sx = bx + 12 * P, sy = by + 12 * P;
    const armA = o.armA ?? -0.3, swordA = o.swordA ?? 0.6;
    const arm = bake('k_arm', KNIGHT_ARM);
    const hx = sx - Math.sin(armA) * 9, hy = sy + Math.cos(armA) * 9;
    drawPixRot(ctx, arm, sx, sy, P, armA, 2, 0, { flash });
    const sword = bake('k_sword', S.SWORD);
    drawPixRot(ctx, sword, hx, hy, P, swordA - Math.PI / 2, S.SWORD_PIVOT[0], S.SWORD_PIVOT[1], { flash });
    const gl = bake('k_gauntlet', S.GAUNTLET);
    drawPix(ctx, gl, hx - 2.5 * P, hy - 2 * P, P, { flash });
    ctx.restore();
}

// ── 적 ─────────────────────────────────────────────
const ART = {
    slime: 'slime', poison_slime: 'slime',
    goblin: 'brute', gob_chief: 'brute', orc: 'brute', orc_warrior: 'brute', troll: 'brute', forest_giant: 'brute',
    yeti: 'brute', frost_giant: 'brute',
    bat: 'bat', fire_bat: 'bat', void_bat: 'bat',
    spirit: 'spirit', ice_spirit: 'spirit', ice_wraith: 'spirit', wraith: 'spirit',
    mushroom: 'mushroom', scorpion: 'scorpion',
    skeleton: 'skeleton', skel_archer: 'skeleton',
    lava_golem: 'golem', ice_golem: 'golem',
    fire_mage: 'caster', lich: 'caster',
    ancient_dragon: 'dragon',
    shadow_lord: 'lord', shadow_knight: 'darkknight', death_knight: 'darkknight',
    frost_wolf: 'wolf',
};

// big: 어깨가 넓은 큰 몸 사용
const BRUTE = {
    goblin:       { parts: ['ears'], weapon: 'dagger' },
    gob_chief:    { parts: ['ears', 'crown'], weapon: 'club' },
    orc:          { parts: ['tusks'], weapon: 'axe', big: true },
    orc_warrior:  { parts: ['tusks', 'helm'], weapon: 'axe', glow: '#ff4030', big: true },
    troll:        { parts: ['tusks'], weapon: 'club', big: true },
    forest_giant: { parts: ['moss'], weapon: 'log', big: true },
    yeti:         { parts: ['horns'], weapon: 'club', big: true },
    frost_giant:  { parts: ['horns', 'helm'], weapon: 'log', glow: '#9fe6ff', big: true },
};
const DARK_KNIGHTS = {
    shadow_knight: { parts: [] },
    death_knight:  { parts: ['horns', 'spikes', 'skull'] },
};
const SPIRIT_CREST = { spirit: 'leaf', ice_spirit: 'crystal', ice_wraith: 'crystal' };

const EYE = {
    bat: '#ff3030', fire_bat: '#ffe040', void_bat: '#d07aff',
    spirit: '#1a3a2a', ice_spirit: '#1a3050', ice_wraith: '#1a3050', wraith: '#ff4060',
    scorpion: '#1a1c2c', skeleton: '#ff3a4a', skel_archer: '#ff3a4a',
    lava_golem: '#ffb020', ice_golem: '#c8f6ff', fire_mage: '#ffb030', lich: '#60ffb0',
    ancient_dragon: '#ffe040', shadow_lord: '#ff40ff', shadow_knight: '#ff3a4a', death_knight: '#ff8a2a',
    frost_wolf: '#60d0ff',
};

function palette(e) {
    const c = e.color;
    const b = BRUTE[e.type];
    const pal = { c, C: shade(c, 0.35), x: shade(c, -0.42), e: b ? (b.glow ?? shade(c, -0.6)) : (EYE[e.type] ?? '#1a1c2c') };
    if (e.type === 'lich') pal.v = '#e8e2c8';   // 리치는 후드 속 얼굴이 해골
    return pal;
}

// 적 크기(e.h)에 맞춰 픽셀 크기를 0.5배 단위로 키움 (보스는 굵은 픽셀)
function pxFor(e, rows) {
    const k = Math.max(1, Math.round((e.h * 1.25) / (rows * ENEMY_PX) * 2) / 2);
    return ENEMY_PX * k;
}

// 공격 팔 들어올림 정도 (0 → 1 → 내려침 -0.6)
function armRaise(a) {
    if (a <= 0) return 0;
    if (a < 0.5) return a / 0.5;
    if (a < 0.62) return 1 - (a - 0.5) / 0.12 * 1.6;
    return -0.6 * (1 - (a - 0.62) / 0.38);
}
const swingAngle = r => r >= 0 ? -0.3 + r * 1.2 : -0.3 + r * 2.3;

export function drawEnemyPix(ctx, e, t, flash, a, walk) {
    const kind = ART[e.type] ?? 'brute';
    const pal = palette(e);
    const key = e.type;
    const r = armRaise(a);
    const o = { flash };
    const frame2 = (period) => Math.floor(t * period) % 2;
    const sk = (name, art) => bake(`${key}_${name}`, art, pal);

    if (kind === 'slime') {
        const blink = (t + e.id * 0.7) % 3.2 < 0.14;
        const s = blink ? sk('slime_blink', S.SLIME_BLINK) : sk('slime', S.SLIME);
        const P = pxFor(e, s.h);
        drawPix(ctx, s, -s.w * P / 2, -s.h * P, P, o);
        if (e.type === 'poison_slime') {
            ctx.fillStyle = '#c0ff60';
            for (let i = 0; i < 3; i++) {
                const by = -((t * 12 + i * 7) % 20) - s.h * P * 0.9;
                ctx.fillRect(snap(-4 + i * 4, P), snap(by, P), P, P);
            }
        }
        return;
    }
    if (kind === 'brute') {
        const b = BRUTE[e.type] ?? BRUTE.goblin;
        const lk = walk && frame2(8) ? 'walk' : 'stand';
        const legs = sk('legs_' + lk, (b.big ? S.BRUTE_BIG_LEGS : S.BRUTE_LEGS)[lk]);
        const body = sk('body', b.big ? S.BRUTE_BIG_BODY : S.BRUTE_BODY);
        const P = pxFor(e, body.h + legs.h);
        const bx = -body.w * P / 2, by = -(body.h + legs.h) * P;
        const bob = walk ? (frame2(8) ? -P : 0) : (Math.sin(t * 2.5) > 0.5 ? -P : 0);
        drawPix(ctx, legs, -legs.w * P / 2, -legs.h * P, P, o);
        drawPix(ctx, body, bx, by + bob, P, o);
        for (const part of b.parts) {
            const pt = S.BRUTE_PARTS[part];
            const sh = b.big ? S.BRUTE_BIG_SHIFT[part] : [0, 0];
            drawPix(ctx, sk('part_' + part, pt.art), bx + (pt.at[0] + sh[0]) * P, by + bob + (pt.at[1] + sh[1]) * P, P, o);
        }
        const w = S.WEAPONS[b.weapon];
        drawPixRot(ctx, sk('w_' + b.weapon, w.art), bx + 1.5 * P, by + bob + (b.big ? 9.5 : 11) * P, P, swingAngle(r), w.pivot[0], w.pivot[1], o);
        return;
    }
    if (kind === 'bat') {
        const s = sk('bat' + (Math.sin(t * 22) > 0 ? 0 : 1), S.BAT[Math.sin(t * 22) > 0 ? 0 : 1]);
        const P = pxFor(e, s.h * 1.4);
        drawPix(ctx, s, -s.w * P / 2, -s.h * P, P, o);
        if (e.type === 'fire_bat') {
            ctx.fillStyle = Math.sin(t * 15) > 0 ? '#ffe14a' : '#ff9a2e';
            ctx.fillRect(snap(s.w * P * 0.25, P), snap(-s.h * P * 0.5, P), P * 2, P * 2);
        }
        return;
    }
    if (kind === 'spirit') {
        const s = sk('spirit' + frame2(3), S.SPIRIT[frame2(3)]);
        const P = pxFor(e, s.h);
        ctx.save();
        ctx.globalAlpha *= e.type === 'wraith' || e.type === 'ice_wraith' ? 0.8 : 0.92;
        const sy = -s.h * P - snap(Math.sin(t * 4) * 2, P);
        drawPix(ctx, s, -s.w * P / 2, sy, P, o);
        const crest = SPIRIT_CREST[e.type];
        if (crest) {
            const pt = S.SPIRIT_PARTS[crest];
            drawPix(ctx, sk('crest', pt.art), -s.w * P / 2 + pt.at[0] * P, sy + pt.at[1] * P, P, o);
        }
        ctx.restore();
        return;
    }
    if (kind === 'mushroom') {
        const s = sk('mush' + (walk ? frame2(8) : 0), S.MUSHROOM[walk ? frame2(8) : 0]);
        const P = pxFor(e, s.h);
        drawPix(ctx, s, -s.w * P / 2, -s.h * P + (walk && frame2(8) ? -P : 0), P, o);
        return;
    }
    if (kind === 'scorpion') {
        const f = a > 0.3 && a < 0.75 ? 1 : 0;
        const s = sk('scorp' + f, S.SCORPION[f]);
        const P = pxFor(e, s.h * 0.75);
        drawPix(ctx, s, -s.w * P / 2, -s.h * P + (walk && frame2(12) ? -P : 0), P, o);
        return;
    }
    if (kind === 'skeleton') {
        const f = walk ? frame2(8) : 0;
        const s = sk('skel' + f, S.SKELETON[f]);
        const P = pxFor(e, s.h);
        const bx = -s.w * P / 2, by = -s.h * P;
        drawPix(ctx, s, bx, by, P, o);
        if (e.type === 'skel_archer') {
            const w = S.WEAPONS.bow;
            drawPixRot(ctx, sk('bow', w.art), bx + 1 * P, by + 11 * P, P, 0, w.pivot[0] + 3, w.pivot[1] - 2, o);
        } else {
            const w = S.WEAPONS.dagger;
            drawPixRot(ctx, sk('dagger', w.art), bx + 1.5 * P, by + 12 * P, P, swingAngle(r), w.pivot[0], w.pivot[1], o);
        }
        return;
    }
    if (kind === 'golem') {
        const f = walk ? frame2(5) : 0;
        const s = sk('golem' + f, S.GOLEM[f]);
        const P = pxFor(e, s.h);
        const bx = -s.w * P / 2, by = -s.h * P;
        drawPix(ctx, s, bx, by, P, o);
        drawPixRot(ctx, sk('garm', S.GOLEM_ARM.art), bx + 1.5 * P, by + 6 * P, P, -0.2 + r * 1.8, S.GOLEM_ARM.pivot[0], S.GOLEM_ARM.pivot[1], o);
        return;
    }
    if (kind === 'caster') {
        const s = sk('caster' + frame2(2), S.CASTER[frame2(2)]);
        const P = pxFor(e, s.h);
        const bx = -s.w * P / 2, by = -s.h * P - snap(Math.sin(t * 3) * 1.5, P);
        drawPix(ctx, s, bx, by, P, o);
        if (e.type === 'lich') drawPix(ctx, sk('crown', S.CASTER_CROWN.art), bx + S.CASTER_CROWN.at[0] * P, by + S.CASTER_CROWN.at[1] * P, P, o);
        const w = S.WEAPONS.staff;
        const staffPal = e.type === 'lich' ? { ...pal, F: '#c0ffe0', f: '#60ffb0' } : pal;
        drawPixRot(ctx, bake(`${key}_staff`, w.art, staffPal), bx + 0.5 * P, by + 12 * P, P, -0.15 + r * 0.6, w.pivot[0], w.pivot[1], o);
        return;
    }
    if (kind === 'dragon') {
        const f = a > 0.3 && a < 0.85 ? 2 : Math.sin(t * 5) > 0 ? 0 : 1;
        const s = sk('dragon' + f, S.DRAGON[f]);
        const P = pxFor(e, s.h * 0.65);
        const bx = -s.w * P / 2, by = -s.h * P;
        drawPix(ctx, s, bx, by, P, o);
        if (a > 0.45 && a < 0.8) {
            // 독 브레스 (픽셀 원뿔, 바깥쪽이 넓고 옅음)
            const [mx, my] = S.DRAGON_MOUTH[f];
            for (let i = 0; i < 9; i++) {
                const hgt = (i * 0.8 + 1) * P;
                ctx.fillStyle = i % 3 === 0 ? '#e0ff90' : '#a0ff50';
                ctx.fillRect(bx + mx * P - (i + 1) * P * 2, by + my * P - hgt / 2, P * 2, hgt);
            }
        }
        return;
    }
    if (kind === 'lord') {
        const s = sk('lord' + frame2(2), S.LORD[frame2(2)]);
        const P = pxFor(e, s.h);
        const bx = -s.w * P / 2, by = -s.h * P;
        drawPix(ctx, s, bx, by, P, o);
        const w = S.WEAPONS.greatsword;
        drawPixRot(ctx, sk('gsword', w.art), bx + 1 * P, by + 11 * P, P, -0.4 + Math.max(r, -0.6) * 2.2, w.pivot[0], w.pivot[1], o);
        return;
    }
    if (kind === 'darkknight') {
        const d = DARK_KNIGHTS[e.type] ?? DARK_KNIGHTS.shadow_knight;
        const f = walk ? frame2(8) : 0;
        const s = sk('dk' + f, S.DARK_KNIGHT[f]);
        const P = pxFor(e, s.h);
        const bx = -s.w * P / 2, by = -s.h * P;
        drawPix(ctx, s, bx, by, P, o);
        for (const part of d.parts) {
            const pt = S.DARK_KNIGHT_PARTS[part];
            drawPix(ctx, sk('dkp_' + part, pt.art), bx + pt.at[0] * P, by + pt.at[1] * P, P, o);
        }
        const w = S.WEAPONS.blade;
        drawPixRot(ctx, sk('blade', w.art), bx + 1.5 * P, by + 8.5 * P, P, swingAngle(r), w.pivot[0], w.pivot[1], o);
        return;
    }
    if (kind === 'wolf') {
        const f = walk ? frame2(10) : 0;
        const s = sk('wolf' + f, S.WOLF[f]);
        const P = pxFor(e, s.h * 0.8);
        drawPix(ctx, s, -s.w * P / 2 - snap(r < 0 ? -r * 6 : 0, P), -s.h * P, P, o);
    }
}
