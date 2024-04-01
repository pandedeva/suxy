/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#8C82FC",
        "green-pastel": "#44E4C9",
        "semi-grey": "#22293E",
      },
    },
  },
  plugins: [],
};
