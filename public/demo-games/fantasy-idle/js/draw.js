// 공용 그리기 헬퍼: 색 보정, 그림자, 둥근 사각형
export function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const f = c => Math.max(0, Math.min(255, Math.round(amt >= 0 ? c + (255 - c) * amt : c * (1 + amt))));
    const r = f(n >> 16), g = f((n >> 8) & 255), b = f(n & 255);
    return `rgb(${r},${g},${b})`;
}

export function groundShadow(ctx, x, y, w, alpha = 0.35) {
    ctx.fillStyle = `rgba(0,0,0,${alpha})`;
    ctx.beginPath();
    ctx.ellipse(x, y, w / 2, Math.max(2, w * 0.14), 0, 0, Math.PI * 2);
    ctx.fill();
}

export function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, r);
}

export function outlined(ctx, fill, stroke = 'rgba(0,0,0,0.55)', width = 1.5) {
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.strokeStyle = stroke;
    ctx.lineWidth = width;
    ctx.stroke();
}

export const ease = {
    outBack: p => 1 + 2.7 * Math.pow(p - 1, 3) + 1.7 * Math.pow(p - 1, 2),
    outCubic: p => 1 - Math.pow(1 - p, 3),
};
