/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      's_mobile': '319px',
      'm_mobile': '374px',
      'l_mobile': '411px',
      'tablet': '768px',
      'laptop': '981px',
      'l_laptop': '1025px',

      // 's_mobile': {'min': '319px', 'max': '373px'},
      // 'm_mobile': {'min': '374px', 'max': '410px'},
      // 'l_mobile': {'min': '411px', 'max': '767px'},
      // 'tablet': {'min': '768px', 'max': '980px'},
      // 'laptop': {'min': '981px', 'max': '1024px'},
      // 'l_laptop': {'min': '1025px', 'max': '1450px'},
    },
    extend: {},
  },
  plugins: [],
}

