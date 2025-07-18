/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { raw: "(max-width: 479px)" },
        ss: { raw: "(max-width: 619px)" },
        sm: { raw: "(max-width: 767px)" },
        md: { raw: "(max-width: 1059px)" },
        lg: { raw: "(max-width: 1199px)" },
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
