import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './index'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    value: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
    error: {
      control: 'text'
    },
    showClearButton: {
      control: 'boolean'
    },
    showCopyButton: {
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
    label: 'Email',
    placeholder: 'Enter your email',
    value: '',
    disabled: false,
    showClearButton: true,
    showCopyButton: false,
    onCopyClick: () => {}
  }
}
