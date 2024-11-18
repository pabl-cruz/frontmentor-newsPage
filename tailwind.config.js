/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts.tsx}",
  ],
  theme: {
    container:{
      center: true,
    },
    colors:{
      'offwhite': 'hsl(36, 100%, 99%)',
      'orange-200': 'hsl(35, 77%, 62%)',
      'red-200': 'hsl(5, 85%, 63%)',
      'greyblue-200': 'hsl(233, 8%, 79%)',
      'greyblue-400': 'hsl(236, 13%, 42%)',
      'darkblue-500': 'hsl(240, 100%, 5%)',
    },    
    fontFamily:{
      sans: ['Inter Variable', 'sans-serif'],
    },
    letterSpacing:{
      widest: '0.3rem'
    },
    extend: {
      container:{
        screens:{
          'md': '1200px',
        }
      }
    },
  },
  plugins: [],
}

