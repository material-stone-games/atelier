// 업그레이드 트리 UI: 그리드 기반 렌더링(배율 대응) + 클릭 구매 + 툴팁
import { W, H, C } from './constants.js';
import { state, savePersist } from './state.js';
import { UPGRADES, BRANCHES, canUnlock } from './upgrade-data.js';
import { spawnUiBurst } from './fx.js';
import { shade } from './draw.js';
import { pixWindow, pixText } from './pixel.js';
import { drawIcon } from './icons.js';
import { sfx } from './sfx.js';

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
    ctx.fillStyle = '#1a1c2c';
    ctx.fillRect(0, 0, W, H);
    pixText(ctx, '업그레이드 트리', cx, 24, 16, '#ffcd75', 'center');
    pixText(ctx, `${state.gold} G`, cx, 42, 12, '#ffcd75', 'center');
    _renderTreeContents(ctx, cx, cy, branchLen);
    pixWindow(ctx, W - 96, H - 40, 88, 32);
    pixText(ctx, '닫기 [ESC]', W - 52, H - 19, 11, '#f4f4f4', 'center');
}

// 트리 내용만 렌더링 (MAIN 화면 임베드용)
export function renderUpgradeTreeEmbed(ctx, cx, cy, branchLen) {
    _renderTreeContents(ctx, cx, cy, branchLen);
}

// 연결선 + 루트 + 브랜치 레이블 + 노드 그리기
function _renderTreeContents(ctx, cx, cy, branchLen) {
    const k = branchLen / BASE_LEN;
    const now = performance.now() / 1000;
    ctx.lineCap = 'butt';

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
            const lw = Math.max(2, Math.round((owned ? 4 : 2) * k));
            ctx.strokeStyle = '#1a1c2c';
            ctx.lineWidth = lw + 2;
            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(pos.x, pos.y); ctx.stroke();
            ctx.strokeStyle = owned ? branch.color : open ? shade(branch.color, -0.45) : '#333c57';
            ctx.lineWidth = lw;
            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(pos.x, pos.y); ctx.stroke();
        }
    }

    // 2. 루트 노드 (금색 픽셀 타일 + 별)
    const rootR = Math.round(Math.max(7, 16 * k));
    const glow = Math.sin(now * 3) > 0;
    ctx.fillStyle = '#1a1c2c';
    ctx.fillRect(cx - rootR - 2, cy - rootR - 2, rootR * 2 + 4, rootR * 2 + 4);
    ctx.fillStyle = glow ? '#fff3b0' : '#ffcd75';
    ctx.fillRect(cx - rootR, cy - rootR, rootR * 2, rootR * 2);
    ctx.fillStyle = '#c27c0e';
    ctx.fillRect(cx - rootR + 2, cy - rootR + 2, rootR * 2 - 4, rootR * 2 - 4);
    if (rootR >= 9) drawIcon(ctx, 'star', cx - rootR + 3, cy - rootR + 3, rootR * 2 - 6);

    // 3. 브랜치 레이블 (angle 기반 위치)
    for (const [, branch] of Object.entries(BRANCHES)) {
        const rad = (branch.angle * Math.PI) / 180;
        const lx = cx + Math.cos(rad) * (branchLen * 5.8);
        const ly = cy + Math.sin(rad) * (branchLen * 5.8);
        pixText(ctx, branch.label, lx, ly, Math.max(8, Math.round(branchLen * 0.2)), branch.color, 'center');
    }

    // 4. 노드 렌더링
    const baseR = nodeRadius(branchLen);
    for (const up of UPGRADES) {
        const pos = nodePos(up, cx, cy, branchLen);
        const owned = state.upgrades.includes(up.id);
        const unlocked = canUnlock(up);
        const cost = up.cost;
        const affordable = state.gold >= cost;
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

        // 구매 가능 노드: 깜박이는 테두리
        const half = Math.round(r);
        const blink = ready && Math.floor(now * 3) % 2 === 0;
        ctx.fillStyle = '#1a1c2c';
        ctx.fillRect(x - half - 2, y - half - 2, half * 2 + 4, half * 2 + 4);
        ctx.fillStyle = owned ? '#f4f4f4' : blink || hover ? '#f4f4f4' : unlocked ? branch.color : '#333c57';
        ctx.fillRect(x - half, y - half, half * 2, half * 2);
        const inner = owned ? shade(branch.color, -0.2) : unlocked ? (hover ? '#333c7a' : '#29366f') : '#20233a';
        ctx.fillStyle = inner;
        ctx.fillRect(x - half + 2, y - half + 2, half * 2 - 4, half * 2 - 4);
        if (owned) {
            ctx.fillStyle = shade(branch.color, 0.25);
            ctx.fillRect(x - half + 2, y - half + 2, half * 2 - 4, 2);
        }

        // 아이콘 (잠긴 노드는 흑백·반투명)
        if (half >= 5) {
            ctx.save();
            if (!owned && !unlocked) { ctx.globalAlpha = 0.35; ctx.filter = 'grayscale(1)'; }
            else if (!owned && !affordable) ctx.globalAlpha = 0.6;
            const is = half * 2 - 6;
            drawIcon(ctx, up.id, x - is / 2, y - is / 2, is);
            ctx.restore();
        }
        if (!owned && unlocked && half >= 7) {
            pixText(ctx, `${shortGold(cost)}G`, x, y + half + Math.max(9, half * 0.7), Math.max(8, Math.round(half * 0.55)),
                affordable ? '#ffcd75' : '#8b9bb4', 'center');
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

// 노드 아래 표시용 짧은 금액 (12.3k)
const shortGold = g => g >= 10000 ? `${(g / 1000).toFixed(g >= 100000 ? 0 : 1)}k` : `${g}`;

// 툴팁 렌더링
export function renderTooltip(ctx, upgrade, nodeX, nodeY) {
    if (!upgrade) return;
    const owned    = state.upgrades.includes(upgrade.id);
    const unlocked = canUnlock(upgrade);
    const cost = upgrade.cost;
    const affordable = state.gold >= cost;

    const status = owned ? ['보유 중', '#a7f070'] : !unlocked ? ['이전 단계 필요', '#8b9bb4']
        : [`비용: ${cost} G`, affordable ? '#ffcd75' : '#ef7d57'];
    ctx.font = 'bold 11px monospace';
    const bw = Math.max(150, ctx.measureText(upgrade.desc).width + 36, ctx.measureText(upgrade.name).width + 64);
    const bh = 78;
    let tx = nodeX + 22;
    let ty = nodeY - bh / 2;
    if (tx + bw > W - 4)  tx = nodeX - bw - 22;
    if (ty < 4)            ty = 4;
    if (ty + bh > H - 4)  ty = H - bh - 4;

    pixWindow(ctx, tx, ty, bw, bh, { border: BRANCHES[upgrade.branch].color });
    drawIcon(ctx, upgrade.id, tx + 12, ty + 11, 18);
    pixText(ctx, upgrade.name, tx + 36, ty + 25, 12, '#ffcd75');
    pixText(ctx, upgrade.desc, tx + 14, ty + 46, 11, '#f4f4f4');
    pixText(ctx, status[0], tx + 14, ty + 64, 11, status[1]);
}

// 클릭 이벤트 처리 → 구매
export function handleTreeClick(mx, my, cx = W / 2, cy = H / 2, branchLen = BASE_LEN) {
    const up = findHoveredNode(mx, my, cx, cy, branchLen);
    if (!up) return false;
    const now = performance.now() / 1000;
    const cost = up.cost;
    if (!state.upgrades.includes(up.id) && canUnlock(up) && state.gold >= cost) {
        state.gold -= cost;
        state.upgrades.push(up.id);
        savePersist();
        pops.set(up.id, now);
        const pos = nodePos(up, cx, cy, branchLen);
        spawnUiBurst(pos.x, pos.y, BRANCHES[up.branch].color);
        spawnUiBurst(pos.x, pos.y, '#ffffff');
        sfx.buy();
    } else if (!state.upgrades.includes(up.id)) {
        denies.set(up.id, now);
        sfx.deny();
    }
    return true;
}
