import type { Meta, StoryObj } from '@storybook/react-vite'

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
    required: {
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
    },
    showPasteButton: {
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
    required: true,
    showClearButton: true,
    showCopyButton: false,
    showPasteButton: false,
    onCopyClick: () => {}
  }
}
