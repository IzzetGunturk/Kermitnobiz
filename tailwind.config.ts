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
        '3xl': '1920px',
        'max980': { max: "980px" }, 
        'max480': { max: "480px" }, 
      },
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'mover':{
          '0%': {transform: 'translateY(0)'},
          '100%': {transform: 'translateY(-10px)'},
        },
        'slide-up':{
          '0%': {transform: ' translateY(260px)'},
          '100%': {transform: 'translateY(0)'},
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(12deg)' },
          '20%': { transform: 'rotate(-4deg)' },
          '30%': { transform: 'rotate(12deg)' },
          '40%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(6deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'slide-left-infinite': 'slide-left 20s linear infinite',
        'mover': 'mover 1s infinite alternate',
        'slide-up': 'slide-up 1s ease',
        'wave': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
