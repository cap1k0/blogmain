import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <Link href="/" className="mb-8 inline-block text-sm text-neutral-500 hover:text-neutral-800">
          ← Back to Bruca
        </Link>

        <h1 className="mb-8 text-3xl font-medium">Terms of Service</h1>

        <div className="space-y-4 text-base leading-relaxed text-neutral-700">
          <p>
            Welcome to Bruca. These terms of service (&quot;terms&quot;) govern your
            access to and use of Bruca&apos;s website, applications, and
            bias-detection and text-review services (together, the
            &quot;service&quot;), operated by [Bruca legal entity name]
            (&quot;Bruca&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By
            creating an account or otherwise using the service, you agree to
            these terms.
          </p>

          <p className="mb-3">
            Bruca provides tools and reviews that help identify and reduce
            biased wording in text, product copy and brand stories,
            including suggested neutral rewrites, along with related account
            and workspace tools. Some features are still in development.
            The service is currently offered as a{" "}
            <strong className="font-medium">beta</strong>:
            features, availability, output quality, and pricing may change
            at any time, and the service may be interrupted or discontinued
            without notice.
          </p>
        </div>
      </div>
    </main>
  );
}
