import type { Meta, StoryObj } from '@storybook/react-vite'

import { SaveIcon } from '../icons/Save'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'click',
    onClick: () => {},
  },
  parameters: { layout: 'centered' },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    title: 'for example',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    title: 'for example',
  },
}
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    title: 'for example',
  },
}
export const Icon: Story = {
  args: {
    variant: 'icon',
    title: 'for example',
    children: <SaveIcon />,
  },
}
