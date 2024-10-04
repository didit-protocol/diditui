import type { Meta, StoryObj } from '@storybook/react'

import { SelectDropdown } from './index'

const meta: Meta<typeof SelectDropdown> = {
  title: 'Components/SelectDropdown',
  component: SelectDropdown,
  argTypes: {
    options: {
      control: 'object'
    },
    label: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    disabled: {
      control: 'boolean'
    },
    withSearch: {
      control: 'boolean'
    },
    value: {
      control: 'text'
    },
    errorMessage: {
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
    label: 'Select',
    placeholder: 'Select test',
    value: '',
    disabled: false,
    options: []
  }
}
