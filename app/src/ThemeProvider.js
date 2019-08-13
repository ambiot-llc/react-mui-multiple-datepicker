import React, { createContext, useState } from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import { merge } from 'lodash'

function hex (c) {
  var s = '0123456789abcdef'
  var i = parseInt(c)
  if (i === 0 || isNaN(c)) return '00'
  i = Math.round(Math.min(Math.max(0, i), 255))
  return s.charAt((i - (i % 16)) / 16) + s.charAt(i % 16)
}

/* Convert an RGB triplet to a hex string */
function convertToHex (rgb) {
  return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2])
}

/* Remove '#' in color hex string */
function trim (s) {
  return s.charAt(0) === '#' ? s.substring(1, 7) : s
}

/* Convert a hex string to an RGB triplet */
function convertToRGB (hex) {
  var color = []
  color[0] = parseInt(trim(hex).substring(0, 2), 16)
  color[1] = parseInt(trim(hex).substring(2, 4), 16)
  color[2] = parseInt(trim(hex).substring(4, 6), 16)
  return color
}

function generateColor (colorStart, colorEnd, colorCount) {
  // The beginning of your gradient
  var start = convertToRGB(colorStart)

  // The end of your gradient
  var end = convertToRGB(colorEnd)

  // The number of colors to compute
  var len = colorCount - 1

  // Alpha blending amount
  var alpha = 0.0

  var saida = []

  saida.push(trim(colorEnd))

  for (let i = 0; i < len; i++) {
    var c = []
    alpha += 1.0 / len

    c[0] = start[0] * alpha + (1 - alpha) * end[0]
    c[1] = start[1] * alpha + (1 - alpha) * end[1]
    c[2] = start[2] * alpha + (1 - alpha) * end[2]

    saida.push(convertToHex(c))
  }

  // saida.reverse()

  return saida
}

export function defaultOverrides () {
  return {
    palette: {
      destructive: {
        main: '#E73E16'
      }
    },
    typography: {
      fontFamily: '"Montserrat", sans-serif',
      fontSize: 12,
      htmlFontSize: 10,
      button: {
        fontFamily: '"Montserrat", sans-serif',
        fontWeight: 600
      },
      h4: {
        fontWeight: 600
      },
      h5: {
        fontWeight: 600
      },
      h6: {
        fontWeight: 600
      },
      subtitle1: {
        fontWeight: 500
      },
      subtitle2: {
        fontWeight: 600
      }
    },
    overrides: {
      MuiButton: {
        root: {
          textTransform: 'none'
        }
      },
      MuiTab: {
        root: {
          textTransform: 'none',
          fontSize: '1.2rem !important'
        }
      },
      MuiIcon: {
        root: {
          fontSize: '2.4rem'
        }
      },
      MuiSvgIcon: {
        root: {
          fontSize: '2.4rem'
        }
      },
      MuiSelect: {
        icon: {
          fontSize: '2rem'
        }
      },
      MuiSnackbarContent: {
        message: {
          fontSize: '1.2rem'
        }
      }
    }
  }
}

function createTheme (light) {
  // const theme = createMuiTheme({
  // palette: {
  //   type: dark ? 'dark' : 'light',
  //   primary: {
  //     light: '#fac14c',
  //     main: '#fabb3b',
  //     dark: '#e4aa36',
  //     contrastText: '#fff'
  //   },
  //   secondary: {
  //     main: '#76C7D1'
  //   }
  // },
  // typography: {
  //   useNextVariants: true,
  //   fontFamily: '"Montserrat", sans-serif',
  //   button: {
  //     fontFamily: '"Montserrat", sans-serif'
  //   },
  //   h4: {
  //     fontWeight: 600
  //   },
  //   h6: {
  //     fontWeight: 600
  //   },
  //   subtitle1: {
  //     fontWeight: 500
  //   },
  //   subtitle2: {
  //     fontWeight: 500
  //   }
  // },
  // overrides: {
  //   'MuiFab': {
  //     root: {
  //       boxShadow: '0px 3px 5px -1px rgba(248,188,58,0.2),0px 6px 10px 0px rgba(248,188,58,0.14),0px 1px 18px 0px rgba(248,188,58,0.12)'
  //     }
  //   },
  //   'MuiButton': {
  //     root: {
  //       textTransform: 'none'
  //     },
  //     containedPrimary: {
  //       boxShadow: '0px 1px 5px 0px rgba(248,188,58,0.2),0px 2px 2px 0px rgba(248,188,58,0.14),0px 3px 1px -2px rgba(248,188,58,0.12)',
  //       '&:active': {
  //         boxShadow: `0px 5px 5px -3px rgba(248,188,58,0.2),0px 8px 10px 1px rgba(248,188,58,0.14),0px 3px 14px 2px rgba(248,188,58,0.12)`
  //       },
  //       '&$focusVisible': {
  //         boxShadow: '0px 3px 5px -1px rgba(248,188,58,0.2),0px 6px 10px 0px rgba(248,188,58,0.14),0px 1px 18px 0px rgba(248,188,58,0.12)'
  //       }
  //     }
  //   },
  //   'MuiTab': {
  //     root: {
  //       textTransform: 'none'
  //     },
  //     label: {
  //       fontSize: '0.875rem'
  //     }
  //   }
  // }
  // })

  const theme = createMuiTheme(
    merge(defaultOverrides(), {
      palette: {
        type: light ? 'light' : 'dark',
        primary: {
          light: '#fac14c',
          main: '#fabb3b',
          dark: '#e4aa36',
          contrastText: '#fff'
        },
        secondary: {
          main: '#76C7D1'
        }
      },
      overrides: {
        MuiFab: {
          root: {
            boxShadow:
              '0px 3px 5px -1px rgba(248,188,58,0.2),0px 6px 10px 0px rgba(248,188,58,0.14),0px 1px 18px 0px rgba(248,188,58,0.12)'
          }
        },
        MuiButton: {
          containedPrimary: {
            boxShadow:
              '0px 1px 5px 0px rgba(248,188,58,0.2),0px 2px 2px 0px rgba(248,188,58,0.14),0px 3px 1px -2px rgba(248,188,58,0.12)',
            '&:active': {
              boxShadow: `0px 5px 5px -3px rgba(248,188,58,0.2),0px 8px 10px 1px rgba(248,188,58,0.14),0px 3px 14px 2px rgba(248,188,58,0.12)`
            },
            '&$focusVisible': {
              boxShadow:
                '0px 3px 5px -1px rgba(248,188,58,0.2),0px 6px 10px 0px rgba(248,188,58,0.14),0px 1px 18px 0px rgba(248,188,58,0.12)'
            }
          }
        }
      }
    })
  )

  theme.palette.status = {
    online: theme.palette.primary.main,
    offline: '#707070',
    error: '#E73E16',
    grouped: '#6EEB56',
    ungrouped: theme.palette.primary.main
  }

  if (light) {
    theme.palette.background.default = '#f4f4f4'
  }

  // theme.palette.dimmingLevels = transform(
  //   [0, 20, 40, 60, 80],
  //   (levels, value, index, arr) => {
  //     levels.push({
  //       step: value,
  //       color: lighten(theme.palette.primary.main, (arr.length - index) * 0.2 - 0.2)
  //     })
  //   },
  //   []
  // )

  const colors = generateColor(theme.palette.status.online, theme.palette.status.offline, 5)
  const levels = []
  let step = 0

  for (const color of colors) {
    levels.push({
      step,
      color: `#${color}`
    })

    step = step + 25
  }

  theme.palette.dimmingLevels = levels

  return theme
}

export const ThemeContext = createContext({})

// export const withTheme = Element => {
//   return forwardRef((props, ref) => {
//     return (
//       <ThemeContext.Consumer>
//         {context => <Element theme={context} {...props} ref={ref} />}
//       </ThemeContext.Consumer>
//     )
//   })
// }

function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(createTheme(false))

  console.log('theme', theme)

  function setThemeType (type) {
    setTheme(createTheme(type === 'light'))
  }

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, setThemeType }}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
