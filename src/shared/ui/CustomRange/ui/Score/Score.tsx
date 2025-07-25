import {
  type FC,
  type MouseEvent,
  type PointerEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { classNames } from '@shared/helpers/classNames'

import type { ICustomRangeScoreProps } from '../../types'
import { InputValue } from '../InputValue/InputValue'

import cls from './Score.module.scss'

const getLeftScoreValue = (item: number, value: number) => {
  if (item === value || item < value) return 100
  return 0
}

const getLeftPermanentValue = (value: number, total: number) => {
  const res = (value / total) * 100
  return res
}

export const Score: FC<ICustomRangeScoreProps> = (props) => {
  const { max, onChange, value, errorText, disabled, limit = 20, step = 1 } = props
  const cursor = useRef<HTMLDivElement | null>(null)
  const line = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0)

  const items = useMemo(() => {
    if (step !== 1) {
      return Array.apply(null, Array(max / step)).map((_, i) => i * step + step)
    }
    return Array.apply(null, Array(max)).map((_, i) => i + 1)
  }, [max, step])

  const dragStart = (e: PointerEvent) => {
    e.stopPropagation()
    e.preventDefault()
    if (e?.buttons !== 1 || !cursor.current || !line.current || disabled) return
    const posX = e.clientX
    const childWidth = line.current.children[0].clientWidth
    const start = line.current.getBoundingClientRect().x
    let v = value

    if (items.length > limit) {
      const dragMove = (event: globalThis.PointerEvent) => {
        const dif = event.clientX - posX // расстояние перемещения в пикселях
        const percent = (dif / childWidth) * 100 // расстояние перемещения в процентах
        const newValue =
          step === 1
            ? value + Math.floor((max * percent) / 100)
            : value + Number((Math.floor((max * percent) / 100 / step) * step).toFixed(1))
        if (newValue >= 0 && newValue <= max) {
          onChange(newValue)
        }
      }

      document.onpointermove = dragMove
    } else {
      const dragMove = (event: globalThis.PointerEvent) => {
        const dif = event.clientX - posX // в пикселях
        const newValue =
          step === 1
            ? Math.floor((posX - start + dif + (childWidth / 2 - value * 2)) / childWidth)
            : Number((((posX - start + dif) / childWidth) * step).toFixed(1))
        if (v !== newValue && newValue >= 0 && newValue <= max && newValue % step === 0) {
          onChange(newValue)
          v = newValue
        }
      }

      document.onpointermove = dragMove
    }

    function dragEnd() {
      document.onpointerup = null
      document.onpointermove = null
    }

    document.onpointerup = dragEnd
  }

  const clickHandler = (e: MouseEvent, index?: number) => {
    if (disabled || !line.current) return
    if (index) {
      return onChange(index)
    }

    const { x } = line.current.children[0].getBoundingClientRect()
    const diff = e.clientX - x
    const percent = (diff / width) * 100
    if (step === 1) {
      return onChange(Math.floor((max * percent) / 100))
    }
    onChange(Number((Math.floor((max * percent) / 100 / step) * step).toFixed(1)))
  }

  const getCursorPosition = () => {
    if (!line.current) return
    const width = line.current.children[0].clientWidth
    if (items.length > limit) {
      return (width * ((value / max) * 100)) / 100
    }
    return (width * value + value * 2) / step
  }

  useEffect(() => {
    if (!line.current) return
    const width = line.current.children[0].clientWidth
    setWidth(width)
  }, [max])

  return (
    <div className={cls.wrapper}>
      <div
        className={cls.line}
        ref={line}
        draggable={false}
        style={{
          gridTemplateColumns: `repeat(${items.length > limit ? 1 : items.length},1fr)`,
        }}
      >
        {items.length <= limit &&
          items.map((item) => (
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
                style={{ width: `${getLeftScoreValue(item, value)}%` }}
                draggable={false}
              />
            </div>
          ))}

        {items.length > limit && (
          <div
            className={classNames(cls.lineItem, {
              [cls.defaultCursor]: disabled,
            })}
            draggable={false}
            onClick={(e) => clickHandler(e)}
          >
            <div
              className={cls.greenValue}
              style={{ width: `${getLeftPermanentValue(value, max)}%` }}
              draggable={false}
            />
          </div>
        )}

        <div
          className={cls.cursor}
          onPointerDown={dragStart}
          ref={cursor}
          style={{ left: `${getCursorPosition()}px` }}
          draggable={false}
        />
      </div>
      <InputValue
        onChange={onChange}
        value={value}
        max={max}
        errorText={errorText}
        disabled={disabled}
        step={step}
      />
    </div>
  )
}
