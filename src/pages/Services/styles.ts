import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: flex-start;
  gap: 2rem;

  > div {
    flex: 1;
  }

  div.form-wrapper {
    max-width: 350px;

    form {
      background-color: ${(props) => props.theme['black-500']};
      border-radius: 4px;
      padding: 0.8rem;

      div.input-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 0;
      }
    }
  }
`

export const Row = styled.div<{ gap?: '0.5rem' | '1.5rem' }>`
  display: flex;
  width: 100%;
  gap: ${(props) => (props.gap ? props.gap : '1rem')};
  flex-wrap: wrap;
`

export const TextInput = styled.input`
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme['black-400']};
  width: 100%;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) => props.theme['black-400']};
    opacity: 0.8;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) => props.theme['black-400']};
  }
  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) => props.theme['black-400']};
  }
`
