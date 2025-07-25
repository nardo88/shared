import { type FC } from 'react'

import { classNames } from '@shared/helpers/classNames'

import cls from './ProgressLine.module.scss'

interface ProgressLineProps {
  className?: string
  percents: number
}

export const ProgressLine: FC<ProgressLineProps> = ({ className, percents }) => {
  return (
    <div className={classNames(cls.progressWrapper, {}, [className])}>
      <div
        className={cls.progressValue}
        style={{ width: `${percents}%`, transition: 'width 0.5s ease-in-out' }}
      />
    </div>
  )
}
