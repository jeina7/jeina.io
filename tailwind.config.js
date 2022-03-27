const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        pink: {
          50: "rgb(204 49 124 / 18%)",
          850: "#FB46A2",
          950: "#F52C8F",
        },
        mint: {
          50: "rgb(0 107 117 / 18%)",
          850: "#00E4F8",
          950: "#00D4D0",
        },
        green: {
          50: "rgb(52 193 130 / 18%)",
          850: "#35C081",
          950: "#00BF93",
        },
        blue: {
          50: "rgb(48 80 171 / 18%)",
          850: "#8BA1DE",
          950: "#1F74FF",
        },
        rose: {
          50: "rgb(182 2 5 / 18%)",
          850: "#FF7275",
          950: "#FF6178",
        },
        mango: {
          50: "rgb(247 225 1 / 18%)",
          850: "#F4DB01",
          950: "#FFB700",
        },
      },
      spacing: {
        13: "52px",
        15: "60px",
        18: "72px",
        21: "84px",
        23: "92px",
        25: "100px",
        30: "120px",
        34: "136px",
        45: "180px",
        50: "200px",
        130: "520px",
      },
      minWidth: {
        50: "200px",
      },
      maxWidth: {
        54: "216px",
        141: "564px",
      },
      fontSize: {
        xxs: "10px",
      },
      lineHeight: {
        "more-relaxed": 1.8,
      },
      borderWidth: {
        0.5: "0.5px",
      },
    },
  },
  plugins: [],
};
