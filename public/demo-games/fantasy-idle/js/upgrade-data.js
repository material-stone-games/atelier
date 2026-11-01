// 업그레이드 트리 데이터 (브랜치 정의 + 스탯 계산)
import { state } from './state.js';
import { UPGRADES } from './upgrade-nodes.js';

export { UPGRADES };

// 방향별 브랜치 (angle: 레이블 위치용, 겹침 해결됨)
export const BRANCHES = {
    ATK:  { label:'전투',   angle: -45,  color:'#ff6040' },
    DEF:  { label:'수비',   angle:-135,  color:'#4080ff' },
    SPD:  { label:'속도',   angle:   0,  color:'#40dddd' },
    SURV: { label:'생존',   angle: -90,  color:'#40e040' },
    HIT:  { label:'적중',   angle:  45,  color:'#e0a030' }, // 90° → 45°
    PER:  { label:'지속',   angle: 135,  color:'#c040c0' },
    FORT: { label:'재화',   angle: 180,  color:'#f5c518' },
    REL:  { label:'유물',   angle:  90,  color:'#c0c0ff' }, // -90° → 90°
};

// 기본 스탯 기준값
const BASE = {
    maxHp:100, atk:8, def:2, atkSpd:1.5,
    lifesteal:0, hpRegen:0,
    critChance:0, critDmg:0, multiHit:1,
    slowChance:0, burnChance:0, stunChance:0, poisonChance:0,
    goldMult:1, auraDmg:0, debuffAtk:0, reflect:0,
    artifactDropBonus:0,
    // 사이드 브랜치 신규 필드
    counterChance:0, counterMult:1, minDmgReduction:0,
    evadeChance:0, burstChance:0,
    goldRange:0, goldPerDmg:0,
    statusDmg:0, statusSpread:0,
    auraSlowPct:0, artifactUpgrade:0, bonusArtifactSlot:0,
    comboBonus:false,
};

// 현재 업그레이드 + 유물 영구 스탯 계산
export function getStats() {
    const s = { ...BASE };
    for (const uid of state.upgrades) {
        const up = UPGRADES.find(u => u.id === uid);
        if (up) up.effect(s);
    }
    const arts = state.artifacts;
    if (arts.includes('dragon_skin'))    { s.def += 5; }
    if (arts.includes('protect_charm'))  { s.maxHp += 40; }
    if (arts.includes('holy_spear'))     { s.atk += 3; }
    if (arts.includes('god_shield'))     { s.def += 15; }
    if (arts.includes('infinity_sword')) { s.atk += 20; s.comboBonus = true; }
    if (arts.includes('thief_finger'))   { s.goldMult += 0.4; }
    if (arts.includes('wind_shoes'))     { s.goldMult += 0.1; }
    return s;
}

// 해금 조건: requires 배열의 모든 선행 노드 보유 시 해금
export function canUnlock(upgrade) {
    if (!upgrade.requires || upgrade.requires.length === 0) return true;
    return upgrade.requires.every(rid => state.upgrades.includes(rid));
}
