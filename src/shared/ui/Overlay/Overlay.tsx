import { type CSSProperties, type FC, type ReactNode } from 'react'

import { classNames } from '@shared/helpers/classNames'

import cls from './Overlay.module.scss'

interface OverlayProps {
  className?: string
  children?: ReactNode
  onClick?: () => void
  style?: CSSProperties
}

export const Overlay: FC<OverlayProps> = ({ className, children, onClick, style }) => {
  return (
    <div onClick={onClick} className={classNames(cls.Overlay, {}, [className])} style={style}>
      {children}
    </div>
  )
}
