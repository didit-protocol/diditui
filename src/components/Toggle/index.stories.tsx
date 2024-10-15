import type { Meta, StoryObj } from '@storybook/react'

import { Toggle } from './index'

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    label: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: ['sm', 'md']
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Set as default',
    size: 'md'
  }
}
