/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#915EFF",
        secondary: "#2196f3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        dark: "#050816",
        light: "#edf0ef",
        writing: "#211e35",
      },

      boxShadow: {
        card: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        neomorphism:
          "inset -4px -4px 10px #ffffff, inset 4px 4px 8px #ceced1, 4px 4px 8px #ceced1",
      },
      screens: {
        xs: "450px",
        xxs: "300px",
        380: "380px",
      },
      backgroundImage: {
        "hero-pattern-light": "url('/src/assets/herobg-light.webp')",
        "hero-pattern-dark": "url('/src/assets/herobg-dark.webp')",
      },
      fontFamily: {
        code: ["'Cascadia Code'", "Consolas", "'Lucida Console'"],
      },
    },
  },
  plugins: [],
};
