import { useState } from 'react'
import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import {
  CheckboxSelector,
  type OptionType,
} from './ui/CheckboxSelector/CheckboxSelector'

export function App() {
  const [value, setValue] = useState<string[]>([])

  const options: OptionType[] = [
    { label: 'first', value: 'first' },
    { label: 'second', value: 'second' },
    { label: 'third', value: 'third', disabled: true },
  ]

  return (
    <div
      className={classNames(cls.app, {}, ['container'])}
      style={{ height: '200vh' }}>
      <CheckboxSelector
        label="Some label"
        options={options}
        value={value}
        errorText="some error"
        onChange={(val) => {
          setValue((p) => {
            if (p.includes(val)) {
              return p.filter((i) => i !== val)
            }
            return [...p, val]
          })
        }}
      />
    </div>
  )
}
