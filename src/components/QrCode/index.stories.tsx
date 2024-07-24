import type { Meta, StoryObj } from '@storybook/react'

import { QrCode } from '.'

const meta: Meta<typeof QrCode> = {
  title: 'Components/QrCode',
  component: QrCode,
  argTypes: {
    uri: {
      control: 'text'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    color: {
      control: 'color'
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
    uri: 'http://example.com',
    size: 'md',
    color: 'black',
    iconName: 'didit'
  }
}
