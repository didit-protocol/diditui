import type { Meta, StoryObj } from '@storybook/react-vite'
import { CardExample } from '.'

const meta: Meta<typeof CardExample> = {
  title: 'Examples/Card',
  component: CardExample,
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
