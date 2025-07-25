/**
 * Компонент, выводит выпадающий список с настройками.
 *
 * @param {object} menuItems - список элементов выпадающего меню.
 * Массив объектов в формате { title, onClick }
 * @param {string} id - id элемента
 */
import {
  type Dispatch,
  type FC,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type RefObject,
  type SetStateAction,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react'

import { classNames } from '@shared/helpers/classNames'
import Portal from '@shared/ui/Portal'
import { Text } from '@shared/ui/Text/Text'
import SettingsIcon from '@shared/ui/icons/SettingsIcon'

import cls from './SettingsMenu.module.scss'

export type OptionItem = {
  title: string
  onClick: (e: MouseEvent<HTMLDivElement>, id?: string) => void
  color?: string
  icon?: ReactElement
  disabled?: boolean
}

type SettingsMenuProps = {
  id: string
  options: Array<OptionItem>
  className?: string
  menuText?: ReactNode
  wrapper?: RefObject<HTMLElement>
  getHide?: (cb: () => void) => void
}

interface IPosition {
  right: number
  top: number
}

interface IDropDownProps {
  id?: string
  position: IPosition
  options: Array<OptionItem>
  wrapper?: RefObject<HTMLElement>
  setIsOpen: Dispatch<SetStateAction<string | null>>
}

const DropDown: FC<IDropDownProps> = (props) => {
  const { wrapper, setIsOpen, options, id, position } = props
  const ref = useRef<HTMLDivElement>(null)

  const hideMenu = (e: globalThis.MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(null)
    }
  }
  useEffect(() => {
    const hide = () => setIsOpen(null)
    window.addEventListener('click', (e) => hideMenu(e))
    window.addEventListener('resize', hide)

    if (wrapper?.current) {
      wrapper?.current.addEventListener('click', hideMenu)
    }
    return () => {
      window.removeEventListener('click', hideMenu)
      window.removeEventListener('resize', hide)

      if (wrapper?.current) {
        wrapper.current.removeEventListener('click', hideMenu)
      }
    }
  }, [])
  return (
    <Portal>
      <div ref={ref} className={cls.settings} style={position}>
        <div className={cls.optionList}>
          {options?.map(
            (item: OptionItem) =>
              item && (
                <div
                  key={item.title}
                  className={classNames(cls.menuItem, {
                    [cls.disabled]: item.disabled,
                  })}
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    if (item.disabled) return
                    item.onClick(e, id)
                    setIsOpen(null)
                  }}
                >
                  {item.icon && item.icon}
                  <Text>{item.title}</Text>
                </div>
              )
          )}
        </div>
      </div>
    </Portal>
  )
}

export const SettingsMenu = memo(
  ({ options, id, className, menuText, wrapper, getHide }: SettingsMenuProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const optionRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState<null | string>(null)
    const [position, setPosition] = useState<IPosition>({
      right: 0,
      top: 0,
    })

    const openMenu = (e: MouseEvent) => {
      if (!ref.current) return
      e.stopPropagation()
      const { x, y, height, width } = ref.current.getBoundingClientRect()
      setPosition({ right: x + width, top: y + height + 5 })
      setIsOpen(id)
    }

    useEffect(() => {
      if (isOpen) {
        optionRef!.current?.classList.add(cls.active)
      } else {
        optionRef!.current?.classList.remove(cls.active)
      }
    }, [isOpen])

    useEffect(() => {
      getHide?.(() => {
        setIsOpen(null)
      })
    }, [])

    if (!options.length) return null

    return (
      <div className={classNames(cls.SettingsMenu, {}, [className])} ref={ref} data-id={id}>
        <span className={cls.settingsBar} onClick={openMenu}>
          {menuText || <SettingsIcon />}
        </span>
        {isOpen && (
          <DropDown
            options={options}
            setIsOpen={setIsOpen}
            id={id}
            position={position}
            wrapper={wrapper}
          />
        )}
      </div>
    )
  }
)
