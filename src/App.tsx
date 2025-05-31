import { useState } from 'react'
import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import { Checkbox } from './ui/Checkbox/Checkbox'

export function App() {
  const [value, setValue] = useState(true)
  return (
    <div className={classNames(cls.app, {}, ['container'])}>
      <Checkbox label={'some item'} checked={value} onChange={setValue} />
      <Checkbox
        label={'some item'}
        checked={value}
        onChange={setValue}
        disabled
      />
      <Checkbox
        label={'some item'}
        checked={value}
        onChange={setValue}
        errorText="Поле обязательно для заполнения"
      />
    </div>
  )
}
