import type { FC } from 'react'

import { classNames } from '@shared/helpers/classNames'
import Button from '@shared/ui/Button/Button'
import { Text } from '@shared/ui/Text/Text'
import Icon404 from '@shared/ui/icons/Icon404'

import cls from './NotFoundPage.module.scss'

interface MainProps {
  hideButton?: boolean
  className?: string
}

export const NotFoundPage: FC<MainProps> = (props) => {
  const { className, hideButton = false } = props

  const clickHandler = () => {
    window.location.href = '/'
  }

  return (
    <div className={classNames(cls.Main, {}, [className])}>
      <Icon404 className={cls.icon} />
      <Text className={cls.title}>404</Text>
      <Text className={cls.subTitle}>Страница не найдена</Text>
      {!hideButton && (
        <Button className={cls.btn} onClick={clickHandler}>
          Перейти на главную
        </Button>
      )}
    </div>
  )
}
