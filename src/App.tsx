import { useState } from 'react'
import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import { Radiobutton } from './ui/Radiobutton/Radiobutton'

export function App() {
  const [value, setValue] = useState<string | null>(null)

  const map = [
    { id: 'first', title: 'first' },
    { id: 'second', title: 'second' },
    { id: 'third', title: 'third' },
  ]

  return (
    <div className={classNames(cls.app, {}, ['container'])}>
      {map.map((item) => (
        <Radiobutton
          label={item.title}
          checked={value === item.id}
          onChange={() => setValue(item.id)}
        />
      ))}
    </div>
  )
}
