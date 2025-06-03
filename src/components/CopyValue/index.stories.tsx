import type { Meta, StoryObj } from '@storybook/react-vite'

import { CopyValue } from './index'

const meta: Meta<typeof CopyValue> = {
  title: 'Components/CopyValue',
  component: CopyValue,
  argTypes: {
    label: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    isSecret: {
      control: 'boolean'
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
    label: 'Client id',
    value: '1234567890',
    isSecret: false
  }
}
