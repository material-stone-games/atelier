// 업그레이드 트리 UI: 그리드 기반 렌더링(배율 대응) + 클릭 구매 + 툴팁
import { W, H, C } from './constants.js';
import { state, savePersist } from './state.js';
import { UPGRADES, BRANCHES, canUnlock } from './upgrade-data.js';
import { spawnUiBurst } from './fx.js';
import { shade } from './draw.js';

const BASE_LEN = 68; // 기준 branchLen (전체 화면)
const CELL_SIZE = 52; // 그리드 셀 크기 (px)

let hoverId = null;
const pops = new Map();   // 노드 id → 구매 팝 시작 시각
const denies = new Map(); // 노드 id → 구매 실패 흔들림 시작 시각

export function setTreeHover(id) { hoverId = id; }

const nodeRadius = branchLen => Math.max(5, branchLen * 0.26);

// 노드 화면 좌표 계산 (gx, gy 그리드 기반)
export function nodePos(upgrade, cx, cy, branchLen) {
    const scale = branchLen / BASE_LEN;
    const c = CELL_SIZE * scale;
    return { x: cx + upgrade.gx * c, y: cy + upgrade.gy * c };
}

// 업그레이드 트리 전체 화면 렌더링
export function renderUpgradeTree(ctx, cx = W / 2, cy = H / 2, branchLen = BASE_LEN) {
    ctx.fillStyle = '#080818';
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = C.gold;
    ctx.font = 'bold 16px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('⚔ 업그레이드 트리', cx, 22);

    ctx.fillStyle = C.gold;
    ctx.font = '13px monospace';
    ctx.fillText(`💰 ${state.gold} G`, cx, 40);
    ctx.textAlign = 'left';

    _renderTreeContents(ctx, cx, cy, branchLen);

    // 닫기 버튼
    ctx.fillStyle = '#303048';
    ctx.fillRect(W - 80, H - 36, 70, 26);
    ctx.strokeStyle = '#6060a0';
    ctx.lineWidth = 1;
    ctx.strokeRect(W - 80, H - 36, 70, 26);
    ctx.fillStyle = C.text;
    ctx.font = '12px monospace';
    ctx.fillText('닫기 [ESC]', W - 72, H - 17);
    ctx.textAlign = 'left';
}

// 트리 내용만 렌더링 (MAIN 화면 임베드용)
export function renderUpgradeTreeEmbed(ctx, cx, cy, branchLen) {
    _renderTreeContents(ctx, cx, cy, branchLen);
}

// 연결선 + 루트 + 브랜치 레이블 + 노드 그리기
function _renderTreeContents(ctx, cx, cy, branchLen) {
    const k = branchLen / BASE_LEN;
    const now = performance.now() / 1000;
    ctx.lineCap = 'round';

    // 1. 연결선 (requires 배열 기반)
    for (const up of UPGRADES) {
        const pos = nodePos(up, cx, cy, branchLen);
        const branch = BRANCHES[up.branch];
        const reqs = up.requires?.length ? up.requires : [null];
        for (const reqId of reqs) {
            const prev = reqId && UPGRADES.find(u => u.id === reqId);
            const p1 = prev ? nodePos(prev, cx, cy, branchLen) : { x: cx, y: cy };
            const owned = state.upgrades.includes(up.id);
            const open = !reqId || state.upgrades.includes(reqId);
            ctx.strokeStyle = owned ? branch.color : open ? branch.color + '70' : '#33334a';
            ctx.lineWidth = Math.max(1, (owned ? 4 : 2.5) * k);
            if (owned) { ctx.shadowColor = branch.color; ctx.shadowBlur = 8 * k; }
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            ctx.shadowBlur = 0;
        }
    }

    // 2. 루트 노드
    const rootR = Math.max(6, 16 * k);
    const rg = ctx.createRadialGradient(cx - rootR * 0.3, cy - rootR * 0.3, 1, cx, cy, rootR);
    rg.addColorStop(0, '#fff6c0'); rg.addColorStop(1, '#c89810');
    ctx.fillStyle = rg;
    ctx.shadowColor = C.gold; ctx.shadowBlur = 12 + Math.sin(now * 3) * 4;
    ctx.beginPath();
    ctx.arc(cx, cy, rootR, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.textAlign = 'center';
    if (rootR > 9) {
        ctx.fillStyle = '#3a2800';
        ctx.font = `bold ${Math.round(rootR * 0.6)}px monospace`;
        ctx.fillText('★', cx, cy + rootR * 0.22);
    }

    // 3. 브랜치 레이블 (angle 기반 위치)
    for (const [, branch] of Object.entries(BRANCHES)) {
        const rad = (branch.angle * Math.PI) / 180;
        const lx = cx + Math.cos(rad) * (branchLen * 5.8);
        const ly = cy + Math.sin(rad) * (branchLen * 5.8);
        ctx.fillStyle = branch.color;
        ctx.font = `bold ${Math.max(8, Math.round(branchLen * 0.2))}px monospace`;
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(0,0,0,0.7)';
        ctx.strokeText(branch.label, lx, ly);
        ctx.fillText(branch.label, lx, ly);
    }

    // 4. 노드 렌더링
    const baseR = nodeRadius(branchLen);
    for (const up of UPGRADES) {
        const pos = nodePos(up, cx, cy, branchLen);
        const owned = state.upgrades.includes(up.id);
        const unlocked = canUnlock(up);
        const affordable = state.gold >= up.cost;
        const branch = BRANCHES[up.branch];
        const hover = hoverId === up.id;

        let scale = hover ? 1.15 : 1;
        const pop = pops.get(up.id);
        if (pop !== undefined) {
            const p = (now - pop) / 0.45;
            if (p >= 1) pops.delete(up.id);
            else scale *= 1 + Math.sin(p * Math.PI) * 0.45 * (1 - p);
        }
        let jx = 0;
        const deny = denies.get(up.id);
        if (deny !== undefined) {
            const p = (now - deny) / 0.3;
            if (p >= 1) denies.delete(up.id);
            else jx = Math.sin(p * 40) * 4 * (1 - p);
        }
        const r = baseR * scale;
        const x = pos.x + jx, y = pos.y;
        const ready = !owned && unlocked && affordable;

        // 구매 가능 노드: 맥동 링
        if (ready) {
            const pr = (now * 1.2) % 1;
            ctx.strokeStyle = branch.color;
            ctx.globalAlpha = 1 - pr;
            ctx.lineWidth = 2;
            ctx.beginPath(); ctx.arc(x, y, r + 2 + pr * 10 * Math.max(0.5, k), 0, Math.PI * 2); ctx.stroke();
            ctx.globalAlpha = 1;
        }

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        if (owned) {
            const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.35, 1, x, y, r);
            g.addColorStop(0, shade(branch.color, 0.55)); g.addColorStop(1, shade(branch.color, -0.2));
            ctx.fillStyle = g;
            ctx.shadowColor = branch.color; ctx.shadowBlur = 10;
        } else {
            ctx.fillStyle = unlocked ? (hover ? '#3c3c5c' : '#2a2a44') : '#14141f';
        }
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = owned ? '#ffffff' : (unlocked ? branch.color : '#3a3a4c');
        ctx.lineWidth = owned || hover ? 2 : 1.5;
        ctx.stroke();

        // 텍스트 (작게 축소되면 생략)
        if (r >= 8) {
            ctx.fillStyle = owned ? '#101010' : (unlocked ? shade(branch.color, 0.3) : '#4a4a5a');
            ctx.font = `bold ${Math.round(r * 0.58)}px monospace`;
            ctx.fillText(up.name.slice(0, 4), x, y + r * 0.2);
        }
        if (!owned && unlocked && r >= 7) {
            ctx.fillStyle = affordable ? C.gold : '#808080';
            ctx.font = `bold ${Math.max(7, Math.round(r * 0.5))}px monospace`;
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'rgba(0,0,0,0.8)';
            ctx.strokeText(`${up.cost}G`, x, y + r + r * 0.65);
            ctx.fillText(`${up.cost}G`, x, y + r + r * 0.65);
        }
    }
    ctx.textAlign = 'left';
    ctx.lineCap = 'butt';
}

// hover 노드 반환
export function findHoveredNode(mx, my, cx = W / 2, cy = H / 2, branchLen = BASE_LEN) {
    const nodeR = Math.max(9, nodeRadius(branchLen));
    for (const up of UPGRADES) {
        const pos = nodePos(up, cx, cy, branchLen);
        const dx = mx - pos.x, dy = my - pos.y;
        if (dx * dx + dy * dy <= nodeR * nodeR) return up;
    }
    return null;
}

// 툴팁 렌더링
export function renderTooltip(ctx, upgrade, nodeX, nodeY) {
    if (!upgrade) return;
    const owned    = state.upgrades.includes(upgrade.id);
    const unlocked = canUnlock(upgrade);
    const affordable = state.gold >= upgrade.cost;

    const lines = [upgrade.name, upgrade.desc];
    if (owned)          lines.push('✓ 보유 중');
    else if (!unlocked) lines.push('🔒 이전 단계 필요');
    else                lines.push(affordable ? `클릭해서 구매: ${upgrade.cost} G` : `비용: ${upgrade.cost} G (부족)`);

    const padX = 8, padY = 6, lineH = 16;
    ctx.font = '11px monospace';
    const bw = Math.max(130, ...lines.map(l => ctx.measureText(l).width + padX * 2 + 4));
    const bh = padY * 2 + lineH * lines.length;
    let tx = nodeX + 22;
    let ty = nodeY - bh / 2;
    if (tx + bw > W - 4)  tx = nodeX - bw - 22;
    if (ty < 4)            ty = 4;
    if (ty + bh > H - 4)  ty = H - bh - 4;

    ctx.fillStyle = 'rgba(10,10,30,0.94)';
    ctx.beginPath(); ctx.roundRect(tx, ty, bw, bh, 6); ctx.fill();
    ctx.strokeStyle = BRANCHES[upgrade.branch].color;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    lines.forEach((line, i) => {
        let color = C.text;
        if (i === 0) color = C.gold;
        else if (i === 2) {
            if (owned)          color = C.green;
            else if (!unlocked) color = '#808080';
            else color = affordable ? C.gold : '#c06060';
        }
        ctx.fillStyle = color;
        ctx.font = `${i === 0 ? 'bold ' : ''}11px monospace`;
        ctx.textAlign = 'left';
        ctx.fillText(line, tx + padX, ty + padY + lineH * i + 11);
    });
}

// 클릭 이벤트 처리 → 구매
export function handleTreeClick(mx, my, cx = W / 2, cy = H / 2, branchLen = BASE_LEN) {
    const up = findHoveredNode(mx, my, cx, cy, branchLen);
    if (!up) return false;
    const now = performance.now() / 1000;
    if (!state.upgrades.includes(up.id) && canUnlock(up) && state.gold >= up.cost) {
        state.gold -= up.cost;
        state.upgrades.push(up.id);
        savePersist();
        pops.set(up.id, now);
        const pos = nodePos(up, cx, cy, branchLen);
        spawnUiBurst(pos.x, pos.y, BRANCHES[up.branch].color);
        spawnUiBurst(pos.x, pos.y, '#ffffff');
    } else if (!state.upgrades.includes(up.id)) {
        denies.set(up.id, now);
    }
    return true;
}
