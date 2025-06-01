import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import { useState } from 'react'
import { TextArea } from './ui/TextArea/TextArea'

export function App() {
  const [value, setValue] = useState('')

  return (
    <div className={classNames(cls.app, {}, ['container'])}>
      <TextArea value={value} onChange={setValue} label="Some label" />
    </div>
  )
}
