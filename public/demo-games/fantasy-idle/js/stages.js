// 스테이지 구성: 6지역 × 5스테이지, 3번째 끝에 중간 보스, 5번째 끝에 지역 보스
export const STAGE_LEN = 250;          // 스테이지 하나의 길이(m)
export const STAGES_PER_REGION = 5;
export const MINI_STAGE = 2;           // 지역 내 0부터 센 중간 보스 스테이지
export const BOSS_STAGE = 4;           // 지역 내 0부터 센 지역 보스 스테이지

// mini/boss: { id, name?, size?, hp?, atk? } — 일반 적 정의를 보스로 키워 쓸 때 배율 지정
export const REGIONS = [
    { name: '초원', normals: ['slime', 'goblin', 'bat'], elites: ['gob_chief'],
      mini: { id: 'gob_chief', name: '고블린 족장', size: 1.25, hp: 3 },
      boss: { id: 'troll', name: '트롤 대장', size: 1.2 } },
    { name: '숲', normals: ['spirit', 'mushroom', 'bat'], elites: ['poison_slime'],
      mini: { id: 'poison_slime', name: '거대 독 슬라임', size: 1.6, hp: 4 },
      boss: { id: 'forest_giant' } },
    { name: '사막', normals: ['scorpion', 'skeleton', 'orc'], elites: ['skel_archer'],
      mini: { id: 'skel_archer', name: '해골 저격수', size: 1.3, hp: 4 },
      boss: { id: 'orc_warrior', name: '오크 대장', size: 1.6, hp: 7, atk: 1.4 } },
    { name: '화산', normals: ['fire_bat', 'lava_golem', 'orc'], elites: ['orc_warrior'],
      mini: { id: 'fire_mage' },
      boss: { id: 'ancient_dragon' } },
    { name: '설원', normals: ['yeti', 'ice_spirit', 'frost_wolf'], elites: ['ice_golem'],
      mini: { id: 'ice_wraith' },
      boss: { id: 'frost_giant' } },
    { name: '어둠의 땅', normals: ['shadow_knight', 'wraith', 'void_bat'], elites: ['death_knight'],
      mini: { id: 'lich' },
      boss: { id: 'shadow_lord' } },
];

export const TOTAL_STAGES = REGIONS.length * STAGES_PER_REGION;
export const FINAL_STAGE = TOTAL_STAGES - 1;

export function stageAt(dist) {
    return Math.min(FINAL_STAGE, Math.max(0, Math.floor(dist / STAGE_LEN)));
}
export const regionIndex = stage => Math.floor(stage / STAGES_PER_REGION);
export const regionOf = stage => REGIONS[regionIndex(stage)];
export const stageLabel = stage => `${regionIndex(stage) + 1}-${(stage % STAGES_PER_REGION) + 1}`;

// 이 스테이지 끝에 나오는 보스 ('mini' | 'boss' | null)
export function stageBossKind(stage) {
    const s = stage % STAGES_PER_REGION;
    return s === BOSS_STAGE ? 'boss' : s === MINI_STAGE ? 'mini' : null;
}

// 스테이지에 따른 적 강화 배율 (지역이 바뀌면 기본 능력치도 오르므로 완만하게)
export function stageScale(stage) {
    return {
        hp: Math.pow(1.09, stage),
        atk: Math.pow(1.05, stage),
        def: Math.pow(1.03, stage),
        drop: Math.pow(1.10, stage),
    };
}
