import { useState } from 'react'
import cls from './App.module.scss'
import { classNames } from './helpers/classNames'
import { Accordion } from './ui/Accordion/Accordion'
import { Text } from './ui/Text/Text'
import Close from './ui/icons/Close'

export function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classNames(cls.app, {}, ['container'])}>
      <div>
        <Text>Второй вариант</Text>
        <Accordion
          title={
            <div style={{ display: 'flex' }}>
              <Close />
              <Text>Заголовок аккордеона</Text>
            </div>
          }
          isOpen={isOpen}
          setIsOpen={() => setIsOpen((p) => !p)}>
          <div>
            <p>
              Далеко-далеко, за словесными горами в стране гласных и согласных
              живут рыбные тексты. Маленькая взгляд раз первую! Раз переулка
              страну родного дорогу запятой своего сбить она несколько, даже сих
              приставка океана, текста переписали.
            </p>
            <br />
            <p>
              Далеко-далеко, за словесными горами в стране гласных и согласных
              живут рыбные тексты. Маленькая взгляд раз первую! Раз переулка
              страну родного дорогу запятой своего сбить она несколько, даже сих
              приставка океана, текста переписали.
            </p>
            <br />

            <p>
              Далеко-далеко, за словесными горами в стране гласных и согласных
              живут рыбные тексты. Маленькая взгляд раз первую! Раз переулка
              страну родного дорогу запятой своего сбить она несколько, даже сих
              приставка океана, текста переписали.
            </p>
          </div>
        </Accordion>
      </div>
    </div>
  )
}
