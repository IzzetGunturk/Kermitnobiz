import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A8D3E",
        secondary: "#2D2D2C",
        background: "#FAFAFA",
        white: "#FFF",
      },
      fontFamily: {
        dynapuff: ['DynaPuff', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
