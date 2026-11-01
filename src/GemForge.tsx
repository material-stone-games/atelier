import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

// One cycle: raw ore fades in at the top left, a laser slices it from top to bottom and leaves a
// cut gem behind, the gem flies onto the stone dish and pushes the previous gem off to the right.
const CYCLE = 10.6;
const FADE_IN = [0, 1.3] as const;
const LASER_ON = [1.4, 1.9] as const;
const CUT = [1.9, 5.1] as const;
const LASER_OFF = [5.1, 5.45] as const;
const MOVE = [5.6, 7.2] as const;
const IMPACT = 6.35;
const PUSH = [IMPACT, 8.5] as const;
const SETTLE = [7.2, 8.0] as const;

const ORE_POS = new THREE.Vector3(-1.1, 0.62, 0);
const DISH_GEM_POS = new THREE.Vector3(0.6, -0.5, 0);
const PUSHED_POS = new THREE.Vector3(2.5, -0.7, -0.2);
const EMITTER_OFFSET = new THREE.Vector3(1.1, .5, 1);
const CHUNK_COUNT = 9;
const SPARK_COUNT = 90;
// The cut plane travels through the ore between these local heights.
const ORE_TOP = .92;
const ORE_BOTTOM = -.9;
const GEM_IN_ORE = .72;

const CUT_COLOR = new THREE.Color("#1747ff");

function clamp01(value: number) { return Math.min(1, Math.max(0, value)); }
function progress(t: number, [start, end]: readonly [number, number]) { return clamp01((t - start) / (end - start)); }
function easeInOut(x: number) { return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
function easeOut(x: number) { return 1 - Math.pow(1 - x, 3); }

// Where the beam touches the ore, relative to its centre: it rasters across the front while descending.
function cutHeight(t: number) { return THREE.MathUtils.lerp(ORE_TOP, ORE_BOTTOM, progress(t, CUT)); }
function contactOffset(t: number, target: THREE.Vector3) {
  const y = cutHeight(t);
  const radius = .66 * Math.sqrt(Math.max(0, 1 - (y / .95) ** 2)) + .06;
  const sweep = Math.sin(t * 6.5) * 1.15;
  return target.set(Math.sin(sweep) * radius, y, Math.cos(sweep) * radius);
}

function seeded(seed: number) {
  let s = seed;
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
}

// Jitter shared corners by position so faces of the non-indexed polyhedron stay closed.
function roughen(geometry: THREE.BufferGeometry, amount: number, random: () => number) {
  const position = geometry.getAttribute("position");
  const offsets = new Map<string, THREE.Vector3>();
  const vertex = new THREE.Vector3();
  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);
    const key = `${vertex.x.toFixed(3)},${vertex.y.toFixed(3)},${vertex.z.toFixed(3)}`;
    if (!offsets.has(key)) offsets.set(key, new THREE.Vector3(random() - .5, random() - .5, random() - .5).multiplyScalar(amount));
    vertex.add(offsets.get(key)!);
    position.setXYZ(i, vertex.x, vertex.y, vertex.z);
  }
  geometry.computeVertexNormals();
  return geometry;
}

function gemGeometry() {
  const profile = [[0.001, -0.62], [0.6, -0.02], [0.64, 0.04], [0.52, 0.19], [0.36, 0.29], [0.001, 0.29]].map(([x, y]) => new THREE.Vector2(x, y));
  return new THREE.LatheGeometry(profile, 10);
}

function softDiscTexture(inner: string, outer: string) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const context = canvas.getContext("2d")!;
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, inner);
  gradient.addColorStop(1, outer);
  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function starTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 128;
  const context = canvas.getContext("2d")!;
  const glow = context.createRadialGradient(64, 64, 0, 64, 64, 64);
  glow.addColorStop(0, "rgba(255,255,255,1)");
  glow.addColorStop(.12, "rgba(200,220,255,.55)");
  glow.addColorStop(1, "rgba(120,160,255,0)");
  context.fillStyle = glow;
  context.fillRect(0, 0, 128, 128);
  context.fillStyle = "rgba(235,242,255,.9)";
  context.beginPath();
  context.moveTo(64, 2); context.lineTo(68, 60); context.lineTo(126, 64); context.lineTo(68, 68);
  context.lineTo(64, 126); context.lineTo(60, 68); context.lineTo(2, 64); context.lineTo(60, 60);
  context.closePath();
  context.fill();
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

type Gem = { mesh: THREE.Mesh<THREE.LatheGeometry, THREE.MeshPhysicalMaterial>; clip: THREE.Plane; spin: number };

export default function GemForge() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const random = seeded(7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.localClippingEnabled = true;
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environment = environment;

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
    camera.position.set(0, 0.35, 6.6);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.HemisphereLight("#cfe0ff", "#1a1410", 0.6));
    const key = new THREE.DirectionalLight("#fff4e6", 2.2);
    key.position.set(-3, 4, 5);
    scene.add(key);
    const rim = new THREE.PointLight("#6f9bff", 18, 12);
    scene.add(rim);
    const ember = new THREE.PointLight("#ff7144", 6, 8);
    ember.position.set(2.5, -1.6, 2);
    scene.add(ember);

    const disposables: { dispose(): void }[] = [environment, pmrem];
    const track = <T extends { dispose(): void }>(item: T) => { disposables.push(item); return item; };

    // World-space cut planes: the ore keeps what is below the beam, the new gem what is above it.
    const oreClip = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0);

    // Stone dish the finished gem rests on, echoing the site icon.
    const stoneMaterial = track(new THREE.MeshStandardMaterial({ color: "#3f454b", roughness: .95, envMapIntensity: .35, flatShading: true }));
    const dish = new THREE.Group();
    const dishBody = new THREE.Mesh(track(roughen(new THREE.CylinderGeometry(1.05, .78, .38, 11, 1), .07, random)), stoneMaterial);
    const dishHollow = new THREE.Mesh(track(new THREE.CylinderGeometry(.66, .5, .08, 11)), track(new THREE.MeshStandardMaterial({ color: "#23282c", roughness: 1, envMapIntensity: .2, flatShading: true })));
    dishHollow.position.y = .17;
    dish.add(dishBody, dishHollow);
    const dishGlow = dishHollow.material as THREE.MeshStandardMaterial;
    dishGlow.emissive.set("#2a5cff");
    dishGlow.emissiveIntensity = 0;
    // Shock ring that spreads across the dish when the new gem knocks the old one off.
    const ring = new THREE.Mesh(track(new THREE.RingGeometry(.55, .62, 48)), track(new THREE.MeshBasicMaterial({ color: "#8fb0ff", transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })));
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = .23;
    dish.add(ring);
    dish.position.set(DISH_GEM_POS.x, DISH_GEM_POS.y - .72, 0);
    dish.rotation.x = .12;
    scene.add(dish);

    const shadow = new THREE.Mesh(track(new THREE.PlaneGeometry(3.2, 1.4)), track(new THREE.MeshBasicMaterial({ map: track(softDiscTexture("rgba(0,0,0,.55)", "rgba(0,0,0,0)")), transparent: true, depthWrite: false })));
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.set(dish.position.x, dish.position.y - .2, 0);
    scene.add(shadow);

    // Two gems trade roles every cycle: one is cut from the ore, the other is pushed away.
    const gemGeo = track(gemGeometry());
    const makeGem = (): Gem => {
      const clip = new THREE.Plane(new THREE.Vector3(0, 1, 0), 100);
      const material = track(new THREE.MeshPhysicalMaterial({ color: CUT_COLOR, metalness: .2, roughness: .08, clearcoat: 1, clearcoatRoughness: .04, iridescence: .12, envMapIntensity: 1.1, specularColor: new THREE.Color("#9ab4ff"), emissive: "#0b2aa0", emissiveIntensity: .35, flatShading: true, transparent: true, clippingPlanes: [clip] }));
      const mesh = new THREE.Mesh(gemGeo, material);
      mesh.rotation.x = .22;
      scene.add(mesh);
      return { mesh, clip, spin: random() * Math.PI };
    };
    const gems = [makeGem(), makeGem()];

    // Glints: one flashes on the freshly cut gem, one twinkles now and then on the resting gem.
    const starMap = track(starTexture());
    const makeGlint = () => {
      const sprite = new THREE.Sprite(track(new THREE.SpriteMaterial({ map: starMap, transparent: true, opacity: 0, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending })));
      scene.add(sprite);
      return sprite;
    };
    const cutGlint = makeGlint();
    const restGlint = makeGlint();

    // Raw ore: a lump of rough stone chunks with blue crystal tips. The gem waits inside it.
    const ore = new THREE.Group();
    ore.position.copy(ORE_POS);
    scene.add(ore);
    const crystalMaterial = track(new THREE.MeshStandardMaterial({ color: "#3d6dff", emissive: "#14307a", roughness: .3, metalness: .2, flatShading: true, transparent: true, clippingPlanes: [oreClip] }));
    const oreMaterials = Array.from({ length: CHUNK_COUNT }, () => {
      const material = track(stoneMaterial.clone());
      material.transparent = true;
      material.side = THREE.DoubleSide;
      material.clippingPlanes = [oreClip];
      material.color.offsetHSL(0, 0, (random() - .5) * .08);
      return material;
    });
    for (let index = 0; index < CHUNK_COUNT; index++) {
      const y = 1 - (index + .5) / CHUNK_COUNT * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = index * 2.39996;
      const mesh = new THREE.Mesh(track(roughen(new THREE.IcosahedronGeometry(.4 + random() * .1, 0), .16, random)), oreMaterials[index]);
      mesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius).multiplyScalar(.36);
      mesh.rotation.set(random() * 6, random() * 6, random() * 6);
      if (index % 2 === 0) {
        const tip = new THREE.Mesh(track(new THREE.OctahedronGeometry(.1, 0)), crystalMaterial);
        tip.position.set(.28, .12, .1);
        tip.scale.set(.7, 1.5, .7);
        mesh.add(tip);
      }
      ore.add(mesh);
    }

    // Laser: a small emitter above the ore, a white-hot core inside an orange glow, and a hot spot where it bites.
    const metalMaterial = track(new THREE.MeshStandardMaterial({ color: "#2b3137", metalness: .85, roughness: .32, flatShading: true, transparent: true }));
    const lensMaterial = track(new THREE.MeshBasicMaterial({ color: "#ffb38f", transparent: true }));
    const emitter = new THREE.Group();
    const emitterBody = new THREE.Mesh(track(new THREE.CylinderGeometry(.08, .13, .36, 6)), metalMaterial);
    const emitterCollar = new THREE.Mesh(track(new THREE.CylinderGeometry(.15, .15, .06, 6)), metalMaterial);
    emitterCollar.position.y = -.1;
    const lens = new THREE.Mesh(track(new THREE.SphereGeometry(.055, 12, 8)), lensMaterial);
    lens.position.y = .19;
    emitter.add(emitterBody, emitterCollar, lens);
    scene.add(emitter);

    const beamGeometry = track(new THREE.CylinderGeometry(1, 1, 1, 12, 1, true));
    const makeBeam = (color: string, radius: number, strength: number) => {
      const mesh = new THREE.Mesh(beamGeometry, track(new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })));
      scene.add(mesh);
      return { mesh, radius, strength };
    };
    const beams = [makeBeam("#ff7144", .055, .45), makeBeam("#ffe6d2", .014, .95)];
    const hotSpot = new THREE.Sprite(track(new THREE.SpriteMaterial({ map: track(softDiscTexture("rgba(255,240,220,1)", "rgba(255,113,68,0)")), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })));
    scene.add(hotSpot);
    const hotLight = new THREE.PointLight("#ff8a5c", 0, 2.6, 1.6);
    scene.add(hotLight);
    // Molten seam around the ore at the height of the cut.
    const seam = new THREE.Mesh(track(new THREE.RingGeometry(.94, 1, 56)), track(new THREE.MeshBasicMaterial({ color: "#ff8a5c", transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide })));
    seam.rotation.x = -Math.PI / 2;
    scene.add(seam);

    // Sparks spray from the contact point for the whole cut; additive vertex colours fade them out.
    const sparkPositions = new Float32Array(SPARK_COUNT * 3);
    const sparkColors = new Float32Array(SPARK_COUNT * 3);
    const sparkGeo = track(new THREE.BufferGeometry());
    sparkGeo.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));
    sparkGeo.setAttribute("color", new THREE.BufferAttribute(sparkColors, 3));
    const sparks = new THREE.Points(sparkGeo, track(new THREE.PointsMaterial({ size: .11, map: track(softDiscTexture("rgba(255,255,255,1)", "rgba(255,255,255,0)")), vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending })));
    scene.add(sparks);
    const sparkData = Array.from({ length: SPARK_COUNT }, (_, index) => {
      const start = CUT[0] + (index / SPARK_COUNT) * (CUT[1] - CUT[0]) + random() * .05;
      const origin = contactOffset(start, new THREE.Vector3());
      const outward = origin.clone().setY(0).normalize();
      const velocity = outward.multiplyScalar(.6 + random() * 1.1).add(new THREE.Vector3((random() - .5) * .8, .4 + random() * 1.1, (random() - .5) * .8));
      return { start, origin, life: .45 + random() * .5, velocity, tint: random() > .35 ? new THREE.Color("#ffc59e") : new THREE.Color("#fff4e8") };
    });

    const pointer = new THREE.Vector2();
    const onPointerMove = (event: PointerEvent) => { pointer.set(event.clientX / window.innerWidth * 2 - 1, -(event.clientY / window.innerHeight * 2 - 1)); };
    if (!reduceMotion) window.addEventListener("pointermove", onPointerMove);

    const position = new THREE.Vector3();
    const control = new THREE.Vector3();
    const contact = new THREE.Vector3();
    const emitterPos = new THREE.Vector3();
    const beamDir = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    const warm = new THREE.Color("#7a2a10");
    let clockTime = reduceMotion ? 9 : 0;

    function placeGem(gem: Gem, role: "incoming" | "outgoing", t: number, dt: number) {
      const { mesh } = gem;
      const material = mesh.material;
      const bob = Math.sin(clockTime * 1.3 + (role === "incoming" ? 0 : 2)) * .04;
      let spinSpeed = .45;

      if (role === "incoming") {
        const move = easeInOut(progress(t, MOVE));
        const settle = progress(t, SETTLE);
        // Freshly cut facets stay warm from the laser for a moment.
        const heat = t < CUT[0] ? 0 : Math.max(0, 1 - Math.max(0, t - CUT[1]) / .8);
        material.emissive.set("#0b2aa0").lerp(warm, heat * .6);
        material.emissiveIntensity = .35 + heat * .6;
        material.opacity = 1;
        // While inside the ore the gem turns with it, so the cut stays continuous.
        spinSpeed = t < CUT[1] ? .35 : t < MOVE[1] ? .45 + 1.8 * Math.sin(Math.PI * progress(t, [CUT[1], MOVE[1]])) : .45;

        // Arc from the ore to the dish, then a small landing bounce.
        control.set(DISH_GEM_POS.x - 1.3, DISH_GEM_POS.y + .1, .3);
        const u = move;
        position.copy(ore.position).multiplyScalar((1 - u) * (1 - u)).addScaledVector(control, 2 * u * (1 - u)).addScaledVector(DISH_GEM_POS, u * u);
        if (settle > 0) position.y += Math.sin(settle * Math.PI) * .09 * (1 - settle) + bob * settle;
        mesh.position.copy(position);
        mesh.scale.setScalar(GEM_IN_ORE + (1 - GEM_IN_ORE) * move);
        mesh.rotation.z = Math.sin(move * Math.PI) * -.35;
        mesh.rotation.x = .22;
      } else {
        const push = progress(t, PUSH);
        const eased = easeOut(push);
        mesh.position.copy(DISH_GEM_POS).lerp(PUSHED_POS, eased);
        mesh.position.y += bob * (1 - push) - Math.sin(eased * Math.PI * .5) * .1;
        mesh.rotation.z = -.9 * eased;
        mesh.rotation.x = .22 + .5 * eased;
        mesh.scale.setScalar(1 - .15 * eased);
        material.opacity = 1 - easeInOut(clamp01(push * 1.25));
        gem.clip.constant = 100;
        material.emissiveIntensity = .35 + 1.2 * Math.max(0, 1 - push * 6);
        spinSpeed = .45 + 1.6 * Math.sin(Math.PI * push);
      }
      mesh.visible = material.opacity > .01;
      gem.spin += spinSpeed * dt;
      mesh.rotation.y = gem.spin;
    }

    function update(dt: number) {
      clockTime += dt;
      const cycle = Math.floor(clockTime / CYCLE);
      const t = clockTime - cycle * CYCLE;
      const incoming = gems[cycle % 2];
      const outgoing = gems[(cycle + 1) % 2];

      const fade = easeOut(progress(t, FADE_IN));
      ore.position.copy(ORE_POS).add(new THREE.Vector3(-.4 * (1 - fade), .3 * (1 - fade), 0));
      ore.position.y += Math.sin(clockTime * 1.1) * .05;
      ore.rotation.y += dt * .35;
      ore.scale.setScalar(.85 + .15 * fade);
      crystalMaterial.opacity = fade;
      for (const material of oreMaterials) material.opacity = fade;

      // Everything above the beam is gone from the ore and present on the gem.
      const cutY = ore.position.y + cutHeight(t) * ore.scale.y;
      oreClip.constant = cutY;
      incoming.clip.constant = t < CUT[1] ? -cutY : 100;

      const laser = easeOut(progress(t, LASER_ON)) * (1 - easeOut(progress(t, LASER_OFF)));
      const cutting = t >= CUT[0] && t <= CUT[1];
      contactOffset(Math.min(Math.max(t, CUT[0]), CUT[1]), contact).multiplyScalar(ore.scale.x).add(ore.position);
      emitterPos.copy(ore.position).add(EMITTER_OFFSET);
      emitterPos.x += Math.sin(clockTime * 1.7) * .05;
      beamDir.copy(contact).sub(emitterPos);
      const beamLength = beamDir.length();
      beamDir.normalize();
      emitter.position.copy(emitterPos).addScaledVector(beamDir, -.19);
      emitter.quaternion.setFromUnitVectors(up, beamDir);
      metalMaterial.opacity = laser;
      lensMaterial.opacity = laser;
      emitter.visible = laser > .01;
      const flicker = .85 + .15 * Math.sin(clockTime * 47) * Math.sin(clockTime * 31);
      const firing = cutting ? laser * flicker : laser * .15;
      for (const beam of beams) {
        beam.mesh.position.copy(emitterPos).addScaledVector(beamDir, beamLength / 2);
        beam.mesh.quaternion.setFromUnitVectors(up, beamDir);
        const radius = beam.radius * (.4 + .6 * firing);
        beam.mesh.scale.set(radius, beamLength, radius);
        beam.mesh.material.opacity = firing * beam.strength;
        beam.mesh.visible = firing > .01;
      }
      hotSpot.position.copy(contact);
      hotSpot.scale.setScalar(.28 + .14 * flicker);
      hotSpot.material.opacity = cutting ? firing : 0;
      hotLight.position.copy(contact).addScaledVector(beamDir, -.15);
      hotLight.intensity = cutting ? 5 * firing : 0;
      const seamRadius = (.66 * Math.sqrt(Math.max(0, 1 - (cutHeight(t) / .95) ** 2)) + .05) * ore.scale.x;
      seam.position.set(ore.position.x, cutY, ore.position.z);
      seam.scale.setScalar(Math.max(.01, seamRadius));
      seam.material.opacity = cutting ? .4 * firing : 0;

      sparkData.forEach((spark, index) => {
        const age = t - spark.start;
        const alive = age > 0 && age < spark.life;
        const life = alive ? age / spark.life : 1;
        const base = index * 3;
        sparkPositions[base] = ore.position.x + spark.origin.x + spark.velocity.x * age;
        sparkPositions[base + 1] = ore.position.y + spark.origin.y + spark.velocity.y * age - 2.4 * age * age;
        sparkPositions[base + 2] = ore.position.z + spark.origin.z + spark.velocity.z * age;
        const glow = alive ? (1 - life) * (1 - life) : 0;
        sparkColors[base] = spark.tint.r * glow;
        sparkColors[base + 1] = spark.tint.g * glow;
        sparkColors[base + 2] = spark.tint.b * glow;
      });
      sparkGeo.attributes.position.needsUpdate = true;
      sparkGeo.attributes.color.needsUpdate = true;

      placeGem(incoming, "incoming", t, dt);
      placeGem(outgoing, "outgoing", t, dt);
      const flash = Math.max(0, 1 - Math.abs(t - (CUT[1] + .15)) / .4);
      cutGlint.position.copy(incoming.mesh.position).add(new THREE.Vector3(.12, .1, .5));
      cutGlint.scale.setScalar(.25 + 1.1 * flash);
      cutGlint.material.opacity = flash;
      cutGlint.material.rotation = clockTime * .6;

      const impact = t >= IMPACT ? t - IMPACT : Infinity;
      const ringLife = clamp01(impact / .9);
      ring.scale.setScalar(.6 + 1.3 * easeOut(ringLife));
      ring.material.opacity = impact < .9 ? .75 * (1 - ringLife) : 0;
      dishGlow.emissiveIntensity = impact < 1.4 ? 1.6 * Math.exp(-impact * 3) : 0;

      // The resting gem catches the light every few seconds while nothing else is moving.
      const resting = t > SETTLE[1] ? incoming : t < PUSH[0] ? outgoing : null;
      const twinkle = resting ? Math.pow(Math.max(0, Math.sin(clockTime * 2.1)), 24) : 0;
      if (resting) restGlint.position.copy(resting.mesh.position).add(new THREE.Vector3(-.22, .2, .55));
      restGlint.scale.setScalar(.15 + .55 * twinkle);
      restGlint.material.opacity = twinkle * .9;

      rim.position.set(Math.cos(clockTime * .4) * 3, 1.5 + Math.sin(clockTime * .3), 2.5);

      // Ease the camera toward the pointer for a little parallax.
      const ease = 1 - Math.exp(-dt * 2.5);
      camera.position.x += (pointer.x * .45 - camera.position.x) * ease;
      camera.position.y += (.35 + pointer.y * .25 - camera.position.y) * ease;
      camera.lookAt(0, 0, 0);
    }

    function resize() {
      const { clientWidth, clientHeight } = host!;
      if (!clientWidth || !clientHeight) return;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      if (reduceMotion) renderer.render(scene, camera);
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    let frame = 0;
    let last = performance.now();
    let onScreen = true;
    const loop = (now: number) => {
      frame = requestAnimationFrame(loop);
      const dt = Math.min(.05, (now - last) / 1000);
      last = now;
      if (!onScreen || document.hidden) return;
      update(dt);
      renderer.render(scene, camera);
    };
    // Pause off screen so the scene costs nothing while the hero is scrolled away or hidden.
    const intersection = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; last = performance.now(); });
    intersection.observe(host);

    // Dev-only scrubber so a single frame of the cycle can be inspected: __gemForge(5.2)
    const scrubbable = window as unknown as { __gemForge?: (t: number) => void };
    if (import.meta.env.DEV) scrubbable.__gemForge = (t) => { onScreen = false; clockTime = 0; update(0); for (let step = 0; step < t / .05; step++) update(.05); renderer.render(scene, camera); };

    if (reduceMotion) {
      update(0);
      renderer.render(scene, camera);
    } else {
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      delete scrubbable.__gemForge;
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      intersection.disconnect();
      disposables.forEach((item) => item.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="gem-forge" ref={hostRef} />;
}
