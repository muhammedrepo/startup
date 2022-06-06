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
    extend: {
      backgroundColor: {
        "main-bg": "#4a6cf7",
        "main-dark-bg": "#242b51",
      },
    },
  },
  plugins: [],
};
