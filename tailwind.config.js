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
      },
      gradientColorStops: {
        'gradient-yellow': '#FCB045',
        'gradient-purple': '#833AB4',
        'gradient-red': '#FD1D1D'
      },

      colors: {
        gradient: 'linear-gradient(180deg, rgba(252,176,69,1) 0%, rgba(253,29,29,1) 50%, rgba(131,58,180,1) 100%)'
      }
    },
  },
  plugins: [],
}

