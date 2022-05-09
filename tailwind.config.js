module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'button-disabled-color': '#33363A',
        'button-color': '#5D5DFF',
        'main-bg-color': '#151719',
      },
      fontFamily: {
        main: 'Inter',
        productPromo: ['Architects Daughter', 'cursive'],
      },
      fontSize: {
        promoFontSize: '2rem',
      },
    },
  },
  plugins: [],
};
