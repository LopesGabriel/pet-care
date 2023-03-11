import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
 }

 body {
  background-color: ${(props) => `${props.theme['black-600']};`};
  -webkit-font-smoothing: antialiased;
 }

 :focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['black-400']};
 }

 html {
  font-family: 'Roboto', sans-serif;
 }

 body, input, textarea, button {
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme.white};
 }

 h1, h2, h3, h4 {
  font-family: 'Roboto Mono', monospace;
  font-weight: 700;
  font-size: 1.25;
  color: ${(props) => props.theme.white};
 }

 input {
  border-radius: 4px;
  padding: 6px 10px;
  border: none;
  font-weight: 500;
 }
`
