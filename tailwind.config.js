/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0A5D44',
          DEFAULT: '#073829',
          dark: '#052617'
        },
        secondary: {
          light: '#1EE88F',
          DEFAULT: '#15D07A',
          dark: '#11B366'
        },
        accent: {
          light: '#B8BBFE',
          DEFAULT: '#A2A6FE',
          dark: '#8C91FE'
        },
        background: {
          light: '#FFFFFF',
          DEFAULT: '#F8FAFC',
          dark: '#F1F5F9'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #073829 0%, #0A5D44 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #15D07A 0%, #1EE88F 100%)',
        'gradient-accent': 'linear-gradient(135deg, #A2A6FE 0%, #B8BBFE 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
        'gradient-light': 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)',
        'hero-pattern': 'linear-gradient(135deg, rgba(7, 56, 41, 0.95) 0%, rgba(10, 93, 68, 0.95) 100%)',
        'footer-pattern': 'linear-gradient(135deg, #052617 0%, #073829 100%)'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};