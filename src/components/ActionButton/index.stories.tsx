import type { Meta, StoryObj } from '@storybook/react-vite'

import { ActionButton } from '.'

const meta: Meta<typeof ActionButton> = {
  title: 'Components/ActionButton',
  component: ActionButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'soft', 'primary', 'accent', 'success', 'warning', 'error']
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
    children: 'View details',
    variant: 'default',
    disabled: false,
    isLoading: false,
    isActive: false
  }
}
