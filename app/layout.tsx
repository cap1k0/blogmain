// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const baseUrl = "https://bruca.space";

const siteTitle = "Bruca: science, fiction and research";

const description =
  "A blog for a new age, a little beyond reality. Science, fiction and research from the Bruca team and its algorithm.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteTitle,
    template: "%s | Bruca",
  },
  description,
  keywords: [
    "science blog",
    "research blog",
    "science fiction",
    "language models",
    "historical linguistics",
    "evaluation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "Bruca",
    title: siteTitle,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description,
  },
  robots: { index: true, follow: true },
  verification: {
    google: "TOKEN_GOOGLE",
    yandex: "TOKEN_YANDEX",
    other: {
      "msvalidate.01": "TOKEN_BING",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
   <body className="bg-[#faf9f6]">
  {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Bruca",
              url: baseUrl,
              description,
            }),
          }}
        />
        <Script id="hilltopads-tag" strategy="afterInteractive">
          {`
            (function(aicmb){
              var d = document,
                  s = d.createElement('script'),
                  l = d.currentScript || d.scripts[d.scripts.length - 1];
              s.settings = aicmb || {};
              s.src = "//untimely-hello.com/bEX.VCsFdIGElE0/YUWpcR/hefmH9eudZRUnlikQPmTCcM1yNqT/IZw_MyDikZt_NYzwUO1hMajWAlxmMmwE";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              (l && l.parentNode ? l.parentNode : d.body).insertBefore(s, l && l.parentNode ? l : null);
            })({})
          `}
        </Script>
      </body>
    </html>
  );
}
