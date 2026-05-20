import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          900: "#05060a",
          800: "#0a0c14",
          700: "#0f1220",
          600: "#161a2c",
        },
        neon: {
          cyan: "#00f0ff",
          magenta: "#ff00e5",
          violet: "#8b5cf6",
          lime: "#a3ff12",
          amber: "#ffb800",
        },
      },
      boxShadow: {
        neon: "0 0 12px rgba(0,240,255,0.6), 0 0 32px rgba(0,240,255,0.25)",
        "neon-pink":
          "0 0 12px rgba(255,0,229,0.55), 0 0 32px rgba(255,0,229,0.25)",
        glass: "0 8px 32px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at top, rgba(139,92,246,0.18), transparent 60%), radial-gradient(ellipse at bottom, rgba(0,240,255,0.14), transparent 55%)",
      },
      animation: {
        "spin-slow": "spin 16s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        marquee: "marquee 30s linear infinite",
        scanline: "scanline 6s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
