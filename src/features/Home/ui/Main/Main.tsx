import { type FC } from 'react'

import { Text } from '@shared/ui/Text/Text'

import cls from './Main.module.scss'

export const Home: FC = () => {
  return (
    <div className={cls.home}>
      <Text variant="h1">Заголовок h1</Text>
      <Text variant="h2">Заголовок h2</Text>
      <Text variant="h3">Заголовок h3</Text>
      <Text variant="h4">Заголовок h4</Text>
      <Text variant="h5">Заголовок h5</Text>
      <Text variant="helper">Helper</Text>
      <Text variant="error">error</Text>
      <Text variant="success">success</Text>
      <Text>Далеко-далеко за словесными горами в стране.</Text>
      <Text variant="small">Далеко-далеко за словесными горами в стране.</Text>
    </div>
  )
}
