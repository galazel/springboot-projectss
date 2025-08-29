import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite-react/**/*.js"], 
  theme: {
    extend: {
      fontFamily: {
        "lexend-exa": ["Lexend Exa", "sans-serif"],
        "lexend-giga": ["Lexend Giga", "sans-serif"],
      },
      colors: 
      {
        red: "#E50914",
        gray: "#B3B3B3",
        dark: "#141414",
        highlight: "#221F1F",
        bodyBackground: "#C3DDFD",
      },
    },
  },
  plugins: [daisyui],
};
