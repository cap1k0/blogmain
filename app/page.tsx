import Link from "next/link";
import Logo from "./components/Logo";
import BiasLens from "./components/BiasLens";

const BLOG = "https://blog.bruca.space";

const solutions = [
  {
    n: "01",
    t: "Text review",
    d: "We read your copy the way different readers would, and flag wording that quietly assumes who the audience is.",
  },
  {
    n: "02",
    t: "Product review",
    d: "Features, defaults, forms and onboarding get the same check: who is this designed for, and who is left out?",
  },
  {
    n: "03",
    t: "The story behind the product",
    d: "Brand stories, founder narratives and campaigns carry assumptions too. We look at the story, not only the sentences.",
  },
];

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen pb-16">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Logo />
        <nav className="flex items-center gap-5 text-sm text-slate-300">
          <a href="#solutions" className="hover:text-white">Solutions</a>
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <a href={BLOG} className="btn-outline-neon rounded-full px-4 py-1.5">Blog →</a>
        </nav>
      </header>

      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <div className="font-mono-tech flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
          <span className="status-dot h-2 w-2 rounded-full bg-cyan-300" />
          Bruca · bias detection
        </div>
        <h1 className="gradient-text mt-4 text-4xl font-bold leading-tight sm:text-6xl">
          Words that include
          <br />
          the people you write for.
        </h1>
        <p className="mt-4 max-w-xl text-slate-400">
          A team of diverse writers and an algorithm in development that detects bias in text and in the products and stories
          behind it, so more of your audience feels addressed.
        </p>
      </div>

      <BiasLens />

      <section id="solutions" className="mx-auto mt-16 max-w-6xl px-6">
        <div className="font-mono-tech text-xs uppercase tracking-[0.3em] text-fuchsia-300">Solutions</div>
        <h2 className="mt-2 text-3xl font-semibold text-white">What we review</h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          We are developing our models now. Sample texts and what we learn from them are published on the blog.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {solutions.map((s) => (
            <div key={s.n} className="cyber-card rounded-2xl p-6">
              <span className="font-mono-tech text-xs text-fuchsia-300">{s.n}</span>
              <h3 className="mt-2 text-xl font-semibold text-white">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="cyber-card mt-4 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white">Inclusive by design, for all over the world audiences</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            Audiences across the world differ by language, culture and law. We look at how text lands for readers of every gender
            and identity, sexual orientation, origin, age and ability, including  trans readers, and for minorities
            who are too often written around instead of written for.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-6">
        <a href={BLOG} className="portal-card flex flex-col items-start justify-between gap-4 rounded-2xl p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">See sample texts</h2>
            <p className="mt-1 text-slate-400">Real examples, reviewed by our writers, on the blog.</p>
          </div>
          <span className="btn-neon rounded-full px-6 py-3 font-medium">Continue to the blog →</span>
        </a>
      </section>

      <footer className="mx-auto mt-12 flex max-w-6xl justify-between px-6 text-xs text-slate-500">
        <span>© Bruca</span>
        <span className="flex gap-4">
          <Link href="/docs" className="hover:text-slate-300">Docs</Link>
          <Link href="/terms" className="hover:text-slate-300">Terms</Link>
        </span>
      </footer>
    </main>
  );
}
