import React from 'react'
import { render } from 'react-dom'
import GlobalStyle from './themes/GlobalStyle.js'
import Theme from './themes/Theme.js'
import { ThemeProvider } from 'styled-components'
import App from './App'

render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle/>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)