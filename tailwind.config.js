/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8C748" /* Yellow */,
        hoveredPrimary: "",
        activePrimary: "",
        lightYellow: "#FEF9ED",
        darkYellow: "#",
        hoveredDarkYellow: "",
        activeDarkYellow: "",
        secondary: "#303210" /* Green */,
        lightGreen: "#EAEBE7",
        darkGreen: "#"
      },
    },
  },
  plugins: [],
};
