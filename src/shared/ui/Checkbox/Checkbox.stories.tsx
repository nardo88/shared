import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'shared/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Active: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return <Checkbox label="active" checked={checked} onChange={setChecked} />
  },
}
export const Disabled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return <Checkbox disabled label="active" checked={checked} onChange={setChecked} />
  },
}
export const WithError: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        errorText="Поле обязательно для заполнения"
        label="active"
        checked={checked}
        onChange={setChecked}
      />
    )
  },
}
