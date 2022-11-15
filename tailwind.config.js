/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        green: {
          950: '#52B96F',
          1000: '#278E44'
        },
      },
      padding: {
        '72' : '18rem',
        '80' : '20rem',
      }
    },
    fontFamily: {
      'oxanium': ['Oxanium', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  variants: {},
  plugins: []
}
