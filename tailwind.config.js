/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sf' : ['SF Pro Display', 'sans-serif']
      },

      colors: {
        'gelap' : '#0B001A', //Warna latar belakang
        'gelap 2' : '#1E0044',
        'aksen' : '#8338EC',
        'teks' : '#F8EEFF',
        'gradient' : '#B923FF'
      }
    },
  },
  plugins: [],
}