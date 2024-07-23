import type { Meta, StoryObj } from '@storybook/react'

import { Icon, svgOptions } from '.'

// transform object keys into an array

const icons = Object.keys(svgOptions)

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    type: {
      control: 'select',
      options: icons
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: "The icon will inheret the color of it's parent element"
      }
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'scan',
    size: 'md'
  }
}
