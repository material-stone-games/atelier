// 전투 시스템: 대열 배치, 자동 공격, 데미지 계산, 스폰, 파티클
import { W, FLOOR_Y, MELEE_REACH, ENEMY_SPAWN_DIST, BOSS_INTERVAL, ENEMY_SPAWN_RATE, toScreen } from './constants.js';
import { state, savePersist } from './state.js';
import { Enemy, DEATH_TIME } from './enemy.js';
import { pickEnemy, getBossId, getMiniBossId } from './enemy-data.js';
import { getStats } from './upgrade-data.js';
import { applyOnHit } from './artifacts.js';
import { STRIKE_AT } from './player.js';
import { fx, addShake, addHitstop, spawnSlash, spawnRing, spawnCoins, spawnText } from './fx.js';

// 현재 존 번호 (1~3)
function currentZone() {
    if (state.distance < 1000) return 1;
    if (state.distance < 2000) return 2;
    return 3;
}

// 스케일 배수 (거리에 따른 적 강화)
function scaleMult() {
    return 1 + state.distance * 0.0003;
}

// 보스 스폰 여부 확인
function trySpawnBoss() {
    const milestone = Math.floor(state.distance / BOSS_INTERVAL);
    if (milestone > 0 && state.prevBossDist < milestone && !state.bossActive) {
        state.prevBossDist = milestone;
        const zone = currentZone();
        const isMini = milestone % 2 === 1;
        const id = isMini ? getMiniBossId(zone) : getBossId(zone);
        const boss = new Enemy(id, W + 60, scaleMult() * (isMini ? 1.2 : 1.5));
        state.enemies.push(boss);
        state.bossActive = true;
        addShake(6);
        spawnText(W / 2, 120, isMini ? `⚠ ${boss.name} 등장!` : `☠ 보스 ${boss.name} 등장!`, isMini ? '#ffaa40' : '#ff4040', 20);
    }
}

// 일반/엘리트 적 스폰
let spawnAccum = 0;
export function updateSpawn(dt) {
    // 전투 중이면 스폰 누적 정지
    if (!state.inCombat) spawnAccum += dt * ENEMY_SPAWN_RATE;
    if (spawnAccum >= ENEMY_SPAWN_DIST && !state.bossActive) {
        spawnAccum = 0;
        const zone = currentZone();
        const r = Math.random();
        const rank = r < 0.15 ? 'elite' : 'normal';
        const id = pickEnemy(zone, rank);
        if (id) {
            const e = new Enemy(id, W + 40 + Math.random() * 80, scaleMult());
            state.enemies.push(e);
        }
    }
    trySpawnBoss();
}

// 적을 지상/공중 줄로 나눠 플레이어 정면부터 차례로 세움 (겹침 방지)
export function arrangeEnemies(player) {
    for (const lane of [false, true]) {
        const list = state.enemies
            .filter(e => e.alive && e.fly === lane)
            .sort((a, b) => a.x - b.x);
        let limit = player.front + 4;
        list.forEach((e, i) => {
            // 날개 달린 적은 날개폭만큼 더 떨어져서 정지
            e.stopX = limit + e.w / 2 + (lane ? e.w * 0.6 : 0);
            e.isFront = i === 0;
            limit = Math.max(e.x, e.stopX) + e.w / 2 + 6;
        });
    }
}

function findTarget(player) {
    return state.enemies
        .filter(e => e.alive && e.left <= player.front + 4 + MELEE_REACH)
        .sort((a, b) => a.x - b.x)[0];
}

let lastAtk = 0;
let swingTarget = null;

export function resetCombat() {
    lastAtk = 0;
    swingTarget = null;
    spawnAccum = 0;
}

// 자동 공격
export function updateCombat(player, dt) {
    const stats = getStats();
    const goldMult = stats.goldMult;

    // 휘두르기 시작
    if (!player.dead && player.canAttack() && findTarget(player)) {
        player.doAttack();
        swingTarget = findTarget(player);
    }

    // 칼이 내려오는 순간 타격
    const cur = player.atkAnim;
    const crossed = (lastAtk < STRIKE_AT && cur >= STRIKE_AT) || (lastAtk > 0 && lastAtk < STRIKE_AT && cur === 0);
    lastAtk = cur;
    if (crossed) {
        const target = swingTarget?.alive ? swingTarget : findTarget(player);
        if (target) _strike(player, target, stats);
    }

    // 적 사망 처리
    for (const e of state.enemies) {
        if (!e.alive && !e._dead) {
            e._dead = true;
            e.deathT = 0;
            const earned = Math.round(e.drop * goldMult);
            state.gold += earned;
            state.sessionGold += earned;
            state.sessionKills++;
            state.totalKills++;
            const big = e.rank === 'boss' || e.rank === 'miniboss';
            const cy = e.y - e.h * 0.5;
            const sc = toScreen(e.x, cy), st = toScreen(e.x, e.y - e.h - 8);
            spawnCoins(sc.x, sc.y, Math.min(12, 2 + Math.ceil(earned / 4)));
            spawnText(st.x, st.y, `+${earned}G`, '#ffd84a', big ? 16 : 12);
            spawnParticle(e.x, cy, e.color, big ? 30 : 14, 1.6);
            spawnParticle(e.x, cy, '#ffffff', big ? 12 : 5, 1.3);
            spawnRing(e.x, cy, '#ffffff', big ? 90 : 34, 0.3, 3);
            addShake(big ? 12 : 3);
            addHitstop(big ? 0.18 : 0.05);
            if (big) {
                fx.slowmo = 0.7;
                state.bossActive = false;
                tryDropArtifact(e.rank, stats);
                if (e.type === 'shadow_lord') state.cleared = true;
            }
            // 불꽃 박쥐 폭발
            if (e.special === 'explode') {
                player.takeDamage(e.atk * 1.2);
                fx.hurtFlash = Math.max(fx.hurtFlash, 0.5);
                spawnParticle(e.x, e.y, '#ff6020', 20, 1.5);
                spawnRing(e.x, e.y - e.h / 2, '#ff8020', 60, 0.35, 5);
                addShake(7);
            }
            savePersist();
        }
        if (e._dead) e.deathT += dt;
    }
    // 사망 연출이 끝난 적 제거
    state.enemies = state.enemies.filter(e => !e._dead || e.deathT < DEATH_TIME);
}

function _strike(player, target, stats) {
    const hits = player.multiHit;
    const fy = target.y - target.h * 0.5;
    let anyCrit = false;
    for (let h = 0; h < hits; h++) {
        const isCrit = Math.random() < player.critChance;
        anyCrit ||= isCrit;
        let dmg = Math.max(1, player.atk - target.def2);
        if (isCrit) dmg = Math.round(dmg * 1.6);

        // 콤보 보너스 (무한의 검 유물 or comboBonus 업그레이드)
        const hasCombo = stats.comboBonus || state.artifacts.includes('infinity_sword');
        const comboBonus = hasCombo ? Math.min(0.5, player.combo * 0.03) : 0;
        dmg = Math.round(dmg * (1 + comboBonus));

        // 유물 on-hit 효과
        dmg = applyOnHit(dmg, target, player, stats);

        target.takeDamage(dmg, isCrit);

        // 흡혈
        if (player.lifesteal > 0) {
            player.heal(dmg * player.lifesteal);
        }

        spawnDmgText(target.x + (h - (hits - 1) / 2) * 12, target.y - target.h - h * 10, dmg, isCrit);
        spawnParticle(target.left + 4, fy, isCrit ? '#ffcc00' : '#ffffff', isCrit ? 10 : 5);
    }
    spawnSlash(target.left + 2, fy, anyCrit ? '#ffd040' : '#bfe8ff', anyCrit ? 30 : 22, 1);
    if (anyCrit) {
        spawnRing(target.left + 4, fy, '#ffd040', 36, 0.25, 3);
        addShake(5);
        addHitstop(0.06);
    } else {
        addShake(1.5);
        if (player.atkSpd < 4) addHitstop(0.025);
    }
}

// 유물 드롭 시도
function tryDropArtifact(rank, stats) {
    const base = rank === 'boss' ? 1.0 : (rank === 'miniboss' ? 0.5 : 0.2);
    const chance = Math.min(1, base + (stats.artifactDropBonus ?? 0));
    if (Math.random() < chance) {
        const { getRandomArtifact } = globalThis.__fantasyImports ?? {};
        if (getRandomArtifact) {
            const a = getRandomArtifact(rank);
            if (a && !state.artifacts.includes(a)) {
                state.artifacts.push(a);
                spawnText(W / 2, 150, '✨ 유물 획득!', '#e0a0ff', 18);
            }
        }
    }
}

// 파티클 스폰 (speed: 퍼지는 세기)
export function spawnParticle(x, y, color, n, speed = 1, opts = {}) {
    for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        const sp = (40 + Math.random() * 90) * speed;
        state.particles.push({
            x, y,
            vx: Math.cos(a) * sp,
            vy: Math.sin(a) * sp - 40 * speed,
            life: opts.life ?? 0.6, maxLife: opts.life ?? 0.6,
            g: opts.g ?? 260,
            color, size: (opts.size ?? 2) + Math.random() * 2.5,
        });
    }
}

// 데미지 텍스트
function spawnDmgText(x, y, dmg, crit) {
    state.dmgTexts.push({ x, y, dmg, crit, life: 0.9, vy: crit ? -90 : -70, vx: (Math.random() - 0.3) * 30 });
}

// 파티클 & 텍스트 업데이트
export function updateEffects(dt) {
    for (const p of state.particles) {
        p.x += p.vx * dt; p.y += p.vy * dt;
        p.vy += (p.g ?? 120) * dt;
        p.vx *= 0.98;
        if (p.y > FLOOR_Y && p.vy > 0) { p.y = FLOOR_Y; p.vy *= -0.3; p.vx *= 0.7; }
        p.life -= dt;
    }
    state.particles = state.particles.filter(p => p.life > 0);

    for (const t of state.dmgTexts) {
        t.y += t.vy * dt; t.x += (t.vx ?? 0) * dt; t.vy *= 0.92; t.life -= dt;
    }
    state.dmgTexts = state.dmgTexts.filter(t => t.life > 0);
}

// 파티클 & 텍스트 렌더링
export function renderEffects(ctx) {
    for (const p of state.particles) {
        const a = p.life / p.maxLife;
        ctx.globalAlpha = Math.min(1, a * 1.5);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.size * (0.4 + 0.6 * a)), 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.globalAlpha = 1;

    ctx.textAlign = 'center';
    ctx.lineJoin = 'round';
    for (const t of state.dmgTexts) {
        const p = 1 - t.life / 0.9;
        const pop = p < 0.12 ? 0.5 + (p / 0.12) * 0.9 : 1.4 - Math.min(0.4, (p - 0.12) * 2);
        const size = Math.round((t.crit ? 18 : 13) * pop);
        ctx.globalAlpha = Math.min(1, t.life / 0.3);
        ctx.font = `bold ${size}px monospace`;
        ctx.lineWidth = 3.5;
        ctx.strokeStyle = t.crit ? '#5a1800' : 'rgba(0,0,0,0.85)';
        const label = t.crit ? `${t.dmg}!` : `${t.dmg}`;
        ctx.strokeText(label, t.x, t.y);
        ctx.fillStyle = t.crit ? '#ffdd30' : '#ffffff';
        ctx.fillText(label, t.x, t.y);
    }
    ctx.globalAlpha = 1;
    ctx.textAlign = 'left';
}
