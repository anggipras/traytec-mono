/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    },
    plugins: [],
  },
};
