/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // синий (можно поменять под бренд)
        secondary: '#64748b', // серо-голубой
        accent: '#f59e0b' // янтарный
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
      }
    }
  },
  plugins: []
}
