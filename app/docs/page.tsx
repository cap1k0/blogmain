import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { 
  title: "Docs",
  description: "Documentation for Bruca: how our bias-detection approach for text, products and stories is designed.",
  alternates: { canonical: "/docs" },
};

type Article = {
  title: string;
  slug: string;
  description: string;
};

type Category = {
  name: string;
  articles: Article[];
};

const categories: Category[] = [
  {
    name: "Getting started",
    articles: [
      {
        title: "How our bias detection is designed",
        slug: "how-bias-detection-works",
        description:
          "A plain-language overview of the planned algorithm, with diagrams and charts. In development.",
      },
    ],
  },
  {
    name: "Research",
    articles: [],
  },
  {
    name: "Model",
    articles: [],
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-neutral-500 hover:text-neutral-800"
        >
          ← Back to Bruca
        </Link>

        <h1 className="mb-10 text-3xl font-medium">Docs</h1>

        <div className="space-y-10">
          {categories.map((category) => (
            <section key={category.name}>
              <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-neutral-500">
                {category.name}
              </h2>

              {category.articles.length === 0 ? (
                <p className="text-sm text-neutral-400">
                  Nothing here yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {category.articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/docs/${article.slug}`}
                      className="block rounded-xl border border-neutral-200 p-5 transition hover:border-neutral-300"
                    >
                      <h3 className="mb-1 font-medium">
                        {article.title}
                      </h3>

                      <p className="text-sm text-neutral-600">
                        {article.description}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
