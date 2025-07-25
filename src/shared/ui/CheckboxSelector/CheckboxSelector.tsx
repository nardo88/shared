import {
  type Dispatch,
  type FC,
  type MouseEvent,
  type RefObject,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'

import { classNames } from '@shared/helpers/classNames'
import { Checkbox } from '@shared/ui/Checkbox/Checkbox'
import Portal from '@shared/ui/Portal'
import { Text } from '@shared/ui/Text/Text'
import ArrowBottom from '@shared/ui/icons/ArrowBottom'

import cls from './CheckboxSelector.module.scss'

export type OptionType = {
  id: string
  title: string
  disabled?: boolean
}

interface CheckboxSelectorProps {
  value: string[]
  label?: string
  onChange: (value: string) => void
  options: OptionType[]
  showValues?: boolean
  disabled?: boolean
  className?: string
  errorText?: string
  canClear?: boolean
  required?: boolean
  wrapper?: RefObject<HTMLDivElement | null>
}

interface DropdownList {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  options: OptionType[]
  value: string[]
  onChange: (value: string) => void
  disabled?: boolean
  position: IPosition
  wrapper?: RefObject<HTMLDivElement | null>
}

interface IPosition {
  left: number
  top: number
  width: number
}

const DropdownList: FC<DropdownList> = (props) => {
  const { setIsOpen, options, value, onChange, disabled, position, wrapper } = props
  const ref = useRef<HTMLDivElement>(null)

  const hideList = (e: globalThis.MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const hide = () => setIsOpen(false)
    window.addEventListener('click', hideList)
    window.addEventListener('resize', hide)
    if (wrapper?.current) wrapper?.current.addEventListener('click', hideList)

    return () => {
      window.removeEventListener('click', hideList)
      window.removeEventListener('resize', hide)
      if (wrapper?.current) wrapper.current.removeEventListener('click', hideList)
    }
  }, [])

  return (
    <Portal>
      <div
        ref={ref}
        className={cls.listWrapper}
        style={position}
        onClick={(e) => e.stopPropagation()}
      >
        {options.map((item) => (
          <Checkbox
            key={item.id}
            label={item.title}
            checked={!!value?.includes(item.id)}
            onChange={() => onChange(item.id)}
            disabled={item.disabled || disabled}
            className={cls.checkbox}
          />
        ))}
      </div>
    </Portal>
  )
}

export const CheckboxSelector = (props: CheckboxSelectorProps) => {
  const {
    value,
    options,
    label,
    onChange,
    showValues = true,
    disabled = false,
    className,
    errorText,
    canClear = false,
    required = false,
    wrapper,
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<IPosition>({
    left: 0,
    top: 0,
    width: 0,
  })

  const container = useRef<HTMLDivElement>(null)

  const clickHandler = (e: MouseEvent) => {
    if (!container.current) return
    e.stopPropagation()
    const { x, y, height, width } = container.current.getBoundingClientRect()
    setPosition({ width, left: x, top: y + height + 5 })
    setIsOpen((o) => !o)
  }

  return (
    <div
      ref={container}
      className={classNames(
        cls.CheckboxSelector,
        { [cls.error]: errorText && errorText?.length > 0 },
        [className]
      )}
      onClick={clickHandler}
    >
      {label && (
        <label className={classNames(cls.label, { [cls.required]: required })}>{label}</label>
      )}
      <div className={cls.inputArea}>
        {showValues && (
          <div className={cls.valuesList}>
            {!!value?.length &&
              value.map((item: string) => (
                <div
                  className={cls.chosen}
                  key={item}
                  onClick={(e: MouseEvent) => {
                    if (canClear) {
                      e.stopPropagation()
                      onChange(item)
                    }
                  }}
                >
                  {options.find((i) => i.id === item)?.title}
                </div>
              ))}
          </div>
        )}
        <span className={classNames(cls.arrow, { [cls.rotate]: isOpen })}>
          <ArrowBottom />
        </span>
      </div>
      {isOpen && (
        <DropdownList
          onChange={onChange}
          options={options}
          setIsOpen={setIsOpen}
          value={value}
          disabled={disabled}
          position={position}
          wrapper={wrapper}
        />
      )}
      {errorText && (
        <Text className={cls.errorText} variant="error">
          {errorText}
        </Text>
      )}
    </div>
  )
}
