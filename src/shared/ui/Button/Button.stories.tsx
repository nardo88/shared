import type { Meta, StoryObj } from '@storybook/react-vite'

import Button from './Button'
import AddIcon from '@shared/ui/icons/AddIcon'

const handleClick = (e: React.MouseEvent) => {
  console.log('Button clicked', e)
}

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Click me',
    onClick: handleClick,
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary', 'icon'],
      description: 'Вариант стиля кнопки',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние кнопки',
    },
    type: {
      control: 'radio',
      options: ['button', 'submit'],
      description: 'Тип кнопки',
    },
    children: {
      control: 'text',
      description: 'Содержимое кнопки',
    },
    title: {
      control: 'text',
      description: 'Текст подсказки при наведении',
    },
    className: {
      control: 'text',
      description: 'Дополнительные CSS классы',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Универсальный компонент кнопки с поддержкой различных вариантов стилей и состояний.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
}

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Add Item',
    Icon: AddIcon,
  },
}

export const IconOnly: Story = {
  args: {
    variant: 'icon',
    children: '',
    Icon: AddIcon,
    title: 'Add',
  },
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
      <Button variant="primary" onClick={handleClick}>
        Primary
      </Button>
      <Button variant="secondary" onClick={handleClick}>
        Secondary
      </Button>
      <Button variant="tertiary" onClick={handleClick}>
        Tertiary
      </Button>
      <Button variant="icon" Icon={AddIcon} onClick={handleClick} title="Add"> </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Все варианты кнопок в одном месте для сравнения.',
      },
    },
  },
}

export const SubmitButton: Story = {
  args: {
    variant: 'primary',
    type: 'submit',
    children: 'Submit Form',
  },
  render: (args) => (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        console.log('Form submitted', e)
      }}
    >
      <Button {...args} />
    </form>
  ),
}
