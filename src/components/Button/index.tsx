import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  text: string
  variant?: ButtonVariant
  onClick: () => void
  disabled: boolean
  disabledText?: string
}

export function Button({
  text,
  variant = 'primary',
  onClick,
  disabled,
  disabledText,
}: ButtonProps) {
  return (
    <ButtonContainer
      disabled={disabled}
      variant={variant}
      onClick={onClick}
      title={disabled && disabledText ? disabledText : ''}
    >
      {text}
    </ButtonContainer>
  )
}
