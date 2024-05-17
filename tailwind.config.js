/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hijaumuda: "#2D9D49",
        hijautua: "#004225",
        hijaubiru: "#183530",
        kuning: "#FFB000",
      },
      fontFamily: {
        core: ["League Spartan", "sans-serif"],
      }
    },
   
  },
  plugins: [],
};
