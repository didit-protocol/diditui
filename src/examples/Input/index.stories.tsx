import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputExample } from './index'

const meta: Meta<typeof InputExample> = {
  title: 'Examples/Input',
  component: InputExample,
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
