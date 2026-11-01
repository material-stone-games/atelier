// 버튼 UI: 포인터 상태, 호버/눌림 애니메이션, 클릭 피드백
import { shade } from './draw.js';
import { pixText, PIX_FONT } from './pixel.js';
import { drawIcon } from './icons.js';
import { spawnUiBurst } from './fx.js';
import { sfx } from './sfx.js';

export const pointer = { x: -1, y: -1, down: false };
export const ui = { hoverButton: false };

const anim = new Map();   // key → { s: 현재 배율, lift }
let frameButtons = [];    // 이번 프레임에 그린 버튼 (클릭 피드백용)

export function beginUiFrame() {
    ui.hoverButton = false;
    frameButtons = [];
}

const inside = (x, y, w, h) => pointer.x >= x && pointer.x <= x + w && pointer.y >= y && pointer.y <= y + h;

export function drawButton(ctx, x, y, w, h, label, color, bg, opts = {}) {
    const key = `${x}|${y}|${label}`;
    const hover = !opts.disabled && inside(x, y, w, h);
    const pressed = hover && pointer.down;
    if (hover) ui.hoverButton = true;
    frameButtons.push({ x, y, w, h, color, disabled: !!opts.disabled });

    const st = anim.get(key) ?? { s: 1, lift: 0, hover: false };
    if (hover && !st.hover) sfx.hover();
    st.hover = hover;
    const ts = pressed ? 0.93 : hover ? 1.06 : 1;
    const tl = pressed ? 0 : hover ? 2 : 0;
    st.s += (ts - st.s) * 0.35;
    st.lift += (tl - st.lift) * 0.35;
    anim.set(key, st);

    const t = performance.now() / 1000;
    const pulse = opts.pulse && Math.sin(t * 5) > 0;
    const base = bg ?? '#29366f';
    const lift = Math.round(st.lift);
    const dis = !!opts.disabled;

    // 픽셀 버튼: 검정 외곽 → 테두리 색 → 윗면 밝게/아랫면 어둡게
    ctx.save();
    ctx.translate(Math.round(x + w / 2), Math.round(y + h / 2));
    ctx.scale(st.s > 1.03 ? 1.04 : st.s < 0.97 ? 0.96 : 1, st.s > 1.03 ? 1.04 : st.s < 0.97 ? 0.96 : 1);
    ctx.translate(-Math.round(w / 2), -Math.round(h / 2) - lift);
    ctx.fillStyle = 'rgba(10,8,24,0.55)';
    ctx.fillRect(2, 4 + lift, w, h);
    const edge = dis ? '#566c86' : hover || pulse ? '#f4f4f4' : color;
    ctx.fillStyle = '#1a1c2c';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = edge;
    ctx.fillRect(2, 2, w - 4, h - 4);
    ctx.fillStyle = dis ? '#333c57' : shade(base, hover ? 0.25 : 0.1);
    ctx.fillRect(4, 4, w - 8, h - 8);
    ctx.fillStyle = dis ? '#333c57' : shade(base, hover ? 0.45 : 0.3);
    ctx.fillRect(4, 4, w - 8, 2);
    ctx.fillStyle = shade(base, -0.35);
    ctx.fillRect(4, h - 6, w - 8, 2);

    const size = opts.font ?? 12;
    ctx.font = `bold ${size}px ${PIX_FONT}`;
    const tw = label ? ctx.measureText(label).width : 0;
    const iconSize = opts.icon ? Math.min(h - 12, size + 6) : 0;
    const gap = opts.icon && label ? 6 : 0;
    const left = Math.round(w / 2 - (tw + iconSize + gap) / 2);
    if (opts.icon) {
        ctx.save();
        if (dis) ctx.globalAlpha = 0.4;
        drawIcon(ctx, opts.icon, left, Math.round(h / 2 - iconSize / 2), iconSize);
        ctx.restore();
    }
    if (label) pixText(ctx, label, left + iconSize + gap, Math.round(h / 2 + size * 0.38), size, dis ? '#8b9bb4' : hover ? '#fff3b0' : color, 'left');
    ctx.restore();
}

// 포인터를 뗀 위치에 버튼이 있으면 터지는 피드백
export function buttonClickFeedback(mx, my) {
    for (let i = frameButtons.length - 1; i >= 0; i--) {
        const b = frameButtons[i];
        if (!b.disabled && mx >= b.x && mx <= b.x + b.w && my >= b.y && my <= b.y + b.h) {
            spawnUiBurst(mx, my, b.color);
            sfx.click();
            return true;
        }
    }
    return false;
}
