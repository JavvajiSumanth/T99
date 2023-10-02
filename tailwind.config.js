/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Extend the color palette with a new color called "secondary" with a specific hex value.
        secondary: "#8f8f8f",
      },
      fontFamily: {
        // Extend the font family list with various font options, each with a specific name and font stack.
        condensedWeb: ["DIN Condensed Web"],
        sans: ['"Open Sans"', "sans-serif"],
        Gbold: ["G bold", "sans-serif"],
        Gboldoblique: ["G boldoblique", "sans-serif"],
        GBook: ["G book", "sans-serif"],
        Gbookoblique: ["G bookoblique", "sans-serif"],
        Gdemi: ["G demi", "sans-serif"],
        Gdemioblique: ["G demioblique", "sans-serif"],
        Glig: ["G lig", "sans-serif"],
        Gligoblique: ["G ligoblique", "sans-serif"],
        Gmedium: ["G medium", "sans-serif"],
        Gmediumoblique: ["G mediumoblique", "sans-serif"],
        Gsemi: ["G semi", "sans-serif"],
        Gsemioblique: ["G semioblique", "sans-serif"],
        Gtext: ["G text", "sans-serif"],
        Gtextoblique: ["G textoblique", "sans-serif"],
        Gthick: ["G thick", "sans-serif"],
        Gthickoblique: ["G thickoblique", "sans-serif"],
        Gxlig: ["G xlig", "sans-serif"],
        Gxligoblique: ["G xligoblique", "sans-serif"],
        DinCondensed: ["Din Condensed", "sans-serif"],
        primary: ["Shree Devanagari", "sans-serif"],
      },
    },
  },
  plugins: [],
};
