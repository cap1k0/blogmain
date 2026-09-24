import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://bruca.space";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Bruca Blog — AI News, RAG & Agent Research",
    template: "%s | Bruca Blog",
  },
  description:
    "AI news and research notes on RAG, AI agents, and the models behind them — written as the field moves, not after it.",
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
    siteName: "Bruca Blog",
    title: "Bruca Blog — AI News, RAG & Agent Research",
    description:
      "AI news and research notes on RAG, AI agents, and the models behind them.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruca Blog — AI News, RAG & Agent Research",
    description:
      "AI news and research notes on RAG, AI agents, and the models behind them.",
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
              description:
                "AI news and research notes on RAG, AI agents, and the models behind them.",
            }),
          }}
        />
      </body>
    </html>
  );
}
