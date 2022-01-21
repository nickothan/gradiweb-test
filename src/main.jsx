import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

//* Import styles
import { theme } from "./config/theme"
import { GlobalStyles } from "./config/globalStyles"
import { ThemeProvider } from "styled-components"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
