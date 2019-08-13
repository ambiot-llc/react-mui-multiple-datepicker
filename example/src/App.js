import React from 'react'
import ThemeProvider from './ThemeProvider'
import Demo from './Demo'

function App () {
  return (
    <ThemeProvider>
      <Demo />
    </ThemeProvider>
  )
}

export default App
