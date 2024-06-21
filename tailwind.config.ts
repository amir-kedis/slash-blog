import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": "var(--font-playfair-display)",
        "crimson-text": "var(--font-crimson-text)",
      },
      colors: {
        "primary-red-50": "#EDE6E5",
        "primary-red-100": "#FF7066",
        "primary-red-900": "#7C4B45",
        "primary-green-50": "#CEE0D6",
        "primary-green-100": "#DFFF84",
        "primary-green-900": "#436D56",
        "text-primary": "#000000",
        "text-secondary": "#283130",
      },
      fontSize: {
        clamp: "clamp(2rem, 5vw, 4.5rem)",
      },
    },
  },
  plugins: [],
};
export default config;
