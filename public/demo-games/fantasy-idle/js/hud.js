// HUD 렌더링: HP바, 능력치, 재화, 유물 아이콘
import { W, H, C, VIEW_X } from './constants.js';
import { state } from './state.js';
import { ARTIFACT_DEFS } from './artifact-data.js';
import { STAGE_LEN, regionOf, stageLabel, stageBossKind } from './stages.js';
import { fx } from './fx.js';

let hpTrail = 1;      // 피해 잔상 비율
let lastHud = 0;

export function renderHUD(ctx, player) {
    const now = performance.now() / 1000;
    const dt = Math.min(0.05, now - lastHud);
    lastHud = now;

    // ── 상단 HUD 배경 ──────────────────────────────────
    const bgG = ctx.createLinearGradient(0, 0, 0, 54);
    bgG.addColorStop(0, 'rgba(8,8,24,0.9)');
    bgG.addColorStop(1, 'rgba(8,8,24,0.55)');
    ctx.fillStyle = bgG;
    ctx.fillRect(0, 0, W, 52);

    // HP 바 (피해 잔상 + 저체력 맥동)
    const hpBarW = 180;
    const hpRatio = Math.max(0, player.hp / player.maxHp);
    if (hpTrail < hpRatio) hpTrail = hpRatio;
    else hpTrail += (hpRatio - hpTrail) * Math.min(1, dt * 3);
    const low = hpRatio <= 0.25 && hpRatio > 0;
    ctx.save();
    if (low) {
        const k = 1 + Math.max(0, Math.sin(now * 8)) * 0.04;
        ctx.translate(8 + hpBarW / 2, 15);
        ctx.scale(k, k);
        ctx.translate(-(8 + hpBarW / 2), -15);
    }
    ctx.fillStyle = '#2a0c0c';
    ctx.beginPath(); ctx.roundRect(8, 8, hpBarW, 14, 4); ctx.fill();
    ctx.fillStyle = '#fff0c0';
    ctx.beginPath(); ctx.roundRect(8, 8, Math.max(0, hpBarW * hpTrail), 14, 4); ctx.fill();
    const hpG = ctx.createLinearGradient(0, 8, 0, 22);
    const hc = hpRatio > 0.5 ? ['#80f070', '#3a9a30'] : hpRatio > 0.25 ? ['#ffd060', '#c08010'] : ['#ff6050', '#a01810'];
    hpG.addColorStop(0, hc[0]); hpG.addColorStop(1, hc[1]);
    ctx.fillStyle = player.hitFlash > 0 ? '#ffffff' : hpG;
    ctx.beginPath(); ctx.roundRect(8, 8, Math.max(0, hpBarW * hpRatio), 14, 4); ctx.fill();
    ctx.strokeStyle = low ? `rgba(255,80,80,${0.6 + Math.sin(now * 8) * 0.4})` : '#606878';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.roundRect(8, 8, hpBarW, 14, 4); ctx.stroke();
    ctx.fillStyle = C.text;
    ctx.font = 'bold 10px monospace';
    ctx.fillText(`HP ${Math.ceil(player.hp)} / ${player.maxHp}`, 14, 19);
    ctx.restore();

    // 능력치
    ctx.fillStyle = C.text;
    ctx.font = '11px monospace';
    ctx.fillText(`⚔ ${player.atk}`, 200, 18);
    ctx.fillText(`🛡 ${player.def}`, 260, 18);
    ctx.fillText(`⚡ ${player.atkSpd.toFixed(1)}`, 320, 18);

    // 재화 (코인이 도착하면 튕김)
    const bump = 1 + fx.goldBump * 0.35;
    ctx.save();
    ctx.translate(8, 40);
    ctx.scale(bump, bump);
    ctx.fillStyle = fx.goldBump > 0.5 ? '#fff4a0' : C.gold;
    ctx.font = 'bold 12px monospace';
    ctx.fillText(`💰 ${state.gold}G`, 0, 4);
    ctx.restore();

    // 콤보
    if (player.combo >= 3) {
        const p = Math.min(1, player.comboTimer / 2);
        ctx.fillStyle = `rgba(255,${200 - Math.min(150, player.combo * 5)},80,${0.4 + p * 0.6})`;
        ctx.font = `bold ${14 + Math.min(10, player.combo / 3)}px monospace`;
        ctx.textAlign = 'center';
        ctx.fillText(`${player.combo} COMBO`, VIEW_X, 120);
        ctx.textAlign = 'left';
    }

    _renderStage(ctx);

    // 처치 수
    ctx.fillStyle = '#c0a0a0';
    ctx.font = '10px monospace';
    ctx.fillText(`💀 ${state.sessionKills}`, W - 80, 20);

    // 유물 아이콘 (하단 좌측)
    _renderArtifacts(ctx);
}

// 스테이지 표시 + 다음 관문까지 진행 바
function _renderStage(ctx) {
    const cx = W / 2 + 40;
    const kind = stageBossKind(state.stage);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#e8e8f0';
    ctx.font = 'bold 13px monospace';
    ctx.fillText(`STAGE ${stageLabel(state.stage)}  ${regionOf(state.stage).name}`, cx, 19);

    const bw = 170, bx = cx - bw / 2, by = 27;
    const p = Math.min(1, Math.max(0, state.distance / STAGE_LEN - state.stage));
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath(); ctx.roundRect(bx, by, bw, 7, 3); ctx.fill();
    const g = ctx.createLinearGradient(bx, 0, bx + bw, 0);
    g.addColorStop(0, '#4080e8'); g.addColorStop(1, kind ? '#e84040' : '#40c8c8');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.roundRect(bx, by, Math.max(3, bw * p), 7, 3); ctx.fill();
    // 끝 표시: 보스 관문이면 해골, 아니면 깃발
    ctx.font = '12px "Segoe UI Emoji","Apple Color Emoji",sans-serif';
    ctx.fillText(kind === 'boss' ? '☠️' : kind === 'mini' ? '💀' : '🚩', bx + bw + 10, by + 8);
    ctx.fillStyle = '#8090a8';
    ctx.font = '9px monospace';
    ctx.fillText(state.holding ? '보스와 대결 중!' : `${Math.floor(state.distance)} m`, cx, by + 18);
    ctx.textAlign = 'left';
}

function _renderArtifacts(ctx) {
    if (!state.artifacts.length) return;
    const iconSize = 24;
    const pad = 4;
    const baseY = H - iconSize - 8;
    const baseX = 8;
    const maxShow = 16;

    ctx.fillStyle = 'rgba(0,0,0,0.6)';
    const rowW = Math.min(state.artifacts.length, maxShow) * (iconSize + pad);
    ctx.fillRect(baseX - 2, baseY - 2, rowW + 4, iconSize + 4);

    state.artifacts.slice(0, maxShow).forEach((id, i) => {
        const def = ARTIFACT_DEFS[id];
        if (!def) return;
        const x = baseX + i * (iconSize + pad);
        // 등급별 배경
        const rarityColors = {
            common: '#404050', rare: '#204060',
            legend: '#402800', myth: '#300040',
        };
        ctx.fillStyle = rarityColors[def.rarity] ?? '#303040';
        ctx.fillRect(x, baseY, iconSize, iconSize);
        ctx.strokeStyle = def.rarity === 'myth' ? '#c080ff'
            : def.rarity === 'legend' ? '#ffa040'
            : def.rarity === 'rare' ? '#4080ff' : '#606878';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, baseY, iconSize, iconSize);
        ctx.font = '14px serif';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#fff';
        ctx.fillText(def.icon, x + iconSize / 2, baseY + 17);
    });
    ctx.textAlign = 'left';
}

// 보스 HP바 (상단 중앙 별도 표시)
export function renderBossHUD(ctx, boss) {
    if (!boss) return;
    const bw = 300;
    const bx = (W - bw) / 2;
    const by = 58;
    ctx.fillStyle = 'rgba(8,8,24,0.85)';
    ctx.fillRect(bx - 4, by - 4, bw + 8, 30);
    ctx.fillStyle = '#401010';
    ctx.fillRect(bx, by, bw, 14);
    const r = Math.max(0, boss.hp / boss.maxHp);
    ctx.fillStyle = boss.rank === 'boss' ? '#cc2020' : '#cc6020';
    ctx.fillRect(bx, by, Math.round(bw * r), 14);
    ctx.strokeStyle = boss.rank === 'boss' ? '#ffcc00' : '#ff8800';
    ctx.lineWidth = 1;
    ctx.strokeRect(bx, by, bw, 14);
    ctx.fillStyle = boss.rank === 'boss' ? C.gold : '#ffaa40';
    ctx.font = `bold 10px monospace`;
    ctx.textAlign = 'center';
    ctx.fillText(`${boss.name} ${Math.ceil(boss.hp)}/${boss.maxHp}`, W / 2, by + 11);
    ctx.textAlign = 'left';
}
