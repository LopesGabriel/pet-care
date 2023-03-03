import styles from './styles.module.css'
import { v4 } from 'uuid'

interface CheckboxProps {
  value: string
  text: string
}

export function Checkbox({ value, text }: CheckboxProps) {
  const checkboxId = `${value}_${v4()}`
  return (
    <div className={styles['checkbox-wrapper']}>
      <input id={checkboxId} type={'checkbox'} />
      <label htmlFor={checkboxId}>{text}</label>
    </div>
  )
}
