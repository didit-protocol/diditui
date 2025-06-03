import type { Meta, StoryObj } from '@storybook/react-vite'
import { TooltipExample } from './index'

const meta: Meta<typeof TooltipExample> = {
  title: 'Examples/Tooltip',
  component: TooltipExample,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
