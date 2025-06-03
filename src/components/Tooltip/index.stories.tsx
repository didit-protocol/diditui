import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tooltip } from './index'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    label: {
      control: 'text'
    },
    direction: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right']
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
    label: 'Hey, I am a tooltip'
  }
}
