import Link from "next/link";
import BiasLens from "./components/BiasLens";

const BLOG = "https://blog.bruca.space";
const DEMO = "https://demo.bruca.space";

// false = فقط صفحهٔ بلاگ نمایش داده می‌شود
// true  = سایت قبلی (Solutions, Demo, Docs, ...) نمایش داده می‌شود
const SHOW_FULL_SITE = false;

type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  href: string;
};

// برای اضافه‌کردن پست بعدی، یک آبجکت به این آرایه اضافه کن
const posts: Post[] = [];

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

/* ───────── سایت قبلی: داخل کد هست ولی تا SHOW_FULL_SITE=false نمایش داده نمی‌شود ───────── */
function OldHome() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] pb-16 text-white">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-xl font-black tracking-[-0.08em]">
          BRUCA
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
            className="rounded-full border border-white/15 px-4 py-1.5 text-white"
          >
            Blog →
          </a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-14 pt-20">
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-7xl">
          Words that include
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
            the people you write for.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          Bruca combines human perspectives with an algorithm in development to
          detect bias in language, products and the stories behind them —
          helping teams understand who their work speaks to, and who it may
          leave out.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={DEMO}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            Try the demo →
          </a>
          <a
            href="#solutions"
            className="rounded-full border border-white/15 px-6 py-3 text-sm text-slate-300"
          >
            Explore Bruca
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-1">
          <div className="rounded-[22px] border border-white/5 bg-[#080b12]/90">
            <BiasLens />
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto mt-24 max-w-6xl px-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.28em] text-fuchsia-300">
          Solutions
        </div>

        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Bias can hide in more than words.
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {solutions.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
            >
              <span className="font-mono text-xs text-cyan-300/80">{s.n}</span>
              <h3 className="mt-8 text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 p-7">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-fuchsia-300">
            Global audience
          </div>
          <h3 className="mt-3 text-xl font-semibold">
            Inclusive by design, for audiences around the world.
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
            Audiences differ by language, culture, identity, age, ability,
            origin and lived experience. Bruca looks at how products and
            language may land across these differences — including for LGBTQ+
            and trans readers, minorities, and people who are often overlooked
            in mainstream design.
          </p>
        </div>
      </section>

      <footer className="mx-auto mt-16 flex max-w-6xl justify-between px-6 text-xs text-slate-600">
        <span>© Bruca</span>
        <span className="flex gap-4">
          <Link href="/docs">Docs</Link>
          <a href={DEMO}>Demo</a>
          <Link href="/terms">Terms</Link>
        </span>
      </footer>
    </main>
  );
}

/* ───────────── بلاگ ───────────── */
export default function Home() {
  if (SHOW_FULL_SITE) return <OldHome />;

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#fbfbfd] text-[#1d1d1f] antialiased"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      {/* نورهای نرم و رویایی */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-160px] h-[560px] w-[560px] -translate-x-[85%] rounded-full bg-sky-200/50 blur-[130px]" />
        <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-[10%] rounded-full bg-violet-200/50 blur-[130px]" />
        <div className="absolute left-1/2 top-[80px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-rose-100/60 blur-[120px]" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="text-[17px] font-semibold tracking-[-0.04em] text-[#1d1d1f]"
          >
            Bruca
          </Link>

          <a
            href={BLOG}
            className="text-sm text-[#0066cc] transition hover:underline"
          >
            Blog →
          </a>
        </header>

        <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 pb-24 pt-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#6e6e73]">
            A journal of inquiry
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-7xl">
            Science, fiction
            <br />
            <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-rose-400 bg-clip-text text-transparent">
              and research.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#6e6e73] sm:text-xl">
            Experiments, speculative essays and open research notes. A quiet
            place to think, a little beyond reality.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BLOG}
              className="rounded-full bg-[#1d1d1f] px-7 py-3 text-[15px] font-medium text-white transition hover:bg-black"
            >
              Read the blog
            </a>
            <a
              href={BLOG}
              className="rounded-full border border-black/[0.1] bg-white/70 px-7 py-3 text-[15px] font-medium text-[#1d1d1f] backdrop-blur-xl transition hover:bg-white"
            >
              blog.bruca.space →
            </a>
          </div>

          {posts.length === 0 ? null : (
            <div className="mt-14 w-full space-y-4 text-left">
              {posts.map((p) => (
                <a
                  key={p.slug}
                  href={p.href}
                  className="block rounded-3xl border border-black/[0.06] bg-white/70 p-7 backdrop-blur-xl transition hover:bg-white"
                >
                  <time className="text-xs text-[#86868b]">{p.date}</time>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em]">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-7 text-[#6e6e73]">
                    {p.summary}
                  </p>
                </a>
              ))}
            </div>
          )}
        </section>

        <footer className="mx-auto flex w-full max-w-5xl justify-between px-6 pb-8 text-xs text-[#86868b]">
          <span>© Bruca</span>
          <Link href="/terms" className="transition hover:text-[#1d1d1f]">
            Terms
          </Link>
        </footer>
      </div>
    </main>
  );
}
