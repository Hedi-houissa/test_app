/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extends: ["next", "next/core-web-vitals"],
    rules: {
      "@next/next/no-img-element": "off"
    }
  
  },
  plugins: [],
}
