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
        "sz-12": "12px",
        "sz-14": "14px",
        "sz-16": "16px",
        "sz-20": "20px",
        "sz-24": "24px",
        "sz-32": "32px",
        "sz-40": "40px",
        "sz-42": "42px",
      },
      colors: {
        primary: {
          50: "#fef4f1",
          100: "#feeae6",
          200: "#ffcfcc",
          300: "#ff9ea0",
          400: "#ff6673",
          500: "#fc364d",
          600: "#ec1838",
          700: "#cf0733",
          800: "#a90a37",
          900: "#8b0e3c",
          950: "#750035",
        },
      },
      lineHeight: {
        "lh-26": "26px",
      },
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
