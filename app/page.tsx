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
            <a href="#product" className="transition-colors hover:text-cyan-300">
              Product
            </a>

            <a href="#research" className="transition-colors hover:text-cyan-300">
              Research
            </a>

            <a href="/docs" className="transition-colors hover:text-cyan-300">
              Docs
            </a>

            <a
              href="https://blog.bruca.space"
              className="transition-colors hover:text-cyan-300"
            >
              Blog
            </a>
          </div>
        </nav>

        {/* Hero */}
        <section className="mb-16 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 font-mono-tech text-xs text-cyan-300">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-cyan-400" />
            system online
          </div>

          <h1 className="gradient-text mb-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Building at the intersection of AI and blockchain
          </h1>

          <p className="mb-8 text-base leading-relaxed text-neutral-400">
            Bruca is where AI and blockchain meet. We are exploring new
            systems, models, and datasets at the intersection of these
            technologies, together with a diverse community of people building
            what comes next.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#research"
              className="btn-neon rounded-md px-5 py-2.5 font-medium"
            >
              Join us →
            </a>
          </div>
        </section>

        {/* Community */}
        <section className="cyber-card mb-16 rounded-xl p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span className="mb-2 inline-block rounded-md border border-[#ff2bd6]/30 bg-[rgba(255,43,214,0.08)] px-3 py-1 font-mono-tech text-xs text-[#ff2bd6]">
                community
              </span>

              <h2 className="mb-1 text-lg font-medium text-white">
                A community for AI and language material
              </h2>

              <p className="max-w-xl text-sm leading-relaxed text-neutral-400">
                Bruca is also a home for people building AI systems and
                open material for languages and academic writing — research
                notes, datasets, and models, published on the blog.
              </p>
            </div>

            <a
              href="https://blog.bruca.space"
              className="btn-outline-neon shrink-0 rounded-md px-5 py-2.5 text-center font-medium"
            >
              Visit the blog →
            </a>
          </div>
        </section>

        {/* Model development space */}
        <section id="research" className="cyber-card mb-16 rounded-xl p-6">
          <p className="mb-2 font-mono-tech text-xs uppercase tracking-widest text-cyan-300">
            research / lab
          </p>

          <h2 className="mb-2 text-lg font-medium text-white">
            Model development space
          </h2>

          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-neutral-400">
            Where we develop and evaluate specialized AI models and datasets,
            while exploring the intersection of artificial intelligence and
            blockchain technology. Our work focuses on building proprietary
            models, developing high-quality datasets, and investigating new
            ways AI systems can interact with decentralized technologies.
            Beyond our core research, we are also developing practical AI
            models and infrastructure designed to support researchers,
            students, and organizations through intelligent, data-driven
            tools.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Model 1 */}
            <a
              href="https://huggingface.co/undertakingroad/AIessaydetectionModel"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card rounded-lg p-4"
            >
              <p className="mb-1 font-mono-tech text-xs text-neutral-500">
                model
              </p>

              <p className="font-medium text-white">
                AI WQ Detection Model →
              </p>

              <p className="mt-2 font-mono-tech text-xs text-cyan-400">
                Hugging Face
              </p>
            </a>

            {/* Model 2 */}
            <div className="cyber-card rounded-lg p-4 opacity-70">
              <p className="mb-1 font-mono-tech text-xs text-neutral-500">
                model
              </p>

              <p className="font-medium text-white">WorkWellQ Model</p>

              <p className="mt-2 font-mono-tech text-xs text-neutral-500">
                coming soon
              </p>
            </div>

            {/* Model 3 */}
            <div className="cyber-card rounded-lg p-4 opacity-70">
              <p className="mb-1 font-mono-tech text-xs text-neutral-500">
                model
              </p>

              <p className="font-medium text-white">DEI-Model</p>

              <p className="mt-2 font-mono-tech text-xs text-neutral-500">
                coming soon
              </p>
            </div>
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
