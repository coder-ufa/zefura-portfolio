import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zefura.dev — Elite Design & Development Agency",
  description:
    "Five minds. One obsession. We craft digital legends through Web Design, UI/UX, and Brand Architecture.",
  metadataBase: new URL("https://zefura.dev"),
  openGraph: {
    title: "Zefura.dev — Elite Design & Development Agency",
    description:
      "Five minds. One obsession. We craft digital legends through Web Design, UI/UX, and Brand Architecture.",
    url: "https://zefura.dev",
    siteName: "Zefura.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zefura.dev — Elite Design & Development Agency",
    description:
      "Five minds. One obsession. We craft digital legends through Web Design, UI/UX, and Brand Architecture.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-obsidian antialiased">{children}</body>
    </html>
  );
}