import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Updated to the brand new package path!
import { ReactLenis } from "lenis/react"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zefura | Digital Excellence",
  description: "A focused collective of designers and developers building high-performance platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Lenis Smooth Scroll Wrapper */}
        <ReactLenis root options={{ lerp: 0.05, duration: 1.5 }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}