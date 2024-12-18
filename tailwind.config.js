/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        md: '768px',
        lg: '1024px',
      },
      colors:{
        'regal-blue': '#243c5a',
        'Bgblue': '#173b72',
        'cyan': '#17d2b9',
        'Bggrey': '#E4E9F0',
        'Textgrey': '#636F79',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

