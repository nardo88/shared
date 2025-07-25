import { type FC, type MouseEvent, type PointerEvent, useMemo, useRef } from 'react'

import { classNames } from '@shared/helpers/classNames'

import { getLeftPercentValue } from '../../modules'
import type { ICustomRangePercentProps } from '../../types'
import { InputValue } from '../InputValue/InputValue'

import cls from './Percent.module.scss'

export const Percent: FC<ICustomRangePercentProps> = (props) => {
  const { value, onChange, errorText, disabled } = props
  const cursor = useRef<HTMLDivElement | null>(null)
  const line = useRef<HTMLDivElement | null>(null)

  const items = useMemo(() => Array.apply(null, Array(10)).map((_, i) => i + 1), [])

  const dragStart = (e: PointerEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (e?.buttons !== 1 || !cursor.current || !line.current || disabled) return
    const posX = e.clientX
    const lineWidth = line.current.getBoundingClientRect().width
    function dragMove(event: globalThis.PointerEvent) {
      const dif = event.clientX - posX // в пикселях
      const percent = Math.floor((dif / lineWidth) * 100)
      const newValue = value + percent
      if (newValue > 100 || newValue < 0) return
      if (value + percent < 100 || value + percent > 0) onChange(value + percent)
    }

    document.onpointermove = dragMove

    function dragEnd() {
      document.onpointerup = null
      document.onpointermove = null
    }

    document.onpointerup = dragEnd
  }

  const clickHandler = (e: MouseEvent, index: number) => {
    if (disabled) return
    const { width, x } = e.currentTarget.getBoundingClientRect()
    const percent = ((e.clientX - x) / width) * 100
    const ceil = (index - 1) * 10
    onChange(ceil + Math.ceil(percent / 10))
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.line} ref={line} draggable={false}>
        {items.map((item) => (
          <div
            key={item}
            className={classNames(cls.lineItem, {
              [cls.defaultCursor]: disabled,
            })}
            draggable={false}
            onClick={(e) => clickHandler(e, item)}
          >
            <div
              className={cls.greenValue}
              style={{ width: `${getLeftPercentValue(item, value)}%` }}
              draggable={false}
            />
          </div>
        ))}
        <div
          className={cls.cursor}
          onPointerDown={dragStart}
          ref={cursor}
          style={{ left: `${value}%` }}
          draggable={false}
        />
      </div>
      <InputValue onChange={onChange} value={value} errorText={errorText} disabled={disabled} />
    </div>
  )
}
