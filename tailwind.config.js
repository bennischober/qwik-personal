/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      sans: ['Calibre', 'Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Roboto Mono', 'SF Mono', 'Fira Code', 'Fira Mono', 'monospace'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
