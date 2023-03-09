import { CheckboxContainer } from './styles'
import { v4 } from 'uuid'
import { ChangeEventHandler } from 'react'

interface CheckboxProps {
  value: any
  text: string
  onChange: (data: { value: any; checked: boolean }) => void
}

export function Checkbox({ value, text, onChange }: CheckboxProps) {
  const checkboxId = `${value}_${v4()}`

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { checked } = event.target
    return onChange({ value, checked })
  }

  return (
    <CheckboxContainer>
      <input id={checkboxId} type={'checkbox'} onChange={handleInputChange} />
      <label htmlFor={checkboxId}>{text}</label>
    </CheckboxContainer>
  )
}
