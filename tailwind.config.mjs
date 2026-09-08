/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', '"ITC Charter"', 'Charter', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0a1420',
          navy: '#101d2d',
          gold: '#e5a93c',
          'gold-hover': '#cf942b',
        }
      }
    },
  },
  plugins: [],
}