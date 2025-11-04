/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#64748b',
        accent: '#f59e0b'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px'
        }
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite'
      },
      spacing: {
        3.5: '0.875rem',  // 14px
        3: '0.75rem',     // 12px
      },
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
