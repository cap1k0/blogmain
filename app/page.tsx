import Link from "next/link";
import Logo from "./components/Logo";
import BrainMap from "./components/BrainMap";

const BLOG = "https://blog.bruca.space";

const points = [
  {
    t: "Our team",
    d: "A diverse team of writers working on the creativity and core of the product.",
  },
  {
    t: "Our algorithm",
    d: "A proprietary algorithm that detects and reduces bias in text.",
  },
];

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen pb-16">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Logo />
        <nav className="flex items-center gap-5 text-sm text-slate-300">
          <Link href="/docs" className="hover:text-white">Docs</Link>
          <a href={BLOG} className="btn-outline-neon rounded-full px-4 py-1.5">Blog →</a>
        </nav>
      </header>

      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <div className="font-mono-tech flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
          <span className="status-dot h-2 w-2 rounded-full bg-cyan-300" />
          Bruca
        </div>
        <h1 className="gradient-text mt-4 text-4xl font-bold leading-tight sm:text-6xl">
          Diverse writers.
          <br />
          Less biased text.
        </h1>
        <p className="mt-4 max-w-xl text-slate-400">
          Our startup is a team of diverse writers focused on the creativity and core of the product.
          We also have a proprietary algorithm that detects and reduces bias in text.
        </p>
      </div>

      <BrainMap />

      <section className="mx-auto mt-16 grid max-w-6xl gap-4 px-6 sm:grid-cols-2">
        {points.map((p) => (
          <div key={p.t} className="cyber-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white">{p.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.d}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-6">
        <Link href="/docs" className="portal-card flex flex-col items-start justify-between gap-4 rounded-2xl p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">Want to use our algorithm?</h2>
            <p className="mt-1 text-slate-400">If you are interested, we would be glad to share demo with you.</p>
          </div>
          <span className="btn-neon rounded-full px-6 py-3 font-medium">Learn more →</span>
        </Link>
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
