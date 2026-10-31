// 효과음: 외부 파일 없이 WebAudio로 즉석 합성 (M 키로 음소거)
const MUTE_KEY = 'fantasyIdle_muted';

let ac = null;
let master = null;
let noiseBuf = null;
let muted = false;
try { muted = localStorage.getItem(MUTE_KEY) === '1'; } catch { /* 무시 */ }

// 브라우저 정책상 첫 입력 이후에만 소리를 낼 수 있음
export function unlockAudio() {
    if (!ac) {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return;
        ac = new Ctx();
        master = ac.createGain();
        master.gain.value = muted ? 0 : 0.55;
        // 과도한 볼륨 겹침 방지
        const comp = ac.createDynamicsCompressor();
        master.connect(comp);
        comp.connect(ac.destination);
        noiseBuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
        const d = noiseBuf.getChannelData(0);
        for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    if (ac.state === 'suspended') ac.resume();
}

export function isMuted() { return muted; }

export function toggleMute() {
    muted = !muted;
    try { localStorage.setItem(MUTE_KEY, muted ? '1' : '0'); } catch { /* 무시 */ }
    if (master) master.gain.setTargetAtTime(muted ? 0 : 0.55, ac.currentTime, 0.02);
    return muted;
}

const ready = () => ac && ac.state === 'running' && !muted;

function envelope(gain, t, vol, dur, attack = 0.005) {
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(vol, t + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
}

function tone({ type = 'square', freq, to = freq, dur = 0.1, vol = 0.2, delay = 0, attack }) {
    const t = ac.currentTime + delay;
    const osc = ac.createOscillator();
    const g = ac.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (to !== freq) osc.frequency.exponentialRampToValueAtTime(Math.max(20, to), t + dur);
    envelope(g, t, vol, dur, attack);
    osc.connect(g).connect(master);
    osc.start(t);
    osc.stop(t + dur + 0.05);
}

function noise({ filter = 'lowpass', freq = 1000, to = freq, q = 1, dur = 0.1, vol = 0.3, delay = 0, attack }) {
    const t = ac.currentTime + delay;
    const src = ac.createBufferSource();
    src.buffer = noiseBuf;
    const f = ac.createBiquadFilter();
    f.type = filter;
    f.Q.value = q;
    f.frequency.setValueAtTime(freq, t);
    if (to !== freq) f.frequency.exponentialRampToValueAtTime(Math.max(20, to), t + dur);
    const g = ac.createGain();
    envelope(g, t, vol, dur, attack);
    src.connect(f).connect(g).connect(master);
    src.start(t, Math.random() * 0.5);
    src.stop(t + dur + 0.05);
}

// 같은 소리가 한 프레임에 몰리지 않도록 최소 간격 적용
const lastPlayed = {};
function play(name, gapMs, fn) {
    if (!ready()) return;
    const now = performance.now();
    if (now - (lastPlayed[name] ?? 0) < gapMs) return;
    lastPlayed[name] = now;
    fn();
}

// 약간의 음높이 변화로 반복음의 단조로움 완화
const vary = (f, amt = 0.08) => f * (1 + (Math.random() - 0.5) * amt * 2);

export const sfx = {
    swing: () => play('swing', 40, () => {
        noise({ filter: 'bandpass', freq: vary(2400), to: 700, q: 1.2, dur: 0.13, vol: 0.22, attack: 0.02 });
    }),
    hit: () => play('hit', 30, () => {
        noise({ filter: 'lowpass', freq: 1800, to: 300, dur: 0.09, vol: 0.45 });
        tone({ type: 'square', freq: vary(220), to: 70, dur: 0.08, vol: 0.18 });
    }),
    crit: () => play('crit', 30, () => {
        noise({ filter: 'lowpass', freq: 2600, to: 300, dur: 0.12, vol: 0.55 });
        tone({ type: 'square', freq: 160, to: 50, dur: 0.12, vol: 0.25 });
        tone({ type: 'triangle', freq: 1200, to: 1900, dur: 0.14, vol: 0.18, delay: 0.01 });
    }),
    kill: () => play('kill', 50, () => {
        tone({ type: 'square', freq: vary(420), to: 90, dur: 0.22, vol: 0.2 });
        noise({ filter: 'lowpass', freq: 1400, to: 120, dur: 0.28, vol: 0.35 });
    }),
    bigKill: () => play('bigKill', 200, () => {
        tone({ type: 'sawtooth', freq: 180, to: 30, dur: 0.9, vol: 0.3 });
        noise({ filter: 'lowpass', freq: 900, to: 60, dur: 1.0, vol: 0.5, attack: 0.01 });
        [523, 659, 784, 1047].forEach((f, i) => tone({ type: 'triangle', freq: f, dur: 0.25, vol: 0.15, delay: 0.35 + i * 0.09 }));
    }),
    coin: () => play('coin', 45, () => {
        const b = vary(1000, 0.04);
        tone({ type: 'square', freq: b, dur: 0.05, vol: 0.07 });
        tone({ type: 'square', freq: b * 1.335, dur: 0.12, vol: 0.07, delay: 0.05 });
    }),
    hurt: () => play('hurt', 60, () => {
        tone({ type: 'sawtooth', freq: vary(260), to: 90, dur: 0.18, vol: 0.22 });
        noise({ filter: 'lowpass', freq: 900, to: 200, dur: 0.12, vol: 0.3 });
    }),
    tick: () => play('tick', 120, () => {
        tone({ type: 'triangle', freq: vary(300), to: 180, dur: 0.07, vol: 0.1 });
    }),
    death: () => play('death', 500, () => {
        tone({ type: 'sawtooth', freq: 330, to: 40, dur: 1.1, vol: 0.3 });
        tone({ type: 'triangle', freq: 165, to: 30, dur: 1.3, vol: 0.25, delay: 0.05 });
        noise({ filter: 'lowpass', freq: 700, to: 60, dur: 0.6, vol: 0.4 });
    }),
    explode: () => play('explode', 80, () => {
        noise({ filter: 'lowpass', freq: 1200, to: 80, dur: 0.45, vol: 0.6, attack: 0.003 });
        tone({ type: 'sine', freq: 120, to: 35, dur: 0.4, vol: 0.4 });
    }),
    slam: () => play('slam', 150, () => {
        tone({ type: 'sine', freq: 90, to: 30, dur: 0.5, vol: 0.5 });
        noise({ filter: 'lowpass', freq: 600, to: 60, dur: 0.45, vol: 0.45 });
    }),
    bow: () => play('bow', 80, () => {
        tone({ type: 'triangle', freq: 520, to: 260, dur: 0.12, vol: 0.12 });
        noise({ filter: 'highpass', freq: 3000, dur: 0.08, vol: 0.12 });
    }),
    enemySwing: () => play('enemySwing', 60, () => {
        noise({ filter: 'bandpass', freq: vary(900), to: 400, q: 1.5, dur: 0.14, vol: 0.14, attack: 0.03 });
    }),
    step: () => play('step', 100, () => {
        noise({ filter: 'lowpass', freq: vary(500, 0.2), to: 150, dur: 0.05, vol: 0.06 });
    }),
    boss: () => play('boss', 500, () => {
        tone({ type: 'sawtooth', freq: 73, dur: 1.2, vol: 0.25, attack: 0.08 });
        tone({ type: 'sawtooth', freq: 110, dur: 1.2, vol: 0.18, attack: 0.08, delay: 0.25 });
        noise({ filter: 'lowpass', freq: 300, dur: 1.0, vol: 0.3, attack: 0.1 });
    }),
    artifact: () => play('artifact', 300, () => {
        [784, 988, 1175, 1568].forEach((f, i) => tone({ type: 'triangle', freq: f, dur: 0.3, vol: 0.13, delay: i * 0.07 }));
    }),
    click: () => play('click', 40, () => {
        tone({ type: 'square', freq: 620, to: 900, dur: 0.06, vol: 0.12 });
    }),
    hover: () => play('hover', 60, () => {
        tone({ type: 'sine', freq: 1400, dur: 0.03, vol: 0.05 });
    }),
    buy: () => play('buy', 80, () => {
        [523, 659, 784, 1047].forEach((f, i) => tone({ type: 'square', freq: f, dur: 0.1, vol: 0.09, delay: i * 0.055 }));
        noise({ filter: 'highpass', freq: 5000, dur: 0.3, vol: 0.08, delay: 0.15 });
    }),
    deny: () => play('deny', 120, () => {
        tone({ type: 'square', freq: 150, dur: 0.07, vol: 0.14 });
        tone({ type: 'square', freq: 120, dur: 0.1, vol: 0.14, delay: 0.09 });
    }),
    stageClear: () => play('stageClear', 500, () => {
        [523, 659, 784].forEach((f, i) => tone({ type: 'square', freq: f, dur: 0.12, vol: 0.1, delay: i * 0.09 }));
        tone({ type: 'square', freq: 1047, dur: 0.35, vol: 0.12, delay: 0.27 });
        tone({ type: 'triangle', freq: 523, dur: 0.5, vol: 0.12, delay: 0.27 });
    }),
    start: () => play('start', 300, () => {
        [392, 523, 659, 784].forEach((f, i) => tone({ type: 'triangle', freq: f, dur: 0.18, vol: 0.14, delay: i * 0.07 }));
    }),
};
