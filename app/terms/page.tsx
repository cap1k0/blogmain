
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About & Terms of Use | Bruca",
  description:
    "Discover Bruca, an independent language research platform, its research scope and the terms governing use of the website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fbfbfd] text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16">

        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-violet-600"
        >
          ← Back to Bruca
        </Link>

        {/* Introduction */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">
            About Bruca
          </span>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Exploring language.
            <span className="text-violet-600"> Advancing research.</span>
          </h1>

          <p className="mt-7 text-lg leading-8 text-neutral-600">
            Bruca is an independent language research platform dedicated to exploring
            the structure, use, acquisition and evolution of human language.
            We approach language as a cognitive ability, a social practice,
            a system of communication and an area of technological innovation.
          </p>

          <p className="mt-5 leading-8 text-neutral-600">
            Our work brings together applied linguistics, second language acquisition,
            corpus linguistics, discourse analysis, sociolinguistics,
            psycholinguistics, language education and computational approaches
            to language. We publish research notes, project overviews and
            accessible explanations of linguistic concepts and methods.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-14 rounded-3xl bg-[#f0eef9] p-8 sm:p-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-600">
            Our philosophy
          </span>

          <h2 className="mt-4 text-2xl font-semibold">
            Researching language from multiple perspectives.
          </h2>

          <p className="mt-5 leading-8 text-neutral-700">
            We believe understanding language requires more than studying grammar
            and vocabulary. It involves investigating communication, cognition,
            culture, social interaction and technological developments.
            We aim to make linguistic knowledge and research processes more
            accessible while being transparent about the evidence and status
            of each project.
          </p>
        </section>

        {/* What we offer */}
        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Our research scope
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Applied and theoretical linguistics</h3>
              <p className="mt-2 leading-7 text-neutral-600">
                Explorations of language structure, use, variation and the relationship between linguistic theory and real-world communication.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Language acquisition and education</h3>
              <p className="mt-2 leading-7 text-neutral-600">
                Research into how additional languages are learned, taught, assessed and used across educational settings.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Discourse, society and cognition</h3>
              <p className="mt-2 leading-7 text-neutral-600">
                Studies of how language constructs meaning in interaction and how social and cognitive factors shape language use.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Corpus and computational approaches</h3>
              <p className="mt-2 leading-7 text-neutral-600">
                Explorations using language data, corpus methods, natural language processing and AI-assisted analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Terms */}
        <section className="mb-14 border-t border-neutral-200 pt-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-600">
            Legal information
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Terms of Use
          </h2>

          <p className="mt-4 text-sm text-neutral-500">
            Last updated: November 3, 2026
          </p>

          <div className="mt-8 space-y-8 text-sm leading-8 text-neutral-600">

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-900">
                1. Acceptance of Terms
              </h3>
              <p>
                By accessing or using Bruca, you agree to these Terms of
                Use. If you do not agree with any part of these terms,
                please discontinue using the website. These terms apply
                to visitors and users of our educational content and
                related services.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-900">
                2. Educational Purpose
              </h3>
              <p>
                Bruca provides research-oriented articles, project descriptions,
                methodological notes and educational explanations. Unless
                explicitly identified otherwise, content is for general
                informational and educational purposes. A project page does
                not by itself represent peer-reviewed research, an accredited
                qualification, professional advice or an official position
                of a university or research institution. Research status and
                limitations should be stated on the relevant project page.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-900">
                3. Accuracy and Availability
              </h3>
              <p>
                We aim to provide useful, clear and accurate educational
                information. However, languages evolve, usage varies
                between regions and contexts, and educational materials
                may occasionally contain errors or require updates.
                We do not guarantee that all information is complete,
                error-free or suitable for every learning purpose.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-900">
                4. Intellectual Property
              </h3>
              <p>
                Unless otherwise stated, original articles, written
                explanations, designs and other materials published by
                Bruca are protected by applicable intellectual property
                laws. You may access and use our content for personal,
                non-commercial educational purposes. Republishing,
                redistributing or commercially exploiting our original
                materials without appropriate permission is not permitted.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-900">
                5. Responsible Use
              </h3>
              <p>
                You agree not to misuse the website, attempt to disrupt
                its operation, interfere with its security, or use
                automated methods to extract or reproduce substantial
                portions of its content without permission.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-900">
                6. External Resources
              </h3>
              <p>
                Some pages may refer to external websites, publications,
                tools or educational resources. These third-party
                services operate independently, and Bruca is not
                responsible for their content, policies or availability.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-900">
                7. Changes to the Platform
              </h3>
              <p>
                We may update, modify, expand or discontinue parts of
                Bruca as the platform develops. We may also revise
                these terms when necessary. Updated versions will
                be published on this page.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-900">
                8. Limitation of Liability
              </h3>
              <p>
                To the extent permitted by applicable law, Bruca is
                provided on an &quot;as is&quot; and &quot;as available&quot;
                basis. We do not guarantee uninterrupted access or
                that the platform will meet every individual
                educational expectation. Nothing in these terms
                excludes liability that cannot legally be excluded.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-900">
                9. Applicable Law
              </h3>
              <p>
                These terms are subject to applicable laws and
                regulations. Any applicable jurisdiction and
                dispute-resolution provisions will depend on the
                legal entity operating Bruca and the relevant
                mandatory consumer protection rules.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-semibold text-neutral-900">
                10. Contact
              </h3>
              <p>
                For questions, corrections, suggestions or general
                enquiries regarding Bruca and its research and educational
                resources, please use the contact information
                published on our website.
              </p>
            </div>

          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-neutral-200 pt-10">
          <h2 className="text-xl font-semibold">
            Thank you for being part of Bruca.
          </h2>

          <p className="mt-4 leading-8 text-neutral-600">
            Whether you are a student, educator, researcher or simply curious
            about language, we hope Bruca offers a useful starting point
            for exploring linguistic ideas, research methods and emerging
            language technologies.
          </p>

          <Link
            href="/"
            className="mt-7 inline-flex rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-600"
          >
            Explore Bruca →
          </Link>
        </section>

        <footer className="mt-16 border-t border-neutral-200 pt-7 text-xs text-neutral-400">
          © {new Date().getFullYear()} Bruca. All rights reserved.
        </footer>

      </div>
    </main>
  );
}
