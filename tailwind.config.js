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
        'Dark-grayish-violet': '#8e8593',
        'Light-grayish-violet': '#dedddf',
        'Red-input-errors': '#ff5252',
        'Purplish-grey-continue': '#8F8694'
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

// White: hsl(0, 0%, 100%)
// - Light grayish violet: hsl(270, 3%, 87%)
// - Dark grayish violet: hsl(279, 6%, 55%)
// - Very dark violet: hsl(278, 68%, 11%)