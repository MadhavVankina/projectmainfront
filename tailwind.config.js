/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
    borderRadius: {
      "4xl": "2rem",
    },
    extend: {
      colors: {
        background: {
          dark: "#17130D",
          light: "#F2EEE8",
        },
        primary: {
          dark: "#D7BB93",
          light: "#6C5028",
        },
        secondary: {
          dark: "#91611D",
          light: "#E2B26E",
        },
        accent: {
          dark: "#F1A73F",
          light: "#F1A73F",
        },
        fieldColor: {
          dark: "#E7E6E4",
          light: "#1B1A18",
        },
      },
    },
  },
  darkMode: "class",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["clsx"],
};
