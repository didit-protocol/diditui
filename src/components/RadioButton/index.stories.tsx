import type { Meta, StoryObj } from '@storybook/react'

import { RadioButton } from '.'

// transform object keys into an array

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'radio button'
      }
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Didit',
    size: 'md'
  }
}
