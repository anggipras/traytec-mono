/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "sz-10": "10px",
        "sz-12": "12px",
        "sz-14": "14px",
        "sz-16": "16px",
        "sz-20": "20px",
        "sz-24": "24px",
        "sz-32": "32px",
        "sz-40": "40px",
        "sz-42": "42px",
        "sz-60": "60px",
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
          "red-100": "#96004314",
          "red-800": "#960043",
          "red-900": "#730033",
          "red-950": "#64002D",
        },
      },
      lineHeight: {
        "lh-26": "26px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontSize: {
      "fs-base": "16px",
      "fs-18": "18px",
      "fs-20": "20px",
      "fs-24": "24px",
      "fs-40": "40px",
      "fs-64": "64px",
    },
    plugins: [],
  },
};
