/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1400px',
        bigScreen: '2000px',
      },
      colors: {
        background: "#DFF7FF",
        text: "#003F54",
        blue: "#00C0FF",
      },
      fontSize: {
        content: "0.90rem",
        textHeader: "1.5rem",
        header: "2rem",
      }
    },
  },
  plugins: [],
}

