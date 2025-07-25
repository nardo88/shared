import { type FC, type ReactNode } from 'react'

import { classNames } from '@shared/helpers/classNames'
import ArrowBottom from '@shared/ui/icons/ArrowBottom'

import cls from './Accordion.module.scss'

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
        <ArrowBottom className={classNames(cls.arrow, { [cls.arrowOpen]: isOpen })} />
      </div>
      <div className={classNames(cls.bottom, { [cls.isOpen]: isOpen })}>
        <div className={cls.content}>
          <div className={cls.wrapper}>{children}</div>
        </div>
      </div>
    </div>
  )
}
