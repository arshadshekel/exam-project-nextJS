const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      archivo: ["Archivo Black", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#004aad",
        secondary: "rgba(0, 74, 173, 0.1)",
        hero: "#111111",
        heroText: "#c7c3c3",
        backgroundWhite: "#fbfbfd",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    // ...
  ],
};
