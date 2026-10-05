import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://bruca.space";

const description =
  "Bruca helps teams find and fix biased wording in text, product copy and brand stories. A team of diverse writers and a bias-detection algorithm in development, built with European audiences in mind.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bruca: bias detection for text and product stories",
    template: "%s | Bruca",
  },
  description,
  keywords: [
    "bias detection",
    "inclusive language",
    "inclusive writing",
    "text bias analysis",
    "product copy review",
    "fair AI",
    "European audiences",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "Bruca",
    title: "Bruca: bias detection for text and product stories",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruca: bias detection for text and product stories",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#05060a]">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bruca",
              url: baseUrl,
              description,
            }),
          }}
        />
      </body>
    </html>
  );
}
