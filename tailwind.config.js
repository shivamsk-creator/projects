/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT", "@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
});
