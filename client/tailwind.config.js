/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        forest: {
          50: '#F3F8F5',
          100: '#E3EFE9',
          200: '#C7DFD3',
          300: '#9FBEAF',
          400: '#709986',
          500: '#4B7764',
          600: '#395E4F',
          700: '#2E4C40',
          800: '#1E352C',
          900: '#14251F',
          950: '#0B1713',
        },
        champagne: {
          50: '#FAF7F2',
          100: '#F4EFE5',
          200: '#E8DEC9',
          300: '#D8C6A5',
          400: '#C4AB80',
          500: '#B2925F',
          600: '#9B794B',
          700: '#7D5F3A',
          800: '#664E32',
          900: '#54402B',
          950: '#2F2316',
        },
        ivory: {
          DEFAULT: '#FAF8F5',
          warm: '#F6F2EB',
          subtle: '#EFE9DF',
          border: '#E5DDD0',
        },
        charcoal: {
          DEFAULT: '#171B19',
          light: '#2D3230',
          muted: '#525855',
          dark: '#0E1110',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Cinzel"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'luxury-sm': '0 2px 8px -2px rgba(11, 23, 19, 0.04), 0 0 1px 1px rgba(196, 171, 128, 0.15)',
        'luxury': '0 10px 30px -10px rgba(11, 23, 19, 0.08), 0 0 1px 1px rgba(196, 171, 128, 0.20)',
        'luxury-hover': '0 20px 40px -12px rgba(11, 23, 19, 0.16), 0 0 2px 1px rgba(196, 171, 128, 0.35)',
        'luxury-elevated': '0 30px 60px -15px rgba(11, 23, 19, 0.25), 0 0 2px 1px rgba(196, 171, 128, 0.45)',
      },
      spacing: {
        'section-sm': '3.5rem',
        'section-md': '5rem',
        'section-lg': '7rem',
        'section-xl': '9rem',
      },
      letterSpacing: {
        'widest-luxury': '0.2em',
        'grand': '0.25em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
