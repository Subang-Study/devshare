const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions((options) => {
  return ({ addUtilities, addVariant, e }) => {
    addVariant('scrollbar', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`scrollbar${separator}${className}`)}::-webkit-scrollbar`
      })
    })

    addVariant('scrollbar-thumb', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`scrollbar-thumb${separator}${className}`)}::-webkit-scrollbar-thumb`
      })
    })

    addVariant('scrollbar-track', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(`scrollbar-track${separator}${className}`)}::-webkit-scrollbar-track`
      })
    })

    addUtilities(
      ['auto', 'inherit', 'initial', 'none', 'revert', 'thin', 'unset'].map((value) => {
        return {
          [`.${e(`scrollbar-width-${value}`)}`]: {
            'scrollbar-width': value,
          },
        }
      }),
    )

    addUtilities({
      '.overflow-overlay': {
        'overflow-x': 'overlay',
        'overflow-y': 'overlay',
      },
      '.overflow-x-overlay': {
        'overflow-x': 'overlay',
      },
      '.overflow-y-overlay': {
        'overflow-y': 'overlay',
      },
    })

    addUtilities({
      '.scrollbar-rounded': {
        '&::-webkit-scrollbar': {
          height: options?.scrollbar?.height ?? '8px',
          width: options?.scrollbar?.height ?? '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          'border-radius': '9999px',
        },
        '&::-webkit-scrollbar-track': {
          'background-color': 'transparents',
        },
      },
    })
  }
})
