/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns: {
        'grid-cards': 'repeat(auto-fill, minmax(10rem, 1fr))',
      },
    },
  },
  safelist: [
    {
      pattern:
        /(bg|border|text)-(transparent|black|white|slate|gray|red|orange|amber|yellow|lime)-(50|100|200|300|400|500|600|700|800|900)/,
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
