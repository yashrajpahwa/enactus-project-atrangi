/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      yellow: "#FFB800",
      white: "#FFFFFF",
      black: "#121212",
      gray: "#71717A",
    },
    screens: {
      lg: "1140px",
    },
  },
  plugins: [],
};

