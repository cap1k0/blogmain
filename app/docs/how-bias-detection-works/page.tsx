import type { Metadata } from "next";
import Link from "next/link";
import { Pipeline, WeightsChart, ReportRadar } from "./Charts";

export const metadata: Metadata = {
  title: "How our bias detection is designed",
  description:
    "A plain-language look at the planned design of Bruca's bias-detection algorithm: segmentation, lexicon rules, a context classifier, counterfactual swap tests and human review.",
  alternates: { canonical: "/docs/how-bias-detection-works" },
};

const h2 = "mb-3 text-xl font-medium text-neutral-900";

export default function HowBiasDetectionWorks() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link href="/docs" className="mb-8 inline-block text-sm text-neutral-500 hover:text-neutral-800">
          ← Back to docs
        </Link>

        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-500">Getting started</p>
        <h1 className="mb-2 text-3xl font-medium">How our bias detection is designed</h1>
        <p className="mb-6 text-base text-neutral-500">A short overview of the approach we are building</p>

        <div className="mb-10 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <strong className="font-medium">Status: in development.</strong> This page describes the
          planned design. The numbers in the charts are placeholders that show what a report could look like. They are not
          measured results.
        </div>

        <div className="space-y-10 text-base leading-relaxed text-neutral-700">
          <section>
            <h2 className={h2}>The idea</h2>
            <p>
              Bias in text is often not a single bad word. It is an assumption about who is reading: a default gender, a default
              family, a default age. We plan to combine fast rules with context-aware models and keep a human editor in the loop,
              so every flag can be explained.
            </p>
          </section>

          <section>
            <h2 className={h2}>Pipeline</h2>
            <p className="mb-4">Each text, product description or brand story would pass through five steps.</p>
            <Pipeline />
          </section>

          <section>
            <h2 className={h2}>The five steps</h2>
            <ol className="list-decimal space-y-3 pl-5">
              <li>
                <strong className="font-medium">Segment.</strong> Split the input into sentences, and split product pages into
                fields such as title, features and story.
              </li>
              <li>
                <strong className="font-medium">Lexicon rules.</strong> Match a curated, reviewed list of exclusionary or
                gendered terms. Fast and fully explainable, but blind to context.
              </li>
              <li>
                <strong className="font-medium">Context classifier.</strong> A fine-tuned multilingual model that judges whether
                a phrase actually signals an assumption or stereotype in its sentence.
              </li>
              <li>
                <strong className="font-medium">Counterfactual swap test.</strong> Swap group terms (for example husband for
                partner, he for they) and see whether the model&apos;s reading of the text changes. A large change is a bias signal.
              </li>
              <li>
                <strong className="font-medium">Report.</strong> Combine the signals into a score per dimension, with a
                suggested neutral rewrite and the reason for each flag.
              </li>
            </ol>
          </section>

          <section>
            <h2 className={h2}>How signals could be combined</h2>
            <p className="mb-4">
              A first draft of how much each layer might count toward the final score. The weights will be tuned once we have
              annotated data.
            </p>
            <WeightsChart />
            <p className="mt-2 text-sm text-neutral-500">Placeholder weights, for illustration.</p>
          </section>

          <section>
            <h2 className={h2}>What a report could look like</h2>
            <p className="mb-4">
              Instead of one pass or fail number, a report would show signal strength across dimensions, so editors know where to
              look first.
            </p>
            <ReportRadar />
            <p className="mt-2 text-sm text-neutral-500">Mock values for one imaginary text.</p>
          </section>

          <section>
            <h2 className={h2}>How we plan to evaluate it</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>A human-annotated corpus of sample texts, labelled by writers from different backgrounds</li>
              <li>Agreement between annotators, to see which categories are clear and which are contested</li>
              <li>Precision and recall per category, and a check that flags do not fall unevenly on any group</li>
              <li>Tests in several European languages, not only English</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>Limits we already know about</h2>
            <p>
              Bias is partly cultural and changes over time, so the tool will suggest, not decide. Context matters: a flagged
              phrase can be fine in a quote or a historical text. Final judgement stays with a human editor.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
