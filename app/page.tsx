```tsx
import Link from "next/link";
import Logo from "./components/Logo";
import BiasLens from "./components/BiasLens";

const BLOG = "https://blog.bruca.space";
const DEMO = "https://demo.bruca.space";

const solutions = [
  {
    n: "01",
    t: "Text review",
    d: "We examine your copy from different reader perspectives and flag wording that quietly assumes who your audience is.",
  },
  {
    n: "02",
    t: "Product review",
    d: "Features, defaults, forms and onboarding get the same check: who is this designed for, and who might be left out?",
  },
  {
    n: "03",
    t: "Product stories",
    d: "Brand stories, founder narratives and campaigns carry assumptions too. We examine the story behind the words.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] pb-16 text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-[5%] top-[20%] h-[360px] w-[360px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="group">
          <div className="text-xl font-black tracking-[-0.08em] text-white transition group-hover:text-cyan-300">
            BRUCA
          </div>
        </Link>

        <nav className="flex items-center gap-5 text-sm text-slate-400">
          <a href="#solutions" className="transition hover:text-white">
            Solutions
          </a>

          <Link href="/docs" className="transition hover:text-white">
            Docs
          </Link>

          <a href={DEMO} className="transition hover:text-white">
            Demo
          </a>

          <a
            href={BLOG}
            className="rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
          >
            Blog →
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-20">
        <div className="max-w-4xl">
          <div className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" />
            Bruca · bias intelligence
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-7xl">
            <span className="text-white">Words that include</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
              the people you write for.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Bruca combines human perspectives with an algorithm in development
            to detect bias in language, products and the stories behind them —
            helping teams understand who their work speaks to, and who it may
            leave out.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={DEMO}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
            >
              Try the demo →
            </a>

            <a
              href="#solutions"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-white/30 hover:text-white"
            >
              Explore Bruca
            </a>
          </div>
        </div>
      </section>

      {/* Bias Lens */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-1 shadow-2xl shadow-black/30">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-fuchsia-400/[0.06]" />
          <div className="relative rounded-[22px] border border-white/5 bg-[#080b12]/90">
            <BiasLens />
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto mt-24 max-w-6xl px-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
          Solutions
        </div>

        <div className="mt-3 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Bias can hide in more than words.
          </h2>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            We are developing our models now. Sample texts and what we learn
            from them are published on the blog.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {solutions.map((s) => (
            <div
              key={s.n}
              className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-white/[0.045]"
            >
              <span className="font-mono text-xs text-cyan-300/80">
                {s.n}
              </span>

              <h3 className="mt-8 text-xl font-semibold text-white">
                {s.t}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {s.d}
              </p>

              <div className="mt-8 h-px w-8 bg-gradient-to-r from-cyan-300 to-transparent transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>

        {/* Global audience */}
        <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.035] to-transparent p-7">
          <div className="grid gap-6 md:grid-cols-[180px_1fr]">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-fuchsia-300">
              Global audience
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Inclusive by design, for audiences around the world.
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                Audiences differ by language, culture, identity, age, ability,
                origin and lived experience. Bruca looks at how products and
                language may land across these differences — including for
                LGBTQ+ and trans readers, minorities, and people who are often
                overlooked in mainstream design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto mt-20 max-w-6xl px-6">
        <a
          href={BLOG}
          className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition hover:border-cyan-300/25 sm:p-10"
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-[80px] transition group-hover:bg-cyan-400/20" />

          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                Research · Examples · Experiments
              </div>

              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                See how bias appears in language.
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                Real examples, reviewed by our writers, experiments with AI,
                and what we learn while building Bruca.
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition group-hover:bg-cyan-200">
              Visit the blog →
            </span>
          </div>
        </a>
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-16 flex max-w-6xl justify-between px-6 text-xs text-slate-600">
        <span>© Bruca</span>

        <span className="flex gap-4">
          <Link href="/docs" className="transition hover:text-slate-300">
            Docs
          </Link>

          <a href={DEMO} className="transition hover:text-slate-300">
            Demo
          </a>

          <Link href="/terms" className="transition hover:text-slate-300">
            Terms
          </Link>
        </span>
      </footer>
    </main>
  );
}
```
