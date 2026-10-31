// 플레이어 클래스: 능력치, 애니메이션 상태, 기사 렌더링
import { FLOOR_Y, PLAYER_X, PLAYER_HALF } from './constants.js';
import { getStats } from './upgrade-data.js';
import { groundShadow, roundRect, outlined, shade } from './draw.js';

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

// 기사 그리기 (발 중심 기준, 오른쪽을 바라봄)
export function drawKnight(ctx, x, footY, o = {}) {
    const t = o.t ?? 0;
    const walk = !!o.walk;
    const [armA, swordA, lean, lunge] = attackPose(o.atk ?? 0);
    const hurt = o.hurt ?? 0;
    const dead = o.dead ?? 0;
    const flash = !!o.flash;

    const ph = t * 11;
    const bob = walk ? -Math.abs(Math.sin(ph)) * 2.5 : Math.sin(t * 3) * 0.8;
    const armor = flash ? '#ffd0d0' : '#5b7fbf';
    const steel = flash ? '#ffe8e8' : '#cfd9e6';

    groundShadow(ctx, x + lunge * 0.5, footY, 30 - dead * 4 + (walk ? Math.abs(Math.sin(ph)) * 3 : 0));

    ctx.save();
    if (o.blink) ctx.globalAlpha *= 0.45;
    ctx.translate(x + lunge - hurt * 4, footY);
    if (dead > 0) {
        // 뒤로 넘어지며 작게 튕김
        const fall = Math.min(1, dead * 1.25);
        const e = 1 - Math.pow(1 - fall, 3);
        ctx.translate(-e * 6, -Math.sin(Math.min(1, dead) * Math.PI) * 6 * (1 - fall * 0.5));
        ctx.rotate(-e * Math.PI / 2);
    }
    ctx.rotate(lean - hurt * 0.15);
    // 피격 시 찌그러짐
    const sq = 1 + hurt * 0.08;
    ctx.scale(sq, 1 / sq);
    ctx.translate(0, bob);

    // 망토 (뒤)
    const flutter = Math.sin(t * 7) * 2 + (walk ? -3 : 0);
    ctx.beginPath();
    ctx.moveTo(-5, -31);
    ctx.quadraticCurveTo(-13 + flutter, -18, -15 + flutter * 1.5, -6);
    ctx.lineTo(-7 + flutter * 0.5, -8);
    ctx.lineTo(-1, -14);
    ctx.closePath();
    outlined(ctx, flash ? '#ff9090' : '#b52a2a');

    // 뒷다리
    const legSwing = walk ? Math.sin(ph) * 4.5 : 0;
    _leg(ctx, -3 - legSwing, walk ? Math.max(0, -Math.cos(ph)) * 2.5 : 0, shade('#2b3a5c', -0.15));

    // 방패 (뒷팔)
    ctx.save();
    ctx.translate(-8, -21 + (walk ? Math.sin(ph) * 0.8 : 0));
    ctx.beginPath();
    ctx.moveTo(-5, -8); ctx.lineTo(5, -8); ctx.lineTo(5, 1);
    ctx.quadraticCurveTo(5, 7, 0, 10);
    ctx.quadraticCurveTo(-5, 7, -5, 1);
    ctx.closePath();
    outlined(ctx, flash ? '#ffb090' : '#8a4a24');
    ctx.strokeStyle = '#e0b040';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(0, -6); ctx.lineTo(0, 7); ctx.moveTo(-3.5, -1); ctx.lineTo(3.5, -1); ctx.stroke();
    ctx.restore();

    // 몸통
    roundRect(ctx, -8, -31, 16, 19, 5);
    const g = ctx.createLinearGradient(-8, 0, 8, 0);
    g.addColorStop(0, shade(armor, -0.25));
    g.addColorStop(0.6, armor);
    g.addColorStop(1, shade(armor, 0.25));
    outlined(ctx, g);
    // 가슴판 하이라이트
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.fillRect(1, -28, 4, 8);
    // 벨트
    ctx.fillStyle = '#3a2412';
    ctx.fillRect(-8, -16, 16, 3.5);
    ctx.fillStyle = '#f0c040';
    ctx.fillRect(-1.5, -16.5, 4, 4.5);

    // 앞다리
    _leg(ctx, 2 + legSwing, walk ? Math.max(0, Math.cos(ph)) * 2.5 : 0, '#2b3a5c');

    // 머리 (투구)
    ctx.save();
    ctx.translate(1, -40 + (walk ? Math.sin(ph * 2) * 0.4 : 0));
    // 깃털 장식
    ctx.strokeStyle = flash ? '#ffa0a0' : '#e8402a';
    ctx.lineCap = 'round';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-1, -9);
    ctx.quadraticCurveTo(-8, -15 + flutter * 0.3, -15 + flutter, -9);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,220,180,0.6)';
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(-2, -10);
    ctx.quadraticCurveTo(-8, -14 + flutter * 0.3, -12 + flutter, -10);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10.5, 0, Math.PI * 2);
    const hg = ctx.createRadialGradient(-3, -4, 2, 0, 0, 11);
    hg.addColorStop(0, '#ffffff');
    hg.addColorStop(0.35, steel);
    hg.addColorStop(1, shade('#cfd9e6', -0.35));
    outlined(ctx, hg);
    // 바이저
    roundRect(ctx, 0, -3, 11, 5.5, 2);
    ctx.fillStyle = '#1c2433';
    ctx.fill();
    ctx.fillStyle = '#9fe8ff';
    ctx.fillRect(5, -1.5, 3, 2);
    // 투구 장식띠
    ctx.strokeStyle = '#e0b040';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(0, 0, 10.5, Math.PI * 1.15, Math.PI * 1.75); ctx.stroke();
    ctx.restore();

    // 검을 든 팔
    ctx.save();
    ctx.translate(3, -27);
    const hx = -Math.sin(armA) * 9, hy = Math.cos(armA) * 9;
    ctx.strokeStyle = shade(armor, -0.1);
    ctx.lineCap = 'round';
    ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(hx, hy); ctx.stroke();
    ctx.translate(hx, hy);
    ctx.rotate(swordA);
    // 손잡이 + 가드
    ctx.fillStyle = '#5a3418';
    ctx.fillRect(-1.5, -1, 3, 6);
    ctx.fillStyle = '#e0b040';
    ctx.fillRect(-5, -3, 10, 2.5);
    // 칼날
    ctx.beginPath();
    ctx.moveTo(-2.2, -3); ctx.lineTo(-2.2, -22); ctx.lineTo(0, -26); ctx.lineTo(2.2, -22); ctx.lineTo(2.2, -3);
    ctx.closePath();
    const bg = ctx.createLinearGradient(-2, 0, 2, 0);
    bg.addColorStop(0, '#a8b4c4'); bg.addColorStop(0.5, '#ffffff'); bg.addColorStop(1, '#8894a8');
    outlined(ctx, bg, 'rgba(20,30,50,0.6)', 1);
    // 장갑
    ctx.fillStyle = steel;
    ctx.beginPath(); ctx.arc(0, 1.5, 2.6, 0, Math.PI * 2); ctx.fill();
    ctx.restore();

    ctx.restore();
}

function _leg(ctx, lx, lift, color) {
    roundRect(ctx, lx - 2.5, -14 - lift, 5.5, 11, 2);
    outlined(ctx, color);
    // 부츠
    roundRect(ctx, lx - 3, -4.5 - lift, 7.5, 4.5, 2);
    outlined(ctx, '#3a2414');
}
