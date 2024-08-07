/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flexGrow: {
        DEFAULT: '1',
      },
      flexShrink: {
        DEFAULT: '0',
      },
      animation: {
        fade: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      transitionDelay: {
        2000: '2000ms',
        3000: '3000ms',
        4000: '4000ms',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'fg-primary-01': '#EAB875',
        'fg-primary-02': '#E1C7A5',
        'fg-primary-03': '#FFF4E8',
        'fg-secondary-01': '#D3E3E2',
        'fg-secondary-02': '#7BC5C1',
        'fg-black': '#121212',
        'fg-white': '#FFFFFF',
        'fg-text-black': '#4D4D4D',
        'fg-text-white': '#FFFFFF',
        'fg-text-blue': '#6EAAA6',
        'fg-grey': '#C7C7C7',
        'fg-gradientBlue': '#EBFFFB',
      },
    },
  },
  plugins: [],
};
