"use client";

import { useState } from "react";

type Seg = string | { t: string; cat: string; why: string; fix: string };

const CATS: Record<string, string> = {
  "Gendered default": "#00f0ff",
  "Exclusionary framing": "#ff2bd6",
  "Stereotype": "#fbbf24",
  "Loaded term": "#8b5cf6",
};

const SAMPLES: { id: string; label: string; kind: string; segs: Seg[] }[] = [
  {
    id: "product",
    label: "Product page",
    kind: "Product copy",
    segs: [
      "Our family plan is perfect for ",
      { t: "mom and dad", cat: "Exclusionary framing", why: "Assumes one family shape and leaves out other households.", fix: "parents and guardians" },
      " who want ",
      { t: "peace of mind", cat: "Loaded term", why: "Neutral here, but kept as a low-confidence example of a flag you can dismiss.", fix: "keep as is" },
      ". Let your ",
      { t: "wife", cat: "Gendered default", why: "Assumes the account holder's partner is a woman.", fix: "partner" },
      " manage the shared budget.",
    ],
  },
  {
    id: "job",
    label: "Job post",
    kind: "Text review",
    segs: [
      "We need a ",
      { t: "young, energetic", cat: "Stereotype", why: "Age-coded wording can discourage qualified applicants.", fix: "motivated" },
      " salesman who can ",
      { t: "man the stand", cat: "Gendered default", why: "Gendered verb and noun in a role description.", fix: "staff the stand" },
      ". Applicants should fit our ",
      { t: "traditional", cat: "Exclusionary framing", why: "Signals a single expected culture or lifestyle.", fix: "collaborative" },
      " team.",
    ],
  },
  {
    id: "story",
    label: "Brand story",
    kind: "Story behind the product",
    segs: [
      "Founded by ",
      { t: "two brothers", cat: "Gendered default", why: "Fine as a fact; flagged only when the story implies the product is for men.", fix: "keep, check the rest" },
      " who wanted gear for ",
      { t: "real adventurers", cat: "Exclusionary framing", why: "‘Real’ sets up who does not belong.", fix: "anyone who loves the outdoors" },
      ". Easy enough that ",
      { t: "even a beginner", cat: "Stereotype", why: "Frames beginners as a deficit.", fix: "a first-time user" },
      " can use it.",
    ],
  },
];

export default function BiasLens() {
  const [sid, setSid] = useState(SAMPLES[0].id);
  const [open, setOpen] = useState<number | null>(null);
  const [fixed, setFixed] = useState(false);

  const sample = SAMPLES.find((s) => s.id === sid)!;
  const flags = sample.segs
    .map((s, i) => (typeof s === "string" ? null : { ...s, i }))
    .filter(Boolean) as { t: string; cat: string; why: string; fix: string; i: number }[];
  const cur = open !== null ? flags.find((f) => f.i === open) : null;

  const pickSample = (id: string) => {
    setSid(id);
    setOpen(null);
    setFixed(false);
  };

  return (
    <section className="relative z-10 mx-auto grid max-w-6xl items-start gap-6 px-6 lg:grid-cols-[1.35fr_1fr]">
      <div className="rounded-2xl border border-cyan-400/20 bg-white/[0.02] p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {SAMPLES.map((s) => (
            <button
              key={s.id}
              onClick={() => pickSample(s.id)}
              className={`rounded-full border px-3 py-1 text-xs transition ${
                sid === s.id ? "border-cyan-300 bg-cyan-300 text-[#05060a]" : "border-white/15 text-slate-300 hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <p className="font-mono-tech mb-3 text-[10px] uppercase tracking-[0.25em] text-slate-500">{sample.kind}</p>
        <p className="text-xl leading-loose text-slate-200">
          {sample.segs.map((s, i) =>
            typeof s === "string" ? (
              <span key={i}>{s}</span>
            ) : (
              <button
                key={i}
                onClick={() => setOpen(open === i ? null : i)}
                className="rounded px-1 transition"
                style={{
                  background: `${CATS[s.cat]}${open === i ? "55" : "22"}`,
                  borderBottom: `2px solid ${CATS[s.cat]}`,
                  color: "#fff",
                }}
              >
                {fixed && s.fix !== "keep as is" && !s.fix.startsWith("keep") ? s.fix : s.t}
              </button>
            )
          )}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button onClick={() => setFixed((f) => !f)} className="btn-neon rounded-full px-5 py-2 text-sm font-medium">
            {fixed ? "Show original" : "Apply suggestions"}
          </button>
          <span className="font-mono-tech text-xs text-slate-500">click a highlight to see why it was flagged</span>
        </div>
        <p className="mt-4 text-xs text-slate-500">
          Demo on hand-annotated samples. Our models are still in development.
        </p>
      </div>

      <aside className="rounded-2xl border border-cyan-400/20 bg-white/[0.02] p-6">
        {cur ? (
          <>
            <div className="font-mono-tech flex items-center gap-2 text-xs uppercase tracking-widest" style={{ color: CATS[cur.cat] }}>
              <span className="h-2 w-2 rounded-full" style={{ background: CATS[cur.cat] }} />
              {cur.cat}
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white">“{cur.t}”</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">{cur.why}</p>
            <p className="mt-4 text-sm text-cyan-200/80">Suggested: {cur.fix}</p>
          </>
        ) : (
          <>
            <div className="font-mono-tech text-xs uppercase tracking-widest text-cyan-300">
              {flags.length} signals · 4 categories
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-white">See the lens at work.</h2>
            <p className="mt-1 text-cyan-200/80">Small word choices decide who feels addressed.</p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Pick a sample, then click a highlighted phrase. Each flag explains what it signals and offers a neutral alternative.
            </p>
          </>
        )}

        <div className="mt-6">
          <p className="font-mono-tech mb-2 text-[10px] uppercase tracking-[0.25em] text-slate-500">Signal types</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(CATS).map(([name, color]) => (
              <span key={name} className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full" style={{ background: color }} />
                {name}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </section>
  );
}
