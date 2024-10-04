/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // colors: {
      //   transparent: colors.transparent,
      //   white: colors.white,
      //   green: colors.green,
      //   yellow: colors.yellow,
      //   red: colors.red,
      //   gray: colors.gray,
      // },
      gridTemplateColumns: {
        'grid-cards': 'repeat(auto-fill, minmax(10rem, 1fr))',
      },
    },
  },
  safelist: [
    {
      //TODO  убрать лишние цвета
      pattern:
        /(bg|border|text)-(transparent|black|white|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|lightBlue|warmGray|trueGray|coolGray|blueGray)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: [
        'dark',
        'hover',
        'focus',
        'dark:hover',
        'hover:dark',
        'dark:focus',
        'focus:dark',
      ],
    },
  ],
  plugins: [],
};
