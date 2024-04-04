import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import { StepContext } from './StepContext.jsx'

const defaultTheme = createTheme();


ReactDOM.createRoot(document.getElementById('root')).render(



  <React.StrictMode>
    <StepContext>
      <ThemeProvider theme={defaultTheme}>
          <App />
      </ThemeProvider>
    </StepContext>
    </React.StrictMode>
)
