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
      },
      screens: {
        'sm300': '370px',
      },
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left-infinite': 'slide-left 15s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
