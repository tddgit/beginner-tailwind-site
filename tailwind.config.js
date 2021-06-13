const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.js"
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
