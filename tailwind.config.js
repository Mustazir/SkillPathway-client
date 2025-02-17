import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color1':"#262d53",
        'd-color1':"#121627",
        'color2':"#4a7fce",
        'd-color2':"#315a9b",
        'color3':"#172554",
        'd-color3':"#0d1939",
      },
      fontFamily:{
        'lato':'"Lato", serif;',
        'Noto':'"Noto Sans", serif;'
      }
    },
  },
  plugins: [daisyui],
}

