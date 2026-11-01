// HUD 렌더링 (픽셀 창 스타일): HP·능력치, 스테이지 진행, 재화, 처치 수, 유물, 콤보, 보스 HP
import { W, H, VIEW_X } from './constants.js';
import { state } from './state.js';
import { drawArtifactIcon } from './artifact-ui.js';
import { STAGE_LEN, regionOf, stageLabel, stageBossKind } from './stages.js';
import { fx } from './fx.js';
import { pixWindow, pixText } from './pixel.js';
import { drawIcon } from './icons.js';

let hpTrail = 1;      // 피해 잔상 비율
let lastHud = 0;

// 칸 단위 게이지: ratio까지 채우고 trail까지 밝은 잔상
export function segBar(ctx, x, y, n, segW, h, ratio, trail, col, colHi, empty = '#1a1c2c') {
    for (let i = 0; i < n; i++) {
        const sx = x + i * (segW + 2);
        const p = (i + 1) / n;
        let c = empty;
        if (p <= ratio + 1e-6 || (i === 0 && ratio > 0)) c = col;
        else if (p <= trail + 1e-6) c = '#f4f4f4';
        ctx.fillStyle = c;
        ctx.fillRect(sx, y, segW, h);
        if (c === col) {
            ctx.fillStyle = colHi;
            ctx.fillRect(sx, y, segW, 2);
        }
    }
}

export function renderHUD(ctx, player) {
    const now = performance.now() / 1000;
    const dt = Math.min(0.05, now - lastHud);
    lastHud = now;

    // ── 좌상단: HP + 능력치 ───────────────────────────
    const hpRatio = Math.max(0, player.hp / player.maxHp);
    if (hpTrail < hpRatio) hpTrail = hpRatio;
    else hpTrail += (hpRatio - hpTrail) * Math.min(1, dt * 3);
    const low = hpRatio <= 0.25 && hpRatio > 0;
    pixWindow(ctx, 6, 6, 262, 66, low && Math.sin(now * 8) > 0 ? { border: '#ef7d57' } : {});
    const beat = low ? Math.max(0, Math.sin(now * 8)) * 2 : 0;
    drawIcon(ctx, 'heart', 16 - beat / 2, 15 - beat / 2, 20 + beat);
    const hpCol = hpRatio > 0.5 ? '#38b764' : hpRatio > 0.25 ? '#ffcd75' : '#b13e53';
    const hpHi = hpRatio > 0.5 ? '#a7f070' : hpRatio > 0.25 ? '#fff3b0' : '#ef7d57';
    segBar(ctx, 42, 17, 20, 9, 14, hpRatio, hpTrail, hpCol, hpHi);
    pixText(ctx, `${Math.ceil(player.hp)}/${player.maxHp}`, 258, 46, 11, '#f4f4f4', 'right');
    const stats = [['atk', player.atk], ['def', player.def], ['spd', player.atkSpd.toFixed(1)], ['steal', `${Math.round(player.lifesteal * 100)}%`]];
    stats.forEach(([ic, v], i) => {
        const x = 16 + i * 52;
        drawIcon(ctx, ic, x, 44, 16);
        pixText(ctx, `${v}`, x + 20, 58, 11);
    });

    // ── 상단 가운데: 스테이지 ─────────────────────────
    _renderStage(ctx);

    // ── 우상단: 골드 + 처치 ───────────────────────────
    pixWindow(ctx, 618, 6, 176, 34);
    const bump = fx.goldBump * 3;
    drawIcon(ctx, 'coin', 628 - bump / 2, 13 - bump / 2, 20 + bump);
    pixText(ctx, `${state.gold.toLocaleString()} G`, 784, 29, 13, fx.goldBump > 0.5 ? '#fff3b0' : '#ffcd75', 'right');
    pixWindow(ctx, 690, 42, 104, 28);
    drawIcon(ctx, 'kill', 699, 48, 16);
    pixText(ctx, `${state.sessionKills}`, 784, 62, 12, '#f4f4f4', 'right');

    // ── 콤보 ───────────────────────────────────────────
    if (player.combo >= 3) {
        const p = Math.min(1, player.comboTimer / 2);
        ctx.globalAlpha = 0.4 + p * 0.6;
        const size = 16 + Math.min(10, Math.floor(player.combo / 3) * 2);
        pixText(ctx, `${player.combo} COMBO`, VIEW_X, 152, size, player.combo >= 20 ? '#ef7d57' : '#ffcd75', 'center', '#5d275d');
        ctx.globalAlpha = 1;
    }

    // ── 하단 좌측: 유물 ────────────────────────────────
    _renderArtifacts(ctx);
}

// 스테이지 표시 + 다음 관문까지 진행 칸
function _renderStage(ctx) {
    const kind = stageBossKind(state.stage);
    const x = 300, w = 220;
    pixWindow(ctx, x, 6, w, 52);
    pixText(ctx, `STAGE ${stageLabel(state.stage)}  ${regionOf(state.stage).name}`, x + w / 2, 27, 12, '#ffcd75', 'center');
    const p = Math.min(1, Math.max(0, state.distance / STAGE_LEN - state.stage));
    const n = 12;
    for (let i = 0; i < n; i++) {
        const done = (i + 1) / n <= p + 1e-6;
        const cur = !done && i / n <= p;
        ctx.fillStyle = done ? (kind ? '#b13e53' : '#38b764') : cur ? '#f4f4f4' : '#1a1c2c';
        ctx.fillRect(x + 16 + i * 13, 36, 10, 10);
        if (done) { ctx.fillStyle = kind ? '#ef7d57' : '#a7f070'; ctx.fillRect(x + 16 + i * 13, 36, 10, 3); }
    }
    drawIcon(ctx, kind === 'boss' ? 'boss' : kind === 'mini' ? 'mini' : 'flag', x + w - 42, 32, 18);
    const label = state.holding ? '보스와 대결 중!' : `${Math.floor(state.distance)} m`;
    pixText(ctx, label, x + w / 2, 72, 10, state.holding ? '#ef7d57' : '#c2d0dc', 'center');
}

function _renderArtifacts(ctx) {
    if (!state.artifacts.length) return;
    const size = 28, pad = 4, maxShow = 12;
    const n = Math.min(state.artifacts.length, maxShow);
    pixWindow(ctx, 6, H - size - 22, n * (size + pad) + 18, size + 18);
    state.artifacts.slice(0, maxShow).forEach((id, i) => {
        drawArtifactIcon(ctx, id, 15 + i * (size + pad), H - size - 13, size);
    });
}

// 보스 HP바 (상단 중앙 별도 표시)
export function renderBossHUD(ctx, boss) {
    if (!boss) return;
    const big = boss.rank === 'boss';
    const bw = 320, bx = (W - bw) / 2, by = 82;
    pixWindow(ctx, bx, by, bw, 44, { border: big ? '#ffcd75' : '#ef7d57' });
    drawIcon(ctx, big ? 'boss' : 'mini', bx + 12, by + 12, 20);
    pixText(ctx, boss.name, bx + 40, by + 23, 12, big ? '#ffcd75' : '#ef7d57');
    pixText(ctx, `${Math.ceil(Math.max(0, boss.hp))}/${boss.maxHp}`, bx + bw - 12, by + 23, 10, '#f4f4f4', 'right');
    const r = Math.max(0, boss.hp / boss.maxHp);
    segBar(ctx, bx + 40, by + 28, 26, 8, 8, r, Math.max(0, boss.hpTrail / boss.maxHp), '#b13e53', '#ef7d57');
}
