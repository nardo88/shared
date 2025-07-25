import { type FC } from 'react'

import { classNames } from '@shared/helpers/classNames'
import useDebounce from '@shared/helpers/useDebounce'
import { Text } from '@shared/ui/Text/Text'

import cls from './InputColor.module.scss'

interface InputColorProps {
  className?: string
  value: string
  onChange: (v: string) => void
  label?: string
  required?: boolean
}

export const InputColor: FC<InputColorProps> = (props) => {
  const { className, value, onChange, label, required = false } = props

  const debounce = useDebounce(onChange, 300)

  return (
    <div className={classNames(cls.inputColor, {}, [className])}>
      {label && (
        <label className={cls.label}>
          {label} {required ? ' *' : ''}
        </label>
      )}
      <div className={cls.colorPickerWrapper}>
        <div className={cls.inputWrapper} style={{ background: value }}>
          <input type="color" className={cls.input} onChange={(e) => debounce(e.target.value)} />
        </div>
        <Text>{value}</Text>
      </div>
    </div>
  )
}
