import React, { type ChangeEvent, memo, useRef, useState } from 'react'

import { classNames } from '@shared/helpers/classNames'
import { Text } from '@shared/ui/Text/Text'
import CloseEye from '@shared/ui/icons/CloseEye'
import OpenEye from '@shared/ui/icons/OpenEye'

import cls from './InputPassword.module.scss'

type Props = {
  label?: string
  value: string
  canView?: boolean
  disabled?: boolean
  required?: boolean
  className?: string
  errorText?: string
  onChange: (value: string, event?: ChangeEvent<HTMLInputElement>) => void
}

export const InputPassword: React.FC<Props> = memo(
  (props) => {
    const {
      label,
      onChange,
      disabled,
      className,
      value = '',
      canView = true,
      errorText,
      required = false,
    } = props

    const [display, setDisplay] = useState(false)
    const ref = useRef<HTMLInputElement>(null)

    return (
      <div
        className={classNames(
          cls.inputWrapper,
          { [cls.error]: errorText && errorText?.length > 0 },
          [className]
        )}
        onClick={() => ref.current?.focus()}
      >
        <div>
          {label && (
            <label className={cls.label}>
              {label}
              {required ? ' *' : ''}
            </label>
          )}
          <div className={cls.inputWrapper}>
            <input
              className={classNames(cls.Input)}
              ref={ref}
              value={value}
              onChange={(e) => {
                e.preventDefault()
                onChange(e.target.value, e)
              }}
              type={display ? 'text' : 'password'}
              disabled={disabled}
            />
            {canView && (
              <div className={cls.eye} onClick={() => setDisplay((d) => !d)}>
                {display ? <CloseEye /> : <OpenEye />}
              </div>
            )}
          </div>
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
