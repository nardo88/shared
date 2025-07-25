import { type FC } from 'react'

import { classNames } from '@shared/helpers/classNames'
import { type IconProps } from '@shared/ui/icons/IconComponent'
import Loading from '@shared/ui/icons/Loading'

import cls from './Spinner.module.scss'

type SpinnerProps = {
  className?: string
  svgProps?: IconProps
  withBackground?: boolean
}

export const Spinner: FC<SpinnerProps> = ({ className, svgProps, withBackground = false }) => {
  return (
    <div className={classNames(cls.Spinner, { [cls.withBack]: withBackground }, [className])}>
      <Loading {...svgProps} />
    </div>
  )
}
