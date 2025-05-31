import {
  type Dispatch,
  type FC,
  type MouseEvent,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'

import { Checkbox } from '../Checkbox/Checkbox'
import { Text, TextVariants } from '../Text/Text'

import cls from './CheckboxSelector.module.scss'
import { classNames } from '../../helpers/classNames'
import ArrowBottom from '../icons/ArrowBottom'
import Portal from '../Portal'

export type OptionType = {
  value: string
  label: string
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
}

interface DropdownList {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  options: OptionType[]
  value: string[]
  onChange: (value: string) => void
  disabled?: boolean
  position: IPosition
}

interface IPosition {
  left: number
  top: number
  width: number
}

const DropdownList: FC<DropdownList> = (props) => {
  const { setIsOpen, options, value, onChange, disabled, position } = props
  const ref = useRef<HTMLDivElement>(null)

  const clickedByNotMenu = (e: globalThis.MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    const hide = () => setIsOpen(false)
    window.addEventListener('click', clickedByNotMenu)
    window.addEventListener('resize', hide)

    return () => {
      window.removeEventListener('click', clickedByNotMenu)
      window.removeEventListener('resize', hide)
    }
  }, [])

  return (
    <Portal>
      <div ref={ref} className={cls.listWrapper} style={position}>
        {options.map((item) => (
          <Checkbox
            key={item.value}
            label={item.label}
            checked={!!value?.includes(item.value)}
            onChange={() => onChange(item.value)}
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
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<IPosition>({
    left: 0,
    top: 0,
    width: 0,
  })

  const wrapper = useRef<HTMLDivElement>(null)

  const clickHandler = (e: MouseEvent) => {
    if (!wrapper.current) return
    e.stopPropagation()
    const { x, y, height, width } = wrapper.current.getBoundingClientRect()
    setPosition({ width, left: x, top: y + height + 5 })
    setIsOpen((o) => !o)
  }

  return (
    <div
      ref={wrapper}
      className={classNames(
        cls.CheckboxSelector,
        { [cls.error]: errorText && errorText?.length > 0 },
        [className]
      )}>
      {label && (
        <label className={classNames(cls.label, { [cls.required]: required })}>
          {label}
        </label>
      )}
      <div className={cls.inputArea} onClick={clickHandler}>
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
                  }}>
                  {options.find((i) => i.value === item)?.label}
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
        />
      )}
      {errorText && (
        <Text className={cls.errorText} variant={TextVariants.ERROR}>
          {errorText}
        </Text>
      )}
    </div>
  )
}
