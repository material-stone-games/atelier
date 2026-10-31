// 화면 렌더링: TITLE, MAIN HUB, DEAD RESULT
import { W, H, C } from './constants.js';
import { state, savePersist, SAVE_KEY } from './state.js';
import { REGIONS, regionIndex, stageLabel } from './stages.js';
import { drawArtifactIcon } from './artifact-ui.js';
import { renderUpgradeTreeEmbed, handleTreeClick } from './upgrade-tree.js';
import { drawButton } from './ui.js';
import { drawKnight } from './player.js';
import { drawEnemyArt } from './enemy-art.js';
import { groundShadow } from './draw.js';

// MAIN 화면 트리 기준 중심 (드래그 오프셋 적용 전)
export const TREE_BASE_CX = 500;
export const TREE_BASE_CY = 265;
export const TREE_BRANCH_LEN = 52;
export const TREE_PANEL = { x: 192, y: 50, w: W - 192, h: H - 50 };
export const ZOOM_MIN = 0.45, ZOOM_MAX = 2.5;

// 현재 트리 중심/배율
export function treeView() {
    return {
        cx: TREE_BASE_CX + state.treeOffset.x,
        cy: TREE_BASE_CY + state.treeOffset.y,
        len: TREE_BRANCH_LEN * state.treeZoom,
    };
}

// (px, py) 지점을 고정한 채 배율 변경
export function zoomTreeAt(factor, px, py) {
    const z0 = state.treeZoom;
    const z1 = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z0 * factor));
    const { cx, cy } = treeView();
    state.treeOffset.x = px - (px - cx) * (z1 / z0) - TREE_BASE_CX;
    state.treeOffset.y = py - (py - cy) * (z1 / z0) - TREE_BASE_CY;
    state.treeZoom = z1;
    clampTree();
}

// 트리가 패널 밖으로 완전히 사라지지 않도록 제한
export function clampTree() {
    const ext = 6 * TREE_BRANCH_LEN * state.treeZoom * (52 / 68);
    const p = TREE_PANEL;
    const cx = Math.max(p.x - ext + 60, Math.min(p.x + p.w + ext - 60, TREE_BASE_CX + state.treeOffset.x));
    const cy = Math.max(p.y - ext + 60, Math.min(p.y + p.h + ext - 60, TREE_BASE_CY + state.treeOffset.y));
    state.treeOffset.x = cx - TREE_BASE_CX;
    state.treeOffset.y = cy - TREE_BASE_CY;
}

// 줌 버튼 위치 (트리 패널 우하단)
const ZB = { y: H - 38, size: 28, xs: [W - 104, W - 72, W - 40] };

// ── TITLE 화면 ─────────────────────────────────────────
export function renderTitle(ctx) {
    ctx.fillStyle = '#050510';
    ctx.fillRect(0, 0, W, H);
    // 별
    for (let i = 0; i < 80; i++) {
        const sx = (i * 137 + 50) % W;
        const sy = (i * 89 + 30) % (H * 0.7);
        ctx.fillStyle = `rgba(255,255,255,${0.3 + (i % 5) * 0.1})`;
        ctx.fillRect(sx, sy, 1 + (i % 2), 1 + (i % 2));
    }
    // 제목
    ctx.fillStyle = C.gold;
    ctx.font = 'bold 36px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('⚔ FANTASY IDLE ⚔', W / 2, H / 2 - 80);
    ctx.fillStyle = '#a090c8';
    ctx.font = '14px monospace';
    ctx.fillText('죽고 부활하며 성장하는 판타지 방치형 RPG', W / 2, H / 2 - 48);

    // 통계 (세이브 있을 때)
    const hasSave = !!localStorage.getItem(SAVE_KEY);
    if (hasSave && (state.maxStage > 0 || state.totalKills > 0)) {
        ctx.fillStyle = '#7080a0';
        ctx.font = '11px monospace';
        ctx.fillText(
            `최고 스테이지: ${stageLabel(state.maxStage)}  |  총 처치: ${state.totalKills}  |  사망: ${state.totalDeaths}`,
            W / 2, H / 2 - 20
        );
    }

    // 타이틀 장식: 기사와 슬라임이 마주봄
    const t = performance.now() / 1000;
    ctx.fillStyle = '#141428';
    ctx.fillRect(0, H - 70, W, 70);
    ctx.fillStyle = '#2a2a50';
    ctx.fillRect(0, H - 70, W, 2);
    ctx.save();
    ctx.translate(W / 2 - 230, H - 56);
    ctx.scale(2, 2);
    drawKnight(ctx, 0, 0, { t, atk: (t % 2.2) / 0.5 < 1 ? (t % 2.2) / 0.5 : 0 });
    ctx.restore();
    ctx.save();
    ctx.translate(W / 2 + 230, H - 56);
    ctx.scale(2, 2);
    groundShadow(ctx, 0, 0, 22);
    drawEnemyArt(ctx, { type: 'slime', w: 18, h: 14, color: '#60e060' }, t, false, 0, false);
    ctx.restore();

    // 새 게임 버튼
    _drawButton(ctx, W / 2 - 80, H / 2, 160, 36, '▶  새 게임', C.gold, '#1a1428');
    // 불러오기 버튼
    const loadColor = hasSave ? '#6080e8' : '#404060';
    const loadBg    = hasSave ? '#101828' : '#0a0a16';
    _drawButton(ctx, W / 2 - 80, H / 2 + 50, 160, 36, '📂  불러오기', loadColor, loadBg, { disabled: !hasSave });

    // 버전
    ctx.fillStyle = '#404050';
    ctx.font = '9px monospace';
    ctx.fillText('v1.0  Fantasy Idle', W / 2, H - 10);
    ctx.textAlign = 'left';
}

// ── MAIN HUB 화면 ──────────────────────────────────────
export function renderMainHub(ctx, player) {
    ctx.fillStyle = '#080818';
    ctx.fillRect(0, 0, W, H);

    // ── 상단 바 ─────────────────────────────────────────
    ctx.fillStyle = '#0d0d28';
    ctx.fillRect(0, 0, W, 44);
    ctx.fillStyle = '#1a1a3a';
    ctx.fillRect(0, 44, W, 1);
    ctx.fillStyle = C.gold;
    ctx.font = 'bold 16px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('⚔ 메인 기지', 12, 28);
    ctx.fillStyle = C.gold;
    ctx.font = '13px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`💰 ${state.gold} G`, W / 2, 28);
    _drawButton(ctx, W - 148, 6, 140, 32, '▶  게임 시작', C.gold, '#1a1428');

    // ── 좌측 패널 (0~190) ────────────────────────────────
    // 능력치
    ctx.fillStyle = '#0e0e24';
    ctx.fillRect(8, 52, 180, 148);
    ctx.strokeStyle = '#3040a0';
    ctx.lineWidth = 1;
    ctx.strokeRect(8, 52, 180, 148);
    ctx.fillStyle = '#8090c0';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'left';
    ctx.fillText('[ 현재 능력치 ]', 14, 70);
    const stats = [
        [`❤ HP`,   `${Math.ceil(player.hp)}/${player.maxHp}`],
        [`⚔ ATK`,  `${player.atk}`],
        [`🛡 DEF`,  `${player.def}`],
        [`⚡ SPD`,  `${player.atkSpd.toFixed(1)}`],
        [`🩸 흡혈`, `${Math.round(player.lifesteal * 100)}%`],
        [`💰 재화`, `${state.gold} G`],
    ];
    stats.forEach(([label, val], i) => {
        ctx.fillStyle = '#6070a0';
        ctx.font = '10px monospace';
        ctx.fillText(label, 14, 88 + i * 17);
        ctx.fillStyle = C.text;
        ctx.fillText(val, 90, 88 + i * 17);
    });

    // 유물
    ctx.fillStyle = '#0e0e24';
    ctx.fillRect(8, 208, 180, 110);
    ctx.strokeStyle = '#603080';
    ctx.strokeRect(8, 208, 180, 110);
    ctx.fillStyle = '#9070c0';
    ctx.font = 'bold 11px monospace';
    ctx.fillText(`[ 유물 (${state.artifacts.length}) ]`, 14, 224);
    // 아이콘 격자 (마우스를 올리면 툴팁)
    const cols = 6, size = 22, gap = 5;
    state.artifacts.slice(0, cols * 3).forEach((id, i) => {
        drawArtifactIcon(ctx, id, 16 + (i % cols) * (size + gap), 232 + Math.floor(i / cols) * (size + gap), size);
    });
    if (!state.artifacts.length) {
        ctx.fillStyle = '#504070';
        ctx.font = '10px monospace';
        ctx.fillText('보스를 쓰러뜨려 획득', 14, 244);
    }

    // 출발 지역 선택 (도달한 지역까지)
    state.startRegion = Math.min(state.startRegion, _maxStartRegion());
    ctx.fillStyle = '#0e0e24';
    ctx.fillRect(8, 326, 180, 78);
    ctx.strokeStyle = '#305030';
    ctx.strokeRect(8, 326, 180, 78);
    ctx.fillStyle = '#50a050';
    ctx.font = 'bold 11px monospace';
    ctx.fillText('[ 출발 지역 ]', 14, 342);
    const canPrev = state.startRegion > 0;
    const canNext = state.startRegion < _maxStartRegion();
    _drawButton(ctx, REGION_BTN.prev, REGION_BTN.y, REGION_BTN.size, REGION_BTN.size, '◀', canPrev ? C.green : '#304030', '#0a140a', { disabled: !canPrev });
    _drawButton(ctx, REGION_BTN.next, REGION_BTN.y, REGION_BTN.size, REGION_BTN.size, '▶', canNext ? C.green : '#304030', '#0a140a', { disabled: !canNext });
    ctx.fillStyle = C.text;
    ctx.font = 'bold 12px monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`지역 ${state.startRegion + 1} · ${REGIONS[state.startRegion].name}`, 98, REGION_BTN.y + 17);
    ctx.fillStyle = '#6a8a6a';
    ctx.font = '10px monospace';
    ctx.fillText(`최고 스테이지 ${stageLabel(state.maxStage)}`, 98, 396);
    ctx.textAlign = 'left';

    // ── 우측 드래그 가능 트리 영역 (190~800) ─────────────
    // 반투명 배경 패널
    ctx.fillStyle = 'rgba(8, 8, 24, 0.5)';
    ctx.fillRect(192, 50, W - 192, H - 50);
    ctx.strokeStyle = '#202044';
    ctx.lineWidth = 1;
    ctx.strokeRect(192, 50, W - 192, H - 50);

    // 트리 렌더링 (클리핑 적용)
    ctx.save();
    ctx.beginPath();
    ctx.rect(192, 50, W - 192, H - 50);
    ctx.clip();
    _renderTreeGrid(ctx);
    const { cx, cy, len } = treeView();
    renderUpgradeTreeEmbed(ctx, cx, cy, len);
    ctx.restore();

    // 조작 안내 + 줌 버튼
    ctx.fillStyle = 'rgba(8,8,24,0.75)';
    ctx.beginPath(); ctx.roundRect(200, H - 26, 250, 20, 5); ctx.fill();
    ctx.fillStyle = '#7080b0';
    ctx.font = '10px monospace';
    ctx.fillText('드래그: 이동  ·  휠/핀치: 확대·축소', 208, H - 12);
    ctx.fillStyle = '#8090c0';
    ctx.textAlign = 'right';
    ctx.fillText(`${Math.round(state.treeZoom * 100)}%`, ZB.xs[0] - 8, ZB.y + 18);
    ctx.textAlign = 'left';
    ['−', '+', '⟲'].forEach((label, i) =>
        _drawButton(ctx, ZB.xs[i], ZB.y, ZB.size, ZB.size, label, '#8090e0', '#141430'));
}

// 트리 패널 배경 격자 (트리와 함께 이동/확대)
function _renderTreeGrid(ctx) {
    const { cx, cy, len } = treeView();
    const step = 52 * (len / 68);
    if (step < 8) return;
    ctx.fillStyle = 'rgba(120,130,200,0.12)';
    const x0 = cx - Math.ceil((cx - 192) / step) * step;
    const y0 = cy - Math.ceil((cy - 50) / step) * step;
    for (let x = x0; x < W; x += step) {
        for (let y = y0; y < H; y += step) ctx.fillRect(x - 1, y - 1, 2, 2);
    }
}

// 줌 버튼 클릭 → 확대 배율 변화 (없으면 null)
export function zoomButtonAt(mx, my) {
    if (my < ZB.y || my > ZB.y + ZB.size) return null;
    const i = ZB.xs.findIndex(x => mx >= x && mx <= x + ZB.size);
    return i < 0 ? null : ['out', 'in', 'reset'][i];
}

// ── DEAD 화면 ──────────────────────────────────────────
export function renderDeadResult(ctx) {
    ctx.fillStyle = 'rgba(8,0,0,0.88)';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#c04040';
    ctx.font = 'bold 28px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('☠ 사망', W / 2, H / 2 - 90);

    ctx.fillStyle = C.text;
    ctx.font = '14px monospace';
    const lines = [
        `도달 스테이지: ${stageLabel(state.stage)} (${REGIONS[regionIndex(state.stage)].name})`,
        `이번 획득 재화: ${state.sessionGold} G`,
        `적 처치: ${state.sessionKills} 마리`,
        `최고 스테이지: ${stageLabel(state.maxStage)}`,
    ];
    lines.forEach((l, i) => ctx.fillText(l, W / 2, H / 2 - 40 + i * 24));

    _drawButton(ctx, W / 2 - 80, H / 2 + 60, 160, 40, '🏠 메인으로', '#6080e8', '#101828');
    ctx.textAlign = 'left';
}

// ── 공통 버튼 렌더링 ───────────────────────────────────
export function _drawButton(ctx, x, y, w, h, label, color, bg, opts = {}) {
    drawButton(ctx, x, y, w, h, label, color, bg, { pulse: color === C.gold, ...opts });
}

// 출발 지역 선택 버튼 위치
const REGION_BTN = { prev: 14, next: 158, y: 352, size: 24 };
const _maxStartRegion = () => regionIndex(state.maxStage);
const _inBtn = (mx, my, x) => mx >= x && mx <= x + REGION_BTN.size && my >= REGION_BTN.y && my <= REGION_BTN.y + REGION_BTN.size;

// HUB 클릭 처리
export function handleHubClick(mx, my, _player, dragDist) {
    // 드래그로 이동한 경우 클릭 무시
    if (dragDist > 5) return null;

    // 출발 지역 변경
    if (_inBtn(mx, my, REGION_BTN.prev) && state.startRegion > 0) { state.startRegion--; savePersist(); }
    if (_inBtn(mx, my, REGION_BTN.next) && state.startRegion < _maxStartRegion()) { state.startRegion++; savePersist(); }
    // 게임 시작
    if (mx >= W - 148 && mx <= W - 8 && my >= 6 && my <= 38) return 'START';
    // 트리 패널 영역 클릭 → 업그레이드 구매
    if (mx > 192 && !zoomButtonAt(mx, my)) {
        const { cx, cy, len } = treeView();
        handleTreeClick(mx, my, cx, cy, len);
    }
    return null;
}

// DEAD 클릭 처리
export function handleDeadClick(mx, my) {
    if (mx >= W / 2 - 80 && mx <= W / 2 + 80 && my >= H / 2 + 60 && my <= H / 2 + 100) {
        return 'MAIN';
    }
    return null;
}

// ── 일시정지 메뉴 오버레이 ──────────────────────────────
const PX = W / 2 - 100, PY = H / 2 - 95;  // 패널 좌상단
export function renderPauseMenu(ctx) {
    // 반투명 배경
    ctx.fillStyle = 'rgba(0,0,0,0.65)';
    ctx.fillRect(0, 0, W, H);

    // 패널
    ctx.fillStyle = '#080818';
    ctx.fillRect(PX, PY, 200, 190);
    ctx.strokeStyle = '#5050c0';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(PX, PY, 200, 190);

    // 제목
    ctx.fillStyle = C.gold;
    ctx.font = 'bold 18px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('⏸ 일시정지', W / 2, PY + 38);

    // 버튼
    _drawButton(ctx, PX + 30, PY + 60,  140, 38, '▶  계속하기', C.green,  '#0a1a0a');
    _drawButton(ctx, PX + 30, PY + 112, 140, 38, '✕  포기하기', '#e04040','#1a0808');
    ctx.textAlign = 'left';
}

// 일시정지 메뉴 클릭 처리
export function handlePauseClick(mx, my) {
    if (mx >= PX + 30 && mx <= PX + 170) {
        if (my >= PY + 60  && my <= PY + 98)  return 'RESUME';
        if (my >= PY + 112 && my <= PY + 150) return 'QUIT';
    }
    return null;
}

// ── CLEAR 화면 ──────────────────────────────────────────
export function renderClearScreen(ctx) {
    // 배경
    ctx.fillStyle = '#020008';
    ctx.fillRect(0, 0, W, H);
    // 별
    for (let i = 0; i < 100; i++) {
        const sx = (i * 137 + 20) % W;
        const sy = (i * 89  + 10) % (H * 0.85);
        ctx.fillStyle = `rgba(255,220,120,${0.3 + (i % 6) * 0.08})`;
        ctx.fillRect(sx, sy, 1 + (i % 3 === 0 ? 1 : 0), 1 + (i % 3 === 0 ? 1 : 0));
    }
    // 제목
    ctx.fillStyle = C.gold;
    ctx.font = 'bold 40px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('✨ GAME CLEAR ✨', W / 2, H / 2 - 100);
    ctx.fillStyle = '#c0a0ff';
    ctx.font = '14px monospace';
    ctx.fillText('어둠의 군주를 쓰러뜨렸다!', W / 2, H / 2 - 60);

    // 결과
    ctx.fillStyle = C.text;
    ctx.font = '13px monospace';
    const lines = [
        `클리어 스테이지: ${stageLabel(state.stage)}`,
        `이번 획득 재화: ${state.sessionGold} G`,
        `적 처치: ${state.sessionKills} 마리`,
        `총 사망: ${state.totalDeaths} 회`,
    ];
    lines.forEach((l, i) => ctx.fillText(l, W / 2, H / 2 - 10 + i * 24));

    _drawButton(ctx, W / 2 - 90, H / 2 + 90, 180, 40, '🏠 타이틀로 돌아가기', C.gold, '#1a1428');
    ctx.textAlign = 'left';
}

// CLEAR 클릭 처리
export function handleClearClick(mx, my) {
    if (mx >= W / 2 - 90 && mx <= W / 2 + 90 &&
        my >= H / 2 + 90 && my <= H / 2 + 130) {
        return 'TITLE';
    }
    return null;
}

// TITLE 클릭 처리
export function handleTitleClick(mx, my) {
    const hasSave = !!localStorage.getItem(SAVE_KEY);
    if (mx >= W/2-80 && mx <= W/2+80 && my >= H/2 && my <= H/2+36) return 'NEW_GAME';
    if (hasSave && mx >= W/2-80 && mx <= W/2+80 && my >= H/2+50 && my <= H/2+86) return 'LOAD';
    return null;
}
