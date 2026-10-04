"use client";

import { useEffect, useState } from "react";

type Region = {
  id: string;
  name: string;
  group: "Cortex" | "Deep" | "Back";
  color: string;
  tag: string;
  text: string;
  parent?: string;
  b: [number, number, number, number, number, number?]; // node blob: cx, cy, rx, ry, count, rot
  poly?: string;
  d?: string;
  sw?: number;
  ell?: [number, number, number, number, number];
};

const GROUPS = { Cortex: "Cortex", Deep: "Deep structures", Back: "Hindbrain" };

const OUTLINE =
  "M 110 285 C 100 200, 170 120, 270 95 C 370 70, 500 65, 590 100 C 670 130, 720 200, 722 275 C 724 330, 690 362, 640 368 C 600 372, 575 368, 545 378 C 515 388, 480 392, 450 388 C 420 396, 390 410, 350 418 C 310 424, 270 415, 250 392 C 235 375, 235 355, 215 350 C 185 346, 135 335, 110 285 Z";

// Order = draw order (back to front) = hit-test priority (last wins)
const R: Region[] = [
  { id: "cerebellum", name: "Cerebellum", group: "Back", color: "#34d399", ell: [612, 418, 92, 48, 8], b: [612, 420, 70, 26, 8, 8],
    tag: "Balance, coordination, timing",
    text: "The “little brain” at the back holds most of the brain's neurons in a fraction of its volume. It fine-tunes movement and learns skills until they become smooth.",
  },
  { id: "stem", name: "Brainstem", group: "Back", color: "#60a5fa", d: "M 452 382 C 450 430, 468 470, 478 508 L 526 508 C 522 468, 520 430, 540 384 Z", b: [496, 446, 16, 52, 6],
    tag: "Keeps you alive",
    text: "Midbrain, pons and medulla. It runs breathing, heart rate and the sleep-wake cycle, and routes every signal travelling between brain and body.",
  },
  { id: "frontal", name: "Frontal lobe", group: "Cortex", color: "#00f0ff", poly: "60,40 448,40 430,282 330,312 235,350 60,420", b: [240, 215, 90, 80, 16],
    tag: "Planning, decisions, movement, speech",
    text: "The largest lobe turns goals into action: planning ahead, choosing, sustaining attention, and commanding movement and speech.",
  },
  { id: "parietal", name: "Parietal lobe", group: "Cortex", color: "#8b5cf6", poly: "448,40 625,40 600,262 525,268 430,282", b: [535, 170, 75, 62, 12],
    tag: "Space, attention, combining the senses",
    text: "Merges touch, vision and balance into one sense of where your body is and what surrounds it. It also supports number sense and map reading.",
  },
  { id: "temporal", name: "Temporal lobe", group: "Cortex", color: "#ff2bd6", poly: "200,355 235,350 330,312 430,282 525,268 565,385 570,440 200,440", b: [400, 352, 95, 26, 11],
    tag: "Hearing, language, memory",
    text: "Sits above the ears. It processes sound, recognizes faces and objects, and works with the hippocampus to store new memories.",
  },
  { id: "occipital", name: "Occipital lobe", group: "Cortex", color: "#fbbf24", poly: "625,40 760,40 760,440 570,440 565,385 525,268 600,262", b: [655, 270, 50, 70, 12],
    tag: "Vision",
    text: "At the back of the head. It decodes edges, color and motion from the eyes; vision claims a surprisingly large share of the whole cortex.",
  },
  { id: "prefrontal", name: "Prefrontal cortex", group: "Cortex", parent: "frontal", color: "#7df9ff", ell: [160, 238, 42, 62, 0], b: [160, 238, 36, 56, 7],
    tag: "Judgment, focus, self-control",
    text: "The front edge of the frontal lobe weighs options, holds information in working memory and brakes impulses. It matures last, into the mid-twenties.",
  },
  { id: "motor", name: "Motor cortex", group: "Cortex", parent: "frontal", color: "#38bdf8", ell: [425, 150, 11, 66, 4], b: [425, 150, 10, 62, 6, 4],
    tag: "Sends voluntary movement commands",
    text: "A strip just in front of the central sulcus. Each patch drives a body part, and hands and face get a disproportionately big share.",
  },
  { id: "sensory", name: "Somatosensory cortex", group: "Cortex", parent: "parietal", color: "#818cf8", ell: [455, 150, 11, 66, 4], b: [455, 150, 10, 62, 6, 4],
    tag: "Touch, pressure, temperature, pain",
    text: "The strip just behind the central sulcus maps your body surface. Lips and fingertips take far more space than your back.",
  },
  { id: "broca", name: "Broca's area", group: "Cortex", parent: "frontal", color: "#22d3ee", ell: [290, 290, 20, 17, 0], b: [290, 290, 14, 12, 4],
    tag: "Producing speech",
    text: "Usually in the left frontal lobe. It strings words into fluent sentences and coordinates the muscles of speech.",
  },
  { id: "wernicke", name: "Wernicke's area", group: "Cortex", parent: "temporal", color: "#f0abfc", ell: [500, 300, 20, 17, 0], b: [500, 300, 14, 12, 4],
    tag: "Understanding language",
    text: "Usually in the left temporal-parietal region. It links sounds and written symbols to meaning, so words become ideas.",
  },
  { id: "cc", name: "Corpus callosum", group: "Deep", color: "#e2e8f0", d: "M 255 218 C 320 170, 520 168, 595 222", sw: 10, b: [425, 184, 110, 9, 7],
    tag: "Bridge between the hemispheres",
    text: "A thick band of roughly 200 million nerve fibers that lets the left and right hemispheres share information.",
  },
  { id: "bg", name: "Basal ganglia", group: "Deep", color: "#fb7185", ell: [368, 252, 28, 26, 0], b: [368, 252, 22, 20, 5],
    tag: "Habits, action selection, reward",
    text: "A cluster of nuclei that selects actions, smooths movement and learns from reward. Dopamine signalling here is central to Parkinson's disease.",
  },
  { id: "thalamus", name: "Thalamus", group: "Deep", color: "#f472b6", ell: [440, 262, 32, 22, 0], b: [440, 262, 24, 15, 5],
    tag: "Relay station for the senses",
    text: "Almost every sensory signal, except smell, stops here before reaching the cortex. It also helps regulate sleep and alertness.",
  },
  { id: "hypo", name: "Hypothalamus", group: "Deep", color: "#fb923c", ell: [425, 312, 18, 12, 0], b: [425, 312, 12, 7, 3],
    tag: "The body's control panel",
    text: "Small but vital: it regulates temperature, hunger, thirst, sleep cycles and hormones through the pituitary.",
  },
  { id: "pit", name: "Pituitary gland", group: "Deep", color: "#fde047", ell: [404, 341, 9, 9, 0], b: [404, 341, 3, 3, 1],
    tag: "Master hormone gland",
    text: "A pea-sized gland hanging from the hypothalamus. It releases hormones that steer growth, stress response, metabolism and reproduction.",
  },
  { id: "amyg", name: "Amygdala", group: "Deep", color: "#ef4444", ell: [333, 350, 16, 13, 0], b: [333, 350, 10, 8, 3],
    tag: "Emotion and threat detection",
    text: "An almond-shaped pair of clusters that tags experiences with emotional importance, especially fear, and triggers fast reactions.",
  },
  { id: "hippo", name: "Hippocampus", group: "Deep", color: "#a3e635", d: "M 345 360 C 395 378, 470 370, 505 325", sw: 12, b: [425, 364, 70, 8, 5, -20],
    tag: "Forms new memories",
    text: "Seahorse-shaped. It turns experiences into lasting memories and builds mental maps of places.",
  },
];

const BRIDGES: [string, string][] = [
  ["cerebellum", "stem"], ["cerebellum", "occipital"], ["stem", "thalamus"], ["thalamus", "bg"],
  ["thalamus", "hypo"], ["hypo", "pit"], ["thalamus", "cc"], ["cc", "frontal"], ["cc", "parietal"],
  ["cc", "occipital"], ["amyg", "hippo"], ["hippo", "temporal"], ["hippo", "thalamus"], ["bg", "frontal"],
  ["frontal", "parietal"], ["parietal", "occipital"], ["temporal", "occipital"], ["frontal", "temporal"],
  ["parietal", "temporal"], ["broca", "wernicke"], ["motor", "sensory"],
];

function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---- build the network once (seeded, so SSR and client agree) ----
type N = { x: number; y: number; region: string };
const rand = rng(11);
const nodes: N[] = [];
const first: Record<string, number> = {};
for (const r of R) {
  const [cx, cy, rx, ry, n, rot = 0] = r.b;
  const a = (rot * Math.PI) / 180;
  const ca = Math.cos(a);
  const sa = Math.sin(a);
  first[r.id] = nodes.length;
  let placed = 0;
  for (let tries = 0; placed < n && tries < 400; tries++) {
    const t = rand() * Math.PI * 2;
    const s = Math.sqrt(rand());
    const u = Math.cos(t) * s * rx;
    const v = Math.sin(t) * s * ry;
    const x = cx + u * ca - v * sa;
    const y = cy + u * sa + v * ca;
    if (nodes.some((p) => Math.hypot(p.x - x, p.y - y) < 11)) continue;
    nodes.push({ x, y, region: r.id });
    placed++;
  }
}

const edges: [number, number][] = [];
const seen = new Set<string>();
const adj: number[][] = nodes.map(() => []);
function link(i: number, j: number) {
  const k = i < j ? `${i}-${j}` : `${j}-${i}`;
  if (i === j || seen.has(k)) return;
  seen.add(k);
  edges.push([Math.min(i, j), Math.max(i, j)]);
  adj[i].push(j);
  adj[j].push(i);
}
nodes.forEach((p, i) => {
  nodes
    .map((q, j) => [j, Math.hypot(p.x - q.x, p.y - q.y)] as [number, number])
    .filter(([j]) => j !== i)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 3)
    .forEach(([j, d]) => d < 110 && link(i, j));
});
for (const [a, b] of BRIDGES) {
  let best: [number, number] | null = null;
  let bd = Infinity;
  nodes.forEach((p, i) => {
    if (p.region !== a) return;
    nodes.forEach((q, j) => {
      if (q.region !== b) return;
      const d = Math.hypot(p.x - q.x, p.y - q.y);
      if (d < bd) {
        bd = d;
        best = [i, j];
      }
    });
  });
  if (best) link(best[0], best[1]);
}

function dist(s: number) {
  const d: number[] = nodes.map(() => Infinity);
  d[s] = 0;
  const q = [s];
  for (let h = 0; h < q.length; h++) {
    for (const j of adj[q[h]]) {
      if (d[j] === Infinity) {
        d[j] = d[q[h]] + 1;
        q.push(j);
      }
    }
  }
  return d;
}

const colorOf: Record<string, string> = Object.fromEntries(R.map((r) => [r.id, r.color]));
const pulses = edges.filter((_, i) => i % 13 === 0).slice(0, 24);
const BLOG = "https://blog.bruca.space";

export default function BrainMap() {
  const [sel, setSel] = useState<string | null>(null);
  const [hov, setHov] = useState<string | null>(null);
  const [fire, setFire] = useState<{ k: number; d: number[] } | null>(null);

  const go = (i: number) => setFire((f) => ({ k: (f?.k ?? 0) + 1, d: dist(i) }));

  useEffect(() => {
    const t = setTimeout(() => go(Math.floor(nodes.length * 0.3)), 700);
    return () => clearTimeout(t);
  }, []);

  const pick = (id: string) => {
    if (sel === id) return setSel(null);
    setSel(id);
    go(first[id]);
  };

  const cur = R.find((r) => r.id === sel);
  const lab = R.find((r) => r.id === (hov ?? sel));
  const hl = new Set<string>(sel ? [sel, ...R.filter((r) => r.parent === sel).map((r) => r.id)] : []);

  const shape = (r: Region) => {
    const on = sel === r.id;
    const hv = hov === r.id;
    const ev = {
      onMouseEnter: () => setHov(r.id),
      onMouseLeave: () => setHov(null),
      onClick: () => pick(r.id),
      style: { cursor: "pointer" },
    };
    const paint = {
      fill: r.color,
      fillOpacity: on ? 0.34 : hv ? 0.22 : 0.09,
      stroke: r.color,
      strokeOpacity: on ? 0.95 : 0.45,
      strokeWidth: 1.2,
    };
    if (r.poly) return <polygon key={r.id} points={r.poly} clipPath="url(#brainClip)" {...paint} {...ev} />;
    if (r.d && r.sw)
      return (
        <path key={r.id} d={r.d} fill="none" stroke={r.color} strokeWidth={r.sw} strokeLinecap="round"
          strokeOpacity={on ? 0.95 : hv ? 0.65 : 0.3} {...ev} />
      );
    if (r.d) return <path key={r.id} d={r.d} {...paint} {...ev} />;
    const [cx, cy, rx, ry, rot] = r.ell!;
    return <ellipse key={r.id} cx={cx} cy={cy} rx={rx} ry={ry} transform={`rotate(${rot} ${cx} ${cy})`} {...paint} {...ev} />;
  };

  return (
    <section className="relative z-10 mx-auto grid max-w-6xl items-start gap-6 px-6 lg:grid-cols-[1.35fr_1fr]">
      <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.02] p-4">
        <svg viewBox="60 40 700 490" className="h-auto w-full" role="img"
          aria-label="Interactive neural network map of the human brain"
          style={{ filter: "drop-shadow(0 0 22px rgba(0,240,255,0.18))" }}>
          <defs>
            <clipPath id="brainClip"><path d={OUTLINE} /></clipPath>
          </defs>
          {R.slice(0, 2).map(shape)}
          <path d={OUTLINE} fill="#080a12" stroke="rgba(0,240,255,0.5)" strokeWidth={1.6} />
          {R.slice(2).map(shape)}
          <g pointerEvents="none">
            {edges.map(([a, b], i) => {
              const A = nodes[a];
              const B = nodes[b];
              const hi = hl.has(A.region) && hl.has(B.region);
              const dl = fire ? Math.min(fire.d[a], fire.d[b]) : Infinity;
              const lit = Number.isFinite(dl);
              return (
                <line key={`${i}-${fire?.k ?? 0}`} x1={A.x} y1={A.y} x2={B.x} y2={B.y}
                  stroke={hi ? colorOf[A.region] : "#7dd3fc"} strokeWidth={hi ? 1.4 : 0.7}
                  strokeOpacity={hi ? 0.85 : sel ? 0.07 : 0.22}
                  className={lit ? "e-fire" : undefined}
                  style={lit ? { animationDelay: `${dl * 0.07}s` } : undefined} />
              );
            })}
            {nodes.map((n, i) => {
              const hi = hl.has(n.region);
              const dl = fire ? fire.d[i] : Infinity;
              const lit = Number.isFinite(dl);
              return (
                <circle key={`n${i}-${fire?.k ?? 0}`} cx={n.x} cy={n.y} r={hi ? 3.4 : 2.3}
                  fill={hi ? colorOf[n.region] : "#bae6fd"} fillOpacity={hi ? 1 : sel ? 0.3 : 0.85}
                  className={lit ? "n-fire" : undefined}
                  style={lit ? { animationDelay: `${dl * 0.07}s` } : undefined} />
              );
            })}
            {pulses.map(([a, b], i) => (
              <circle key={`p${i}`} r={2.2} fill="#fff" fillOpacity={0.9}>
                <animateMotion dur={`${2 + (i % 5) * 0.5}s`} begin={`${(i % 7) * 0.6}s`} repeatCount="indefinite"
                  path={`M ${nodes[a].x} ${nodes[a].y} L ${nodes[b].x} ${nodes[b].y}`} />
              </circle>
            ))}
            {lab && (
              <text x={lab.b[0]} y={lab.b[1] - lab.b[3] - 10} textAnchor="middle" fill="#fff" fontSize={15}
                fontFamily="JetBrains Mono, monospace" stroke="#05060a" strokeWidth={4} paintOrder="stroke">
                {lab.name}
              </text>
            )}
          </g>
        </svg>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <button onClick={() => go(Math.floor(Math.random() * nodes.length))}
            className="btn-neon rounded-full px-5 py-2 text-sm font-medium">
            Fire a thought ⚡
          </button>
          <span className="font-mono-tech text-xs text-slate-500">hover · click a region · click again to release</span>
        </div>
      </div>

      <aside className="rounded-2xl border border-cyan-400/20 bg-white/[0.02] p-6">
        {cur ? (
          <>
            <div className="font-mono-tech flex items-center gap-2 text-xs uppercase tracking-widest" style={{ color: cur.color }}>
              <span className="h-2 w-2 rounded-full" style={{ background: cur.color }} />
              {GROUPS[cur.group]}
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white">{cur.name}</h2>
            <p className="mt-1 text-cyan-200/80">{cur.tag}</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{cur.text}</p>
          </>
        ) : (
          <>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-cyan-300">18 regions · 1 network</div>
            <h2 className="mt-2 text-2xl font-semibold text-white">Tap a region.</h2>
            <p className="mt-1 text-cyan-200/80">A brain, drawn as the network it is.</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              About 86 billion neurons, drawn here as a few hundred. Click any region to light its circuit and read what it does.
            </p>
          </>
        )}

        <div className="mt-6 space-y-4">
          {(["Cortex", "Deep", "Back"] as const).map((g) => (
            <div key={g}>
              <p className="font-mono-tech mb-2 text-[10px] uppercase tracking-[0.25em] text-slate-500">{GROUPS[g]}</p>
              <div className="flex flex-wrap gap-2">
                {R.filter((r) => r.group === g).map((r) => (
                  <button key={r.id} onClick={() => pick(r.id)}
                    onMouseEnter={() => setHov(r.id)} onMouseLeave={() => setHov(null)}
                    className={`rounded-full border px-3 py-1 text-xs transition ${sel === r.id ? "text-[#05060a]" : "text-slate-300 hover:text-white"}`}
                    style={sel === r.id ? { background: r.color, borderColor: r.color } : { borderColor: "rgba(255,255,255,0.15)" }}>
                    {r.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a href={BLOG} className="btn-outline-neon mt-6 inline-block rounded-full px-5 py-2 text-sm">
          Read about intelligence on the blog →
        </a>
      </aside>
    </section>
  );
}
