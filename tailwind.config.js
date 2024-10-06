/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B0B435",
        secondary: "#4F4F4F"
      },
      fontFamily: {
        courgette: ['"Courgette"', 'cursive'], 
        nunito: ['"Nunito"', 'sans-serif'],  
      },
      fontWeight: {
        regular: '400',    
      },
    },
  },
  plugins: [],
}

