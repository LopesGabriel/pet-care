import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  text: string
  variant?: ButtonVariant
  onClick?: () => void
  disabled: boolean
  disabledText?: string
  isLoading?: boolean
}

export function Button({
  text,
  variant = 'primary',
  onClick,
  disabled,
  disabledText,
  isLoading = false,
}: ButtonProps) {
  return (
    <ButtonContainer
      disabled={disabled}
      variant={variant}
      onClick={onClick}
      title={disabled && disabledText ? disabledText : ''}
    >
      {isLoading ? (
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        text
      )}
    </ButtonContainer>
  )
}
