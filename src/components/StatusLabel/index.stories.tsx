import type { Meta, StoryObj } from '@storybook/react'

import { StatusLabel } from './index'

const meta: Meta<typeof StatusLabel> = {
  title: 'Components/StatusLabel',
  component: StatusLabel,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'success', 'warning', 'error']
    },
    label: {
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
    variant: 'success',
    label: 'Active'
  }
}
