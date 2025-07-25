import React, { type CSSProperties, type MouseEvent, type ReactNode } from 'react'

import { classNames } from '@shared/helpers/classNames'

import cls from './Text.module.scss'

export type TextVariants =
  | 'error'
  | 'success'
  | 'helper'
  | 'text'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'small'

type Props = {
  className?: string
  variant?: TextVariants
  title?: string
  style?: CSSProperties
  children?: ReactNode
  onClick?: (e: MouseEvent) => void
}

export const Text: React.FC<Props> = ({
  children,
  className,
  variant = 'text',
  title = '',
  style,
  onClick,
}) => {
  return (
    <>
      {variant === 'error' && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.error, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === 'success' && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.success, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === 'helper' && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.helper, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === 'text' && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.text, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}

      {variant === 'h1' && (
        <h1
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.h1, {}, [className])}
          style={style}
        >
          {children}
        </h1>
      )}

      {variant === 'h2' && (
        <h2
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.h2, {}, [className])}
          style={style}
        >
          {children}
        </h2>
      )}
      {variant === 'h3' && (
        <h3
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.h3, {}, [className])}
          style={style}
        >
          {children}
        </h3>
      )}

      {variant === 'h4' && (
        <h4
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.h4, {}, [className])}
          style={style}
        >
          {children}
        </h4>
      )}

      {variant === 'h5' && (
        <h5
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.h5, {}, [className])}
          style={style}
        >
          {children}
        </h5>
      )}

      {variant === 'small' && (
        <p
          title={title}
          onClick={(e) => onClick?.(e)}
          className={classNames(cls.small, {}, [className])}
          style={style}
        >
          {children}
        </p>
      )}
    </>
  )
}
