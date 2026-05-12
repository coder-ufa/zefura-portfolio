import type { Metadata } from "next";
import "./globals.css"; // or your global styles path
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Zefura | Elite Digital Agency", 
  description: "Architecting high-performance digital ecosystems, web applications, and growth campaigns for ambitious brands.",
  openGraph: {
    title: "Zefura | Elite Digital Agency",
    description: "Architecting high-performance digital ecosystems, web applications, and growth campaigns for ambitious brands.",
    url: "https://zefura.dev",
    siteName: "Zefura",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Zefura Digital Agency Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}