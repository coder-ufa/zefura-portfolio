import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // OPTIMIZATION: Advanced Image Engine
  // Forces Next.js to serve next-gen AVIF and WEBP formats, cutting image load times in half
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // OPTIMIZATION: Tree-Shaking Aggression
  // Prevents the entire Lucide icon library and Framer Motion engine from loading on the client
  // It will only bundle the exact icons (Mail, Send, etc.) and math that you actually use.
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;