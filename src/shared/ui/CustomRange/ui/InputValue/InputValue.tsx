import { type FC, type KeyboardEvent, useRef } from 'react'

import { classNames } from '@shared/helpers/classNames'

import cls from './InputValue.module.scss'

interface InputValueProps {
  value: number
  onChange: (val: number) => void
  max?: number
  errorText?: string | null
  disabled?: boolean
  step?: number
}

export const InputValue: FC<InputValueProps> = (props) => {
  const { value, onChange, max, errorText, disabled, step = 1 } = props
  const ref = useRef<HTMLInputElement>(null)

  const increment = () => {
    const maxValue = max || 100
    if (value === maxValue || disabled) return
    onChange(value + step)
  }

  const decrement = () => {
    if (value === 0 || disabled) return
    onChange(value - step)
  }

  const onWheelHandler = (e: React.WheelEvent<HTMLInputElement>) => {
    if (document.activeElement === ref.current) {
      e.preventDefault()
      ref.current?.blur()
    }
  }

  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      increment()
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      decrement()
    }
  }

  return (
    <div className={classNames(cls.valueWrapper, { [cls.error]: !!errorText })}>
      <div>
        <input
          className={cls.percentInput}
          disabled={disabled}
          type="number"
          value={value}
          onChange={(e) => {
            const result =
              step === 1
                ? Math.round(parseFloat(e.target.value))
                : Number((Math.round(Number(parseFloat(e.target.value)) / step) * step).toFixed(1))
            const maxValue = max || 100
            if (result < 0 || result > maxValue || Number.isNaN(result)) return
            onChange(result)
          }}
          ref={ref}
          onWheel={onWheelHandler}
          onKeyDown={keyDownHandler}
        />
        <span className={cls.percentTotal}>/{max || 100}</span>
      </div>
      <div className={cls.percentArrows}>
        <span
          onClick={(e) => {
            e.stopPropagation()
            increment()
          }}
          className={classNames(cls.controlArrow, {
            [cls.defaultCursor]: disabled,
          })}
        >
          &lsaquo;
        </span>
        <span
          onClick={(e) => {
            e.stopPropagation()
            decrement()
          }}
          className={classNames(cls.controlArrow, {
            [cls.defaultCursor]: disabled,
          })}
        >
          &rsaquo;
        </span>
      </div>
    </div>
  )
}
