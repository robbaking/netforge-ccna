import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg: {
          base: "#060a14",
          surface: "#0c1222",
          elevated: "#111a30",
        },
        border: {
          DEFAULT: "#162040",
          hi: "#1e2d55",
        },
        cyan: {
          DEFAULT: "#00e5ff",
          dim: "#0097a7",
        },
        purple: {
          DEFAULT: "#7c4dff",
          dim: "#5c35cc",
        },
        nf: {
          text: "#c8e0ff",
          dim: "#6888aa",
          muted: "#2a4060",
          red: "#ff4c6a",
          green: "#00e676",
        },
      },
    },
  },
  plugins: [],
};

export default config;
