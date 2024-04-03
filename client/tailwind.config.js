/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Manrope': ['Manrope', 'monospace'] 
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["sunset"],
  },
}

