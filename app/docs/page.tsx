import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Methodology",
  description: "Research areas, methods and project documentation from Bruca, an independent language research platform.",
  alternates: { canonical: "/docs" },
};

type Article = { title: string; slug: string; description: string; status: string };
const projects: Article[] = [
  { title: "Historical French Text Normalization", slug: "how-bruca-edits", description: "A pilot study comparing AI-generated outputs with human normalization of historical French texts.", status: "Pilot study" },
  { title: "Language Bias Detection", slug: "how-bias-detection-works", description: "An exploratory overview of a proposed approach to identifying potentially exclusionary assumptions in text.", status: "In development" },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] text-neutral-900">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link href="/" className="mb-10 inline-block text-sm text-neutral-500 transition hover:text-violet-700">← Back to Bruca</Link>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">Bruca knowledge base</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Research & Methodology</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-600">Explore the research projects, analytical approaches and methodological notes associated with Bruca. Project descriptions distinguish pilot investigations from concepts that remain in development.</p>
        <section className="mt-14">
          <h2 className="text-xl font-semibold">Research Projects</h2>
          <p className="mt-2 text-sm leading-7 text-neutral-500">Project overviews, research questions and current development work.</p>
          <div className="mt-5 space-y-4">
            {projects.map((project) => (
              <Link key={project.slug} href={`/docs/${project.slug}`} className="block rounded-2xl border border-neutral-200 bg-white p-6 transition hover:border-violet-300 hover:shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="text-lg font-semibold">{project.title}</h3><span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700">{project.status}</span></div>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{project.description}</p>
                <span className="mt-5 inline-block text-sm font-medium text-violet-700">Read project overview →</span>
              </Link>
            ))}
          </div>
        </section>
        <div className="mt-16 border-t border-neutral-200 pt-8"><p className="text-sm leading-7 text-neutral-500">Bruca is an independent research platform. The inclusion of a project on this page does not imply peer review, institutional affiliation or publication in an academic journal. Each project should be evaluated according to its stated methods, evidence and development status.</p></div>
      </div>
    </main>
  );
}
