/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: "#6A4CFF",
          orange: "#FF7A00",
          dark: "#0B0B0F"
        }
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        display: ["SanghaKali", "serif"]
      },
      backgroundImage: {
        'starfield': "radial-gradient(1200px 600px at 20% 30%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(800px 400px at 80% 70%, rgba(255,122,0,0.07), transparent 60%)"
      }
    },
  },
  plugins: [],
}
