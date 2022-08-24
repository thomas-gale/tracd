/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,rs}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["FiraCode", "monospace"],
      },
    },
  },
  plugins: [],
};
