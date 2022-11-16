module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["FiraCode", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        tracd: {
          primary: "#FDFEF6",
          secondary: "#D1D3D3",
          accent: "#FFEE65",
          neutral: "#444739",
          "base-100": "#242C25",
          info: "#C0F7DE",
          success: "#C0F7DE",
          warning: "#FFAC51",
          error: "#F87272",
        },
      },
    ],
  },
};
