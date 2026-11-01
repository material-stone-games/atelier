// 유물 아이콘과 호버 툴팁 (HUD, 메인 화면 공용)
import { W, H } from './constants.js';
import { ARTIFACT_DEFS } from './artifact-data.js';
import { pointer } from './ui.js';
import { drawIcon } from './icons.js';
import { pixWindow, pixText, PIX_FONT } from './pixel.js';

const RARITY = {
    common: { label: '일반', line: '#94b0c2', text: '#c2d0dc' },
    rare:   { label: '희귀', line: '#41a6f6', text: '#73eff7' },
    legend: { label: '전설', line: '#ef7d57', text: '#ffcd75' },
    myth:   { label: '신화', line: '#8b5fbf', text: '#c9a8ff' },
};

let hovered = null;   // 이번 프레임에 포인터가 올라간 유물 ID

export function beginArtifactFrame() { hovered = null; }

export function drawArtifactIcon(ctx, id, x, y, size) {
    const def = ARTIFACT_DEFS[id];
    if (!def) return;
    const r = RARITY[def.rarity] ?? RARITY.common;
    const over = pointer.x >= x && pointer.x <= x + size && pointer.y >= y && pointer.y <= y + size;
    if (over) hovered = id;
    // 등급 색 테두리 칸 + 픽셀 아이콘
    ctx.fillStyle = over ? '#f4f4f4' : r.line;
    ctx.fillRect(x, y, size, size);
    ctx.fillStyle = '#1a1c2c';
    ctx.fillRect(x + 2, y + 2, size - 4, size - 4);
    drawIcon(ctx, id, x + 4, y + 4, size - 8);
}

// 글자 단위 줄바꿈 (한글은 띄어쓰기 없이도 끊김)
function wrap(ctx, text, maxW) {
    const lines = [];
    let line = '';
    for (const ch of text) {
        if (ctx.measureText(line + ch).width > maxW && line) {
            lines.push(line.trimEnd());
            line = ch === ' ' ? '' : ch;
        } else line += ch;
    }
    if (line) lines.push(line);
    return lines;
}

// 모든 화면을 그린 뒤 마지막에 호출해 툴팁이 맨 위에 오게 함
export function renderArtifactTooltip(ctx) {
    const def = hovered && ARTIFACT_DEFS[hovered];
    if (!def) return;
    const r = RARITY[def.rarity] ?? RARITY.common;
    const tw = 220, pad = 14;
    ctx.font = `bold 11px ${PIX_FONT}`;
    const lines = wrap(ctx, def.desc, tw - pad * 2);
    const th = 46 + lines.length * 15;
    let x = pointer.x + 14, y = pointer.y - th - 8;
    if (x + tw > W - 4) x = pointer.x - tw - 14;
    if (y < 4) y = Math.min(H - th - 4, pointer.y + 18);

    pixWindow(ctx, x, y, tw, th, { border: r.line });
    drawIcon(ctx, hovered, x + 12, y + 11, 18);
    pixText(ctx, def.name, x + 36, y + 25, 12, r.text);
    pixText(ctx, `[${r.label}]`, x + tw - pad, y + 25, 10, r.line, 'right');
    lines.forEach((l, i) => pixText(ctx, l, x + pad, y + 44 + i * 15, 11, '#f4f4f4'));
}
