import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'shared/Accordion',
  component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Primary: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <Accordion title="for example" isOpen={isOpen} setIsOpen={() => setIsOpen((p) => !p)}>
        <div>
          Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Гор
          переулка, проектах, себя пояс своих рукописи приставка речью своего на берегу единственное
          родного несколько свой которое! Строчка журчит проектах безорфографичный осталось наш, дал
          пояс родного себя? Даже наш власти текстами проектах которое лучше, от всех решила? Океана
          вскоре предупредила эта великий.
        </div>
      </Accordion>
    )
  },
}
