/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,html}'],
  theme: {
    extend: {
      colors: {
        text: '#fafafa',
        background: '#0d0d0d',
        primaryBtn: '#1a37ad',
        secondaryBtn: '#171717',
        accent: '#173097',
      },
      fontFamily: {
        title: ['Russo One', 'sans-serif'],
        text: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: '340px',
      },
      backgroundImage: {
        backgroundGradient:
          'linear-gradient(180deg, rgba(13,13,13,1) 0%, rgba(28,28,28,1) 100%)',
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('tailwind-scrollbar')],
};
