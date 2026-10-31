// 유물 효과 적용 시스템
import { state } from './state.js';
import { ARTIFACT_DEFS } from './artifact-data.js';
import { STAGE_LEN } from './stages.js';

// 보스 조우 시 모래시계 효과
let hourglassActive = 0;
let timeOrbTimer = 20;
let timeOrbFrozen = 0;
let regenStoneTimer = 5;
let consecutiveKills = 0;
let fateTimer = 30;
let fateBuff = null;
let fateBuffTimer = 0;

// 패시브 유물 업데이트 (매 프레임)
export function updateArtifacts(player, dt) {
    const arts = state.artifacts;

    // 재생 돌: 5초마다 HP 5
    if (arts.includes('regen_stone')) {
        regenStoneTimer -= dt;
        if (regenStoneTimer <= 0) { player.heal(5); regenStoneTimer = 5; }
    }
    // 시간정지의 구: 20초마다 0.5초 정지
    if (arts.includes('time_orb')) {
        timeOrbTimer -= dt;
        if (timeOrbTimer <= 0 && timeOrbFrozen <= 0) {
            timeOrbFrozen = 0.5; timeOrbTimer = 20;
        }
        if (timeOrbFrozen > 0) timeOrbFrozen -= dt;
    }
    // 신의 방패: DEF 고정 보너스 → getStats에서 처리 생략, 여기서 HP 반사
    // 모래시계 쿨다운
    if (hourglassActive > 0) hourglassActive -= dt;
    // 운명의 주사위: 30초마다
    if (arts.includes('fate_dice')) {
        fateTimer -= dt;
        if (fateTimer <= 0) { applyFateDice(player); fateTimer = 30; }
    }
    if (fateBuffTimer > 0) {
        fateBuffTimer -= dt;
        if (fateBuffTimer <= 0) fateBuff = null;
    }
    // 운명의 실: 거리 기반
    if (arts.includes('fate_thread')) {
        player.atk = player.atk; // no-op; 실제 보너스는 stats 계산 시
    }
}

function applyFateDice(player) {
    const roll = Math.floor(Math.random() * 3);
    if (roll === 0) { fateBuff = 'atk'; fateBuffTimer = 5; }
    else if (roll === 1) { player.heal(player.maxHp * 0.3); }
    else { player.immune = 5; fateBuff = 'immune'; fateBuffTimer = 5; }
}

// 적중 시 유물 효과 적용 (combat.js에서 호출)
export function applyOnHit(dmg, enemy, player, stats) {
    const arts = state.artifacts;

    // 불꽃의 반지
    if (arts.includes('flame_ring') && Math.random() < 0.15) {
        dmg += Math.round(player.atk * 0.5);
    }
    // 천둥의 망치: 5연타마다
    if (arts.includes('thunder_hammer') && player.combo > 0 && player.combo % 5 === 0) {
        const bonus = Math.round(player.atk * 1.5);
        dmg += bonus;
        // 광역은 combat에서 처리 (단순화: 현재 적에게만)
    }
    // 죽음의 가시: 10% 중독 적용 (Enemy.burnTimer 세팅)
    if (arts.includes('death_thorn') && Math.random() < 0.10) {
        enemy.poisonTimer = 8; // 8초 지속 중독
        enemy._poisonDmg = 4;
    }
    // 신성한 창: 보스 보너스
    if (arts.includes('holy_spear')) {
        dmg += 3;
        if (enemy.rank === 'boss') dmg = Math.round(dmg * 1.1);
    }
    // 무한의 검: ATK+20 → getStats 처리, 콤보 보너스
    if (arts.includes('infinity_sword') && fateBuffTimer <= 0) {
        // 이미 comboBonus로 처리됨
    }
    // 운명의 주사위 ATK 버프
    if (fateBuff === 'atk') dmg = Math.round(dmg * 2);

    // on-hit 슬로우 (slowChance)
    if (stats.slowChance && Math.random() < stats.slowChance) {
        enemy.slowTimer = 2.0;
    }
    // on-hit 스턴 (stunChance)
    if (stats.stunChance && Math.random() < stats.stunChance) {
        enemy.stunTimer = 1.0;
    }
    // on-hit 독 (poisonChance)
    if (stats.poisonChance && Math.random() < stats.poisonChance) {
        enemy.poisonTimer = 5;
        enemy._poisonDmg = 5;
    }

    return dmg;
}

// 보스 조우 시 호출 (모래시계 효과)
export function onBossEncounter(enemies) {
    if (!state.artifacts.includes('hourglass') || hourglassActive > 0) return;
    hourglassActive = 30;
    // 속도를 30초간 절반으로
    for (const e of enemies) e.spd *= 0.7;
}

// 순간이동 부적: 연속 처치 카운터
export function onEnemyKill() {
    consecutiveKills++;
    if (state.artifacts.includes('tele_charm') && consecutiveKills % 3 === 0) {
        // 전방 20m 이동 (보스 관문은 넘지 않음)
        const end = (Math.floor(state.distance / STAGE_LEN) + 1) * STAGE_LEN;
        state.distance = Math.min(state.distance + 20, end - 1);
    }
}

export { timeOrbFrozen };
