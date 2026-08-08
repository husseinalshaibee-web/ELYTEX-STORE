/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#050505",
        cardBg: "#0f0f0f",
        elytexOrange: "#FF4B2B",
        elytexRed: "#FF416C",
        premiumWhite: "#F5F5F5"
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"]
      }
    }
  },
  plugins: []
}