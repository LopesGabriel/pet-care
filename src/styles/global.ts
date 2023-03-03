import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 body {
  background-color: ${(props) => `${props.theme['black-600']};`};
 }

 :focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['black-400']};
 }

 body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }

 h1, h2, h3, h4 {
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  font-size: 1.25;
 }
`
