import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h2 style={{ textAlign: 'end', color: defaultTheme.white }}>Botões</h2>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
        <Button text="Entrar" />
        <Button text="Entrar" variant="secondary" />
      </div>

      <h2
        style={{
          textAlign: 'end',
          color: defaultTheme.white,
          marginTop: '1rem',
        }}
      >
        Inputs
      </h2>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}
      ></div>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
