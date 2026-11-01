// 픽셀아트 엔진: 글자 격자 스프라이트를 오프스크린 캔버스로 구워 두고 확대해서 그림
// 글자 하나 = 픽셀 하나, '.'은 투명. 색은 PAL에 정의하고 스프라이트마다 일부를 바꿔 쓸 수 있음

export const PAL = {
    k: '#1a1c2c',   // 외곽선
    w: '#f4f4f4', s: '#c2d0dc', S: '#8b9bb4', D: '#566c86',   // 흰색, 강철 밝음/중간/어두움
    r: '#b13e53', R: '#ef7d57',                               // 빨강
    b: '#3b5dc9', B: '#29366f', l: '#73eff7', L: '#41a6f6',   // 파랑, 하늘색
    y: '#ffcd75', Y: '#c27c0e',                               // 금
    o: '#a0622d', O: '#733e39', d: '#3b2a20',                 // 갈색
    g: '#38b764', G: '#a7f070', h: '#257179',                 // 초록
    p: '#5d275d', P: '#8b5fbf', q: '#c9a8ff',                 // 보라
    m: '#e8e2c8', M: '#b8ae90',                               // 뼈
    f: '#ff9a2e', F: '#ffe14a',                               // 불
    i: '#c8f6ff', v: '#0e0b1c', n: '#333c57', a: '#f4b4a0',   // 얼음, 공허, 짙은 회색, 피부
};

const cache = new Map();

function parse(art) {
    const rows = (Array.isArray(art) ? art : art.split('\n')).map(r => r.replace(/\s+$/, '')).filter(r => r.length);
    const w = Math.max(...rows.map(r => r.length));
    return { rows: rows.map(r => r.padEnd(w, '.')), w, h: rows.length };
}

function paint(rows, w, h, colorOf) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const x = c.getContext('2d');
    for (let j = 0; j < h; j++) {
        for (let i = 0; i < w; i++) {
            const col = colorOf(rows[j][i]);
            if (!col) continue;
            x.fillStyle = col;
            x.fillRect(i, j, 1, 1);
        }
    }
    return c;
}

// 스프라이트 굽기 (key별 캐시). pal: 이 스프라이트만 바꿀 색
export function bake(key, art, pal = {}) {
    let s = cache.get(key);
    if (s) return s;
    const { rows, w, h } = parse(art);
    const colorOf = ch => (ch === '.' || ch === ' ') ? null : (pal[ch] ?? PAL[ch] ?? '#ff00ff');
    s = {
        w, h,
        img: paint(rows, w, h, colorOf),
        white: paint(rows, w, h, ch => colorOf(ch) && '#ffffff'),   // 피격 깜박임용
    };
    cache.set(key, s);
    return s;
}

// x, y: 스프라이트 왼쪽 위 (월드/화면 좌표), px: 픽셀 한 칸의 크기
export function drawPix(ctx, spr, x, y, px, o = {}) {
    const prev = ctx.imageSmoothingEnabled;
    ctx.imageSmoothingEnabled = false;
    const img = o.flash ? spr.white : spr.img;
    if (o.flip) {
        ctx.save();
        ctx.translate(x + spr.w * px, y);
        ctx.scale(-1, 1);
        ctx.drawImage(img, 0, 0, spr.w * px, spr.h * px);
        ctx.restore();
    } else {
        ctx.drawImage(img, x, y, spr.w * px, spr.h * px);
    }
    ctx.imageSmoothingEnabled = prev;
}

// 발 중앙(바닥 가운데)을 기준으로 그림
export function drawPixFoot(ctx, spr, px, o = {}) {
    drawPix(ctx, spr, -spr.w * px / 2 + (o.dx ?? 0) * px, -spr.h * px + (o.dy ?? 0) * px, px, o);
}

// 피벗(px 단위)을 중심으로 회전해서 그림 (무기 휘두르기)
export function drawPixRot(ctx, spr, x, y, px, angle, pivotX, pivotY, o = {}) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    drawPix(ctx, spr, -pivotX * px, -pivotY * px, px, o);
    ctx.restore();
}

// 픽셀 창 (16비트 RPG 스타일): 바깥 검정 → 흰 테두리 → 회색 → 남색 바탕
export function pixWindow(ctx, x, y, w, h, o = {}) {
    x = Math.round(x); y = Math.round(y); w = Math.round(w); h = Math.round(h);
    const b = o.border ?? '#f4f4f4';
    const mid = o.mid ?? '#566c86';
    const bg = o.bg ?? '#29366f';
    const bg2 = o.bg2 ?? '#333c7a';
    ctx.fillStyle = '#1a1c2c'; ctx.fillRect(x, y, w, h);
    ctx.fillStyle = b; ctx.fillRect(x + 2, y + 2, w - 4, h - 4);
    ctx.fillStyle = mid; ctx.fillRect(x + 4, y + 4, w - 8, h - 8);
    ctx.fillStyle = bg; ctx.fillRect(x + 6, y + 6, w - 12, h - 12);
    ctx.fillStyle = bg2; ctx.fillRect(x + 6, y + 6, w - 12, Math.floor((h - 12) / 2));
    // 모서리를 깎아 둥근 픽셀 느낌
    ctx.fillStyle = o.corner ?? 'rgba(0,0,0,0)';
    if (o.corner) {
        for (const [cx, cy] of [[x, y], [x + w - 2, y], [x, y + h - 2], [x + w - 2, y + h - 2]]) ctx.fillRect(cx, cy, 2, 2);
    }
}

// 픽셀 글자: 굵은 고정폭 + 1px 그림자로 또렷하게
export const PIX_FONT = "'Galmuri11','DungGeunMo','Consolas','Malgun Gothic',monospace";
export function pixText(ctx, s, x, y, size, color = '#f4f4f4', align = 'left', shadow = '#1a1c2c') {
    ctx.font = `bold ${size}px ${PIX_FONT}`;
    ctx.textAlign = align;
    ctx.lineJoin = 'round';
    ctx.lineWidth = 3;
    ctx.strokeStyle = shadow;
    ctx.strokeText(s, x, y);
    ctx.fillStyle = color;
    ctx.fillText(s, x, y);
    ctx.textAlign = 'left';
}
