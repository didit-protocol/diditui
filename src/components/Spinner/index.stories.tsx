import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '.'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'soft', 'accent', 'error', 'success', 'warning']
    },
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']
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
    variant: 'default',
    size: 'md'
  }
}
