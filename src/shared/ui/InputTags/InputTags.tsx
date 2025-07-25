import { useRef, useState } from 'react'

import { classNames } from '@shared/helpers/classNames'
import { Text } from '@shared/ui/Text/Text'
import Close from '@shared/ui/icons/Close'

import cls from './InputTags.module.scss'

interface InputTagsProps {
  label?: string
  value: string[]
  onChange: (v: string[]) => void
  className?: string
  errorText?: string
  limit?: number
  tagLimit?: number
  onlyRemove?: boolean
  required?: boolean
  disabled?: boolean
}

export const InputTags = (props: InputTagsProps) => {
  const {
    label,
    value,
    onChange,
    className,
    errorText,
    limit,
    tagLimit,
    onlyRemove = false,
    required = false,
    disabled = false,
  } = props

  const [inputValue, setInputValue] = useState<string>('')
  const ref = useRef<HTMLInputElement>(null)

  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return

    if (!onlyRemove && e.code === 'Enter' && inputValue.trim()) {
      onChange([...value, inputValue.trim()])
      setInputValue('')
    }
  }

  const removeTag = (index: number) => {
    if (disabled) return

    value.splice(index, 1)
    onChange([...value])
  }

  return (
    <div
      className={classNames(cls.InputTags, { [cls.error]: !!errorText?.trim() }, [className])}
      onClick={() => ref.current?.focus()}
    >
      <div className={cls.top}>
        {label && (
          <label className={cls.label}>
            {label}
            {required ? ' *' : ''}
          </label>
        )}
        {limit && (
          <label className={cls.limit}>
            {value.length}/{limit}
          </label>
        )}
      </div>
      <div className={cls.inputWrapper}>
        {value.map((item: string, index: number) => (
          <span key={index} className={cls.tagItem}>
            {item}
            <button onClick={() => removeTag(index)} disabled={disabled}>
              <Close />
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            if (disabled) return
            if (limit && value.length >= limit) return
            if (tagLimit && e.target.value.length > tagLimit) return
            setInputValue(e.target.value)
          }}
          onKeyDown={pressEnter}
          className={cls.input}
          ref={ref}
          disabled={onlyRemove}
        />
      </div>

      {errorText && (
        <Text className={cls.errorText} variant="error">
          {errorText}
        </Text>
      )}
    </div>
  )
}
