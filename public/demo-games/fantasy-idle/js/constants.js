// 게임 전역 상수 및 레트로 색상 팔레트
export const W = 800;
export const H = 480;
export const GROUND_Y = H - 60;   // 지면 윗면(원근 띠 시작)
export const FLOOR_Y = GROUND_Y + 14; // 캐릭터 발이 닿는 선
export const SCROLL_PX = 11.88;   // 1m 당 지면 스크롤 픽셀 (화면 걷기 속도 약 59px/s 유지)

// 전투 화면 카메라: 플레이어 발밑을 기준으로 월드를 확대해 캐릭터를 크게 보여줌
export const WORLD_ZOOM = 1.4;
export const VIEW_X = 230;        // 화면상 플레이어 x
export const VIEW_FLOOR = 398;    // 화면상 발 높이
export function applyCamera(ctx) {
    ctx.translate(VIEW_X, VIEW_FLOOR);
    ctx.scale(WORLD_ZOOM, WORLD_ZOOM);
    ctx.translate(-PLAYER_X, -FLOOR_Y);
}
export function toScreen(x, y) {
    return { x: VIEW_X + (x - PLAYER_X) * WORLD_ZOOM, y: VIEW_FLOOR + (y - FLOOR_Y) * WORLD_ZOOM };
}
export const PLAYER_X = 280;   // 중앙(400) 살짝 왼쪽
export const MOVE_SPEED = 5;       // 초당 탐험 이동 거리(m)

export const C = {
    bg:      '#0f0f23',
    ground:  '#3a2a1a',
    sky:     '#1a1a3e',
    text:    '#e8e8c8',
    gold:    '#f5c518',
    red:     '#e84040',
    green:   '#40c040',
    blue:    '#4080e8',
    purple:  '#a040c8',
    orange:  '#e87020',
    white:   '#ffffff',
    gray:    '#606878',
    darkgray:'#303038',
    cyan:    '#40c8c8',
    hp:      '#e84040',
    hpbg:    '#401818',
    xp:      '#40c8c8',
};

// 지역 하나 = 5스테이지 × 100m (stages.js와 맞춤)
const REGION_LEN = 500;
export const BIOMES = [
    { name: '초원',      sky: '#87ceeb', ground: '#4a7c3f', accent: '#5a9e4f' },
    { name: '숲',        sky: '#2d4a1e', ground: '#2d5f3f', accent: '#3a7a50' },
    { name: '사막',      sky: '#e8b84a', ground: '#c8a050', accent: '#d8b060' },
    { name: '화산',      sky: '#3a0800', ground: '#5a1a00', accent: '#8b2500' },
    { name: '설원',      sky: '#1a2848', ground: '#8aa8d0', accent: '#a0c0e8' },
    { name: '어둠의 땅', sky: '#050510', ground: '#1a0a2e', accent: '#2a1050' },
].map((b, i, all) => ({ ...b, from: i * REGION_LEN, to: i === all.length - 1 ? Infinity : (i + 1) * REGION_LEN - 1 }));

export const FPS = 60;
export const MELEE_REACH = 26;        // 플레이어 앞면에서 검이 닿는 거리(px)
export const PLAYER_HALF = 12;        // 플레이어 몸 절반 폭
export const WAVE_GAP_M = 10;         // 적 무리 출현 간격(m) — 스테이지당 약 10무리
export const WAVE_SIZE = [2, 4];      // 무리당 적 수 (최소, 최대)
export const ENEMY_ATK_MULT = 1.2;    // 적 공격력 전체 보정
