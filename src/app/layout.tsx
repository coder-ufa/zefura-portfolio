import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";

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
    <html lang="en" className="scroll-smooth bg-[#030303] overflow-x-hidden w-full max-w-[100vw]">
      <body className={`${inter.className} text-white antialiased relative min-h-screen overflow-x-hidden w-full max-w-[100vw]`}>
        
        {/* --- GLOBAL GLOWING BRAND WATERMARK --- */}
        <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden">
          {/* OPTIMIZATION: Removed the lethal drop-shadow. Replaced with pure crisp opacity. */}
          <div className="absolute w-[200vw] rotate-[-15deg] scale-150 text-[hsl(var(--theme-hue,260),80%,60%)] opacity-[0.03] md:w-[120vw] md:scale-125 transform-gpu will-change-transform">
            <svg viewBox="0 0 901.8 901.14" className="h-full w-full" fill="currentColor">
              <circle cx="801.25" cy="801.14" r="100" />
              <path d="M950.87,149.26a99.58,99.58,0,0,1-26.39,67.68l-709.9,709.9A100.5,100.5,0,0,1,72.38,786.2L609.32,249.26H149.07a100,100,0,0,1,0-200h701.8A100,100,0,0,1,950.87,149.26Z" transform="translate(-49.07 -49.26)" />
            </svg>
          </div>
        </div>
        
        {/* OPTIMIZATION: Lenis is gone. Let the browser scroll natively. */}
        <div className="relative z-10 flex min-h-screen w-full max-w-[100vw] flex-col overflow-x-hidden">
            {children}
        </div>
        
      </body>
    </html>
  );
}