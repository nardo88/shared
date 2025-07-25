import { type FC } from 'react'

import { classNames } from '@shared/helpers/classNames'
import { Text } from '@shared/ui/Text/Text'

import cls from './InputRange.module.scss'

export interface InputRangeValue {
  from: number | null
  to: number | null
}

interface InputRangeProps {
  className?: string
  value: InputRangeValue
  onChange: (value: InputRangeValue) => void
  label?: string
  disabled?: boolean
  errorText?: string | null
  disableNegative?: boolean
  canDisplayZero?: boolean
  required?: boolean
}

export const InputRange: FC<InputRangeProps> = (props) => {
  const {
    className,
    onChange,
    value,
    disabled,
    errorText,
    label,
    disableNegative,
    canDisplayZero = false,
    required = false,
  } = props

  const changeHandler = (val: number, field: 'from' | 'to') => {
    onChange({ ...value, [field]: val })
  }
  return (
    <div className={classNames(cls.InputRange, {}, [className])}>
      {label && (
        <label className={classNames(cls.label, { [cls.error]: !!errorText })}>
          {label}
          {required ? ' *' : ''}
        </label>
      )}
      <div className={classNames(cls.wrapper, { [cls.error]: !!errorText })}>
        <label className={cls.inputWrapper}>
          <span>от:</span>
          <input
            type="number"
            disabled={disabled}
            value={
              canDisplayZero
                ? value?.from?.toString() || ''
                : value?.from?.toString().replace(/^0+/, '') || ''
            }
            onChange={(e) => {
              const result = parseFloat(e.target.value)
              if (disableNegative && result < 0) return
              changeHandler(result, 'from')
            }}
          />
        </label>
        <label className={cls.inputWrapper}>
          <span>до:</span>
          <input
            type="number"
            disabled={disabled}
            value={
              canDisplayZero
                ? value?.to?.toString() || ''
                : value?.to?.toString().replace(/^0+/, '') || ''
            }
            onChange={(e) => {
              const result = parseFloat(e.target.value)
              if (disableNegative && result < 0) return
              changeHandler(result, 'to')
            }}
          />
        </label>
      </div>
      {errorText && (
        <Text className={cls.errorText} variant="error">
          {errorText || ''}
        </Text>
      )}
    </div>
  )
}
