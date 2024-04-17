/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "branco": "#E9F1F2",
        "preto": "#0D0000",
        "preto-90": "rgba(13,0,0, 90%)",
        "preto-50": "rgba(13,0,0, 50%)",
        "preto-25": "rgba(13,0,0, 25%)"
      },
      
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      backgroundImage: {
        "img-adan": "url('/src/assets/background.svg')",
        "img-adan-mobile": "url('/src/assets/background-mobile.svg')"
      }
    },
  },
  plugins: [],
}

