import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bruca | Language Research Blog",
  description:
    "An independent blog exploring linguistics, language acquisition, discourse analysis, corpus linguistics, multilingual communication and language technologies.",
  alternates: { canonical: "/" },
  keywords: [
    "linguistics",
    "language research",
    "applied linguistics",
    "corpus linguistics",
    "discourse analysis",
    "second language acquisition",
    "language technology",
    "AI and linguistics",
    "language education",
  ],
};

type Post = {
  title: string;
  slug: string;
  excerpt: string;
  tag: string;
  date: string;
};

const posts: Post[] = [
  {
    title: "Historical French Text Normalization",
    slug: "how-bruca-edits",
    excerpt:
      "A pilot study comparing AI-generated outputs with human normalization of historical French texts.",
    tag: "Corpus linguistics",
    date: "2026-11-01",
  },
  {
    title: "Language Bias Detection",
    slug: "how-bias-detection-works",
    excerpt:
      "An exploratory overview of an approach to identifying potentially exclusionary assumptions in text.",
    tag: "Discourse analysis",
    date: "2026-10-15",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <header className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">
            Bruca
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Language Research Blog
          </h1>
          <p className="mt-5 text-base leading-8 text-neutral-600">
            Notes on linguistics, language acquisition, discourse analysis,
            corpus linguistics and language technology.
          </p>
          <nav className="mt-6 flex gap-5 text-sm text-neutral-500">
            <Link href="/docs" className="transition hover:text-violet-700">
              Research
            </Link>
            <Link href="/terms" className="transition hover:text-violet-700">
              Terms
            </Link>
          </nav>
        </header>

        <section className="space-y-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/docs/${post.slug}`}
              className="block rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-violet-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="rounded-full bg-violet-50 px-3 py-1 font-medium text-violet-700">
                  {post.tag}
                </span>
                <time className="text-neutral-400">{post.date}</time>
              </div>
              <h2 className="mt-4 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm leading-7 text-neutral-600">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
