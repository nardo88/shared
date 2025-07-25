import React, { memo, useEffect, useRef, useState } from 'react'

import { classNames } from '@shared/helpers/classNames'
import { Text } from '@shared/ui/Text/Text'
import Close from '@shared/ui/icons/Close'
import CopyIcon from '@shared/ui/icons/CopyIcon'
import SearchIcon from '@shared/ui/icons/SearchIcon'

import cls from './Input.module.scss'

type Props = {
  label?: string
  value: string
  autoFocus?: boolean
  required?: boolean
  disabled?: boolean
  canClear?: boolean
  className?: string
  limit?: number
  errorText?: string | null
  canCopy?: boolean
  placeholder?: string
  iconSearch?: boolean
  onClear?: () => void
  onChange?: (value: string) => void
  onBlur?: () => void
}

export const Input: React.FC<Props> = memo(
  ({
    label,
    onChange,
    onClear,
    onBlur,
    disabled,
    limit,
    required = false,
    canClear = false,
    className,
    autoFocus = false,
    value,
    errorText,
    canCopy = false,
    placeholder = '',
    iconSearch = false,
  }) => {
    const ref = useRef<HTMLInputElement | null>(null)
    const [copy, setCopy] = useState(false)

    const handleBlur = () => {
      if (typeof onBlur === 'function') onBlur()
    }

    const handleClear = () => {
      onChange?.('')
      if (typeof onClear === 'function') onClear()
    }

    const copyText = (text: string) => {
      setCopy(true)
      navigator.clipboard.writeText(text)
      setTimeout(() => setCopy(false), 2000)
    }

    useEffect(() => {
      if (autoFocus) ref.current?.focus()
    }, [])

    return (
      <div
        className={classNames(cls.wrapper, {}, [className])}
        onClick={() => ref.current?.focus()}
      >
        <div
          className={classNames(cls.top, {
            [cls.error]: errorText && errorText?.length > 0,
          })}
        >
          {label && (
            <label className={cls.label}>
              {label}
              {required ? ' *' : ''}
            </label>
          )}
          {limit && (
            <span className={cls.limit}>
              {value.length}/{limit}
            </span>
          )}
        </div>
        <div
          className={classNames(cls.inputWrapper, {
            [cls.error]: errorText && errorText?.length > 0,
          })}
        >
          {iconSearch ? <SearchIcon className={cls.searchIcon} /> : null}
          <input
            className={classNames(cls.input, {
              [cls.haveCross]: canClear,
              [cls.withIcon]: iconSearch,
              [cls.disabled]: disabled,
            })}
            ref={ref}
            value={value}
            onChange={(e) => {
              onChange?.(limit ? e.target.value.slice(0, limit) : e.target.value)
            }}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
          />
          {!!value &&
            (canCopy ? (
              <CopyIcon
                className={classNames(cls.icon, { [cls.copied]: copy })}
                viewBox="0 0 18 18"
                onClick={() => (canCopy ? copyText(value) : null)}
              />
            ) : !disabled && canClear ? (
              <Close size={18} onClick={handleClear} className={cls.icon} />
            ) : null)}
        </div>
        {errorText && (
          <Text className={cls.errorText} variant="error">
            {errorText || ''}
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
