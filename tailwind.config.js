/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'cream': '#f8f1e2',
      'blue': '#000068',
    },
    extend: {
      fontFamily: {
        'garamond' : ['garamond-premier-pro', 'serif'],
      },
    },
  },
  plugins: [],
}
