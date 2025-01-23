/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        s1: '#F8931F',
        s2: '#F1B324',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 4px 6px 0px #00000040',
        custom2: '2px 4px 10px 0px #00000040',
        input: '5px 4px 10px 0px #00000040',
        textarea: '6px 8px 10px 8px #00000040',
        brand: '0px 4px 4px 0px #00000040',
      },
      spacing: {
        440: '440px',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        lg: '80px',
      },
    },
  },
  plugins: [],
};
