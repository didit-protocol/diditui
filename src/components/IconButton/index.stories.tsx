import type { Meta, StoryObj } from '@storybook/react'

import { IconButton } from '.'
import { svgOptions } from '../Icon'

const icons = Object.keys(svgOptions)

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    icon: {
      control: 'select',
      options: icons
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    },
    withBorder: {
      control: 'boolean'
    },
    variant: {
      control: 'select',
      options: ['default', 'primary']
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
    icon: 'scan',
    size: 'sm',
    label: 'Scan QR Code'
  }
}
