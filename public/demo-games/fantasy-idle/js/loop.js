// 메인 게임 루프: 상태 전환, 업데이트, 렌더링, 입력
import { W, H, FLOOR_Y, applyCamera, toScreen } from './constants.js';
import { state, loadSave, savePersist, resetRun, newGame } from './state.js';
import { Player } from './player.js';
import { renderSky, renderWorld, renderWeather, updateWorldTime } from './world.js';
import { updateSpawn, updateCombat, updateEffects, renderEffects, arrangeEnemies, spawnParticle, resetCombat, updateProgress } from './combat.js';
import { REGIONS, STAGE_LEN, STAGES_PER_REGION, stageLabel } from './stages.js';
import { updateArtifacts, onBossEncounter } from './artifacts.js';
import { renderHUD, renderBossHUD } from './hud.js';
import { beginArtifactFrame, renderArtifactTooltip } from './artifact-ui.js';
import {
    renderUpgradeTree, handleTreeClick,
    findHoveredNode, renderTooltip, nodePos, setTreeHover,
} from './upgrade-tree.js';
import {
    renderTitle, renderMainHub, renderDeadResult,
    renderClearScreen, handleClearClick,
    renderPauseMenu, handlePauseClick,
    handleTitleClick, handleHubClick, handleDeadClick,
    treeView, zoomTreeAt, clampTree, zoomButtonAt,
    TREE_PANEL, TREE_BASE_CX, TREE_BASE_CY, ZOOM_MIN, ZOOM_MAX,
} from './screens.js';
import { getRandomArtifact } from './artifact-data.js';
import { fx, resetFx, updateFx, renderWorldFx, renderScreenFx, renderUiFx, addShake, addHitstop, showBanner } from './fx.js';
import { pointer, ui, beginUiFrame, buttonClickFeedback } from './ui.js';
import { sfx, unlockAudio, toggleMute, isMuted } from './sfx.js';

// 유물 드롭 접근용 글로벌 브리지
globalThis.__fantasyImports = { getRandomArtifact };

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// ── 캔버스: 창 크기에 맞춰 비율 유지 확대 ─────────────────
let viewScale = 1;
function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const fit = Math.min(window.innerWidth / W, window.innerHeight / H);
    canvas.style.width  = Math.floor(W * fit) + 'px';
    canvas.style.height = Math.floor(H * fit) + 'px';
    canvas.width  = Math.round(W * fit * dpr);
    canvas.height = Math.round(H * fit * dpr);
    viewScale = fit * dpr;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let player = null;
let lastTime = 0;
const DEATH_SEQ = 1.6;
let deathAnimTimer = 0;
let stepTimer = 0;

// hover 노드 (툴팁용)
let hoverNode = null;

// 트리 패널 드래그/핀치 상태
const activePointers = new Map();
let dragging = false;
let dragDist = 0;
let pinchDist = 0;
let zoomAnim = null;   // 버튼 줌 애니메이션 { target, px, py }

// ── 페이드 전환 ───────────────────────────────────────
function fadeToScreen(target) {
    if (state.fadeDir !== 0) return;
    state.fade = 0;
    state.fadeDir = -1;
    state.fadeTarget = target;
}

// ── 게임 초기화 ───────────────────────────────────────
function initRun() {
    resetRun();
    resetFx();
    resetCombat();
    player = new Player();
    // 선택한 지역의 첫 스테이지에서 출발
    state.stage = state.startRegion * STAGES_PER_REGION;
    state.distance = state.stage * STAGE_LEN;
    showBanner(`지역 ${state.startRegion + 1} · ${REGIONS[state.startRegion].name}`, `STAGE ${stageLabel(state.stage)}`, '#80e0ff');
}

// ── 사망 트리거 ───────────────────────────────────────
function triggerDeath() {
    player.dead = true;
    deathAnimTimer = DEATH_SEQ;
    state.screen = 'DYING';
    state.totalDeaths++;
    addShake(12);
    addHitstop(0.25);
    fx.hurtFlash = 1;
    spawnParticle(player.x, player.y - 24, '#ff4040', 24, 1.6);
    sfx.death();
    savePersist();
}

// ── 업데이트 ─────────────────────────────────────────
function update(realDt) {
    updateFx(realDt);

    // 페이드 처리
    if (state.fadeDir !== 0) {
        state.fade = Math.max(0, Math.min(1, state.fade - state.fadeDir * realDt * 2.5));
        if (state.fadeDir === -1 && state.fade >= 1) {
            state.screen = state.fadeTarget;
            if (state.fadeTarget === 'PLAYING') {
                initRun();
            } else if (state.fadeTarget === 'MAIN' || state.fadeTarget === 'TITLE') {
                player = new Player();
                resetFx();
            }
            state.fadeDir = 1;
        }
        if (state.fadeDir === 1 && state.fade <= 0) {
            state.fadeDir = 0;
            state.fade = 0;
        }
        return;
    }

    if (state.screen === 'MAIN' && zoomAnim) {
        const f = Math.pow(zoomAnim.target / state.treeZoom, Math.min(1, realDt * 14));
        zoomTreeAt(f, zoomAnim.px, zoomAnim.py);
        if (Math.abs(zoomAnim.target - state.treeZoom) < 0.002) zoomAnim = null;
    }

    if (state.screen === 'PLAYING' && state.paused) return;

    // 히트스톱: 게임 시간 정지
    if (fx.hitstop > 0) { fx.hitstop -= realDt; return; }
    let dt = realDt;
    if (fx.slowmo > 0) { fx.slowmo -= realDt; dt *= 0.3; }

    updateWorldTime(dt);

    if (state.screen === 'PLAYING') {
        // 전진 → 적이 검 사거리에 들어오면 정지 후 공격, 보스 관문에서는 대기
        updateProgress(player, dt);
        player.walking = state.scrolling;

        // 걷는 발밑 먼지
        if (player.walking) {
            stepTimer -= dt;
            if (stepTimer <= 0) {
                stepTimer = 0.29;
                spawnParticle(player.x - 4, FLOOR_Y - 1, 'rgba(230,220,200,0.6)', 2, 0.4, { g: -20, life: 0.4, size: 2.5 });
                sfx.step();
            }
        }

        player.update(dt);
        updateSpawn(dt);
        arrangeEnemies(player);
        for (const e of state.enemies) {
            if (e.alive) e.update(dt, player);
        }
        updateCombat(player, dt);
        updateArtifacts(player, dt);
        updateEffects(dt);

        // 보스 조우 유물 효과
        const boss = state.enemies.find(
            e => (e.rank === 'boss' || e.rank === 'miniboss') && e.alive
        );
        if (boss && !boss._hourglassApplied) {
            boss._hourglassApplied = true;
            onBossEncounter(state.enemies);
        }

        // 클리어 체크
        if (state.cleared) {
            state.cleared = false;
            fadeToScreen('CLEAR');
        }

        // 사망 체크
        if (player.hp <= 0 && !player.dead) {
            if (state.artifacts.includes('immortal_soul') && !player.reborn) {
                player.reborn = true;
                player.hp = player.maxHp;
                player.immune = 4;
            } else {
                triggerDeath();
            }
        }
    } else if (state.screen === 'DYING') {
        // 사망 연출은 느리게
        const slow = dt * 0.45;
        deathAnimTimer -= realDt;
        player.update(slow);
        for (const e of state.enemies) if (e.alive) { e.t += slow; e.atkAnim = 0; }
        updateCombat(player, slow);
        updateEffects(slow);
        if (deathAnimTimer <= 0) fadeToScreen('DEAD');
    }
}

// ── 렌더링 ───────────────────────────────────────────
function render() {
    ctx.setTransform(viewScale, 0, 0, viewScale, 0, 0);
    ctx.clearRect(0, 0, W, H);
    beginUiFrame();
    beginArtifactFrame();

    if (state.screen === 'TITLE') {
        renderTitle(ctx);
    } else if (state.screen === 'MAIN') {
        renderMainHub(ctx, player);
        // 호버 툴팁
        if (hoverNode) {
            const { cx, cy, len } = treeView();
            const { x: nx, y: ny } = nodePos(hoverNode, cx, cy, len);
            renderTooltip(ctx, hoverNode, nx, ny);
        }
    } else if (state.screen === 'PLAYING' || state.screen === 'DYING') {
        renderSky(ctx);
        // 월드 레이어 (카메라 확대 + 흔들림)
        ctx.save();
        if (fx.shake > 0) {
            ctx.translate((Math.random() - 0.5) * fx.shake * 2, (Math.random() - 0.5) * fx.shake * 2);
        }
        applyCamera(ctx);
        renderWorld(ctx);
        // 뒤쪽 적부터 그려서 앞쪽 적이 위에 오도록
        const sorted = [...state.enemies].sort((a, b) => b.x - a.x);
        for (const e of sorted) e.render(ctx);
        player.render(ctx);
        renderEffects(ctx);
        renderWorldFx(ctx);
        ctx.restore();
        renderWeather(ctx);

        renderHUD(ctx, player);
        const bossE = state.enemies.find(
            e => (e.rank === 'boss' || e.rank === 'miniboss') && e.alive
        );
        renderBossHUD(ctx, bossE ?? null);
        renderScreenFx(ctx);

        if (state.screen === 'DYING') {
            const p = 1 - Math.max(0, deathAnimTimer / DEATH_SEQ);
            const c = toScreen(player.x, player.y - 20);
            const g = ctx.createRadialGradient(c.x, c.y, 40, c.x, c.y, W);
            g.addColorStop(0, 'rgba(0,0,0,0)');
            g.addColorStop(1, `rgba(20,0,0,${p * 0.85})`);
            ctx.fillStyle = g;
            ctx.fillRect(0, 0, W, H);
        }
        if (state.paused) renderPauseMenu(ctx);
    } else if (state.screen === 'DEAD') {
        renderDeadResult(ctx);
    } else if (state.screen === 'CLEAR') {
        renderClearScreen(ctx);
    } else if (state.screen === 'UPGRADE') {
        renderUpgradeTree(ctx);
        if (hoverNode) {
            // UPGRADE 화면 툴팁
            const { x: nx, y: ny } = nodePos(hoverNode, W / 2, H / 2);
            renderTooltip(ctx, hoverNode, nx, ny);
        }
    }

    if (!state.paused) renderArtifactTooltip(ctx);
    renderUiFx(ctx);

    if (isMuted()) {
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.beginPath(); ctx.roundRect(W - 86, H - 24, 80, 18, 5); ctx.fill();
        ctx.fillStyle = '#c0c8e0';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('🔇 음소거 (M)', W - 46, H - 11);
        ctx.textAlign = 'left';
    }

    // 페이드 오버레이
    if (state.fade > 0) {
        ctx.fillStyle = `rgba(0,0,0,${state.fade})`;
        ctx.fillRect(0, 0, W, H);
    }

    // 커서
    const inPanel = state.screen === 'MAIN' && _inTreePanel(pointer.x, pointer.y);
    canvas.style.cursor = ui.hoverButton || hoverNode ? 'pointer'
        : dragging ? 'grabbing' : inPanel ? 'grab' : 'default';
}

// ── 마우스 좌표 변환 헬퍼 ────────────────────────────
function getCanvasPos(e) {
    const rect = canvas.getBoundingClientRect();
    return {
        mx: (e.clientX - rect.left) * (W / rect.width),
        my: (e.clientY - rect.top)  * (H / rect.height),
    };
}

const _inTreePanel = (mx, my) =>
    mx > TREE_PANEL.x && my > TREE_PANEL.y && !zoomButtonAt(mx, my);

function _pinchInfo() {
    const [a, b] = [...activePointers.values()];
    return { d: Math.hypot(a.x - b.x, a.y - b.y), x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function _updateHover(mx, my) {
    if (state.screen === 'MAIN' && _inTreePanel(mx, my) && !dragging) {
        const { cx, cy, len } = treeView();
        hoverNode = findHoveredNode(mx, my, cx, cy, len);
    } else if (state.screen === 'UPGRADE') {
        hoverNode = findHoveredNode(mx, my, W / 2, H / 2, 68);
    } else {
        hoverNode = null;
    }
    setTreeHover(hoverNode?.id ?? null);
}

// ── 입력 처리 (마우스 + 터치 공통) ─────────────────────
canvas.addEventListener('pointerdown', e => {
    unlockAudio();
    const { mx, my } = getCanvasPos(e);
    pointer.x = mx; pointer.y = my; pointer.down = true;
    canvas.setPointerCapture(e.pointerId);
    activePointers.set(e.pointerId, { x: mx, y: my });
    dragDist = 0;
    if (state.screen === 'MAIN' && _inTreePanel(mx, my)) {
        dragging = true;
        zoomAnim = null;
        if (activePointers.size === 2) pinchDist = _pinchInfo().d;
    }
});

canvas.addEventListener('pointermove', e => {
    const { mx, my } = getCanvasPos(e);
    const prev = activePointers.get(e.pointerId);
    pointer.x = mx; pointer.y = my;

    if (prev && dragging) {
        if (activePointers.size >= 2) {
            // 핀치 줌
            prev.x = mx; prev.y = my;
            const p = _pinchInfo();
            if (pinchDist > 0) zoomTreeAt(p.d / pinchDist, p.x, p.y);
            pinchDist = p.d;
            dragDist += 10;
        } else {
            const dx = mx - prev.x, dy = my - prev.y;
            state.treeOffset.x += dx;
            state.treeOffset.y += dy;
            clampTree();
            dragDist += Math.abs(dx) + Math.abs(dy);
        }
    }
    if (prev) { prev.x = mx; prev.y = my; }
    _updateHover(mx, my);
});

function endPointer(e, cancelled) {
    const had = activePointers.delete(e.pointerId);
    if (activePointers.size < 2) pinchDist = 0;
    if (activePointers.size === 0) {
        pointer.down = false;
        const wasDrag = dragDist > 6;
        dragging = false;
        if (had && !cancelled && !wasDrag) {
            const { mx, my } = getCanvasPos(e);
            handleClick(mx, my);
        }
    }
    if (e.pointerType !== 'mouse') { pointer.x = -1; pointer.y = -1; }
}
canvas.addEventListener('pointerup', e => endPointer(e, false));
canvas.addEventListener('pointercancel', e => endPointer(e, true));
canvas.addEventListener('pointerleave', e => {
    if (e.pointerType === 'mouse' && !pointer.down) {
        pointer.x = -1; pointer.y = -1;
        hoverNode = null;
        setTreeHover(null);
    }
});

canvas.addEventListener('wheel', e => {
    if (state.screen !== 'MAIN') return;
    const { mx, my } = getCanvasPos(e);
    if (!_inTreePanel(mx, my)) return;
    e.preventDefault();
    zoomAnim = null;
    zoomTreeAt(Math.exp(-e.deltaY * 0.0015), mx, my);
    _updateHover(mx, my);
}, { passive: false });

function handleClick(mx, my) {
    if (state.fadeDir !== 0) return;
    buttonClickFeedback(mx, my);

    // 일시정지 메뉴 클릭 우선 처리
    if (state.screen === 'PLAYING' && state.paused) {
        const action = handlePauseClick(mx, my);
        if (action === 'RESUME') state.paused = false;
        if (action === 'QUIT')   { state.paused = false; savePersist(); fadeToScreen('MAIN'); }
        return;
    }

    if (state.screen === 'TITLE') {
        const action = handleTitleClick(mx, my);
        if (action === 'NEW_GAME') { newGame(); sfx.start(); fadeToScreen('PLAYING'); }
        if (action === 'LOAD')     { player = new Player(); fadeToScreen('MAIN'); }
    } else if (state.screen === 'MAIN') {
        const zoom = zoomButtonAt(mx, my);
        if (zoom === 'reset') {
            state.treeOffset.x = 0;
            state.treeOffset.y = 0;
            zoomAnim = { target: 1, px: TREE_BASE_CX, py: TREE_BASE_CY };
            return;
        }
        if (zoom) {
            const base = zoomAnim?.target ?? state.treeZoom;
            const target = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, base * (zoom === 'in' ? 1.3 : 1 / 1.3)));
            zoomAnim = { target, px: TREE_PANEL.x + TREE_PANEL.w / 2, py: TREE_PANEL.y + TREE_PANEL.h / 2 };
            return;
        }
        const action = handleHubClick(mx, my, player, 0);
        if (action === 'START') { sfx.start(); fadeToScreen('PLAYING'); }
    } else if (state.screen === 'DEAD') {
        const action = handleDeadClick(mx, my);
        if (action === 'MAIN') fadeToScreen('MAIN');
    } else if (state.screen === 'CLEAR') {
        const action = handleClearClick(mx, my);
        if (action === 'TITLE') { newGame(); fadeToScreen('TITLE'); }
    } else if (state.screen === 'UPGRADE') {
        const closed = !handleTreeClick(mx, my);
        if (closed && mx >= W - 80 && my >= H - 36) {
            fadeToScreen('MAIN');
        }
    }
}

document.addEventListener('keydown', e => {
    unlockAudio();
    if (e.key === 'm' || e.key === 'M' || e.key === 'ㅡ') toggleMute();
    if (e.key === 'Escape') {
        if (state.screen === 'PLAYING') state.paused = !state.paused;
        if (state.screen === 'UPGRADE') fadeToScreen('MAIN');
    }
});

// ── 메인 루프 ────────────────────────────────────────
function loop(ts) {
    const dt = Math.min((ts - lastTime) / 1000, 0.05);
    lastTime = ts;
    update(dt);
    render();
    requestAnimationFrame(loop);
}

// ── 초기화 ───────────────────────────────────────────
loadSave();
player = new Player();
state.screen = 'TITLE';
requestAnimationFrame(ts => { lastTime = ts; loop(ts); });
