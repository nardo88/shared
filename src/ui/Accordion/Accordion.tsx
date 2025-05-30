import { type ReactNode, type FC } from 'react'

import cls from './Accordion.module.scss'
import { classNames } from '../../helpers/classNames'
import ArrowBottom from '../icons/ArrowBottom'

interface AccordionProps {
  children: ReactNode
  className?: string
  title: ReactNode
  isOpen: boolean
  setIsOpen: () => void
}

export const Accordion: FC<AccordionProps> = (props) => {
  const { className, children, title, isOpen, setIsOpen } = props

  return (
    <div className={classNames(cls.accordion, {}, [className])}>
      <div className={cls.top} onClick={setIsOpen}>
        <div className={cls.titleWrapper}>{title}</div>
        <ArrowBottom
          className={classNames(cls.arrow, { [cls.arrowOpen]: isOpen })}
        />
      </div>
      <div className={classNames(cls.bottom, { [cls.isOpen]: isOpen })}>
        <div className={cls.content}>
          <div className={cls.wrapper}>{children}</div>
        </div>
      </div>
    </div>
  )
}
