import { TextInputContainer, TextInputVariant } from './styles'

interface TextInputProps {
  variant?: TextInputVariant
}

export function TextInput({ variant = 'primary', ...args }: TextInputProps) {
  return <TextInputContainer {...args} variant={variant} />
}
