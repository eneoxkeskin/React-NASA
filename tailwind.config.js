/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'carbon-black': '#000',
        'spacesuit-white': '#fff',
      },
      zIndex: {
        'top': '99999',
      },
      spacing: {
        '1px': '1px',
      },
      fontFamily: {
        'public-sans': ['Public Sans Web', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
      },
      userSelect: {
        'text': 'text',
        'none': 'none',
      },
    },
  },
  plugins: [],
}
