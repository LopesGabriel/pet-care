import styled from 'styled-components'

export const AutocompleteContainer = styled.ul`
  list-style: none;
  position: absolute;
  background-color: ${(props) => props.theme['black-400']};
  border-radius: 4px;
  z-index: 2;
  padding-left: unset;

  &.visible {
    display: block;
    animation: fadeIn 500ms;
  }
  &.hidden {
    display: none;
    animation: fadeOut 500ms;
  }

  li {
    padding: 0.5rem;

    &:first-of-type {
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }
    &:last-of-type {
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    &:hover {
      background-color: ${(props) => props.theme['black-500']};
      cursor: pointer;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const TextInputContainer = styled.input`
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
