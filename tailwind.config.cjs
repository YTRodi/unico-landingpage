/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      pink: {
        DEFAULT: '#FB64B0',
        light: '#FAE3EF',
      },
      purple: {
        DEFAULT: '#6455EC',
        light: '#E8D7FF',
      },
      yellow: {
        DEFAULT: '#FFAC32',
        light: '#FBF3CA',
      },
      gray: {
        DEFAULT: '#777B84',
        light: '#4F5665',
        dark: '#323336',
      },
    },
    extend: {
      fontFamily: {
        gilroy: ['Gilroy'],
      },
    },
  },
  plugins: [],
};
