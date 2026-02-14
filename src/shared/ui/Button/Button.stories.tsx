import { createContext } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from './Button'

// создали моковый контекст
const Context = createContext({
  value: '123',
})

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'click',
    onClick: () => {},
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary', 'icon'],
    },
  },
  parameters: {
    // как компонент позиционируется на странице
    layout: 'centered', // 'centered' | 'fullscreen' | 'padded'
  },
  decorators: [
    (Story) => (
      // Обернули сторис в моковый контекст
      <Context.Provider value={{ value: '123' }}>
        <Story />
      </Context.Provider>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    title: 'for example',
  },
  render: (args) => {
    // render - это функция, которая отрендерит компонент, внутри функции можно написать свою логику
    const clickHandler = () => {
      alert('Hello!')
    }
    return <Button {...args} onClick={clickHandler} />
  },
}
