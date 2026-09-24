import Link from "next/link";
import Logo from "./components/Logo";
import CookieBanner from "./components/CookieBanner";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05060a] text-[#e6f1ff]">
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-8">
        {/* Nav */}
        <nav className="mb-20 flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>

          <div className="flex items-center gap-6 font-mono-tech text-xs uppercase tracking-widest text-neutral-400">
            <a href="#topics" className="transition-colors hover:text-cyan-300">
              Topics
            </a>

            <a href="/docs" className="transition-colors hover:text-cyan-300">
              Docs
            </a>

            <a
              href="https://blog.bruca.space"
              className="btn-neon rounded-md px-4 py-1.5 normal-case tracking-normal"
            >
              Continue blog →
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="mb-14 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono-tech text-xs text-cyan-300">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-cyan-400" />
            new posts weekly
          </div>

          <h1 className="gradient-text mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
            AI news and research, written as the field actually moves.
          </h1>

          <p className="mb-5 text-base leading-relaxed text-neutral-400">
            <span className="text-neutral-200">Bruca Blog</span> covers AI
            the way it develops in practice — new models, agent releases, and
            the ideas reshaping how people work with AI. At the center of a
            lot of it is{" "}
            <span className="text-neutral-200">
              Retrieval-Augmented Generation (RAG)
            </span>
            , the technique that lets an AI system pull in real, current
            knowledge before it answers instead of relying only on what a
            model memorized once.
          </p>

          <p className="mb-8 text-base leading-relaxed text-neutral-400">
            No hype, no product pitch — just breakdowns of what&apos;s
            actually changing in AI, why it matters, and what to do with it.
            New posts go up regularly at blog.bruca.space.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://blog.bruca.space"
              className="btn-neon rounded-md px-5 py-2.5 font-medium"
            >
              Continue blog →
            </a>
            <a
              href="#topics"
              className="btn-outline-neon rounded-md px-5 py-2.5 font-medium"
            >
              Browse topics →
            </a>
          </div>
        </section>

        {/* What this blog is */}
        <section className="cyber-card mb-8 rounded-xl p-6">
          <span className="mb-2 inline-block rounded-md border border-[#ff2bd6]/30 bg-[rgba(255,43,214,0.08)] px-3 py-1 font-mono-tech text-xs text-[#ff2bd6]">
            about this blog
          </span>

          <h2 className="mb-2 text-lg font-medium text-white">
            News and notes on RAG, AI agents, and how people use them
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
            Bruca Blog is where we write up what we&apos;re learning as we
            follow AI closely — how RAG actually works, what new agents and
            models are shipping, and how people are putting AI to work in
            their own jobs and projects. No product, just the writing.
          </p>
        </section>

        {/* Blog portal — one-click entry point */}
        <a
          href="https://blog.bruca.space"
          className="portal-card group mb-16 flex items-center justify-between rounded-xl p-6"
        >
          <div>
            <p className="mb-1 font-mono-tech text-xs uppercase tracking-widest text-cyan-300">
              latest posts
            </p>
            <h2 className="text-lg font-medium text-white">
              Continue blog
            </h2>
            <p className="mt-1 max-w-md text-sm text-neutral-400">
              Every post on AI news, RAG, and agents — written up as we go,
              at blog.bruca.space.
            </p>
          </div>

          <span className="gradient-text ml-4 shrink-0 text-3xl transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Topics we cover */}
        <section id="topics" className="cyber-card mb-16 rounded-xl p-6">
          <p className="mb-2 font-mono-tech text-xs uppercase tracking-widest text-cyan-300">
            topics
          </p>

          <h2 className="mb-2 text-lg font-medium text-white">
            What we write about
          </h2>

          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-neutral-400">
            Recurring beats on the blog — click through to the latest posts
            in each.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <a
              href="https://blog.bruca.space/tag/ai-news"
              className="cyber-card rounded-lg p-4"
            >
              <p className="mb-1 font-mono-tech text-xs text-neutral-500">
                topic
              </p>
              <p className="font-medium text-white">AI News →</p>
            </a>

            <a
              href="https://blog.bruca.space/tag/rag"
              className="cyber-card rounded-lg p-4"
            >
              <p className="mb-1 font-mono-tech text-xs text-neutral-500">
                topic
              </p>
              <p className="font-medium text-white">RAG & Agents →</p>
            </a>

            <a
              href="https://blog.bruca.space/tag/models"
              className="cyber-card rounded-lg p-4"
            >
              <p className="mb-1 font-mono-tech text-xs text-neutral-500">
                topic
              </p>
              <p className="font-medium text-white">Models & Tools →</p>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-white/10 pt-4 font-mono-tech text-xs text-neutral-500">
          <span>© Bruca</span>

          <Link href="/terms" className="transition-colors hover:text-cyan-300">
            Terms of service
          </Link>
        </footer>
      </div>

      <CookieBanner />
    </main>
  );
}
