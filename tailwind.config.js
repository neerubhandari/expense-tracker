/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#0085ff",
      background: "#1e1e1e",
      // hover: "#c084fc",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // default for body text
        header: ["Montserrat", "sans-serif"], // for headings and navbar
        body: ["Raleway", "serif"], // for paragraph or long-form content
      },
    },
  },
  plugins: [],
};
