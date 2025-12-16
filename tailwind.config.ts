import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // <--- Scans app folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // <--- Scans components
  ],
  theme: {
    extend: {
      animation: {
        'slow-zoom': 'zoom 20s infinite alternate',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'marquee': 'marquee 10s linear infinite',
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
    },
  },
  plugins: [],
};

export default config;