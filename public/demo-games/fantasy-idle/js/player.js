// 플레이어 클래스: 능력치, 애니메이션 상태, 기사 렌더링
import { FLOOR_Y, PLAYER_X, PLAYER_HALF } from './constants.js';
import { getStats } from './upgrade-data.js';
import { drawKnightPix } from './pixel-actors.js';

export class Player {
    constructor() {
        this.x = PLAYER_X;
        this.y = FLOOR_Y;
        this.w = PLAYER_HALF * 2;
        this.h = 46;
        this.atkCooldown = 0;
        this.hitFlash = 0;  // 피격 깜박임 타이머
        this.dead = false;
        this.deadT = 0;     // 사망 후 경과 시간
        this.immune = 0;    // 무적 시간 (불멸의 영혼 유물)
        this.reborn = false;
        this.combo = 0;     // 연속 공격 콤보
        this.comboTimer = 0;
        // 애니메이션
        this.t = 0;
        this.walking = false;
        this.atkAnim = 0;   // 0이면 공격 중 아님, 0~1 진행도
        this.atkDur = 0.3;
        this.hurt = 0;
        this._initStats();
    }

    _initStats() {
        const s = getStats();
        this.maxHp = s.maxHp;
        this.hp    = this.maxHp;
        this.atk   = s.atk;
        this.def   = s.def;
        this.atkSpd= s.atkSpd;
        this.lifesteal = s.lifesteal;
        this.hpRegen   = s.hpRegen;
        this.critChance= s.critChance;
        this.multiHit  = s.multiHit;
    }

    get front() { return this.x + PLAYER_HALF; }

    update(dt) {
        this.t += dt;
        if (this.dead) { this.deadT += dt; return; }
        if (this.hitFlash > 0) this.hitFlash -= dt;
        if (this.hurt > 0) this.hurt -= dt;
        if (this.immune > 0) this.immune -= dt;
        if (this.atkCooldown > 0) this.atkCooldown -= dt;
        if (this.atkAnim > 0) {
            this.atkAnim += dt / this.atkDur;
            if (this.atkAnim >= 1) this.atkAnim = 0;
        }
        if (this.comboTimer > 0) {
            this.comboTimer -= dt;
        } else {
            this.combo = 0;
        }
        // HP 자연 회복
        if (this.hp < this.maxHp) {
            this.hp = Math.min(this.maxHp, this.hp + this.hpRegen * dt);
        }
    }

    // 실제 입은 피해를 반환 (0이면 무시됨)
    takeDamage(amount) {
        if (this.immune > 0 || this.dead) return 0;
        const dmg = Math.max(1, Math.round(amount - this.def));
        this.hp -= dmg;
        this.hitFlash = 0.12;
        this.hurt = 0.22;
        return dmg;
    }

    heal(amount) {
        this.hp = Math.min(this.maxHp, this.hp + amount);
    }

    canAttack() {
        return this.atkCooldown <= 0 && this.atkAnim === 0;
    }

    // 휘두르기 시작 (실제 타격은 칼이 내려오는 순간 combat에서 처리)
    doAttack() {
        this.atkCooldown = 1 / this.atkSpd;
        this.atkDur = Math.min(0.32, 0.85 / this.atkSpd);
        this.atkAnim = 0.0001;
        this.combo++;
        this.comboTimer = 2.0;
    }

    render(ctx) {
        drawKnight(ctx, this.x, this.y, {
            t: this.t,
            walk: this.walking && !this.dead,
            atk: this.atkAnim,
            hurt: Math.max(0, this.hurt) / 0.22,
            flash: this.hitFlash > 0,
            dead: this.dead ? Math.min(1, this.deadT / 0.55) : 0,
            blink: this.immune > 0 && Math.floor(this.t * 14) % 2 === 0,
        });
    }
}

export const STRIKE_AT = 0.45; // 공격 진행도 중 칼이 적에게 닿는 지점

const lerp = (a, b, p) => a + (b - a) * p;

// 공격 진행도 → [팔 각도, 검 각도, 몸 기울기, 전진]
function attackPose(p) {
    if (p <= 0) return [-0.3, 0.6, 0, 0];
    if (p < 0.4) {
        const k = 1 - Math.pow(1 - p / 0.4, 2);
        return [lerp(-0.3, 2.3, k), lerp(0.6, -0.9, k), lerp(0, -0.12, k), lerp(0, -2, k)];
    }
    if (p < 0.6) {
        const k = (p - 0.4) / 0.2;
        return [lerp(2.3, -1.3, k), lerp(-0.9, 2.4, k), lerp(-0.12, 0.18, k), lerp(-2, 6, k)];
    }
    const k = (p - 0.6) / 0.4;
    const e = k * k * (3 - 2 * k);
    return [lerp(-1.3, -0.3, e), lerp(2.4, 0.6, e), lerp(0.18, 0, e), lerp(6, 0, e)];
}

// 기사 그리기 (발 중심 기준, 오른쪽을 바라봄) — 픽셀아트
export function drawKnight(ctx, x, footY, o = {}) {
    const [armA, swordA, lean, lunge] = attackPose(o.atk ?? 0);
    drawKnightPix(ctx, x, footY, { ...o, armA, swordA, lean, lunge });
}
