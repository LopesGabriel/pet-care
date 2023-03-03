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
`
