/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {   
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      screens: {
        formBreak: '900px',
      },
      padding: {
        "1v" : "1vh",
        "2v" : "2vh",
        "3v" : "3vh",
        "4v" : "4vh",
        "5v" : "5vh",
        "10v": "10vh",
      },
    },
  },
  plugins: [],
}
