// 스테이지 구성: 6지역 × 5스테이지, 3번째 끝에 중간 보스, 5번째 끝에 지역 보스
export const STAGE_LEN = 100;          // 스테이지 하나의 길이(m)
export const STAGES_PER_REGION = 5;
export const MINI_STAGE = 2;           // 지역 내 0부터 센 중간 보스 스테이지
export const BOSS_STAGE = 4;           // 지역 내 0부터 센 지역 보스 스테이지

// stages: 지역 내 스테이지별 등장 확률(%) — 스테이지마다 주력 적 하나가 가장 높은 확률을 가짐
//         지역 첫 스테이지에는 이전 지역의 적이 조금 섞여 넘어가는 느낌을 줌
// mini/boss: { id, name?, size?, hp?, atk? } — 일반 적 정의를 보스로 키워 쓸 때 배율 지정
export const REGIONS = [
    { name: '초원',
      stages: [
          { slime: 100 },
          { bat: 70, slime: 30 },
          { goblin: 50, bat: 30, slime: 20 },
          { goblin: 55, bat: 25, gob_chief: 10, slime: 10 },
          { goblin: 55, gob_chief: 25, bat: 20 },
      ],
      mini: { id: 'gob_chief', name: '고블린 족장', size: 1.25, hp: 3 },
      boss: { id: 'troll', name: '트롤 대장', size: 1.2 } },
    { name: '숲',
      stages: [
          { spirit: 70, slime: 30 },
          { mushroom: 55, spirit: 35, bat: 10 },
          { poison_slime: 45, mushroom: 35, spirit: 20 },
          { mushroom: 50, poison_slime: 30, spirit: 20 },
          { poison_slime: 50, mushroom: 30, gob_chief: 20 },
      ],
      mini: { id: 'poison_slime', name: '거대 독 슬라임', size: 1.6, hp: 4 },
      boss: { id: 'forest_giant' } },
    { name: '사막',
      stages: [
          { scorpion: 75, mushroom: 25 },
          { skeleton: 60, scorpion: 40 },
          { orc: 50, skeleton: 30, scorpion: 20 },
          { skel_archer: 45, orc: 35, skeleton: 20 },
          { orc: 55, skel_archer: 25, scorpion: 20 },
      ],
      mini: { id: 'skel_archer', name: '해골 저격수', size: 1.3, hp: 4 },
      boss: { id: 'orc_warrior', name: '오크 대장', size: 1.6, hp: 7, atk: 1.4 } },
    { name: '화산',
      stages: [
          { fire_bat: 70, orc: 30 },
          { lava_golem: 55, fire_bat: 45 },
          { orc_warrior: 40, lava_golem: 35, fire_bat: 25 },
          { lava_golem: 50, orc_warrior: 30, fire_bat: 20 },
          { orc_warrior: 55, lava_golem: 25, fire_bat: 20 },
      ],
      mini: { id: 'fire_mage' },
      boss: { id: 'ancient_dragon' } },
    { name: '설원',
      stages: [
          { ice_spirit: 70, lava_golem: 30 },
          { frost_wolf: 60, ice_spirit: 40 },
          { yeti: 50, frost_wolf: 30, ice_spirit: 20 },
          { ice_golem: 45, yeti: 35, frost_wolf: 20 },
          { yeti: 45, ice_golem: 35, frost_wolf: 20 },
      ],
      mini: { id: 'ice_wraith' },
      boss: { id: 'frost_giant' } },
    { name: '어둠의 땅',
      stages: [
          { wraith: 70, frost_wolf: 30 },
          { void_bat: 55, wraith: 45 },
          { shadow_knight: 50, void_bat: 25, wraith: 25 },
          { death_knight: 45, shadow_knight: 35, void_bat: 20 },
          { shadow_knight: 45, death_knight: 35, wraith: 20 },
      ],
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

// 스테이지 확률표에서 적 하나를 뽑음
export function pickStageEnemy(stage) {
    const table = regionOf(stage).stages[stage % STAGES_PER_REGION];
    const total = Object.values(table).reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    for (const [id, w] of Object.entries(table)) {
        if ((r -= w) < 0) return id;
    }
    return Object.keys(table)[0];
}

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
