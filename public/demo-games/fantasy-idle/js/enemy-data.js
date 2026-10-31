// 적 데이터 정의 (지역별 등장 구성은 stages.js)
export const ENEMY_DEFS = {
    // ── Zone 1: 초원/숲 ──────────────────────────────
    slime:      { name:'슬라임',     zone:1, rank:'normal',    hp:18,  atk:4,  def:0, spd:55,  drop:2,  color:'#60e060', w:18, h:14 },
    goblin:     { name:'고블린',     zone:1, rank:'normal',    hp:24,  atk:6,  def:1, spd:80,  drop:3,  color:'#80c040', w:16, h:22 },
    bat:        { name:'박쥐',       zone:1, rank:'normal',    hp:14,  atk:5,  def:0, spd:120, drop:2,  color:'#704870', w:20, h:12, fly:true },
    spirit:     { name:'숲 정령',    zone:1, rank:'normal',    hp:20,  atk:4,  def:1, spd:65,  drop:3,  color:'#40c880', w:16, h:24 },
    mushroom:   { name:'버섯 괴물',  zone:1, rank:'normal',    hp:28,  atk:5,  def:2, spd:45,  drop:3,  color:'#c06030', w:22, h:20 },
    gob_chief:  { name:'고블린 족장',zone:1, rank:'elite',     hp:70,  atk:12, def:3, spd:90,  drop:10, color:'#509820', w:22, h:28,
                  special:'berserk' },    // HP50% 이하 ATK 2배
    poison_slime:{ name:'독 슬라임', zone:1, rank:'elite',     hp:50,  atk:8,  def:2, spd:50,  drop:8,  color:'#50b820', w:22, h:18,
                  special:'poison' },     // 지속 독 초당 3
    troll:      { name:'트롤',       zone:1, rank:'miniboss',  hp:200, atk:18, def:6, spd:55,  drop:35, color:'#507830', w:34, h:46,
                  special:'regen' },      // 초당 2 회복
    forest_giant:{ name:'숲의 거인', zone:1, rank:'boss',      hp:600, atk:28, def:8, spd:40,  drop:100,color:'#2a5820', w:50, h:64,
                  special:'stun' },       // 3초마다 광역 스턴

    // ── Zone 2: 사막/화산 ────────────────────────────
    scorpion:   { name:'모래 전갈',  zone:2, rank:'normal',    hp:32,  atk:9,  def:2, spd:75,  drop:4,  color:'#c89040', w:24, h:16 },
    orc:        { name:'오크',       zone:2, rank:'normal',    hp:40,  atk:10, def:3, spd:60,  drop:5,  color:'#608030', w:26, h:30 },
    skeleton:   { name:'해골',       zone:2, rank:'normal',    hp:26,  atk:8,  def:0, spd:75,  drop:3,  color:'#d0c8a0', w:18, h:28 },
    fire_bat:   { name:'불꽃 박쥐',  zone:2, rank:'normal',    hp:20,  atk:10, def:0, spd:130, drop:4,  color:'#e06020', w:22, h:14, fly:true,
                  special:'explode' },    // 사망 시 화염 폭발
    lava_golem: { name:'용암 골렘',  zone:2, rank:'normal',    hp:55,  atk:7,  def:5, spd:35,  drop:5,  color:'#a03010', w:30, h:34 },
    orc_warrior:{ name:'오크 전사',  zone:2, rank:'elite',     hp:100, atk:20, def:6, spd:70,  drop:14, color:'#406020', w:30, h:36,
                  special:'aoe' },        // 5초마다 광역 공격
    skel_archer:{ name:'해골 궁수',  zone:2, rank:'elite',     hp:55,  atk:18, def:1, spd:85,  drop:11, color:'#b8a888', w:20, h:30,
                  special:'ranged' },     // 원거리 공격
    fire_mage:  { name:'불꽃 마법사',zone:2, rank:'miniboss',  hp:300, atk:28, def:4, spd:75,  drop:40, color:'#d04010', w:28, h:40,
                  special:'aura' },       // 화염 오라 초당 5
    ancient_dragon:{ name:'고대 용', zone:2, rank:'boss',      hp:900, atk:38, def:10, spd:50, drop:130,color:'#802010', w:64, h:48,
                  special:'poisonAura' }, // 광역 독 오라

    // ── 설원 ─────────────────────────────────────────
    yeti:       { name:'설인',       zone:5, rank:'normal',    hp:60,  atk:14, def:5, spd:55,  drop:6,  color:'#e8eef8', w:28, h:34 },
    ice_spirit: { name:'얼음 정령',  zone:5, rank:'normal',    hp:40,  atk:12, def:3, spd:70,  drop:5,  color:'#a0e0ff', w:16, h:24 },
    frost_wolf: { name:'서리 늑대',  zone:5, rank:'normal',    hp:45,  atk:15, def:2, spd:110, drop:5,  color:'#c8d8e8', w:30, h:20 },
    ice_golem:  { name:'얼음 골렘',  zone:5, rank:'elite',     hp:120, atk:22, def:9, spd:40,  drop:16, color:'#80b0d8', w:30, h:36 },
    ice_wraith: { name:'빙결 정령',  zone:5, rank:'miniboss',  hp:380, atk:30, def:8, spd:60,  drop:50, color:'#80d0ff', w:30, h:44,
                  special:'aura' },       // 냉기 오라 초당 5
    frost_giant:{ name:'서리 거인',  zone:5, rank:'boss',      hp:1100,atk:44, def:12,spd:40,  drop:160,color:'#9ab8d8', w:52, h:66,
                  special:'stun' },       // 3초마다 광역 충격

    // ── 어둠의 땅 ────────────────────────────────────
    shadow_knight:{ name:'그림자 기사',zone:6, rank:'normal',  hp:80,  atk:18, def:8, spd:60,  drop:8,  color:'#504070', w:22, h:34 },
    wraith:     { name:'망령',       zone:6, rank:'normal',    hp:55,  atk:16, def:2, spd:85,  drop:7,  color:'#8070b0', w:18, h:28, fly:true },
    void_bat:   { name:'공허 박쥐',  zone:6, rank:'normal',    hp:40,  atk:15, def:1, spd:130, drop:6,  color:'#5a2a80', w:22, h:14, fly:true },
    death_knight:{ name:'죽음의 기사',zone:6, rank:'elite',    hp:160, atk:28, def:12,spd:60,  drop:20, color:'#302050', w:26, h:40 },
    lich:       { name:'리치',       zone:6, rank:'miniboss',  hp:450, atk:36, def:8, spd:65,  drop:60, color:'#8040c0', w:32, h:46,
                  special:'lifesteal' },  // 피격 시 HP 20% 회복
    shadow_lord:{ name:'어둠의 군주',zone:6, rank:'boss',      hp:1500,atk:55, def:14,spd:60,  drop:200,color:'#401080', w:60, h:70,
                  special:'amplify' },    // 모든 적중효과 확률 +50%
};
