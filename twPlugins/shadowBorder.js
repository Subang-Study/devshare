const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      'shadow-border': (value) => ({
        'box-shadow': `inset 0 0 0 ${value}`,
      }),
    },
    {
      type: 'line-width',
      values: theme('borderWidth'),
    },
  )
})
