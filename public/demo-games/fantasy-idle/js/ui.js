// 버튼 UI: 포인터 상태, 호버/눌림 애니메이션, 클릭 피드백
import { shade, roundRect } from './draw.js';
import { spawnUiBurst } from './fx.js';

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

    const st = anim.get(key) ?? { s: 1, lift: 0 };
    const ts = pressed ? 0.93 : hover ? 1.06 : 1;
    const tl = pressed ? 0 : hover ? 2 : 0;
    st.s += (ts - st.s) * 0.35;
    st.lift += (tl - st.lift) * 0.35;
    anim.set(key, st);

    const t = performance.now() / 1000;
    const pulse = opts.pulse ? (Math.sin(t * 4) + 1) / 2 : 0;
    const base = bg ?? '#101020';

    ctx.save();
    ctx.translate(x + w / 2, y + h / 2);
    ctx.scale(st.s, st.s);
    ctx.translate(-w / 2, -h / 2);

    // 그림자
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    roundRect(ctx, 0, 3 - st.lift * 0.5, w, h, 6);
    ctx.fill();

    ctx.translate(0, -st.lift);
    // 본체
    if (hover || pulse) {
        ctx.shadowColor = color;
        ctx.shadowBlur = hover ? 14 : 6 + pulse * 10;
    }
    roundRect(ctx, 0, 0, w, h, 6);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, shade(base, hover ? 0.35 : 0.2));
    g.addColorStop(1, shade(base, -0.2));
    ctx.fillStyle = g;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.strokeStyle = color;
    ctx.lineWidth = hover ? 2 : 1.5;
    ctx.stroke();
    // 윗면 광택
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    roundRect(ctx, 2, 2, w - 4, h * 0.45, 4);
    ctx.fill();

    ctx.fillStyle = hover ? shade(color, 0.35) : color;
    ctx.font = `bold ${opts.font ?? 12}px monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, w / 2, h / 2 + 1);
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'left';
    ctx.restore();
}

// 포인터를 뗀 위치에 버튼이 있으면 터지는 피드백
export function buttonClickFeedback(mx, my) {
    for (let i = frameButtons.length - 1; i >= 0; i--) {
        const b = frameButtons[i];
        if (!b.disabled && mx >= b.x && mx <= b.x + b.w && my >= b.y && my <= b.y + b.h) {
            spawnUiBurst(mx, my, b.color);
            return true;
        }
    }
    return false;
}
