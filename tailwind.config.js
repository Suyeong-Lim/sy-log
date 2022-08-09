const colors = require("tailwindcss/colors");
const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  plugins: [require("@tailwindcss/typography")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "1024px",
      desktop: "1200px",
      wide: "1536px",
    },
    fontFamily: {
      sans: [
        "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
      ],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: colors.gray,
      cyan: colors.cyan,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      bg: "#F8F8F8",
      bg_gray: "#F6F6F6",
      accent: "#50A6C9",
      accent_plus: "#5989C3",
      accent_plus_hover: "#5f8fc9cc",
      accentborder: "#2a75e950",
      primary: "#8ABED4",
      primary_20: "#EDF8FF",
      secondary: "#FCA19F",
      shadow: "#2c3e5015",
      text_base: "#242527",
      text_till: "#717783",
      text_gray_10: "#F6F6F6",
      text_gray_20: "#B5B5B5",
      text_gray_30: "#323334",
      text_base_20: "#2a37441f",
      text_base_40: "#2c3e5040",
      text_base_70: "#2c3e5070",
    },
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
      gradient: "gradient 7s linear infinite",
    },
    keyframes: {
      spin: {
        to: {
          transform: "rotate(360deg)",
        },
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },
      pulse: {
        "50%": {
          opacity: ".5",
        },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
        },
      },
      gradient: {
        "0%, 100%": {
          "background-size": "200% 200%",
          "background-position": "0 50%",
        },
        "50%": {
          opacity: ".9",
          "background-size": "200% 200%",
          "background-position": "100% 50%",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
