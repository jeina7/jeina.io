const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Pretendard", ...fontFamily.sans],
    },
    extend: {
      colors: {
        gray: {
          0: "#fff",
          50: "#F8F8F8",
          100: "#F0F0F0",
          200: "#DADADA",
          300: "#BEBEBE",
          400: "#999999",
          500: "#777777",
          600: "#5F5F5F",
          700: "#444444",
          800: "#2F2F2F",
          900: "#121212",
        },
        "label-light-pink": "#F52C8F",
        "label-light-mint": "#00D4D0",
        "label-light-green": "#00BF93",
        "label-light-blue": "#1F74FF",
        "label-light-rose": "#FF6178",
        "label-light-mango": "#FFB700",
      },
      spacing: {
        13: "52px",
        15: "60px",
        17: "68px",
        18: "72px",
        21: "84px",
        23: "92px",
        29: "116px",
        34: "136px",
        45: "180px",
      },
      maxWidth: {
        141: "564px",
      },
      fontSize: {
        xxs: "10px",
      },
      lineHeight: {
        "more-relaxed": 1.8,
      },
    },
  },
  plugins: [],
};
