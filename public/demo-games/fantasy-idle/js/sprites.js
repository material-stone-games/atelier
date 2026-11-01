// 픽셀아트 스프라이트 데이터 (글자 격자). 색 글자는 pixel.js의 PAL 참고
// 적 스프라이트의 c/C/x는 적마다 바뀌는 몸 색(기본/밝음/어두움), e는 눈 색

// ── 기사 (오른쪽을 봄) ──────────────────────────────
// 몸통 + 투구 + 망토. 아래쪽 가운데가 허리, 다리는 따로 붙임
export const KNIGHT_BODY = `
.....RRr........
...RRrr.........
..Rrr..kkkkk....
.rr..kkwsssskk..
....kwwsssssSk..
....kwssssssSSk.
....kssssskkkkk.
....kssssklllkk.
....kSSsssskkkk.
.....kSSSSSSDk..
....rrkDDDDDk...
...rrkkbbbbbbk..
..rrkbbllbbbbBk.
..rrkbllbbbbbBk.
.rrrkbbbbbbbbBk.
.rrrkBbbbyybBBk.
.rrr.kOOOyyOOk..
.rr...kkkkkkk...`;

export const KNIGHT_LEGS = {
    stand: `
.kSSk.kSSk.
.kSDk.kSDk.
.kSDk.kSDk.
.kSDk.kSDk.
kdddk.kdddk
kkkkk.kkkkk`,
    walkA: `
.kSSk..kSSk
.kSDk..kSDk
kSDk....kSDk
kSDk....kSDk
kddk....kdddk
kkk.....kkkkk`,
    walkB: `
..kSSkkSSk.
..kSDkkSDk.
..kSDkkSDk.
..kSDkkSDk.
.kdddkkdddk
.kkkkkkkkkk`,
};

// 뒷팔 방패
export const KNIGHT_SHIELD = `
kkkkkkk
kOOyOOk
kOyyyOk
kOOyOOk
kOOyOOk
.kOOOk.
..kkk..`;

// 검 (오른쪽을 향해 누운 상태, 손잡이 쪽이 왼쪽). 피벗은 손잡이 (2, 2)
export const SWORD = `
.....kkkkkkkkkkkk..
.kk.kywwwwwwwwwwwk.
kdkkyysssssssssssk
.kk.kywwwwwwwwwwk.
.....kkkkkkkkkkk..`;
export const SWORD_PIVOT = [2, 2];

// 건틀릿 (검 든 손)
export const GAUNTLET = `
.kkk.
kssSk
kSSDk
.kkk.`;

// ── 적 (왼쪽 = 플레이어 쪽을 봄) ─────────────────────
export const SLIME = `
......kkkk......
....kkCCcckk....
...kCCcccccck...
..kCCcccccccck..
..kCwwcccwwcck..
.kcwkccccwkccck.
.kccccccccccccck
.kcccckkkccccck.
.kxccccccccccxk.
..kxxxxxxxxxxk..
...kkkkkkkkkk...`;

// 덩치 계열 (고블린·오크·트롤·설인·거인). 다리는 프레임마다 다름
export const BRUTE_BODY = `
...kkkkk.....
..kCCcccck...
.kCcccccccck.
.kceekceekck.
.kcwkccwkcck.
.kcccccccck..
.kcxkkkxcck..
..kccccccck..
...kkccckk...
..kOOOOOOOk..
.kcOoooooOck.
.kcOoooooOck.
.kcOOyyyOOck.
..kkOOOOOkk..`;
export const BRUTE_LEGS = {
    stand: `
...kxk.kxk...
...kxk.kxk...
...kxk.kxk...
..kOOk.kOOk..
..kkkk.kkkk..`,
    walk: `
..kxk...kxk..
..kxk...kxk..
.kxk.....kxk.
.kOOk....kOOk
.kkkk....kkkk`,
};
// 머리 장식 (BRUTE_BODY 기준 좌표에 덧그림)
export const BRUTE_PARTS = {
    ears: { at: [0, 0], art: `
kk.........kk
kCk.......kCk
.kk.......kk.` },
    crown: { at: [2, -3], art: `
k.k.k.k.k
kykykykyk
kyyyyyyyk
kkkkkkkkk` },
    horns: { at: [0, -4], art: `
km.........mk
kmk.......kmk
.kmk.....kmk.
..kk.....kk..` },
    helm: { at: [1, -1], art: `
..kkkkkkk..
.kSssssssk.
kSsssssssSk
kDDDDDDDDDk` },
    tusks: { at: [2, 6], art: `
w...w
w...w` },
    moss: { at: [1, 8], art: `
.gG.......Gg.
gGgg.....gGgg` },
};

// 무기 (위쪽을 향해 선 상태, 피벗은 손잡이 아래)
export const WEAPONS = {
    dagger: { pivot: [1, 9], art: `
.k.
kwk
kwk
kwk
kwk
kSk
kyk
kok
kok
.k.` },
    club: { pivot: [2, 13], art: `
.kkk.
kooOk
koOok
kOooOk
kooOk
.kok.
.kok.
.kok.
.kok.
.kok.
.kOk.
.kOk.
.kOk.
..k..` },
    axe: { pivot: [4, 14], art: `
kkkk.....
kSsskk...
kSssssk..
kSsssskOk
kSsssk.kOk
kSskk..kOk
kk.....kOk
.......kOk
.......kOk
.......kOk
.......kOk
.......kOk
.......kOk
.......kOk
........k.` },
    log: { pivot: [3, 17], art: `
.kkkkk.
koOOoOk
koOgOok
kOoOoOk
koOoOok
kOoOOok
koOoOOk
kOOoOok
koOOoOk
kOoOOok
koOoOOk
kOOoOok
.kOoOk.
.kOOok.
.kOoOk.
.kOOok.
.kOoOk.
..kkk..` },
    bow: { pivot: [3, 8], art: `
...kk.
..kok.
.kok.w
kok..w
kok..w
kok..w
kok..w
kok..w
kok..w
.kok.w
..kok.
...kk.` },
    staff: { pivot: [2, 18], art: `
.kkk.
kFfFk
kfFfk
.kkk.
..k..
.kok.
.kok.
.kOk.
.kok.
.kOk.
.kok.
.kOk.
.kok.
.kOk.
.kok.
.kOk.
.kok.
.kOk.
.kok.
..k..` },
    greatsword: { pivot: [3, 20], art: `
...k...
..kqk..
..kPk..
.kqPPk.
.kqPPk.
.kqPPk.
.kqPPk.
.kqPPk.
.kqPPk.
.kqPPk.
.kqPPk.
.kqPPk.
.kqPPk.
.kqPPk.
kkkkkkk
kyyyyyk
kkkpkkk
..kpk..
..kpk..
..kyk..
..kkk..` },
};

export const BAT = [`
k..............k
ck............kc
cck...kkkk...kcc
cccxkkccccxkkccc
.cccccceccecccc.
..cck.cccc.kcc..
...k..kwwk..k...
.......kk.......`, `
......kkkk......
.....kcccck.....
....kceccek.....
..kkccccccckk...
.kccccccccccccc.
kccx.kcwwck.xcck
kcx...kkkk...xck
.k............k.`];

export const SPIRIT = [`
....kkkk....
..kkCCCCkk..
.kCCCccccck.
.kCcccccccck
kCcekccekcck
kCcekccekcck
kCccccccccck
kcccckkcccck
kccccccccck.
.kcccccccck.
.kxcccccck..
..kxccccck..
..kxccxck...
...kxk.kxk..
....k...k...`, `
....kkkk....
..kkCCCCkk..
.kCCCccccck.
.kCcccccccck
kCcekccekcck
kCcekccekcck
kCccccccccck
kcccckkcccck
kccccccccck.
.kcccccccck.
..kcccccck..
..kcccccxk..
...kxccxk...
..kxk.kxk...
...k...k....`];

export const MUSHROOM = [`
....kkkkkk....
..kkcwccccck..
.kcwwcccwwcck.
kcccccccwwccck
kccwcccccccxck
kxccccccccxxck
.kkkkkkkkkkkk.
...kmmmmmmmk..
...kwkmmwkmk..
...kkkmmkkmk..
...kmmmmmmmk..
...kmmkkkmmk..
....kmmmmmk...
...kMk..kMk...
...kkk..kkk...`, `
....kkkkkk....
..kkcwccccck..
.kcwwcccwwcck.
kcccccccwwccck
kccwcccccccxck
kxccccccccxxck
.kkkkkkkkkkkk.
...kmmmmmmmk..
...kwkmmwkmk..
...kkkmmkkmk..
...kmmmmmmmk..
...kmmkkkmmk..
....kmmmmmk...
..kMk....kMk..
..kkk....kkk..`];


export const SKELETON = [`
...kkkkk....
..kmmmmmk...
.kmmmmmmmk..
.kmkkmkkmk..
.kmkekkekk..
.kmmmmmmmk..
..kmkmkmk...
...kkkkk....
....kmk.....
..kkkmkkk...
.kmkmmmkmk..
..kkkmkkk...
.kmkmmmkmk..
..kkkmkkk...
....kmk.....
...kMMMk....
...kMkMk....
..kMk.kMk...
..kmk.kmk...
..kmk.kmk...
.kMMk.kMMk..
.kkkk.kkkk..`, `
...kkkkk....
..kmmmmmk...
.kmmmmmmmk..
.kmkkmkkmk..
.kmkekkekk..
.kmmmmmmmk..
..kmkmkmk...
...kkkkk....
....kmk.....
..kkkmkkk...
.kmkmmmkmk..
..kkkmkkk...
.kmkmmmkmk..
..kkkmkkk...
....kmk.....
...kMMMk....
..kMk.kMk...
.kMk...kMk..
.kmk...kmk..
kmk.....kmk.
kMMk...kMMk.
kkkk...kkkk.`];

export const GOLEM = [`
....kkkkkk......
...kCcccccxk....
...kceccecxk....
...kcccccxxk....
....kkkkkkk.....
.kkkCCcccccxkk..
kCcckcccecccxxk.
kccxkcceeecxxck.
kcxxkccceccxxck.
.kkkkcccccxxkk..
....kxcccxxk....
....kkkkkkkk....
...kccxk.kcxk...
...kcxxk.kcxk...
..kCcxxk.kccxk..
..kkkkkk.kkkkk..`, `
....kkkkkk......
...kCcccccxk....
...kceccecxk....
...kcccccxxk....
....kkkkkkk.....
.kkkCCcccccxkk..
kCcckcccecccxxk.
kccxkcceeecxxck.
kcxxkccceccxxck.
.kkkkcccccxxkk..
....kxcccxxk....
....kkkkkkkk....
..kccxk...kcxk..
..kcxxk...kcxk..
.kCcxxk...kccxk.
.kkkkkk...kkkkk.`];
// 골렘 팔 (주먹, 피벗은 어깨)
export const GOLEM_ARM = { pivot: [2, 1], art: `
.kkk.
kCcxk
kccxk
kcxxk
kccxk
kCcxxk
kccxxk
.kkkk.` };

export const CASTER = [`
....kkkk....
...kccccx...
..kccvvvcxk.
..kcveveccxk
..kcvvvvcxk.
..kcccccxxk.
...kcyyyck..
..kccyccxxk.
.kcccyccxxk.
.kCccyccxxk.
.kCccycccxk.
kCcccycccxxk
kCccccccxxxk
kcccccccxxxk
kcccccccxxxk
kkcccccccxkk
..kkkkkkkk..`, `
....kkkk....
...kccccx...
..kccvvvcxk.
..kcveveccxk
..kcvvvvcxk.
..kcccccxxk.
...kcyyyck..
..kccyccxxk.
.kcccyccxxk.
.kCccyccxxk.
.kCccycccxk.
kCcccycccxxk
kCccccccxxxk
kcccccccxxxk
.kccccccxxxk
.kkcccccccxk
...kkkkkkkk.`];
export const CASTER_CROWN = { at: [3, -3], art: `
k.k.k.
kykyky
kyyyyk
kkkkkk` };


export const LORD = [`
.mk......km.....
.mmk....kmm.....
..mmkkkkmm......
...kccccck......
..kccccccxk.....
..kcekcekxk.....
..kccccccxk.....
...kxkkkxk......
..kkcccccxkpp...
.kCcPccPcxkppp..
.kCccPPccxkpppp.
kCccccccccxkppp.
kCcyyyyyyyxkpppp
kccccccccxxkpppp
.kccccccxxk.ppp.
..kcxk.kcxk..pp.
..kcxk.kcxk...p.
..kcxk.kcxk.....
.kxxxk.kxxxk....
.kkkkk.kkkkk....`, `
.mk......km.....
.mmk....kmm.....
..mmkkkkmm......
...kccccck......
..kccccccxk.....
..kcekcekxk.....
..kccccccxk.....
...kxkkkxk......
..kkcccccxkpp...
.kCcPccPcxkpppp.
.kCccPPccxkppppp
kCccccccccxkpppp
kCcyyyyyyyxkpppp
kccccccccxxkppp.
.kccccccxxk.pp..
..kcxk.kcxk..p..
..kcxk.kcxk.....
..kcxk.kcxk.....
.kxxxk.kxxxk....
.kkkkk.kkkkk....`];


// ── 여러 조각을 겹쳐 한 장으로 합치기 (뒤 조각부터, '.'은 투명) ──
function compose(w, h, layers) {
    const g = Array.from({ length: h }, () => Array(w).fill('.'));
    for (const [art, x, y] of layers) {
        art.split('\n').filter(r => r.length).forEach((row, j) => {
            [...row].forEach((ch, i) => {
                const gy = y + j, gx = x + i;
                if (ch !== '.' && gy >= 0 && gy < h && gx >= 0 && gx < w) g[gy][gx] = ch;
            });
        });
    }
    return g.map(r => r.join('')).join('\n');
}

// ── 큰 덩치 (오크·트롤·설인·거인): 어깨가 넓고 구부정함 ──
export const BRUTE_BIG_BODY = `
....kkkkkk.......
...kCCcccck......
..kCcccccccck....
..kceekceekck....
..kcwkccwkcck....
..kcccccccckkk...
..kcxkkkxcckCck..
.kkkcccccckCcccck
kCcckkkkkkCccccxk
kCcccccccccccccxk
kccOOOOOOOOOcccxk
.kcOoooooooOccxk.
.kcOoooooooOcxxk.
.kcOOyyyyyOOcxk..
..kkOOOOOOOkkk...`;
export const BRUTE_BIG_LEGS = {
    stand: `
...kxxk..kxxk....
...kxxk..kxxk....
...kxxk..kxxk....
..kOOOk.kOOOk....
..kkkkk.kkkkk....`,
    walk: `
..kxxk....kxxk...
..kxxk....kxxk...
.kxxk......kxxk..
.kOOOk.....kOOOk.
.kkkkk.....kkkkk.`,
};
// 큰 몸에서는 머리 장식이 한 칸 오른쪽
export const BRUTE_BIG_SHIFT = { ears: [1, 0], crown: [1, 0], horns: [1, 0], helm: [1, 0], tusks: [2, 0], moss: [0, -1] };

// ── 용 (조각 합성: 날개 → 꼬리 → 다리 → 몸 → 목 → 머리) ──
const DR_HEAD = `
.....km..km..
....kmk.kmk..
..kkkcccccck.
.kCCcccccecck
kCcccccccccxk
kwkwkcccccxxk
.kkkkkkccxxk.
..kwkwkkcxk..
...kkkk.kk...`;
const DR_NECK = `
.kkk...
kcccxk.
kCcccxk
.kcccxk
.kCcccxk
..kcccxk
..kCccxk
...kccxk
...kkkkk`;
const DR_BODY = `
.....kkkkkkkk......
...kkCCcccccckkk...
..kCCcccccccccccxk.
.kCcccccccccccccxxk
kCcccccccccccccxxxk
kccyyyyyyccccccxxk.
kcyyyyyyyyycccxxk..
.kyyyyyyyyyccxxk...
..kkyyyyyykkkkk....
....kkkkkk.........`;
const DR_WING_UP = `
.............kk
...........kkxk
.........kkxcxk
.......kkxccxk.
.....kkxcccxk..
...kkxccccxk...
..kxccccccxk...
.kxcckcccckxk..
kxck.kcck.kxk..
kxk..kxk...kk..
kk...kk........`;
const DR_WING_DOWN = `
.kkkkkkkkkkkk..
kxcccccccccccxk
.kxcckccckcccxk
..kxk.kxk.kxxk.
...k...k...kk..`;
const DR_TAIL = `
...........k.
..........kck
.........kcxk
kkk.....kcxk.
ccckkkkkcxk..
cccccccccxk..
xxxxxxxxxk...
kkkkkkkkk....`;
const DR_LEG = `
.kxxk.
.kxxk.
kxcxk.
kxcxk.
kccxk.
kwkwk.`;
const dragon = (wing, wy, hx, hy) => compose(40, 26, [
    [wing, 16, wy], [DR_TAIL, 26, 12], [DR_LEG, 13, 20], [DR_LEG, 23, 20],
    [DR_BODY, 10, 13], [DR_NECK, 8, 7], [DR_HEAD, hx, hy],
]);
export const DRAGON = [dragon(DR_WING_UP, 3, 2, 2), dragon(DR_WING_DOWN, 10, 2, 2), dragon(DR_WING_UP, 3, 0, 5)];
export const DRAGON_MOUTH = [[2, 8], [2, 8], [0, 11]];   // 프레임별 입 위치 (브레스 시작점)

// ── 어둠의 기사 (그림자 기사·죽음의 기사) ──
const DK_TOP = `
....kkkkk.....
...kCcccxk....
..kCccccxxk...
..kkeekkxxk...
..kccccxxxk...
...kcccxxk....
.kkkkkkkkkkpp.
kCCkCcccxkxppp
kCckcCcxxkxppp
.kkkcccxxkkppp
...kcyyyxk.ppp
...kcccxxk.ppp
...kyyyyyk..pp`;
export const DARK_KNIGHT = [compose(14, 19, [[DK_TOP, 0, 0], [`
...kcckcxk...p
...kcxkcxk....
...kcxkcxk....
...kcxkcxk....
..kxxxkxxxk...
..kkkkkkkkk...`, 0, 13]]), compose(14, 19, [[DK_TOP, 0, 0], [`
...kcckcxk...p
..kcxk.kcxk...
..kcxk.kcxk...
.kcxk...kcxk..
.kxxxk..kxxxk.
.kkkkk..kkkkk.`, 0, 13]])];
export const DARK_KNIGHT_PARTS = {
    horns: { at: [1, -3], art: `
km.......mk
kmk.....kmk
.kk.....kk.` },
    skull: { at: [4, 9], art: `
.mmm.
mkmkm
.mmm.` },
    spikes: { at: [0, 5], art: `
.k..k.
kmkkmk` },
};

// ── 전갈 (꼬리를 머리 위로 치켜든 자세 / 찌르기) ──
const SC_BODY = `
.kk...kkkkkkkkcck...
kCck.kCCcccccccxk...
kcckkCceccccccxxk...
kcxkkcckcccccxxk....
.kk.kxcccccccxk.....
...kxkxkxkxkxk......
...k.k.k.k.k.k......`;
export const SCORPION = [compose(20, 14, [[`
.......kkkk.........
......kwcck.........
......kkkcck........
.........kcck.......
..........kcck......
...........kcck.....
............kcck....`, 0, 0], [SC_BODY, 0, 7]]), compose(20, 14, [[`
....................
...kkkk.............
..kwcckkk...........
...kkkcccckk........
.........kccck......
...........kcck.....
............kcck....`, 0, 0], [SC_BODY, 0, 7]])];

// ── 늑대 (왼쪽을 보고 꼬리를 세움) ──
const WOLF_TOP = `
..kk..................
.kxck.kk..............
.kccckxck.............
kCcccccck.............
kCceccccxkkkkkkkkk..kk
kccccccxCCCCCCCcccxkxk
kkkkcccxccccccccccxxck
kwkw.kcccccccccccxxxk.
.kk..kcccccccccccxxk..`;
export const WOLF = [compose(22, 13, [[WOLF_TOP, 0, 0], [`
......kcxkkkkkkcxxk...
......kcxk....kcxk....
.....kcxk....kcxk.....
.....kkk.....kkk......`, 0, 9]]), compose(22, 13, [[WOLF_TOP, 0, 0], [`
......kcxkkkkkkcxxk...
.....kcxk......kcxk...
....kcxk........kcxk..
....kkk..........kkk..`, 0, 9]])];

// ── 정령 머리 장식 / 슬라임 눈 감은 프레임 ──
export const SPIRIT_PARTS = {
    leaf: { at: [5, -3], art: `
...kk
..kGgk
.kGgk.
.kk...` },
    crystal: { at: [3, -4], art: `
..k.k..
.kik.k.
.kikkik
kiikiik` },
};
export const SLIME_BLINK = `
......kkkk......
....kkCCcckk....
...kCCcccccck...
..kCCcccccccck..
..kCcccccccccck.
.kckkcccckkccck.
.kccccccccccccck
.kcccckkkccccck.
.kxccccccccccxk.
..kxxxxxxxxxxk..
...kkkkkkkkkk...`;

// 어둠의 기사 검 (위를 향함)
WEAPONS.blade = { pivot: [2, 14], art: `
..k..
.kqk.
.kPk.
.kqPk
.kqPk
.kqPk
.kqPk
.kqPk
.kqPk
.kqPk
.kqPk
kkkkk
kyyyk
.kpk.
.kpk.
.kyk.
..k..` };
