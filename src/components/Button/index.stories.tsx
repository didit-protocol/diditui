import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'soft', 'white', 'error']
    },
    size: {
      control: 'select',
      options: ['md', 'lg']
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
    children: 'Click me!',
    variant: 'primary',
    size: 'md',
    icon: 'arrowRight',
    disabled: false,
    isLoading: false,
    animate: false
  }
}
