import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFAF6",
          100: "#F5F0EB",
          200: "#EDE5D8",
        },
        flame: {
          500: "#F97316",
          600: "#EA6C0A",
        },
        ink: {
          900: "#1A1A2E",
          700: "#2D2D4A",
          500: "#5A5A7A",
          300: "#9898B8",
        },
        purple: {
          500: "#7C3AED",
          100: "#EDE9FE",
        },
        teal: {
          600: "#0F6E56",
          100: "#E1F5EE",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
