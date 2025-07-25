import React, { type CSSProperties, type MouseEvent, type ReactNode } from 'react'

import { classNames } from '@shared/helpers/classNames'
import type IconComponent from '@shared/ui/icons/IconComponent'

import cls from './Button.module.scss'

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'icon'

type Props = {
  onClick: (e: MouseEvent) => void
  className?: string
  variant?: ButtonVariants
  type?: 'button' | 'submit'
  disabled?: boolean
  Icon?: typeof IconComponent | null
  title?: string
  children: ReactNode
  style?: CSSProperties
}

const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  disabled = false,
  type = 'button',
  variant = 'primary',
  Icon,
  title,
  style,
}) => {
  return (
    <button
      title={title}
      className={classNames(cls.Button, { [cls[variant]]: true }, [className])}
      disabled={disabled}
      type={type}
      onClick={onClick}
      style={style}
    >
      {Icon && <Icon />}
      {children}
    </button>
  )
}

export default Button
