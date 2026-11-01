// 화면 렌더링: TITLE, MAIN HUB, DEAD RESULT
import { W, H, C, GAME_VERSION, PLAYER_X, FLOOR_Y, applyCamera } from './constants.js';
import { state, savePersist, SAVE_KEY } from './state.js';
import { REGIONS, regionIndex, stageLabel } from './stages.js';
import { drawArtifactIcon } from './artifact-ui.js';
import { renderUpgradeTreeEmbed, handleTreeClick } from './upgrade-tree.js';
import { drawButton } from './ui.js';
import { drawKnight } from './player.js';
import { drawEnemyPix, pixShadow } from './pixel-actors.js';
import { pixWindow, pixText } from './pixel.js';
import { drawIcon } from './icons.js';
import { renderSky, renderWorld } from './world.js';
import { getStats } from './upgrade-data.js';

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
    // 초원 배경 위에 기사와 슬라임이 마주봄
    const t = performance.now() / 1000;
    renderSky(ctx);
    ctx.save();
    applyCamera(ctx);
    renderWorld(ctx);
    drawKnight(ctx, PLAYER_X, FLOOR_Y, { t, atk: (t % 2.2) / 0.5 < 1 ? (t % 2.2) / 0.5 : 0 });
    pixShadow(ctx, PLAYER_X + 70, FLOOR_Y, 22);
    ctx.save();
    ctx.translate(PLAYER_X + 70, FLOOR_Y);
    drawEnemyPix(ctx, { type: 'slime', w: 18, h: 14, color: '#60e060' }, t, false, 0, false);
    ctx.restore();
    ctx.restore();

    // 로고 창
    const lw = 420, lx = W / 2 - lw / 2;
    pixWindow(ctx, lx, 46, lw, 104, { border: '#ffcd75' });
    drawIcon(ctx, 'atk', lx + 26, 70, 34);
    drawIcon(ctx, 'atk', lx + lw - 60, 70, 34, { flip: true });
    pixText(ctx, 'FANTASY IDLE', W / 2, 98, 34, '#ffcd75', 'center', '#5d275d');
    pixText(ctx, '죽고 부활하며 성장하는 판타지 방치형 RPG', W / 2, 126, 12, '#c2d0dc', 'center');

    // 통계 (세이브 있을 때)
    const hasSave = !!localStorage.getItem(SAVE_KEY);
    if (hasSave && (state.maxStage > 0 || state.totalKills > 0)) {
        pixText(ctx, `최고 스테이지 ${stageLabel(state.maxStage)}   처치 ${state.totalKills}   사망 ${state.totalDeaths}`,
            W / 2, H / 2 - 18, 11, '#f4f4f4', 'center');
    }

    _drawButton(ctx, W / 2 - 80, H / 2, 160, 36, '새 게임', C.gold, '#29366f', { icon: 'new' });
    _drawButton(ctx, W / 2 - 80, H / 2 + 50, 160, 36, '불러오기', hasSave ? '#73eff7' : '#566c86', '#29366f', { disabled: !hasSave, icon: 'load' });

    pixText(ctx, `v${GAME_VERSION}  Fantasy Idle`, W / 2, H - 10, 10, '#c2d0dc', 'center');
}

// ── MAIN HUB 화면 ──────────────────────────────────────
export function renderMainHub(ctx, player) {
    // 바탕: 남색 + 픽셀 체크 무늬
    ctx.fillStyle = '#1a1c2c';
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = '#20233a';
    for (let y = 0; y < H; y += 16) for (let x = (y / 16) % 2 ? 16 : 0; x < W; x += 32) ctx.fillRect(x, y, 16, 16);

    // ── 상단 바 ─────────────────────────────────────────
    pixWindow(ctx, 4, 4, 300, 40);
    drawIcon(ctx, 'DEF_S2', 16, 13, 20);
    pixText(ctx, '메인 기지', 44, 30, 15, '#ffcd75');
    pixWindow(ctx, 312, 4, 170, 40);
    drawIcon(ctx, 'coin', 324, 14, 20);
    pixText(ctx, `${state.gold.toLocaleString()} G`, 470, 30, 14, '#ffcd75', 'right');
    _drawButton(ctx, W - 148, 6, 140, 32, '게임 시작', C.gold, '#29366f', { icon: 'play' });

    // ── 좌측 패널 (0~190) ────────────────────────────────
    pixWindow(ctx, 4, 50, 186, 152);
    pixText(ctx, '능력치', 18, 72, 12, '#73eff7');
    const st = getStats();
    const stats = [
        ['heart', `${Math.ceil(player.hp)}/${player.maxHp}`],
        ['atk', `${player.atk}`],
        ['def', `${player.def}`],
        ['spd', `${player.atkSpd.toFixed(1)}`],
        ['steal', `${Math.round(player.lifesteal * 100)}%`],
        ['coin', `x${st.goldMult.toFixed(1)}`],
    ];
    stats.forEach(([ic, val], i) => {
        const y = 82 + i * 19;
        drawIcon(ctx, ic, 18, y, 15);
        pixText(ctx, val, 176, y + 12, 11, '#f4f4f4', 'right');
    });

    // 유물
    pixWindow(ctx, 4, 206, 186, 116);
    pixText(ctx, `유물 ${state.artifacts.length}`, 18, 228, 12, '#c9a8ff');
    const cols = 6, size = 24, gap = 3;
    state.artifacts.slice(0, cols * 3).forEach((id, i) => {
        drawArtifactIcon(ctx, id, 15 + (i % cols) * (size + gap), 236 + Math.floor(i / cols) * (size + gap), size);
    });
    if (!state.artifacts.length) pixText(ctx, '보스를 쓰러뜨려 획득', 18, 254, 10, '#8b9bb4');

    // 출발 지역 선택 (도달한 지역까지)
    state.startRegion = Math.min(state.startRegion, _maxStartRegion());
    pixWindow(ctx, 4, 326, 186, 84);
    pixText(ctx, '출발 지역', 18, 346, 12, '#a7f070');
    const canPrev = state.startRegion > 0;
    const canNext = state.startRegion < _maxStartRegion();
    _drawButton(ctx, REGION_BTN.prev, REGION_BTN.y, REGION_BTN.size, REGION_BTN.size, '', '#a7f070', '#257179', { disabled: !canPrev, icon: 'left' });
    _drawButton(ctx, REGION_BTN.next, REGION_BTN.y, REGION_BTN.size, REGION_BTN.size, '', '#a7f070', '#257179', { disabled: !canNext, icon: 'right' });
    pixText(ctx, `${state.startRegion + 1} · ${REGIONS[state.startRegion].name}`, 98, REGION_BTN.y + 17, 12, '#f4f4f4', 'center');
    pixText(ctx, `최고 ${stageLabel(state.maxStage)}`, 98, 398, 10, '#94b0c2', 'center');

    // ── 우측 드래그 가능 트리 영역 (190~800) ─────────────
    pixWindow(ctx, 194, 50, W - 198, H - 54, { bg: '#1a1c2c', bg2: '#1d2036' });

    // 트리 렌더링 (클리핑 적용)
    ctx.save();
    ctx.beginPath();
    ctx.rect(200, 56, W - 210, H - 66);
    ctx.clip();
    _renderTreeGrid(ctx);
    const { cx, cy, len } = treeView();
    renderUpgradeTreeEmbed(ctx, cx, cy, len);
    ctx.restore();

    // 조작 안내 + 줌 버튼
    pixText(ctx, '드래그: 이동  ·  휠/핀치: 확대·축소', 210, H - 16, 10, '#94b0c2');
    pixText(ctx, `${Math.round(state.treeZoom * 100)}%`, ZB.xs[0] - 8, ZB.y + 19, 11, '#c2d0dc', 'right');
    ['minus', 'plus', 'reset'].forEach((ic, i) =>
        _drawButton(ctx, ZB.xs[i], ZB.y, ZB.size, ZB.size, '', '#c2d0dc', '#333c7a', { icon: ic }));
}

// 트리 패널 배경 격자 (트리와 함께 이동/확대)
function _renderTreeGrid(ctx) {
    const { cx, cy, len } = treeView();
    const step = 52 * (len / 68);
    if (step < 8) return;
    ctx.fillStyle = 'rgba(115,239,247,0.10)';
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
    ctx.fillStyle = 'rgba(26,8,16,0.92)';
    ctx.fillRect(0, 0, W, H);
    const w = 380, x = W / 2 - w / 2, y = H / 2 - 140;
    pixWindow(ctx, x, y, w, 270, { border: '#b13e53' });
    drawIcon(ctx, 'kill', W / 2 - 18, y + 16, 36);
    pixText(ctx, '사망', W / 2, y + 78, 24, '#ef7d57', 'center');
    const rows = [
        ['flag', '도달 스테이지', `${stageLabel(state.stage)} ${REGIONS[regionIndex(state.stage)].name}`],
        ['coin', '획득 재화', `${state.sessionGold} G`],
        ['atk', '적 처치', `${state.sessionKills}`],
        ['star', '최고 스테이지', stageLabel(state.maxStage)],
    ];
    rows.forEach(([ic, k, v], i) => {
        const ry = y + 100 + i * 24;
        drawIcon(ctx, ic, x + 36, ry - 2, 16);
        pixText(ctx, k, x + 60, ry + 11, 12, '#c2d0dc');
        pixText(ctx, v, x + w - 36, ry + 11, 12, '#f4f4f4', 'right');
    });
    _drawButton(ctx, W / 2 - 80, H / 2 + 60, 160, 40, '메인으로', '#73eff7', '#29366f', { icon: 'home' });
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
    ctx.fillStyle = 'rgba(10,8,24,0.65)';
    ctx.fillRect(0, 0, W, H);
    pixWindow(ctx, PX, PY, 200, 172);
    drawIcon(ctx, 'pause', PX + 40, PY + 22, 18);
    pixText(ctx, '일시정지', W / 2 + 10, PY + 38, 18, '#ffcd75', 'center');
    _drawButton(ctx, PX + 30, PY + 60,  140, 38, '계속하기', '#a7f070', '#257179', { icon: 'play' });
    _drawButton(ctx, PX + 30, PY + 112, 140, 38, '포기하기', '#ef7d57', '#5d275d', { icon: 'cross' });
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
    ctx.fillStyle = '#1a1c2c';
    ctx.fillRect(0, 0, W, H);
    const t = performance.now() / 1000;
    for (let i = 0; i < 100; i++) {
        if (Math.sin(t * 2 + i) < -0.3) continue;
        ctx.fillStyle = i % 3 ? '#ffcd75' : '#f4f4f4';
        ctx.fillRect((i * 137 + 20) % W, (i * 89 + 10) % (H * 0.85), i % 3 === 0 ? 4 : 2, i % 3 === 0 ? 4 : 2);
    }
    const w = 440, x = W / 2 - w / 2, y = H / 2 - 170;
    pixWindow(ctx, x, y, w, 290, { border: '#ffcd75' });
    drawIcon(ctx, 'boss', W / 2 - 20, y + 14, 40);
    pixText(ctx, 'GAME CLEAR', W / 2, y + 86, 32, '#ffcd75', 'center', '#5d275d');
    pixText(ctx, '어둠의 군주를 쓰러뜨렸다!', W / 2, y + 110, 13, '#c9a8ff', 'center');
    const rows = [
        ['flag', '클리어 스테이지', stageLabel(state.stage)],
        ['coin', '획득 재화', `${state.sessionGold} G`],
        ['atk', '적 처치', `${state.sessionKills}`],
        ['kill', '총 사망', `${state.totalDeaths}`],
    ];
    rows.forEach(([ic, k, v], i) => {
        const ry = y + 134 + i * 24;
        drawIcon(ctx, ic, x + 50, ry - 2, 16);
        pixText(ctx, k, x + 74, ry + 11, 12, '#c2d0dc');
        pixText(ctx, v, x + w - 50, ry + 11, 12, '#f4f4f4', 'right');
    })
    _drawButton(ctx, W / 2 - 90, H / 2 + 90, 180, 40, '타이틀로', C.gold, '#29366f', { icon: 'home' });
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
