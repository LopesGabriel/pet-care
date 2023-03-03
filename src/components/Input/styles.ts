import styled from 'styled-components'

export type TextInputVariant = 'primary' | 'secondary'

interface TextInputContainerProps {
  variant: TextInputVariant
}

export const TextInputContainer = styled.input<TextInputContainerProps>`
  background-color: ${(props) =>
    props.variant === 'primary'
      ? props.theme.yellow
      : props.theme['black-400']};

  color: ${(props) =>
    props.variant === 'primary' ? props.theme['black-400'] : props.theme.white};

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${(props) =>
      props.variant === 'primary'
        ? props.theme['black-400']
        : props.theme.white};
    opacity: 0.7;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${(props) =>
      props.variant === 'primary'
        ? props.theme['black-400']
        : props.theme.white};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${(props) =>
      props.variant === 'primary'
        ? props.theme['black-400']
        : props.theme.white};
  }
`
