import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@mui/material"

import { App } from './App'

import './index.css'
import defaultTheme from './components/theme/defaultTheme'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
