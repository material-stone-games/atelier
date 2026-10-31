// 업그레이드 노드 정의 (8브랜치 메인 40개 + 사이드 16개)
// gx, gy: 루트 기준 그리드 좌표 / requires: 선행 노드 ID 배열

export const UPGRADES = [
    // ── ATK 브랜치 (우상향 대각선) ────────────────────────
    { id:'ATK1',   branch:'ATK',  gx:1,  gy:-1, requires:[],          name:'기본 공격력', cost:10,  desc:'+3 ATK',              effect: s => { s.atk+=3; } },
    { id:'ATK2',   branch:'ATK',  gx:2,  gy:-2, requires:['ATK1'],    name:'공격력 강화', cost:25,  desc:'+6 ATK',              effect: s => { s.atk+=6; } },
    { id:'ATK3',   branch:'ATK',  gx:3,  gy:-3, requires:['ATK2'],    name:'강타',        cost:50,  desc:'+10 ATK',             effect: s => { s.atk+=10; } },
    { id:'ATK4',   branch:'ATK',  gx:4,  gy:-4, requires:['ATK3'],    name:'관통 공격',   cost:100, desc:'+15 ATK',             effect: s => { s.atk+=15; } },
    { id:'ATK5',   branch:'ATK',  gx:5,  gy:-5, requires:['ATK4'],    name:'살인마',      cost:200, desc:'+25 ATK, 크리 15%',   effect: s => { s.atk+=25; s.critChance+=0.15; } },
    // ATK 사이드 (ATK2에서 분기, 오른쪽)
    { id:'ATK_S1', branch:'ATK',  gx:3,  gy:-2, requires:['ATK2'],    name:'치명 예리',   cost:75,  desc:'크리확률 +8%',        effect: s => { s.critChance+=0.08; } },
    { id:'ATK_S2', branch:'ATK',  gx:4,  gy:-2, requires:['ATK_S1'],  name:'처형자',      cost:150, desc:'크리대미지 +60%',     effect: s => { s.critDmg+=0.60; } },

    // ── DEF 브랜치 (좌상향 대각선) ────────────────────────
    { id:'DEF1',   branch:'DEF',  gx:-1, gy:-1, requires:[],          name:'기본 방어',   cost:10,  desc:'+2 DEF +10 HP',       effect: s => { s.def+=2; s.maxHp+=10; } },
    { id:'DEF2',   branch:'DEF',  gx:-2, gy:-2, requires:['DEF1'],    name:'무거운 갑옷', cost:25,  desc:'+4 DEF +25 HP',       effect: s => { s.def+=4; s.maxHp+=25; } },
    { id:'DEF3',   branch:'DEF',  gx:-3, gy:-3, requires:['DEF2'],    name:'견고한 방패', cost:50,  desc:'+7 DEF +50 HP',       effect: s => { s.def+=7; s.maxHp+=50; } },
    { id:'DEF4',   branch:'DEF',  gx:-4, gy:-4, requires:['DEF3'],    name:'전설 갑옷',   cost:100, desc:'+10 DEF +100 HP',     effect: s => { s.def+=10; s.maxHp+=100; } },
    { id:'DEF5',   branch:'DEF',  gx:-5, gy:-5, requires:['DEF4'],    name:'신의 외투',   cost:200, desc:'+15 DEF +200 HP',     effect: s => { s.def+=15; s.maxHp+=200; } },
    // DEF 사이드 (DEF2에서 분기, 아래쪽)
    { id:'DEF_S1', branch:'DEF',  gx:-3, gy:-2, requires:['DEF2'],    name:'방패 반격',   cost:75,  desc:'반격 확률 +15%',      effect: s => { s.counterChance+=0.15; } },
    { id:'DEF_S2', branch:'DEF',  gx:-4, gy:-2, requires:['DEF_S1'],  name:'불굴의 요새', cost:150, desc:'최소 피해 1로 고정',  effect: s => { s.minDmgReduction=1; } },

    // ── SPD 브랜치 (오른쪽) ───────────────────────────────
    { id:'SPD1',   branch:'SPD',  gx:1,  gy:0,  requires:[],          name:'빠른 검술',   cost:10,  desc:'+0.5 SPD',            effect: s => { s.atkSpd+=0.5; } },
    { id:'SPD2',   branch:'SPD',  gx:2,  gy:0,  requires:['SPD1'],    name:'질풍',        cost:25,  desc:'+1.0 SPD',            effect: s => { s.atkSpd+=1.0; } },
    { id:'SPD3',   branch:'SPD',  gx:3,  gy:0,  requires:['SPD2'],    name:'초고속',      cost:50,  desc:'+1.5 SPD',            effect: s => { s.atkSpd+=1.5; } },
    { id:'SPD4',   branch:'SPD',  gx:4,  gy:0,  requires:['SPD3'],    name:'펄싱 검',     cost:100, desc:'+2.0 SPD, 2연타',     effect: s => { s.atkSpd+=2.0; s.multiHit=2; } },
    { id:'SPD5',   branch:'SPD',  gx:5,  gy:0,  requires:['SPD4'],    name:'시간 왜곡',   cost:200, desc:'+3.0 SPD, 3연타',     effect: s => { s.atkSpd+=3.0; s.multiHit=3; } },
    // SPD 사이드 (SPD2에서 분기, 아래쪽)
    { id:'SPD_S1', branch:'SPD',  gx:2,  gy:1,  requires:['SPD2'],    name:'날렵한 발놀림',cost:75, desc:'회피율 +10%',         effect: s => { s.evadeChance+=0.10; } },
    { id:'SPD_S2', branch:'SPD',  gx:3,  gy:1,  requires:['SPD_S1'],  name:'순간 가속',   cost:150, desc:'공속 버스트 +20%',    effect: s => { s.burstChance+=0.20; } },

    // ── SURV 브랜치 (위쪽) ────────────────────────────────
    { id:'SURV1',  branch:'SURV', gx:0,  gy:-1, requires:[],          name:'생명 빨기',   cost:10,  desc:'흡혈 5%',             effect: s => { s.lifesteal+=0.05; } },
    { id:'SURV2',  branch:'SURV', gx:0,  gy:-2, requires:['SURV1'],   name:'불멸의 피',   cost:25,  desc:'흡혈 10%, 회복 2/s',  effect: s => { s.lifesteal+=0.10; s.hpRegen+=2; } },
    { id:'SURV3',  branch:'SURV', gx:0,  gy:-3, requires:['SURV2'],   name:'회복 마법',   cost:50,  desc:'흡혈 15%, 회복 5/s',  effect: s => { s.lifesteal+=0.15; s.hpRegen+=5; } },
    { id:'SURV4',  branch:'SURV', gx:0,  gy:-4, requires:['SURV3'],   name:'불사신',      cost:100, desc:'흡혈 20%, 회복 10/s', effect: s => { s.lifesteal+=0.20; s.hpRegen+=10; } },
    { id:'SURV5',  branch:'SURV', gx:0,  gy:-5, requires:['SURV4'],   name:'영생의 약',   cost:200, desc:'흡혈 25%, 회복 15/s', effect: s => { s.lifesteal+=0.25; s.hpRegen+=15; } },
    // SURV 사이드 (SURV2에서 분기, 오른쪽)
    { id:'SURV_S1',branch:'SURV', gx:1,  gy:-2, requires:['SURV2'],   name:'강인한 체질', cost:75,  desc:'최대 HP +80',         effect: s => { s.maxHp+=80; } },
    { id:'SURV_S2',branch:'SURV', gx:1,  gy:-3, requires:['SURV_S1'], name:'피의 계약',   cost:150, desc:'흡혈 추가 +10%',      effect: s => { s.lifesteal+=0.10; } },

    // ── HIT 브랜치 (우하향 대각선) ────────────────────────
    { id:'HIT1',   branch:'HIT',  gx:1,  gy:1,  requires:[],          name:'서리 검',     cost:10,  desc:'15% 둔화',            effect: s => { s.slowChance+=0.15; } },
    { id:'HIT2',   branch:'HIT',  gx:2,  gy:2,  requires:['HIT1'],    name:'화염 독',     cost:25,  desc:'20% 점화',            effect: s => { s.burnChance+=0.20; } },
    { id:'HIT3',   branch:'HIT',  gx:3,  gy:3,  requires:['HIT2'],    name:'번개 충격',   cost:50,  desc:'25% 마비 1s',         effect: s => { s.stunChance+=0.25; } },
    { id:'HIT4',   branch:'HIT',  gx:4,  gy:4,  requires:['HIT3'],    name:'독 소용돌이', cost:100, desc:'30% 중독',            effect: s => { s.poisonChance+=0.30; } },
    { id:'HIT5',   branch:'HIT',  gx:5,  gy:5,  requires:['HIT4'],    name:'다원소 채찍', cost:200, desc:'모든 효과 +40%',      effect: s => { s.slowChance+=0.40; s.burnChance+=0.40; s.stunChance+=0.40; s.poisonChance+=0.40; } },
    // HIT 사이드 (HIT2에서 분기, 위쪽)
    { id:'HIT_S1', branch:'HIT',  gx:3,  gy:2,  requires:['HIT2'],    name:'원소 폭발',   cost:75,  desc:'상태이상 피해 +30%',  effect: s => { s.statusDmg+=0.30; } },
    { id:'HIT_S2', branch:'HIT',  gx:4,  gy:2,  requires:['HIT_S1'],  name:'혼돈의 연쇄', cost:150, desc:'상태이상 전염 20%',   effect: s => { s.statusSpread+=0.20; } },

    // ── PER 브랜치 (좌하향 대각선) ────────────────────────
    { id:'PER1',   branch:'PER',  gx:-1, gy:1,  requires:[],          name:'유령 형태',   cost:10,  desc:'이동 중 초당 2 피해', effect: s => { s.auraDmg+=2; } },
    { id:'PER2',   branch:'PER',  gx:-2, gy:2,  requires:['PER1'],    name:'어둠의 후광', cost:25,  desc:'근처 적 ATK -2',      effect: s => { s.debuffAtk+=2; } },
    { id:'PER3',   branch:'PER',  gx:-3, gy:3,  requires:['PER2'],    name:'거울 외피',   cost:50,  desc:'받은 피해 20% 반사',  effect: s => { s.reflect+=0.20; } },
    { id:'PER4',   branch:'PER',  gx:-4, gy:4,  requires:['PER3'],    name:'절대 방어',   cost:100, desc:'세 효과 강화',        effect: s => { s.auraDmg+=3; s.debuffAtk+=3; s.reflect+=0.10; } },
    { id:'PER5',   branch:'PER',  gx:-5, gy:5,  requires:['PER4'],    name:'무한 순환',   cost:200, desc:'지속효과 50% 강화',   effect: s => { s.auraDmg*=1.5; s.reflect*=1.5; } },
    // PER 사이드 (PER2에서 분기, 위쪽)
    { id:'PER_S1', branch:'PER',  gx:-3, gy:2,  requires:['PER2'],    name:'공포 오라',   cost:75,  desc:'오라 +3, 적 이속-20%',effect: s => { s.auraDmg+=3; s.auraSlowPct=0.20; } },
    { id:'PER_S2', branch:'PER',  gx:-4, gy:2,  requires:['PER_S1'],  name:'공허의 침식', cost:150, desc:'반사 피해 +50%',      effect: s => { s.reflect+=0.50; } },

    // ── FORT 브랜치 (왼쪽) ───────────────────────────────
    { id:'FORT1',  branch:'FORT', gx:-1, gy:0,  requires:[],          name:'탐욕의 손',   cost:10,  desc:'재화 +20%',           effect: s => { s.goldMult+=0.20; } },
    { id:'FORT2',  branch:'FORT', gx:-2, gy:0,  requires:['FORT1'],   name:'황금 입술',   cost:25,  desc:'재화 +40%',           effect: s => { s.goldMult+=0.40; } },
    { id:'FORT3',  branch:'FORT', gx:-3, gy:0,  requires:['FORT2'],   name:'재물신',      cost:50,  desc:'재화 +60%',           effect: s => { s.goldMult+=0.60; } },
    { id:'FORT4',  branch:'FORT', gx:-4, gy:0,  requires:['FORT3'],   name:'황금 골렘',   cost:100, desc:'재화 +100%',          effect: s => { s.goldMult+=1.00; } },
    { id:'FORT5',  branch:'FORT', gx:-5, gy:0,  requires:['FORT4'],   name:'금의 아들',   cost:200, desc:'재화 +150%',          effect: s => { s.goldMult+=1.50; } },
    // FORT 사이드 (FORT2에서 분기, 아래쪽)
    { id:'FORT_S1',branch:'FORT', gx:-2, gy:1,  requires:['FORT2'],   name:'약삭빠른 거래',cost:75, desc:'재화 범위 +30%',      effect: s => { s.goldRange+=0.30; } },
    { id:'FORT_S2',branch:'FORT', gx:-3, gy:1,  requires:['FORT_S1'], name:'황금 손길',   cost:150, desc:'피해 시 골드 0.5G',   effect: s => { s.goldPerDmg+=0.5; } },

    // ── REL 브랜치 (아래쪽) ──────────────────────────────
    { id:'REL1',   branch:'REL',  gx:0,  gy:1,  requires:[],          name:'마법의 자루', cost:10,  desc:'유물 드롭 +10%',      effect: s => { s.artifactDropBonus+=0.10; } },
    { id:'REL2',   branch:'REL',  gx:0,  gy:2,  requires:['REL1'],    name:'신비의 궤짝', cost:25,  desc:'유물 드롭 +20%',      effect: s => { s.artifactDropBonus+=0.20; } },
    { id:'REL3',   branch:'REL',  gx:0,  gy:3,  requires:['REL2'],    name:'전설 보물상자',cost:50, desc:'유물 드롭 +35%',      effect: s => { s.artifactDropBonus+=0.35; } },
    { id:'REL4',   branch:'REL',  gx:0,  gy:4,  requires:['REL3'],    name:'차원의 문',   cost:100, desc:'유물 드롭 +50%',      effect: s => { s.artifactDropBonus+=0.50; } },
    { id:'REL5',   branch:'REL',  gx:0,  gy:5,  requires:['REL4'],    name:'신의 축복',   cost:200, desc:'유물 드롭 +100%',     effect: s => { s.artifactDropBonus+=1.00; } },
    // REL 사이드 (REL2에서 분기, 오른쪽)
    { id:'REL_S1', branch:'REL',  gx:1,  gy:2,  requires:['REL2'],    name:'유물 감정사', cost:75,  desc:'유물 티어 상승 20%',  effect: s => { s.artifactUpgrade+=0.20; } },
    { id:'REL_S2', branch:'REL',  gx:1,  gy:3,  requires:['REL_S1'],  name:'고대 수집가', cost:150, desc:'보너스 유물 슬롯 +1', effect: s => { s.bonusArtifactSlot=1; } },
];
