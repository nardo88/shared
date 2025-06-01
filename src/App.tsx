import { useState } from 'react'
import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import { Input } from './ui/Input/Input'

export function App() {
  const [value, setValue] = useState('')

  return (
    <div className={classNames(cls.app, {}, ['container'])}>
      <Input
        label="Some label"
        onChange={setValue}
        value={value}
        autoFocus
        canClear
        iconSearch
        limit={10}
        onClear={() => console.log('clear')}
        onBlur={() => console.log('blur')}
        placeholder="placeholder"
        type="text"
      />
    </div>
  )
}
