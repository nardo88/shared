import { useState } from 'react'
import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import { CustomSelect, type OptionType } from './ui/CustomSelect/CustomSelect'

export function App() {
  const [value, setValue] = useState<OptionType | null>(null)

  const options: OptionType[] = [
    { id: 'first', title: 'first' },
    { id: 'second', title: 'second' },
    { id: 'third', title: 'third' },
  ]

  return (
    <div className={classNames(cls.app, {}, ['container'])}>
      <CustomSelect
        label="Some label"
        required
        options={options}
        onChange={setValue}
        value={value}
        errorText="some error"
        onClear={() => setValue(null)}
      />
    </div>
  )
}
