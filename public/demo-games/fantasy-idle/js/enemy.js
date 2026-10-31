// Enemy 클래스: 정면 대치 위치 잡기, 공격 모션, 특수효과, 피격/사망 연출
import { FLOOR_Y, MOVE_SPEED, SCROLL_PX, toScreen } from './constants.js';
import { ENEMY_DEFS } from './enemy-data.js';
import { state } from './state.js';
import { groundShadow } from './draw.js';
import { drawEnemyArt } from './enemy-art.js';
import { fx, addShake, addHitstop, spawnText, spawnProjectile, spawnRing } from './fx.js';

let _eid = 0;
const ATK_ANIM = 0.5;   // 공격 모션 길이(s)
const ATK_HIT_AT = 0.55; // 모션 중 타격 시점
export const DEATH_TIME = 0.55;

export class Enemy {
    constructor(id, x, scaleMult = 1) {
        const def = ENEMY_DEFS[id];
        this.id   = _eid++;
        this.type = id;
        this.def  = def;
        this.name = def.name;
        this.rank = def.rank;
        this.maxHp = Math.round(def.hp * scaleMult);
        this.hp   = this.maxHp;
        this.atk  = Math.round(def.atk * scaleMult);
        this.def2 = Math.round(def.def * scaleMult);  // def 이름 충돌 방지
        this.spd  = def.spd;
        this.drop = Math.round(def.drop * scaleMult);
        this.w    = def.w;
        this.h    = def.h;
        this.fly  = !!def.fly;
        this.special = def.special ?? null;
        this.color = def.color;

        this.x = x;
        this.baseY = this.fly ? FLOOR_Y - 46 - Math.random() * 20 : FLOOR_Y;
        this.y = this.baseY;

        this.atkTimer = 0.4 + Math.random() * 0.4;
        this.aoeCooldown = 5.0;
        this.poisonTimer = 0;
        this.stunTimer = 0;
        this.slowTimer  = 0;
        this.burnTimer  = 0;
        this.regenTimer = 0;
        this.hitFlash   = 0;
        this.seenByPlayer = false;  // 그림자망토 적용여부

        // 위치 잡기 (combat.arrangeEnemies에서 매 프레임 갱신)
        this.stopX = -Infinity;
        this.isFront = false;
        // 애니메이션
        this.t = Math.random() * 10;
        this.moving = true;
        this.atkAnim = 0;
        this.knock = 0;     // 피격 넉백 시각 오프셋
        this.squash = 0;
        this.hpTrail = this.hp;
        this.deathT = 0;
        this.spawnT = 0;
    }

    get left() { return this.x - this.w / 2; }
    get engaged() { return this.isFront && this.x - this.stopX < 2; }

    update(dt, player) {
        this.t += dt;
        this.spawnT += dt;
        if (this.hitFlash > 0) this.hitFlash -= dt;
        this.knock *= Math.pow(0.0005, dt);
        this.squash = Math.max(0, this.squash - dt * 6);
        this.hpTrail += (this.hp - this.hpTrail) * Math.min(1, dt * 4);
        if (this.fly) this.y = this.baseY + Math.sin(this.t * 3 + this.id) * 4;

        if (this.stunTimer > 0) { this.stunTimer -= dt; this.moving = false; return; }

        // 앞쪽 정지 위치까지 전진 (탐험 중에는 지면 스크롤도 함께)
        const spd = this.slowTimer > 0 ? this.spd * 0.5 : this.spd;
        if (this.slowTimer > 0) this.slowTimer -= dt;
        const scroll = state.inCombat ? 0 : MOVE_SPEED * SCROLL_PX;
        this.moving = this.x > this.stopX + 0.5 && this.atkAnim === 0;
        if (this.moving) this.x = Math.max(this.stopX, this.x - (spd + scroll) * dt);

        const dx = this.x - player.x;

        // 특수: 독 슬라임 독 데미지
        if (this.special === 'poison' && Math.abs(dx) < 60) {
            this.poisonTimer -= dt;
            if (this.poisonTimer <= 0) {
                hitPlayer(player, 3, { tick: true, color: '#90e040' });
                this.poisonTimer = 1.0;
            }
        }
        // 특수: 화염 마법사 오라
        if (this.special === 'aura' && Math.abs(dx) < 120) {
            this.poisonTimer -= dt;
            if (this.poisonTimer <= 0) {
                hitPlayer(player, 5, { tick: true, color: '#ff8020' });
                this.poisonTimer = 1.0;
            }
        }
        // 특수: 고대 용 독 오라
        if (this.special === 'poisonAura' && Math.abs(dx) < 200) {
            this.poisonTimer -= dt;
            if (this.poisonTimer <= 0) {
                hitPlayer(player, 4, { tick: true, color: '#90e040' });
                this.poisonTimer = 0.8;
            }
        }
        // 특수: 트롤 재생
        if (this.special === 'regen') {
            this.regenTimer -= dt;
            if (this.regenTimer <= 0) {
                this.hp = Math.min(this.maxHp, this.hp + 2);
                this.regenTimer = 1.0;
            }
        }
        // 특수: 광역 공격 (오크 전사)
        if (this.special === 'aoe') {
            this.aoeCooldown -= dt;
            if (this.aoeCooldown <= 0 && Math.abs(dx) < 150) {
                hitPlayer(player, this.atk * 0.8, { heavy: true });
                this.aoeCooldown = 5.0;
                spawnParticle(this.x, this.y, '#e88020', 12);
                spawnRing(this.x, FLOOR_Y, '#e88020', 120, 0.4, 4);
            }
        }
        // 숲의 거인 광역 스턴
        if (this.special === 'stun') {
            this.aoeCooldown -= dt;
            if (this.aoeCooldown <= 0 && Math.abs(dx) < 200) {
                hitPlayer(player, this.atk * 0.5, { heavy: true });
                spawnRing(this.x, FLOOR_Y, '#a0e060', 180, 0.5, 5);
                addShake(8);
                this.aoeCooldown = 3.0;
            }
        }

        // 공격 모션 진행 → 타격 순간에 피해
        if (this.atkAnim > 0) {
            const prev = this.atkAnim;
            this.atkAnim += dt / ATK_ANIM;
            if (prev < ATK_HIT_AT && this.atkAnim >= ATK_HIT_AT) this._strike(player);
            if (this.atkAnim >= 1) this.atkAnim = 0;
            return;
        }

        // 해골 궁수: 대열 뒤에서도 화살 발사
        const ranged = this.special === 'ranged' && !this.engaged && dx < 240;
        if (this.engaged || ranged) {
            this.atkTimer -= dt;
            if (this.atkTimer <= 0) {
                this.atkAnim = 0.0001;
                this.atkTimer = ranged ? 2.0 : 1.5;
            }
        }
    }

    _strike(player) {
        if (this.special === 'ranged' && !this.engaged) {
            const dmg = this.atk * 0.8;
            spawnProjectile(this.x - this.w * 0.5, this.y - this.h * 0.6, player.x + 4, player.y - 26, '#c8a878', 420,
                () => hitPlayer(player, dmg));
            return;
        }
        if (!this.engaged) return;
        const big = this.rank === 'boss' || this.rank === 'miniboss';
        hitPlayer(player, this.atk, { heavy: big });
        spawnParticle(player.front + 2, player.y - 24, '#ffffff', 5);
    }

    takeDamage(dmg, crit = false) {
        this.hp -= dmg;
        this.hitFlash = 0.1;
        const heavy = this.rank === 'boss' ? 0.3 : this.rank === 'miniboss' ? 0.6 : 1;
        this.knock = Math.max(this.knock, (crit ? 12 : 6) * heavy);
        this.squash = 1;
        // 리치: 피격 시 HP 회복
        if (this.special === 'lifesteal') {
            this.hp = Math.min(this.maxHp, this.hp + Math.round(dmg * 0.2));
        }
    }

    get alive() { return this.hp > 0; }

    render(ctx) {
        const dying = this._dead ? Math.min(1, this.deathT / DEATH_TIME) : 0;
        const appear = Math.min(1, this.spawnT / 0.25);
        // 공격 모션 전진/후퇴 오프셋 (왼쪽이 앞)
        const a = this.atkAnim;
        let lunge = 0;
        if (a > 0 && this.engaged) {
            if (a < 0.5) lunge = (a / 0.5) * 5;
            else if (a < 0.62) lunge = 5 - ((a - 0.5) / 0.12) * 15;
            else lunge = -10 * (1 - (a - 0.62) / 0.38);
        }
        const x = this.x + this.knock + lunge;

        groundShadow(ctx, x, FLOOR_Y, this.w * (this.fly ? 0.7 : 1.1) * (1 - dying * 0.6), this.fly ? 0.2 : 0.35);

        ctx.save();
        ctx.translate(x, this.y);
        if (dying > 0) {
            // 뒤로 튕겨나가며 회전·소멸
            const d = dying;
            ctx.translate(d * 26, -Math.sin(d * Math.PI) * 26);
            ctx.rotate(d * 1.4);
            ctx.globalAlpha = 1 - d * d;
            const s = 1 - d * 0.35;
            ctx.scale(s, s);
        }
        const sq = this.squash * 0.18;
        ctx.scale((1 + sq) * appear, (1 - sq) * (0.6 + 0.4 * appear));
        const flash = this.hitFlash > 0 || (dying > 0 && dying < 0.15);
        drawEnemyArt(ctx, this, this.t, flash, a, this.moving);
        ctx.restore();

        if (this._dead) return;

        // HP바 (피해 잔상 포함)
        const top = this.y - this.h - (this.rank === 'boss' ? 20 : 10);
        if (this.hp < this.maxHp) {
            const bw = Math.max(26, this.w + 6);
            const bx = this.x - bw / 2;
            ctx.fillStyle = 'rgba(0,0,0,0.6)';
            ctx.fillRect(bx - 1, top - 1, bw + 2, 6);
            ctx.fillStyle = '#fff0b0';
            ctx.fillRect(bx, top, bw * Math.max(0, this.hpTrail / this.maxHp), 4);
            ctx.fillStyle = '#e04040';
            ctx.fillRect(bx, top, bw * Math.max(0, this.hp / this.maxHp), 4);
        }
        // 보스 이름
        if (this.rank === 'boss' || this.rank === 'miniboss') {
            ctx.fillStyle = this.rank === 'boss' ? '#ffcc00' : '#ff8800';
            ctx.font = 'bold 10px monospace';
            ctx.textAlign = 'center';
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'rgba(0,0,0,0.7)';
            ctx.strokeText(this.name, this.x, top - 4);
            ctx.fillText(this.name, this.x, top - 4);
            ctx.textAlign = 'left';
        }
    }
}

// 플레이어 피격 공통 처리 (피해량·연출)
export function hitPlayer(player, amount, o = {}) {
    const dmg = player.takeDamage(amount);
    if (!dmg) return 0;
    const p = toScreen(player.x + (Math.random() - 0.5) * 10, player.y - 52);
    spawnText(p.x, p.y, `-${dmg}`, o.color ?? '#ff5050', o.tick ? 11 : 15);
    if (o.tick) {
        fx.hurtFlash = Math.max(fx.hurtFlash, 0.2);
        return dmg;
    }
    const ratio = dmg / player.maxHp;
    fx.hurtFlash = Math.min(1, Math.max(fx.hurtFlash, 0.35 + ratio * 3));
    addShake(o.heavy ? 8 : 3 + ratio * 20);
    if (o.heavy || ratio > 0.12) addHitstop(0.06);
    spawnParticle(player.x + 6, player.y - 26, '#ff4040', 6);
    return dmg;
}

function spawnParticle(x, y, color, n) {
    for (let i = 0; i < n; i++) {
        state.particles.push({
            x, y, vx: (Math.random() - 0.5) * 120, vy: -Math.random() * 80 - 20,
            life: 0.5, maxLife: 0.5, color, size: 3,
        });
    }
}
