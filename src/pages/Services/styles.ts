import styled from 'styled-components'

export const FormContainer = styled.form`
  background-color: ${(props) => props.theme['black-500']};
  border-radius: 4px;
  padding: 0.8rem;

  div.input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }
`

export const Row = styled.div<{ gap?: '0.5rem' | '1.5rem' }>`
  display: flex;
  width: 100%;
  gap: ${(props) => (props.gap ? props.gap : '1rem')};
  flex-wrap: wrap;

  input {
    width: none !important;
    flex: 1;
  }
`

export const TextInput = styled.input`
  background-color: ${(props) => props.theme.yellow};
  border: 2px solid transparent;
  color: ${(props) => props.theme['black-400']};
  width: 100%;

  &:focus {
    border: 2px solid ${(props) => props.theme['black-600']};
  }

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

export const TextArea = styled.textarea`
  background-color: ${(props) => props.theme.yellow};
  border: 2px solid transparent;
  border-radius: 4px;
  color: ${(props) => props.theme['black-400']};
  height: 150px;
  padding: 0.4rem;
  resize: none;
  width: 100%;

  &:focus {
    border: 2px solid ${(props) => props.theme['black-600']};
  }

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
