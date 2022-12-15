/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",

    "node_modules/daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},

    colors: {
      gray: colors.gray,
      green: colors.green,
      blue: colors.blue,
      red: colors.red,
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "rgb(58, 96, 233)",
          secondary: "rgb(220, 81, 74)",
          accent: "rgb(95, 127, 246)",
          // neutral: "#3d4451",
          neutral: "white",
          "base-100": "#2A303C",
          info: "#7abff6",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
