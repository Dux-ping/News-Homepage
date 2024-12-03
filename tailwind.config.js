/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "c-white": "#FFFDFA",
      "c-blue": "#00001A",
      "c-gray": "#5E607A",
      "c-red": "#F15D51",
      "c-silver": "#C5C6CE",
      "c-yellow": "#E9AA52",
    },
    extend: {
      fontSize: {
        "f-xl": "clamp(2.5rem, 2.0098039215686274rem + 2.091503267973856vw, 3.5rem)", //40px , 56px
        "f-l": "clamp(2rem, 1.7549019607843137rem + 1.045751633986928vw, 2.5rem)", //32px, 40px
        "f-m": "2rem", //32px
        "f-s": "1.25rem", //20px
        "f-xs": "1.125rem", //18px
        "f-body": "0.938rem", //15px
      },
      minWidth: {
        "c-width": "min(69.375rem, calc(100% - 2rem))", //1110px , 32px
      },
      letterSpacing: {
        custom: "0.31em", // valoarea personalizată
      },
    },
  },
  plugins: [],
};
