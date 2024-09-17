/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geom: ['Geom', 'sans-serif']
      },
      dropShadow: {
        'glow': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.5)',
      },

      clipPath: {
        'custom-md': 'polygon(calc(33.33% + 1px) 0px, calc(33.33% + 1px) 48px, 100% 48px, 100% calc(100% - 56px), calc(100% - 56px) 100%, 0 100%, 0 32px, 32px 0px)',
        'custom-lg': 'polygon(calc(33.33% + 1px) 0px, calc(33.33% + 1px) 64px, 100% 64px, 100% calc(100% - 56px), calc(100% - 56px) 100%, 0 100%, 0 32px, 32px 0px)',
      },
    },
  },
  plugins: [],
}