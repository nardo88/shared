import React, { type ReactNode } from 'react'

import { classNames } from '@shared/helpers/classNames'

import cls from './IconComponent.module.scss'

export type IconComponentProps = {
  children?: ReactNode
  id?: string
  viewBox?: string
  fill?: string
  stroke?: string
  className?: string
  style?: React.CSSProperties
  onClick?: (e: React.MouseEvent) => void
  onPointerDown?: (e: React.MouseEvent) => void
  pathColor?: string
  size?: number
}

export type IconProps = IconComponentProps

const IconComponent: React.FC<IconComponentProps> = ({
  className,
  children,
  onClick,
  style,
  fill = 'currentColor',
  viewBox = '0 0 24 24',
  size = 24,
}): React.ReactNode => {
  return (
    <svg
      onClick={onClick}
      viewBox={viewBox}
      fill={fill}
      style={style}
      width={size}
      height={size}
      className={classNames(cls.IconComponent, {}, [className])}
    >
      {children}
    </svg>
  )
}

export default IconComponent
