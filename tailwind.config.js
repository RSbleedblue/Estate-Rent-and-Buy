/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purple" : "#7469B6",
        "ShadePurple": "#AD88C6",
        "Pink" : "#E1AFD1",
        "cream" : "#FFE6E6",
        "bgMain" : "#F8F7FD"
      }
    },
  },
  plugins: [],
}

