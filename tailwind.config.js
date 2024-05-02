/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Very-dark-violet': '#21092f',
      },
      fontFamily: {
        'grot': ['Space Grotesk Variable', 'sans-serif'],
      },
    },
    screens: {
      'laptop': '1024px',
      'desktop': '1440px',
    },
  },
  plugins: [],
}