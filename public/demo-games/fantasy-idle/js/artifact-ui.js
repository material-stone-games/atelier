// 유물 아이콘과 호버 툴팁 (HUD, 메인 화면 공용)
import { W, H } from './constants.js';
import { ARTIFACT_DEFS } from './artifact-data.js';
import { pointer } from './ui.js';

const RARITY = {
    common: { label: '일반', bg: '#404050', line: '#606878', text: '#c8d0e0' },
    rare:   { label: '희귀', bg: '#204060', line: '#4080ff', text: '#70b0ff' },
    legend: { label: '전설', bg: '#402800', line: '#ffa040', text: '#ffb860' },
    myth:   { label: '신화', bg: '#300040', line: '#c080ff', text: '#d8a0ff' },
};

let hovered = null;   // 이번 프레임에 포인터가 올라간 유물 ID

export function beginArtifactFrame() { hovered = null; }

export function drawArtifactIcon(ctx, id, x, y, size) {
    const def = ARTIFACT_DEFS[id];
    if (!def) return;
    const r = RARITY[def.rarity] ?? RARITY.common;
    const over = pointer.x >= x && pointer.x <= x + size && pointer.y >= y && pointer.y <= y + size;
    if (over) hovered = id;
    ctx.fillStyle = r.bg;
    ctx.fillRect(x, y, size, size);
    ctx.strokeStyle = over ? '#ffffff' : r.line;
    ctx.lineWidth = over ? 2 : 1;
    ctx.strokeRect(x, y, size, size);
    ctx.font = `${Math.round(size * 0.58)}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#fff';
    ctx.fillText(def.icon, x + size / 2, y + size / 2 + 1);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
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
    const tw = 210, pad = 8;
    ctx.font = '10px monospace';
    const lines = wrap(ctx, def.desc, tw - pad * 2);
    const th = 38 + lines.length * 14;
    let x = pointer.x + 14, y = pointer.y - th - 8;
    if (x + tw > W - 4) x = pointer.x - tw - 14;
    if (y < 4) y = Math.min(H - th - 4, pointer.y + 18);

    ctx.fillStyle = 'rgba(10,10,28,0.95)';
    ctx.beginPath(); ctx.roundRect(x, y, tw, th, 6); ctx.fill();
    ctx.strokeStyle = r.line;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.font = 'bold 12px monospace';
    ctx.fillStyle = r.text;
    ctx.fillText(`${def.icon} ${def.name}`, x + pad, y + 18);
    ctx.font = '9px monospace';
    ctx.textAlign = 'right';
    ctx.fillText(r.label, x + tw - pad, y + 18);
    ctx.textAlign = 'left';
    ctx.font = '10px monospace';
    ctx.fillStyle = '#d8dcec';
    lines.forEach((l, i) => ctx.fillText(l, x + pad, y + 36 + i * 14));
}
