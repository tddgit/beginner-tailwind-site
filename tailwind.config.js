const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./index.html",
    "./main.js",
    "./main.ts",
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.tsx"

    // "./*.html",
    // "./*.vue",
    // "./*.jsx",
    // "./*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        teal: colors.teal
        // "light-blue": colors.lightBlue
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
