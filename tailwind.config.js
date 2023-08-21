/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", './src/**/*.{html, js, ts}', "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["'Montserrat'", 'sans-serif'],
        inter: ["'Inter'", 'sans-serif']
      },
      colors: {
        ar: {
          green: '#1B5B31',
          beige: '#DCC1AB',
          bg: {
            main: '#F5F0EC',
            card: '#FFFFFF',
            navbar: '#FFFFFF',
            block: '#1B5B31',
            footer: '#111111'
          },
          font: {
            black: '#111111',
            white: '#F5F0EC',
            green: '#1B5B31'
          },
          border: {
            white: '#F5F0EC',
            black: '#111111'
          }
        },
        'fb-blue': '#1877F2',
        'li-blue': '#0077B5',
      },
      backgroundSize: {
        '200%': '200%'
      },
      transitionProperty: {
        height: 'height'
      }
    },
    screens: {
      'phone': '515px',
      'phone-lg': '580px',
      'tablet': '680px',
      'tablet-lg': '800px',
      'tablet-xl': '860px',
      'laptop': '990px',
      'tablet-2xl': '1080px',
      'laptop-lg': '1200px',
      'desktop': '1440px',
    },
    keyframes: {
      'mobile-search-bar-show': {
        '50%': { transform: 'translateY(1.3rem)' },
        '100%': { width: '160px', transform: 'translateY(1.3rem)'},
      },
      'mobile-search-bar-hide': {
        '50%': { width: '0px' },
        '100%': { transform: 'translateY(0rem)'},
      },
    },
    animation: {
      'mobile-search-bar-show': '500ms linear forwards mobile-search-bar-show',
      'mobile-search-bar-hide': '500ms linear forwards mobile-search-bar-hide',
    }
  },
  plugins: [],
};

