/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        marineblue: 'hsl(213, 96%, 18%)',
        purplishblue: 'hsl(243, 100%, 62%)',
        lightblue: 'hsl(206, 94%, 87%)',
        strawberryred: 'hsl(354, 84%, 57%)',
        coolgray: ' hsl(231, 11%, 63%)',
        lightgray: ' hsl(229, 24%, 87%)',
        magnolia: ' hsl(217, 100%, 97%)',
        alabaster: ' hsl(231, 100%, 99%)',
        white: ' hsl(0, 0%, 100%)',
      },
      fontFamily: {
        ubuntu: ['Ubuntu'],
      },
      screens: {
        sm: '760px',
      },
    },
  },
  plugins: [],
};
