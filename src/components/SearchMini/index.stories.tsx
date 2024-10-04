import type { Meta, StoryObj } from '@storybook/react'

import { SearchMini } from './index'

const meta: Meta<typeof SearchMini> = {
  title: 'Components/SearchMini',
  component: SearchMini,
  argTypes: {
    disabled: {
      control: 'boolean'
    },
    placeholder: {
      control: 'text'
    },
    immediateFocus: {
      control: 'boolean'
    },
    value: {
      control: 'text'
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
    immediateFocus: true,
    disabled: false,
    value: 'Arabic'
  }
}
