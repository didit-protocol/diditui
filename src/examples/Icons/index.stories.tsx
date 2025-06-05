import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconsExample } from '.'

const meta: Meta<typeof IconsExample> = {
  title: 'Examples/Icons',
  component: IconsExample,
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
