/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      minHeight: {
        'screen-without-nav': 'calc(100vh - 4rem)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  performance: {
    maxInlineSize: 0
  },
  safelist: [
    'gap-2',
    'items-center',
    'bg-blue-50',
    'text-blue-600',
    'bg-green-50',
    'text-green-600',
    'bg-yellow-50',
    'text-yellow-600',
    'bg-red-50',
    'text-red-600'
  ]
}
