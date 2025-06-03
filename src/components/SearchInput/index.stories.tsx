import type { Meta, StoryObj } from '@storybook/react-vite'

import { SearchInput } from './index'

const meta: Meta<typeof SearchInput> = {
  title: 'Components/SearchInput',
  component: SearchInput,
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
    label: 'Search',
    placeholder: 'Type to search',
    value: '',
    disabled: false
  }
}
