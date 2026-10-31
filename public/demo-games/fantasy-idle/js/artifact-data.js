// 유물 20종 데이터 정의
export const ARTIFACT_DEFS = {
    // ── 일반 등급 ──────────────────────────────────────
    flame_ring:  { name:'불꽃의 반지',  rarity:'common',  icon:'🔥',
                   desc:'적중 시 15% 확률로 추가 화염 피해 (ATK×0.5)' },
    dragon_skin: { name:'드래곤스킨',   rarity:'common',  icon:'🐉',
                   desc:'DEF+5, 피해 8% 감소' },
    shadow_cloak:{ name:'그림자 망토',  rarity:'common',  icon:'🌑',
                   desc:'처음 조우하는 적 HP 50% 감소' },
    wind_shoes:  { name:'윈드슈',       rarity:'common',  icon:'💨',
                   desc:'SPEED+2 (이동 거리 보너스)' },
    thief_finger:{ name:'도둑의 손가락',rarity:'common',  icon:'💰',
                   desc:'재화 드롭 +40%' },

    // ── 희귀 등급 ──────────────────────────────────────
    thunder_hammer:{ name:'천둥의 망치',rarity:'rare',    icon:'⚡',
                   desc:'5연격 시 번개 광역 (ATK×1.5)' },
    death_thorn: { name:'죽음의 가시',  rarity:'rare',    icon:'🌿',
                   desc:'10% 중독 (초당 4, 8초)' },
    protect_charm:{ name:'보호의 부적', rarity:'rare',    icon:'🛡',
                   desc:'HP+40, 체력 25% 이하 시 DEF+10 (10초)' },
    hourglass:   { name:'시간의 모래시계',rarity:'rare',  icon:'⏳',
                   desc:'보스 조우 시 적 속도 30% 감소 (30초)' },
    regen_stone: { name:'재생 돌',      rarity:'rare',    icon:'💎',
                   desc:'5초마다 HP 5 회복' },
    time_orb:    { name:'시간정지의 구',rarity:'rare',    icon:'🔮',
                   desc:'20초마다 0.5초 모든 적 정지' },
    tele_charm:  { name:'순간이동 부적',rarity:'rare',    icon:'✨',
                   desc:'적 처치 연속 3회마다 전방 8m 이동' },

    // ── 전설 등급 ──────────────────────────────────────
    holy_spear:  { name:'신성한 창',    rarity:'legend',  icon:'⚔',
                   desc:'ATK+3, 보스 대상 피해 +10%' },
    god_shield:  { name:'신의 방패',    rarity:'legend',  icon:'🛡',
                   desc:'DEF+15, 받은 피해 25% 반사' },
    fate_thread: { name:'운명의 실',    rarity:'legend',  icon:'🧵',
                   desc:'500m마다 ATK+1, 1000m마다 DEF+1' },
    infinite_step:{ name:'무한의 부주', rarity:'legend',  icon:'👟',
                   desc:'이동 중 주변 적에게 초당 5 피해' },
    dimension_key:{ name:'차원의 열쇠', rarity:'legend',  icon:'🗝',
                   desc:'보스 처치 후 존 거리 200m 스킵' },

    // ── 신화 등급 ──────────────────────────────────────
    infinity_sword:{ name:'무한의 검',  rarity:'myth',    icon:'🗡',
                   desc:'ATK+20, 연속 공격 시 피해 누적 최대 50%' },
    immortal_soul:{ name:'불멸의 영혼', rarity:'myth',    icon:'👼',
                   desc:'사망 1회 방지 (HP 100% 부활, 무적 4초)' },
    fate_dice:   { name:'운명의 주사위',rarity:'myth',    icon:'🎲',
                   desc:'매 30초마다 무작위 버프 5초 (ATK×2 또는 무적)' },
};

const rarityOrder = ['common', 'rare', 'legend', 'myth'];

// 등급 가중치 (보스: 높은 등급 보너스)
const WEIGHTS = {
    boss:     [20, 40, 30, 10],
    miniboss: [40, 40, 18, 2],
    elite:    [70, 28, 2,  0],
};

export function getRandomArtifact(rank) {
    const weights = WEIGHTS[rank] ?? WEIGHTS.elite;
    const total = weights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    let rarityIdx = 0;
    for (let i = 0; i < weights.length; i++) {
        r -= weights[i];
        if (r <= 0) { rarityIdx = i; break; }
    }
    const rarity = rarityOrder[rarityIdx];
    const pool = Object.keys(ARTIFACT_DEFS).filter(
        k => ARTIFACT_DEFS[k].rarity === rarity
    );
    if (!pool.length) return null;
    return pool[Math.floor(Math.random() * pool.length)];
}
