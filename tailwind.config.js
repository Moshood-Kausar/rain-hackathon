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
        darkGreen: "#",
        dark: "#1d1d1d"
      },
      keyframes: {
        "bounce-slowTop": {
          '0%, 100%': { transform: "translateY(4%)" },
          '50%': { transform: "translateY(-4%)" },
        },
        "bounce-slow": {
          '0%, 100%': { transform: "translateY(-4%)" },
          '50%': { transform: "translateY(4%)" },
        },
      },
      animation: {
        "bounce-slow": "bounce-slow 3s linear infinite",
        "bounce-slowTop": "bounce-slowTop 3s linear infinite",
      }
    },
  },
  plugins: [],
};
