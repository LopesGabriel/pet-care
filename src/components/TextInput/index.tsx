/* eslint-disable prettier/prettier */
import { InputHTMLAttributes, useState } from 'react'
import { AutocompleteContainer, TextInputContainer } from './styles'

interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  options?: Record<string, any>[]
  onSelectAutocompleteOption?: (option: any) => void
}

function TextInput({ options, onSelectAutocompleteOption, ...args }: ITextInputProps) {
  const [isAutoCompleteVisible, setAutocompleteVisible] =
    useState(false)

  return (
    <div className="w-100 position-relative">
      <TextInputContainer
        {...args}
        onFocus={options ? () => setAutocompleteVisible(true) : undefined}
        onBlur={options ? () => setTimeout(() => setAutocompleteVisible(false), 100) : undefined}
      />
      {
        options
          ? <AutocompleteContainer
            className={`shadow-sm ${isAutoCompleteVisible ? 'visible' : 'hidden'
              }`}
          >
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => onSelectAutocompleteOption!(option)}
              >
                {option.label}
              </li>
            ))}
          </AutocompleteContainer>
          : null
      }
    </div>
  )
}

export { TextInput }
