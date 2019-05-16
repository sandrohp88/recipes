import './index.css'
import 'typeface-roboto'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import * as serviceWorker from './serviceWorker'
const theme = responsiveFontSizes(createMuiTheme())
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
