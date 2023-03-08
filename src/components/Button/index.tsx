import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  text: string
  variant?: ButtonVariant
  onClick: () => void
}

export function Button({ text, variant = 'primary', onClick }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {text}
    </ButtonContainer>
  )
}
