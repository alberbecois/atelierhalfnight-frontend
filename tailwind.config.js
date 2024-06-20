/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'cardStroke': '#9B8669',
      },
      backgroundImage: {
        'starTexture': "url('/images/StarTexture.jpg')",
        'cardBackground': "url('/images/CardBackground.svg')"
      }
    },
    fontFamily: {
      'crimson': ['Crimson Text, serif'],
      'poppins': ['Poppins, sans-serif']
    }
  },
  plugins: [],
}

