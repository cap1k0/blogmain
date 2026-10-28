import Link from "next/link";
import OldHome from "./components/OldHome";

const BLOG = "https://blog.bruca.space";

// false = فقط بلاگ نمایش داده می‌شود
// true  = سایت قبلی (Solutions, Demo, Docs, ...) نمایش داده می‌شود
const SHOW_FULL_SITE = false;

type Category = "science" | "fiction" | "research";

const categories: { key: Category; label: string }[] = [
  { key: "science", label: "Science" },
  { key: "fiction", label: "Fiction" },
  { key: "research", label: "Research" },
];

const posts: {
  slug: string;
  category: Category;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  date: string;
  readTime: string;
  href: string;
}[] = [
  {
    slug: "llm-historian-editing",
    category: "research",
    title: "Can a general-purpose LLM edit like a historian?",
    subtitle: "A pilot on Middle French text normalization",
    summary:
      "Qwen2.5-14B-Instruct against human-style normalization of 16th-century French. The model understands the text. It also over-modernizes it, a bias in the same family Bruca studies.",
    tags: ["language models", "historical linguistics", "evaluation"],
    date: "25 Oct 2026",
    readTime: "Pilot study",
    href: BLOG,
  },
];

export default function Home({
  searchParams,
}: {
  searchParams?: { c?: string };
}) {
  if (SHOW_FULL_SITE) return <OldHome />;

  const active = categories.find((c) => c.key === searchParams?.c)?.key;
  const visible = active ? posts.filter((p) => p.category === active) : posts;

  return (
    <main className="min-h-screen bg-[#faf9f6] text-neutral-900">
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-black tracking-[-0.06em]">
            BRUCA
            <span className="ml-2 font-sans text-xs font-normal tracking-normal text-neutral-500">
              blog
            </span>
          </Link>

          <nav className="flex items-center gap-5 text-sm text-neutral-500">
            <Link
              href="/"
              className={!active ? "font-medium text-neutral-900" : "hover:text-neutral-900"}
            >
              All
            </Link>
            {categories.map((c) => (
              <Link
                key={c.key}
                href={`/?c=${c.key}`}
                className={
                  active === c.key
                    ? "font-medium text-neutral-900"
                    : "hover:text-neutral-900"
                }
              >
                {c.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 pb-8 pt-14">
        <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Science, fiction and research.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
          A blog for a new age, a little beyond reality. Written by the Bruca
          algorithm and its developer, with our diverse team.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        {visible.length === 0 ? (
          <p className="border-t border-neutral-200 py-10 text-sm text-neutral-400">
            Nothing here yet.
          </p>
        ) : (
          <div className="divide-y divide-neutral-200 border-t border-neutral-200">
            {visible.map((p) => (
              <article key={p.slug} className="py-10">
                <div className="flex items-center gap-3 text-xs text-neutral-500">
                  <span className="font-medium uppercase tracking-[0.18em] text-neutral-900">
                    {p.category}
                  </span>
                  <span>·</span>
                  <time>{p.date}</time>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>

                <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                  <a href={p.href} className="hover:underline">
                    {p.title}
                  </a>
                </h2>

                <p className="mt-1 text-neutral-500">{p.subtitle}</p>

                <p className="mt-4 leading-7 text-neutral-700">{p.summary}</p>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-neutral-300 px-3 py-0.5 text-xs text-neutral-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.href}
                    className="text-sm font-medium text-neutral-900 hover:underline"
                  >
                    Read →
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-3xl justify-between px-6 py-6 text-xs text-neutral-500">
          <span>© Bruca</span>
          <Link href="/terms" className="hover:text-neutral-900">
            Terms
          </Link>
        </div>
      </footer>
    </main>
  );
}
