/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        copy: ["Inter", "sans-serif"],
        quote: ["Inter", "sans-serif"],
        topline: ["Inter", "sans-serif"],
        button: ["Poppins", "sans-serif"],
        header: ["Poppins", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "6xl": "64px", // H1 desktop
        "4xl": "40px", // H2 desktop
        "3xl": "32px", // H1 mobile
      },
      lineHeight: {
        6.5: "26px",
      },
      spacing: {
        // Additional spacings for desktop
        15: "60px", // 60px
        32.5: "130px", // 130px
      },
      colors: {
        primary: {
          50: "#fef6f1",
          100: "#feeee6",
          200: "#ffd5cc",
          300: "#ffa89e",
          400: "#ff6966",
          500: "#fc363d",
          600: "#ec182a",
          700: "#cf0729",
          800: "#a90a32",
          900: "#8b0e3a",
          950: "#750035",
        },
        custom: {
          gray: "#5B6267",
        },
      },
      maxWidth: {
        xs: "92px",
        sm: "204px",
        md: "315px",
        lg: "427px",
        xl: "538px",
        "2xl": "650px",
        "3xl": "762px",
        desktop: "1320px",
        "desktop-half": "660px",
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
        "3xlarge": "2560px",
        "4xlarge": "3840px",
      },
    },
    plugins: [],
  },
};
