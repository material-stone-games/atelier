// 픽셀 아이콘 (이모지 대체). SHAPES는 모양, ICONS는 모양 + 색 바꾸기
import { bake, drawPix } from './pixel.js';

const SHAPES = {
    heart: `
.kkk...kkk.
kRRrk.kRrrk
kRrrrkrrrrk
krrrrrrrrrk
krrrrrrrrrk
.krrrrrrrk.
..krrrrrk..
...krrrk...
....krk....
.....k.....`,
    heartplus: `
.kk..kk.kkk
kRrkkrrkkwk
krrrrrrkwwwk
krrrrrrrkwk.
.krrrrrrrk..
..krrrrrk...
...krrrk....
....krk.....
.....k......`,
    coin: `
...kkkk...
..kyyyyk..
.kyFFyyyk.
kyFyyYyyYk
kyFyyYyyYk
kyyyyYyyYk
kyyyyyyyYk
.kyyyyyYk.
..kYYYYk..
...kkkk...`,
    coins: `
....kkkk..
...kyFyyk.
...kkkkkk.
..kyFyyyYk
.kkkkkkkkk
kyFyyyyyYk
kkkkkkkkkk
kyFyyyyyYk
.kkkkkkkk.`,
    sword: `
........kk
.......kwk
......kwsk
.....kwsk.
..k.kwsk..
..kykwsk..
...kyysk..
..kdkyk...
.kdk.kk...
.kk.......`,
    dagger: `
.......kk.
......kwk.
.....kwsk.
....kwsk..
..kkwsk...
..kyysk...
.kdkyk....
kdk.kk....
kk........`,
    swords2: `
kk......kk
kwk....kwk
ksw k.kwsk
.kswkkwsk.
..kswwsk..
..kkyykk..
.kykkkkyk.
kdk....kdk
kk......kk`,
    burst: `
....kk....
.k..kFk.k.
.kkkFFkkk.
..kFFFFk..
kkFFwwFFkk
kFFFwwFFFk
.kkFFFFkk.
..kFkkFk..
.kk.kk.kk.
.k......k.`,
    bow: `
...kk.....
..kok...k.
.kok...kwk
.kok..kwk.
kok..kwk..
kok.kwk...
kok.kkk...
.kokSk....
..kokk....
...kk.....`,
    skull: `
..kkkkkk..
.kwwwwwwk.
kwwwwwwwwk
kwkkwwkkwk
kwkkwwkkwk
kwwwkkwwwk
.kwwwwwwk.
..kwkwkwk.
..kkkkkkk.`,
    target: `
...kkkk...
.kkrrrrkk.
.krwwwwrk.
krwrrrrwrk
krwrkkrwrk
krwrkkrwrk
krwrrrrwrk
.krwwwwrk.
.kkrrrrkk.
...kkkk...`,
    axe: `
..kkkk....
.kSsssk...
kSsssssk..
kSssssokk.
kSsssskok.
.kSsskkok.
..kkk.kok.
......kok.
......kok.
......kkk.`,
    shield: `
kkkkkkkkkk
kbbbbybbbk
kbBbbybbbk
kbbbbybbbk
kyyyyyyyyk
kbbbbybbbk
.kbbbybbk.
.kbbbybbk.
..kbbybk..
...kbbk...
....kk....`,
    armor: `
.kk....kk.
kSSkkkkSSk
kSssssssSk
kSsswwssSk
.kssssssk.
.kSsssssk.
.kSsyysSk.
.kSssssSk.
..kkkkkk..`,
    towershield: `
.kkkkkkkk.
kSssssssSk
kSsyyyysSk
kSsykkysSk
kSsykkysSk
kSsyyyysSk
kSssssssSk
kSssssssSk
.kSssssSk.
..kSsssk..
...kkkk...`,
    wall: `
kkkkkkkkkk
koOkoOOkok
kkkkkkkkkk
kOOkoOkoOk
kkkkkkkkkk
koOkoOOkok
kkkkkkkkkk
kOOkoOkoOk
kkkkkkkkkk`,
    cloak: `
...kkkk...
..kyrryk..
..krrrrk..
.krrrrrrk.
.krRrrrrk.
krRrrrrrrk
krRrrrrrrk
krRrrrrrrk
krrrrrrrrk
kkkkkkkkkk`,
    counter: `
kkkkkkk...
kbbybbk.k.
kbyyybkkFk
kbbybbkFFk
kbbybk.kFk
.kbbk..k..
..kk.kk...
....kFk...
...kFFk...
....kk....`,
    castle: `
k.k....k.k
kkk.kk.kkk
ksk.kk.ksk
kskkkkkksk
kssskksssk
kssskksssk
ksskkkkssk
kssk..kssk
kkkk..kkkk`,
    wind: `
..kkkkk...
.kllllLk..
.kk..kLk..
kkkkkkLk..
kllllllkk.
kkkkkkkkLk
.klllllllk
.kkkkkkkk.`,
    tornado: `
kkkkkkkkkk
klllllllLk
.kkllllLk.
..kkllLkk.
...kllLk..
...kkllk..
....kllk..
....kLk...
.....kk...`,
    bolt: `
....kkk.
...kFFk.
..kFFk..
.kFFkkk.
kFFFFFk.
kkkFFk..
..kFk...
.kFk....
.kk.....`,
    spiral: `
.kkkkkk..
kllllllk.
klkkkklk.
klkLLkllk
klkLkkllk
klkkkllk.
kllllllk.
.kkkkkk..`,
    hourglass: `
kkkkkkkkkk
kOooooooOk
.kwwwwwwk.
..kyyyyk..
...kyyk...
....kk....
...kwyk...
..kwwyyk..
.kwyyyyyk.
kOooooooOk
kkkkkkkkkk`,
    boot: `
...kkkk...
...koook..
...koook..
...kyyyk..
...koook..
...koookk.
..koooooOk
.kooooooOk
kkkkkkkkkk`,
    wingboot: `
k..kkkk...
wk.koook..
wwkkoook..
kwwkyyyk..
.kkkoook..
...koookk.
..koooooOk
.kooooooOk
kkkkkkkkkk`,
    drop: `
....k....
...krk...
...krk...
..krrrk..
.kRrrrrk.
kRrrrrrrk
kRwrrrrrk
krwrrrrrk
.krrrrrk.
..kkkkk..`,
    sparkle: `
....k.....
...kwk....
...kwk..k.
kkkwwwkkwk
kwwwwwwwk.
.kkkwwkk..
...kwk....
...kwk....
..k.k.....
.kwk......
..k.......`,
    potion: `
...kkkk...
...kSSk...
...kwwk...
..kkwwkk..
.kgGggggk.
kgGgggggGk
kgGgggggGk
kgggggggGk
.kgggggGk.
..kkkkkk..`,
    muscle: `
....kkk...
...kaaak..
..kaaaak..
.kaaakk...
kaaak.kkk.
kaaakkaaak
kaaaaaaaak
.kaaaaaak.
..kkkkkk..`,
    scroll: `
.kkkkkkkk.
kmmmmmmmMk
kkmmmmmmkk
.kmkkkkmk.
.kmmmmmmk.
.kmkkkkmk.
.kmmmmmmk.
kkmmmmmmkk
kmmmmmmmMk
.kkkkkkkk.`,
    snowflake: `
....kk....
..k.kik.k.
.kik.ik.kik
..kkiiikk..
.kiiiwiiik.
..kkiiikk..
.kik.ik.kik
..k.kik.k.
....kk....`,
    flame: `
....k.....
...kFk....
...kFk.k..
..kFFFkFk.
.kFFfFFFk.
.kFfffFFk.
kFffrfffFk
kfffrrfffk
.kfrrrrfk.
..kkkkkk..`,
    cloud: `
...kkkk...
.kkwwwwkk.
kwwwwwwwwk
kwwwSSwwwk
.kkkkkkkk.
...kFk....
..kFk.....
..kFFk....
...kFk....
...kk.....`,
    orb: `
...kkkk...
.kkPPPPkk.
.kPwPPPPk.
kPwPPPPPpk
kPPPPPPPpk
kPPPPPPppk
.kPPPPppk.
.kkppppkk.
..kyyyyk..
.kkkkkkkk.`,
    chain: `
.kkk......
kSsSk.....
kSkSkkk...
kSsSkSsk..
.kkkSkSk..
...kSsSkkk
....kkkSsk
......kSkk
......kSsk
.......kk.`,
    ghost: `
...kkkk...
..kwwwwk..
.kwwwwwwk.
kwwkwwkwwk
kwwkwwkwwk
kwwwwwwwwk
kwwwkkwwwk
kwwwwwwwwk
kwkwwkwkwk
.k.kk.k.k.`,
    moon: `
...kkkk...
..kPPkk...
.kPPk.....
kPPk......
kPPk......
kPPk......
kPPPk.....
.kPPPkkkk.
..kPPPPk..
...kkkk...`,
    mirror: `
..kkkkkk..
.kyiiiiyk.
kyiwiiiiyk
kyiiwiiiyk
kyiiiiiiyk
kyiiiiiiyk
.kyiiiiyk.
..kkyykk..
....yy....
...kyyk...
...kkkk...`,
    infinity: `
.kkk..kkk.
kLLLkkLLLk
kLkkLLkkLk
kLkkLLkkLk
kLLLkkLLLk
.kkk..kkk.`,
    mask: `
.kkkkkkkk.
kwwwwwwwwk
kwkkwwkkwk
kwkkwwkkwk
kwwwwwwwwk
kwwkkkkwwk
.kwkvvkwk.
..kkvvkk..
...kkkk...`,
    vortex: `
..kkkkkk..
.kPppppPk.
kPpkkkkpPk
kpkvvvvkpk
kpkvkkvkpk
kpkvvkpkpk
kPpkkkpkPk
.kPpppPPk.
..kkkkkk..`,
    hand: `
...k.k....
..kakak...
..kakakk..
.kkakakak.
kakaaaaak.
kaaaaaaak.
.kaaaaaak.
..kaaaak..
...kyyk...
...kkkk...`,
    bag: `
....kk....
...kyyk...
..kkookk..
.kooooook.
kooookooOk
koookyyoOk
kooooyooOk
kooookooOk
.kooooOOk.
..kkkkkk..`,
    golem: `
.kkkkkkk.
kSSSSSSDk
kSkkSkkDk
kSkFSkFDk
kSSSSSSDk
kSSkkkSDk
kSSSSSSDk
.kSSSSDk.
.kkkkkkk.`,
    crown: `
k...k...k
kk.kyk.kk
kykkykkyk
kyyyyyyyk
kyRyyyRyk
kyyyyyyyk
kkkkkkkkk`,
    scales: `
....kk....
....ky....
kkkkkykkkk
.k.kyyk.k.
k.k.yy.k.k
kyk.yy.kyk
kkk.yy.kkk
...kyyk...
..kkkkkk..`,
    pouch: `
...kkk....
..kOyOk...
...kOk....
.kkoook...
kooooook..
koooooOk..
koooooOk..
.kooooOk..
..kkkkk...`,
    chest: `
.kkkkkkkk.
kooooooook
kOOOOOOOOk
kkkkyykkkk
kooOyyOook
kooOkkOook
koooooooOk
kkkkkkkkkk`,
    goldchest: `
.kkkkkkkk.
kyyyyyyyYk
kYYYYYYYYk
kkkkwwkkkk
kyyYwwYyyk
kyyYkkYyyk
kyyyyyyyYk
kkkkkkkkkk`,
    door: `
..kkkkk..
.kPPPPPk.
kPkkkkkPk
kPkqqqkPk
kPkqlqkPk
kPkqqqkPk
kPkqqqkPk
kPkqqqkPk
kkkkkkkkk`,
    star: `
....kk....
....kyk...
...kyyk...
kkkkyyykkk
kyyyyFyyyk
.kyyFFyyk.
..kyyyyk..
.kyykkyyk.
.kyk..kyk.
.kk....kk.`,
    magnifier: `
..kkkk....
.kllllk...
kllwlllk..
klwllllk..
klllllLk..
kllllLLk..
.kkLLLkk..
...kkkSSk.
......kSSk
.......kk.`,
    vase: `
...kkkk...
...kyyk...
..kkOOkk..
.kOOOOOOk.
kOOyOOyOOk
kOOOOOOOOk
kOyOOOOyOk
.kOOOOOOk.
..kOOOOk..
..kkkkkk..`,
    ring: `
....kk....
...kRrk...
...krrk...
..kkkkkk..
.kyykkyyk.
kyk....kyk
kyk....kyk
kyk....kyk
.kyykkyyk.
..kkkkkk..`,
    scale: `
...kkkk...
..kgGggk..
.kgGgggGk.
kgggkkgggk
kGggkgGggk
kgGgggGggk
.kggkkggk.
..kgGgGk..
...kggk...
....kk....`,
    glove: `
.k.k.k....
kakakak...
kakakakk..
kakakakak.
kaaaaaakak
kaaaaaaak.
kaaaaaak..
.kyyyyk...
.kkkkkk...`,
    hammer: `
kkkkkkk...
kSsssSk...
kSsssSk...
kkkFkkk...
...kok....
...kok....
...kok....
...kok....
...kOk....
...kkk....`,
    thorn: `
.......kk.
...k..kgk.
..kgk.kgk.
...kgkgk..
..k.kggk..
.kgkkgk.k.
..kggkkgk.
...kgggk..
..kgk.k...
.kgk......
.kk.......`,
    amulet: `
.kk....kk.
..kk..kk..
...kkkk...
...kyyk...
..kyyyyk..
.kybbbbyk.
.kybllbyk.
.kybbbbyk.
..kyyyyk..
...kkkk...`,
    gem: `
..kkkkkkk..
.kGGgggggk.
kGGggggghhk
kkkkkkkkkkk
.kgggggghk.
..kgggghk..
...kgghk...
....kgk....
.....k.....`,
    rune: `
.kkkkkkkk.
kqqqqqqqqk
kqkqqqqkqk
kqqkqqkqqk
kqqqkkqqqk
kqqkqqkqqk
kqkqqqqkqk
kqqqqqqqqk
.kkkkkkkk.`,
    spear: `
........kk
.......kwk
......kwyk
.....kwyk.
....kkyk..
...kokk...
..kok.....
.kok......
kok.......
kk........`,
    spool: `
kkkkkkkkk
kOOOOOOOk
.krrrrrk.
.kRrrrrk.
.krrrrrk.
.kRrrrrk.
.krrrrrk.
kOOOOOOOk
kkkkkkkkk`,
    key: `
.kkk......
kyyyk.....
kykyk.....
kyyykkkkkk
.kkyyyyyyk
...kkykyk.
.....k.kk.`,
    wings: `
....kk....
...kyyk...
...kkkk...
kk.kwwk.kk
kwkkwwkkwk
kwwkwwkwwk
.kwwwwwwk.
..kwwwwk..
...kwwk...
....kk....`,
    dice: `
.kkkkkkkk.
kwwwwwwwSk
kwkwwwwwSk
kwwwwwwwSk
kwwwkwwwSk
kwwwwwwwSk
kwwwwwkwSk
kwwwwwwwSk
kSSSSSSSSk
.kkkkkkkk.`,
    flag: `
kk.......
kykkkkk..
kykrrrrk.
kykrRrrk.
kykrrrk..
kykkkk...
ky.......
ky.......
ky.......
kk.......`,
    pause: `
ss.ss
ss.ss
ss.ss
ss.ss
ss.ss
ss.ss`,
    speaker: `
...s...
..ss.s.
ssss..s
ssss..s
ssss..s
..ss.s.
...s...`,
    mute: `
...s....
..ss.s.s
ssss..s.
ssss.s.s
ssss....
..ss....
...s....`,
    play: `
s....
sss..
sssss
sss..
s....`,
    left: `
....s
..sss
sssss
..sss
....s`,
    minus: `
sssssss
sssssss`,
    plus: `
..sss..
..sss..
sssssss
..sss..
..sss..`,
    reset: `
.ssss.s
s....ss
s...sss
s......
s.....s
.sssss.`,
    cross: `
ss...ss
.ss.ss.
..sss..
.ss.ss.
ss...ss`,
    home: `
....kk....
...kssk...
..kssssk..
.kssssssk.
kssssssssk
.kSSkkSSk.
.kSSkoSSk.
.kSSkoSSk.
.kkkkkkkk.`,
    folder: `
kkkk......
kyyyk.....
kyyyykkkkk
kYYYYYYYYk
kyyyyyyyyk
kyyyyyyyyk
kyyyyyyyyk
kkkkkkkkkk`,
};

// 아이콘 ID → [모양, 색 바꾸기]
const GOLD = { s: '#ffcd75', S: '#c27c0e', w: '#fff3b0', b: '#ffcd75', B: '#c27c0e', o: '#ffcd75', O: '#c27c0e' };
const DARK = { r: '#3a2a5a', R: '#5d4a8a', y: '#8b5fbf' };
export const ICONS = {
    // HUD
    heart: ['heart'], coin: ['coin'], atk: ['sword'], def: ['shield'], spd: ['bolt'], steal: ['drop'],
    kill: ['skull'], flag: ['flag'], boss: ['crown'], mini: ['skull', { w: '#ffcd75' }],
    pause: ['pause'], sound: ['speaker'], mute: ['mute'], play: ['play'],
    left: ['left'], right: ['play'], minus: ['minus'], plus: ['plus'], reset: ['reset'], cross: ['cross'],
    home: ['home'], load: ['folder'], star: ['star'], new: ['sparkle'],
    // 업그레이드
    ATK1: ['dagger'], ATK2: ['swords2'], ATK3: ['burst'], ATK4: ['bow'], ATK5: ['skull', { w: '#ef7d57' }],
    ATK_S1: ['target'], ATK_S2: ['axe'],
    DEF1: ['shield'], DEF2: ['armor'], DEF3: ['towershield'], DEF4: ['wall'], DEF5: ['cloak', { r: '#ffcd75', R: '#fff3b0', y: '#c27c0e' }],
    DEF_S1: ['counter'], DEF_S2: ['castle'],
    SPD1: ['wind'], SPD2: ['tornado'], SPD3: ['bolt'], SPD4: ['spiral'], SPD5: ['hourglass'],
    SPD_S1: ['boot'], SPD_S2: ['wingboot'],
    SURV1: ['drop'], SURV2: ['heart'], SURV3: ['sparkle'], SURV4: ['heartplus'], SURV5: ['potion', { g: '#b13e53', G: '#ef7d57' }],
    SURV_S1: ['muscle'], SURV_S2: ['scroll', { m: '#ef7d57', M: '#b13e53' }],
    HIT1: ['snowflake'], HIT2: ['flame'], HIT3: ['cloud'], HIT4: ['skull', { w: '#a7f070' }], HIT5: ['orb', { P: '#ef7d57', p: '#41a6f6' }],
    HIT_S1: ['burst', { F: '#c9a8ff' }], HIT_S2: ['chain'],
    PER1: ['ghost'], PER2: ['moon'], PER3: ['mirror'], PER4: ['orb'], PER5: ['infinity'],
    PER_S1: ['mask'], PER_S2: ['vortex'],
    FORT1: ['hand'], FORT2: ['coins'], FORT3: ['bag'], FORT4: ['golem', { S: '#ffcd75', D: '#c27c0e' }], FORT5: ['crown'],
    FORT_S1: ['scales'], FORT_S2: ['coin'],
    REL1: ['pouch'], REL2: ['chest'], REL3: ['goldchest'], REL4: ['door'], REL5: ['star'],
    REL_S1: ['magnifier'], REL_S2: ['vase'],
    // 유물
    flame_ring: ['ring'], dragon_skin: ['scale'], shadow_cloak: ['cloak', DARK], wind_shoes: ['wingboot'],
    thief_finger: ['glove'], thunder_hammer: ['hammer'], death_thorn: ['thorn'], protect_charm: ['amulet'],
    hourglass: ['hourglass'], regen_stone: ['gem'], time_orb: ['orb'], tele_charm: ['rune'],
    holy_spear: ['spear'], god_shield: ['shield', { ...GOLD, y: '#fff3b0' }], fate_thread: ['spool'], infinite_step: ['boot', GOLD],
    dimension_key: ['key'], infinity_sword: ['sword', GOLD], immortal_soul: ['wings'], fate_dice: ['dice'],
};

export function iconSprite(id) {
    const [shape, pal] = ICONS[id] ?? ['skull'];
    return bake('icon_' + id, SHAPES[shape], pal ?? {});
}

// size: 그릴 크기(픽셀). 가로세로 중 긴 쪽을 맞추고 가운데 정렬
export function drawIcon(ctx, id, x, y, size, o = {}) {
    const s = iconSprite(id);
    const px = size / Math.max(s.w, s.h, 10);
    drawPix(ctx, s, Math.round(x + (size - s.w * px) / 2), Math.round(y + (size - s.h * px) / 2), px, o);
}

export const ICON_IDS = Object.keys(ICONS);
