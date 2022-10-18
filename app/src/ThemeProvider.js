import React, { createContext, useState, useCallback } from 'react'
import { createTheme as createMuiTheme } from '@mui/material/styles'
import MuiThemeProvider from '@mui/material/styles/ThemeProvider'
import orange from '@mui/material/colors/orange'
import purple from '@mui/material/colors/purple'

function createTheme (light) {
  const theme = {
    palette: {
      mode: light ? 'light' : 'dark',
      primary: orange,
      secondary: purple
    }
  }

  return createMuiTheme(theme)
}

export const ThemeContext = createContext({})

function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(createTheme(true))

  const setThemeType = useCallback(
    type => {
      setTheme(createTheme(type === 'light'))
    },
    [setTheme]
  )

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, setThemeType }}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  )
}

export default ThemeProvider
