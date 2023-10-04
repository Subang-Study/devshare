/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: {
      1: '1px',
      2: '2px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('./twPlugins/shadowBorder.js'),
    require('./twPlugins/scrollbar.js'),
  ],
}
