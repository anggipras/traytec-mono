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
          50: "#FFD6E9",
          100: "#FFC2DD",
          200: "#FF9ECA",
          300: "#FF75B3",
          400: "#FF4D9D",
          500: "#FF2486",
          600: "#FF0073",
          700: "#D60060",
          800: "#AD004E",
          900: "#85003C",
          950: "#730033",
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
