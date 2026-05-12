import type { Metadata } from "next";

export const metadata: Metadata = {
  // This is what shows up in Google Search and the Browser Tab
  title: "Zefura | Elite Digital Agency", 
  description: "Architecting high-performance digital ecosystems, web applications, and growth campaigns for ambitious brands.",
  
  // This is what triggers your new banner on WhatsApp, LinkedIn, and Facebook
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

  // Twitter Specific Card
  twitter: {
    card: "summary_large_image",
    title: "Zefura | Elite Digital Agency",
    description: "Architecting high-performance digital ecosystems, web applications, and growth campaigns for ambitious brands.",
    images: ["/og-image.jpg"],
  },
  
  // Connects your logo to the tab icon
  icons: {
    icon: "/icon.jpg",
  },
};