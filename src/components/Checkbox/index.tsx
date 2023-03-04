import { CheckboxContainer } from './styles'
import { v4 } from 'uuid'

interface CheckboxProps {
  value: string
  text: string
}

export function Checkbox({ value, text }: CheckboxProps) {
  const checkboxId = `${value}_${v4()}`
  return (
    <CheckboxContainer>
      <input id={checkboxId} type={'checkbox'} />
      <label htmlFor={checkboxId}>{text}</label>
    </CheckboxContainer>
  )
}
