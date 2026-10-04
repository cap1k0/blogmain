import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://bruca.space";

const description =
  "Our startup is a team of diverse writers who work on creativity and the core of the product. We have a special algorithm for detecting and reducing bias in text, and if you are interested, we can make it available to you.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bruca Blog Brain Agent Research",
    template: "%s | Bruca Blog",
  },
  description,
  keywords: [
    "AI news",
    "RAG",
    "retrieval-augmented generation",
    "AI agents",
    "AI research blog",
    "machine learning news",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "Bruca Agent",
    title: "Bruca Blog Brain Agent Research",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruca Blog — AI News, RAG & Agent Research",
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
              "@type": "Blog",
              name: "Bruca Blog",
              url: baseUrl,
              description,
            }),
          }}
        />
      </body>
    </html>
  );
}
