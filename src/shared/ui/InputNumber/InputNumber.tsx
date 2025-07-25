import React, { type ChangeEvent, memo, useRef } from 'react'

import { classNames } from '@shared/helpers/classNames'
import { Text } from '@shared/ui/Text/Text'

import cls from './InputNumber.module.scss'

type Props = {
  label?: string
  placeholder?: string
  value: number | null | undefined
  disabled?: boolean
  required?: boolean
  className?: string
  errorText?: string
  onChange?: (value: number) => void
  disableNegative?: boolean
  options?: { min?: number; max?: number }
  displayZero?: boolean
  onlyInteger?: boolean
}

export const InputNumber: React.FC<Props> = memo(
  (props) => {
    const {
      label,
      onChange,
      disabled,
      className,
      value = '',
      errorText,
      disableNegative = true,
      placeholder,
      options,
      displayZero = false,
      onlyInteger = false,
      required = false,
    } = props

    const ref = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const result = parseFloat(e.target.value)

      if (options?.min && result < options.min) return
      if (options?.max && result > options.max) return
      if (disableNegative && result < 0) return
      if (onlyInteger) return onChange?.(Math.round(result || 0))

      onChange?.(result || 0)
    }

    const onWheelHandler = (e: React.WheelEvent<HTMLInputElement>) => {
      if (document.activeElement === ref.current) {
        e.preventDefault()
        ref.current?.blur()
      }
    }

    return (
      <div
        className={classNames(cls.wrapper, { [cls.error]: errorText && errorText.length > 0 }, [
          className,
        ])}
        onClick={() => ref.current?.focus()}
      >
        {label && (
          <label className={cls.label}>
            {label} {required ? ' *' : ''}
          </label>
        )}
        <input
          type="number"
          value={displayZero ? value?.toString() : value?.toString().replace(/^0+/, '')}
          placeholder={placeholder}
          onChange={onChangeHandler}
          onWheel={onWheelHandler}
          disabled={disabled}
          className={cls.input}
          ref={ref}
        />
        {errorText && (
          <Text className={cls.errorText} variant="error">
            {errorText}
          </Text>
        )}
      </div>
    )
  },
  (prev, next) =>
    prev.value === next.value &&
    prev.errorText === next.errorText &&
    prev.onChange === next.onChange
)
