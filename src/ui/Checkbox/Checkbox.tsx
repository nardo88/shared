import { type FC } from 'react'

import { Text, TextVariants } from '../Text/Text'

import cls from './Checkbox.module.scss'
import { classNames } from '../../helpers/classNames'

type IProps = {
  checked: boolean
  label?: string
  disabled?: boolean
  className?: string
  onChange: (checked: boolean) => void
  errorText?: string
}

export const Checkbox: FC<IProps> = ({
  checked,
  label,
  disabled = false,
  onChange,
  className,
  errorText,
}) => {
  return (
    <div className={classNames(cls.container, {}, [className])}>
      <label
        className={classNames(cls.wrapper, {
          [cls.disabled]: disabled,
          [cls.error]: !!errorText,
        })}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className={classNames(cls.value, { [cls.checked]: checked })} />

        {label && <span className={classNames(cls.label)}>{label}</span>}
      </label>
      {errorText && (
        <Text
          className={classNames(cls.errorText, {}, [])}
          variant={TextVariants.ERROR}>
          {errorText}
        </Text>
      )}
    </div>
  )
}
