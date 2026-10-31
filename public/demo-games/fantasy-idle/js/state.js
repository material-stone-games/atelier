// 게임 상태 관리 및 localStorage 저장/로드
export const SAVE_KEY = 'fantasyIdle_v1';

export const state = {
    // 영구 저장 데이터
    gold: 0,
    upgrades: [],    // 구매한 업그레이드 ID 배열
    artifacts: [],   // 소유 유물 ID 배열
    bestDist: 0,
    totalDeaths: 0,
    totalKills: 0,

    // 런타임 (플레이 중)
    screen: 'TITLE',   // TITLE | MAIN | PLAYING | DEAD | UPGRADE | CLEAR
    cleared: false,    // 최종 보스 클리어 트리거
    paused: false,     // 일시정지 (PLAYING 중 ESC)
    distance: 0,
    sessionGold: 0,
    sessionKills: 0,
    kills: 0,
    enemies: [],
    particles: [],
    dmgTexts: [],
    bossActive: false,
    prevBossDist: 0,
    fade: 0,          // 0~1 페이드 알파
    fadeDir: 0,       // -1 아웃, 1 인, 0 없음
    fadeTarget: null, // 페이드 후 전환할 화면
    skipZone: 0,      // 시작 존 (0~2)
    deathAnim: 0,     // 사망 애니메이션 타이머
    inCombat: false,  // 전투 중 여부 (미터기 정지용)
    treeOffset: { x: 0, y: 0 }, // 업그레이드 트리 드래그 오프셋
    treeZoom: 1,                // 업그레이드 트리 확대 배율
};

export function loadSave() {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return;
        const data = JSON.parse(raw);
        state.gold = data.gold ?? 0;
        state.upgrades = data.upgrades ?? [];
        state.artifacts = data.artifacts ?? [];
        state.bestDist = data.bestDist ?? 0;
        state.totalDeaths = data.totalDeaths ?? 0;
        state.totalKills = data.totalKills ?? 0;
    } catch { /* 손상된 저장 무시 */ }
}

export function savePersist() {
    try {
        localStorage.setItem(SAVE_KEY, JSON.stringify({
            gold: state.gold,
            upgrades: state.upgrades,
            artifacts: state.artifacts,
            bestDist: state.bestDist,
            totalDeaths: state.totalDeaths,
            totalKills: state.totalKills,
        }));
    } catch { /* 스토리지 오류 무시 */ }
}

export function resetRun() {
    state.distance = 0;
    state.sessionGold = 0;
    state.sessionKills = 0;
    state.kills = 0;
    state.enemies = [];
    state.particles = [];
    state.dmgTexts = [];
    state.bossActive = false;
    state.prevBossDist = 0;
    state.deathAnim = 0;
}

// 총 업그레이드 수 (스킵 조건 계산)
export function upgradeCount() { return state.upgrades.length; }

// 새 게임: 영구 데이터 포함 전체 초기화
export function newGame() {
    state.gold = 0;
    state.upgrades = [];
    state.artifacts = [];
    state.bestDist = 0;
    state.totalDeaths = 0;
    state.totalKills = 0;
    try { localStorage.removeItem(SAVE_KEY); } catch { /* 무시 */ }
}
