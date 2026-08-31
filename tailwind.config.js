/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'industrial-green': '#1B5E3A',
        'steel-blue': '#2C4A5E',
        'accent-amber': '#E8A33D',
        'neutral-light': '#F7F8F5',
        'neutral-dark': '#1A1A1A',

        'primary': '#1B5E3A',
        'primary-light': '#2E7D52',
        'primary-dark': '#13452A',
        'accent': '#E8A33D',
        'accent-light': '#F0B95B',
        'accent-dark': '#C98B2E',
        'warm': '#6B4226',
        'warm-light': '#8B5A2B',
        'warm-dark': '#4E2F18',
        'neutral-cream': '#F5F0E6',
        'neutral-mid': '#6B6B6B',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 600ms ease-out forwards',
        'float': 'float 6s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
}
