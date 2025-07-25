import {
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'

import { classNames } from '@shared/helpers/classNames'
import Portal from '@shared/ui/Portal'
import { Text } from '@shared/ui/Text/Text'

import cls from './ContextMenu.module.scss'

export interface IOptions {
  title: string
  onClick: (e: MouseEvent) => void
  color?: string
  icon?: ReactElement
}

interface IContextMenuProps {
  className?: string
  listClassName?: string // Стили для выпадающего списка
  currentClassName?: string // Стили для выбранного элемента
  children: ReactNode
  disabled?: boolean
  options: IOptions[]
  parent?: RefObject<HTMLElement | null> // Родитель, относительно него считается геометрия
  styleCurrent?: boolean // Надо ли по дефолту стилизовать выбранный элемент
}

interface IPosition {
  x: number
  y: number
}

export function ContextMenu(props: IContextMenuProps) {
  const {
    className,
    children,
    disabled = false,
    options,
    listClassName,
    parent,
    currentClassName,
    styleCurrent = true,
  } = props
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<IPosition | null>(null)

  const list = useRef<HTMLDivElement | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)

  const menuContextHandler = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled) return
    e.preventDefault()

    if (list.current && list.current.classList.contains(cls.showList)) {
      list.current.classList.remove(cls.showList)
    }

    setPosition({ x: e.pageX, y: e.pageY - window.scrollY })
    setIsOpen(true)

    setTimeout(() => {
      if (list?.current && parent?.current) {
        const listRect = list.current.getBoundingClientRect()
        const parentRect = parent.current.getBoundingClientRect()

        const needToLeft = parentRect.width + parentRect.x - e.pageX < listRect.width
        const needToTop = window.innerHeight - e.pageY + window.scrollY < listRect.height

        if (needToLeft && needToTop) {
          list.current.classList.add(cls.moveTopLeft)
        } else if (needToLeft) {
          list.current.classList.add(cls.moveLeft)
        } else if (needToTop) {
          list.current.classList.add(cls.moveTop)
        }
      }

      if (list.current) {
        list.current.classList.add(cls.showList)
      }
    }, 0)
  }

  const handleClick = () => {
    setIsOpen(false)
    setPosition(null)
  }

  const contextHide = (e: globalThis.MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      handleClick()
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClick)
    window.addEventListener('scroll', handleClick)

    if (parent?.current) {
      parent.current.addEventListener('contextmenu', contextHide)
    }
    return () => {
      window.removeEventListener('click', handleClick)
      window.removeEventListener('scroll', handleClick)
    }
  }, [])

  return (
    <div
      className={classNames(cls.contextMenu, { [cls.current]: isOpen && styleCurrent }, [
        className,
        currentClassName && isOpen && styleCurrent ? currentClassName : '',
      ])}
      onContextMenu={menuContextHandler}
      ref={ref}
    >
      {children}
      {isOpen && (
        <Portal>
          <div
            className={cls.menuWrapper}
            ref={list}
            style={{ top: `${position?.y}px`, left: `${position?.x}px` }}
          >
            <ul
              className={classNames(cls.menuList, {}, [listClassName])}
              onContextMenu={(e) => e.stopPropagation()}
            >
              {options.map((item) => (
                <li className={cls.menuItem} onClick={item.onClick} key={item.title}>
                  {item.icon && item.icon}
                  <Text>{item.title}</Text>
                </li>
              ))}
            </ul>
          </div>
        </Portal>
      )}
    </div>
  )
}
