import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#0A0F1A",
        "brand-navy": "#1A2332",
        "brand-orange": "#E85D04",
        "brand-orange-h": "#FF6B1A",
        "brand-light": "#F8F8F6",
        "brand-white": "#FFFFFF",
        "brand-text": "#1A1A1A",
        "brand-muted": "#6B7280",
        "brand-border": "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
