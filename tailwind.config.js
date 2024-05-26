/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        default: ['Josefin Sans', 'sans-serif'],
        title: ['Faster One', 'system-u']
      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        'button-gradient': 'linear-gradient(360deg, var(--tw-gradient-stops))',
      },
      
      backgroundColor: {
        'button-transparent': 'rgba(255,255,255,25%)'
      },

      gradientColorStops: {
        'gradient-yellow': '#FCB045',
        'gradient-purple': '#833AB4',
        'gradient-red': '#FD1D1D'
      },
    },
  },
  plugins: [],
}

