const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {   
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      }, 			
      padding: {
        "1v" : "1vh",
        "2v" : "2vh",
        "3v" : "3vh",
        "4v" : "4vh",
        "5v" : "5vh",
        "10v": "10vh",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio"), addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
