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
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
        "wiggle-more": {
          "0%, 100%": {
            transform: "rotate(-12deg)",
          },
          "50%": {
            transform: "rotate(12deg)",
          },
        },
        "rotate-y": {
          "0%": {
            transform: "rotateY(360deg)",
          },
          "100%": {
            transform: "rotateY(0)",
          },
        },
        "rotate-x": {
          "0%": {
            transform: "rotateX(360deg)",
          },
          "100%": {
            transform: "rotateX(0)",
          },
        },
        jump: {
          "0%, 100%": {
            transform: "scale(100%)",
          },
          "10%": {
            transform: "scale(80%)",
          },
          "50%": {
            transform: "scale(120%)",
          },
        },
        "jump-in": {
          "0%": {
            transform: "scale(0%)",
          },
          "80%": {
            transform: "scale(120%)",
          },
          "100%": {
            transform: "scale(100%)",
          },
        },
        "jump-out": {
          "0%": {
            transform: "scale(100%)",
          },
          "20%": {
            transform: "scale(120%)",
          },
          "100%": {
            transform: "scale(0%)",
          },
        },
        shake: {
          "0%": {
            transform: "translateX(0rem)",
          },
          "25%": {
            transform: "translateX(-1rem)",
          },
          "75%": {
            transform: "translateX(1rem)",
          },
          "100%": {
            transform: "translateX(0rem)",
          },
        },
        fade: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(-2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "flip-up": {
          "0%": {
            transform: "rotateX(90deg)",
            transformOrigin: "bottom",
          },
          "100%": {
            transform: "rotateX(0)",
            transformOrigin: "bottom",
          },
        },
        "flip-down": {
          "0%": {
            transform: "rotateX(-90deg)",
            transformOrigin: "top",
          },
          "100%": {
            transform: "rotateX(0)",
            transformOrigin: "top",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s both",
        "wiggle-more": "wiggle-more 1s both",
        "rotate-y": "rotate-y 1s both",
        "rotate-x": "rotate-x 1s both",
        jump: "jump .5s both",
        "jump-in": "jump-in .5s both",
        "jump-out": "jump-out .5s both",
        shake: "shake .5s both",
        fade: "fade 1s both",
        "fade-down": "fade-down 1s both",
        "fade-up": "fade-up 1s both",
        "fade-left": "fade-left 1s both",
        "fade-right": "fade-right 1s both",
        "flip-up": "flip-up 1s both",
        "flip-down": "flip-down 1s both",
      },
    },
    plugins: [],
  },
};
