/** @type {import('tailwindcss').Config} */
const plugin = require("tailwind-scrollbar");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#DEB3E4",
        secondaryColor: "#be68c9",
        backgroundColor: "#e9dec9",
      },
      padding: {
        padding: "20px",
      },
    },
  },
  plugins: [
    plugin({ nocompatible: true }), // Ensure proper configuration for `tailwind-scrollbar`
  ],
};
