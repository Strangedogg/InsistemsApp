/** @type {import('tailwindcss').Config} */
module.exports = {
  //content will select the archives that will be modified by tailwind
  content: ["./app/**.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#300014',             //primary
        secondary: '#151312',
        light:{                           //light-100 and light-200
          100: '#D6C6FF',
          200: '#A8B5DB'
        },
        accent: '#AB8BFF'
      }
    },
  },
  plugins: [],
}

