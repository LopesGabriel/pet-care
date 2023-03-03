import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  ${(props) =>
    props.variant === 'primary'
      ? `background-color: ${props.theme.yellow};`
      : `background-color: ${props.theme['black-400']};`}
  ${(props) =>
    props.variant === 'primary'
      ? `color: ${props.theme['black-400']};`
      : `color: ${props.theme.white};`}
  border-radius: 4px;
  padding: 6px 10px;
  border: none;
  font-weight: 500;
  /* font-weight: 600; */
  &:hover {
    box-shadow: 0 2px 1px 1px #00000020;
    cursor: pointer;
  }
`
