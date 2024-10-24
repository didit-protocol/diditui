import type { Meta, StoryObj } from '@storybook/react'

import { StatusLabel } from './index'
import { svgOptions } from '../Icon'

const icons = Object.keys(svgOptions)

const meta: Meta<typeof StatusLabel> = {
  title: 'Components/StatusLabel',
  component: StatusLabel,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'soft', 'primary', 'accent', 'success', 'warning', 'error']
    },
    label: {
      control: 'text'
    },
    icon: {
      control: 'select',
      options: icons
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
    label: 'Active'
  }
}
