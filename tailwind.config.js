module.exports = {
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
      sans: ["Noto Sans KR, sans-serif"],
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
      lightScheme: {
        primary: "#1E2E6A",
        "primary-focus": "#3454ed",
        "primary-content": "#ffffff",
        secondary: "#E8EBF9",
        "secondary-focus": "#d4d9f4",
        "secondary-content": "#1E41EB",
        accent: "#11B679",
        "accent-focus": "#28bd86",
        "accent-content": "#ffffff",
        neutral: "#ECEDEF",
        "neutral-focus": "#dee0e3",
        "neutral-content": "#3e4549",
        "base-100": "#f2f2f2",
        "base-200": "#f7f8f9", // 기본 배경색상
        "base-300": "#FFFFFF",
        "base-content": "#111314", // 타이틀 폰트 색상
        info: "#88929c", // 부가설명 폰트 색상
        success: "#0FA36C",
        warning: "#DB5F6C",
        error: "#DB5F6C",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
