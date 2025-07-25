import { type CSSProperties, type FC, type ReactNode } from 'react'

import { classNames } from '@shared/helpers/classNames'

import cls from './Skeleton.module.scss'

interface ISkeleton {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
  children?: ReactNode
}

export const Skeleton: FC<ISkeleton> = (props) => {
  const { border, height, width, className, children } = props

  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }
  return (
    <div className={classNames(cls.Skeleton, {}, [className])} style={style}>
      {children}
    </div>
  )
}
