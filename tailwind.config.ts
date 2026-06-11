import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coal: "#0A0505",
        char: "#120906",
        surface: "#170C07",
        ember: "#FF3D17",
        flame: "#FF7A18",
        gold: "#FFB347",
        ash: "#B8A89E",
        smoke: "#79655B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "ember-gradient":
          "linear-gradient(95deg, #FF7A18 0%, #FF3D17 45%, #FFB347 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
