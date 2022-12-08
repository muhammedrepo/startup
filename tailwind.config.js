module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "540px",

      md: "720px",

      lg: "960px",

      xl: "1140px",

      "2xl": "1320px",
    },
    colors: {
      white: "rgba(255, 255, 255, 1)",
      gray: "rgba(149, 156, 177, 1)",
      transparent: "transparent",
      "light-blue": "rgba(206,211,246,1)",
      "main-bg": "rgba(74, 108, 247, 1)",
      "dark-blue": "rgba(29,33,68,1)",
      "main-dark-bg": "rgba(9, 14, 52, 1)",
    },
    extend: {},
  },
  plugins: [],
};
