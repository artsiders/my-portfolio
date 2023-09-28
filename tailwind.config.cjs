/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#915EFF",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "dark": "#050816",
        "light": "#fafafa",
        "writing": "#211e35",
      },

      boxShadow: {
        card: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      screens: {
        xs: "450px",
        xxs: "300px",
      },
      backgroundImage: {
        "hero-pattern-light": "url('/src/assets/herobg-light.webp')",
        "hero-pattern-dark": "url('/src/assets/herobg-dark.webp')",
      },
    },
  },
  plugins: [],
};
