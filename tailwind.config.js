module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
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
          primary: "#FDFEF6", // Husk
          secondary: "#D1D3D3", // Titanium
          accent: "#FFEE65", // Barley
          neutral: "#444739", // Urban
          "base-100": "#242C25", // Marsh
          info: "#C0F7DE", // Dew
          success: "#C0F7DE", // Dew
          warning: "#FFAC51", // Rust
          error: "#F87272", // Generic Red
        },
      },
    ],
  },
};
