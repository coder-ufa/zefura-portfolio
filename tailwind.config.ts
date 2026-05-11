import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateZ(0)' },
          '50%': { transform: 'translateY(-20px) translateZ(0)' },
        },
        // NEW: The "Gravity / Breathe" effect for all your boxes
        breathe: {
          '0%, 100%': { transform: 'translateY(0) scale(1) translateZ(0)' },
          '50%': { transform: 'translateY(-12px) scale(1.01) translateZ(0)' },
        }
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        // 6-second smooth gravity cycle
        breathe: 'breathe 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;

export default config;