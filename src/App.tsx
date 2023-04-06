import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { AuthContextProvider } from './context/AuthContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AuthContextProvider>
          <Router />
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
