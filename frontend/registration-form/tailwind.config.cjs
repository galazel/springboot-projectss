// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["'Lexend Exa'", "sans-serif"], // quotes required because of space
      },
    },
  },
  plugins: [],
};
