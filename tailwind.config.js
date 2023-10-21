/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}',
            './components/**/*.{js,ts,jsx,tsx,mdx}',
          ],
  theme: {
    extend: {
      keyframes:{
        bounce:{
          
          
            '0%': {transform: 'translateY(0)'},
            '20%': {transform: 'translateY(0)'},
            '50%': {transform: 'translateY(0)'},
            '80%': {transform: 'translateY(0)'},
            '40%' :{transform: 'translateY(-10px)'},
            '60%' :{transform: 'translateY(-5px)'},
            '100%': {transform: 'translateY(0)'},
        },
        goLeft:{
          
          
          '0%': {transform: 'translateX(0)'},
          '20%': {transform: 'translateX(0)'},
          '50%': {transform: 'translateX(0)'},
          '80%': {transform: 'translateX(0)'},
          '40%' :{transform: 'translateX(-10px)'},
          '60%' :{transform: 'translateX(-5px)'},
          '100%': {transform: 'translateX(0)'},
      }
      },
      animation:{
        'goLeft':'goLeft 2s ease infinite',
        'bounce':'bounce 1.5s ease infinite',
      }
    },
    fontFamily:  {
      'roboto': ['Roboto', 'sans-serif'],
      'capriola': ['Capriola', 'sans-serif'],
      'varela' :['Varela Round', 'sans-serif']
    }
  },
  plugins: [],
}
