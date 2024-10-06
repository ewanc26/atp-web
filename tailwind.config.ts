import type {Config} from 'tailwindcss'

export default {
  content: ['./src/app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: '1.5rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '850px',
      },
    },
    borderWidth: {
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    colors: {
      0: '#fff',
      50: '#f3fbf6',  // light green
      100: '#e3f6eb', // very light green
      200: '#ceeddf', // light green-blue
      300: '#acd7c7', // soft green
      400: '#84c6ab', // minty green
      500: '#66b48e', // balanced green
      600: '#53987b', // deeper green
      700: '#487f68', // dark green
      800: '#446f59', // forest green
      900: '#375947', // dark olive
      950: '#253e30', // very dark green
      gray: '#252525',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config
