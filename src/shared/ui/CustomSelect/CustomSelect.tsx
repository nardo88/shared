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
import Portal from '@shared/ui/Portal'
import { Text } from '@shared/ui/Text/Text'
import ArrowBottom from '@shared/ui/icons/ArrowBottom'
import Close from '@shared/ui/icons/Close'

import cls from './CustomSelect.module.scss'

export type OptionType = {
  id: string
  title: string
}

type PropsType = {
  options: Array<OptionType>
  value?: OptionType | null
  onChange: (value: OptionType) => void
  label?: string
  errorText?: string
  className?: string
  disabled?: boolean
  wrapper?: RefObject<HTMLDivElement | null>
  onClear?: () => void
  required?: boolean
}

interface IDropListProps {
  options: OptionType[]
  setIsOpen: Dispatch<SetStateAction<boolean>>
  container: RefObject<HTMLDivElement | null>
  wrapper?: RefObject<HTMLDivElement | null>
  onChange: (val: OptionType) => void
  position: IPosition
}

interface IPosition {
  left: number
  top: number
  width: number
}

const DropList: FC<IDropListProps> = (props) => {
  const { setIsOpen, container, wrapper, onChange, options, position } = props

  const changeSelect = (val: OptionType) => {
    onChange(val)
    setIsOpen(false)
  }

  const hideList = (e: globalThis.MouseEvent) => {
    if (container.current && !container.current.contains(e.target as Node)) {
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
      if (wrapper?.current) wrapper?.current.removeEventListener('click', hideList)
    }
  }, [])
  return (
    <Portal>
      <div className={cls.dropDown} style={position} onClick={(e) => e.stopPropagation()}>
        <ul>
          {options.map((item) => (
            <li key={item.id} className={cls.selectOption} onClick={() => changeSelect(item)}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </Portal>
  )
}

export const CustomSelect = (props: PropsType) => {
  const {
    options = [],
    value,
    onChange,
    label,
    errorText,
    className,
    disabled = false,
    wrapper,
    onClear,
    required = false,
  } = props
  const container = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [position, setPosition] = useState<IPosition>({
    left: 0,
    top: 0,
    width: 0,
  })

  const clickHandler = (e: MouseEvent) => {
    if (!container.current) return
    e.stopPropagation()
    const { x, y, height, width } = container.current.getBoundingClientRect()
    setPosition({ width, left: x, top: y + height + 5 })
    setIsOpen((o) => !o)
  }

  return (
    <div ref={container} className={classNames(cls.wrapper, {}, [className])}>
      {label && (
        <label
          className={classNames(cls.label, {
            [cls.error]: errorText && errorText.length > 0,
            [cls.required]: required,
          })}
        >
          {label}
        </label>
      )}

      <div
        className={classNames(cls.input, {
          [cls.disabled]: disabled,
          [cls.error]: errorText && errorText.length > 0,
          [cls.cup]: options.length > 0,
        })}
        onClick={(e) => options.length && !disabled && clickHandler(e)}
      >
        <span>{value?.title || ''}</span>

        <div>
          {!!onClear && !!value?.title && (
            <span
              className={classNames(cls.arrow)}
              onClick={(e) => {
                e.stopPropagation()
                onClear()
              }}
            >
              <Close />
            </span>
          )}
          <span className={classNames(cls.arrow, { [cls.rotate]: isOpen })}>
            <ArrowBottom />
          </span>
        </div>
      </div>
      {isOpen && (
        <DropList
          container={container}
          onChange={onChange}
          options={options}
          setIsOpen={setIsOpen}
          wrapper={wrapper}
          position={position}
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
