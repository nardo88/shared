import type { Meta, StoryObj } from '@storybook/react-vite'

import { AddIcon } from './AddIcon'
import { H1Icon } from './H1Icon'
import { H2Icon } from './H2Icon'
import './Icon.stories.scss'
import IconComponent from './IconComponent'
import { ImageIcon } from './ImageIcon'
import { NoteIcon } from './NoteIcon'
import { QuoteIcon } from './QuoteIcon'

const meta: Meta<typeof IconComponent> = {
  title: 'shared/icons',
  component: IconComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IconComponent>

const ICONS = {
  AddIcon,
  H1Icon,
  H2Icon,
  ImageIcon,
  NoteIcon,
  QuoteIcon,
}

export const AllIcons: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        gap: '10px',
        marginTop: 20,
      }}
    >
      {Object.entries(ICONS).map(([name, Icon]) => {
        return (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: 10,
              width: 120,
              textAlign: 'center',
            }}
          >
            <Icon className={`${name} icon`} />
            <div style={{ marginTop: 5, fontSize: 12 }}>{name}</div>
          </div>
        )
      })}
    </div>
  ),
}
