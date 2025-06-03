import type { Meta, StoryObj } from '@storybook/react-vite'
import { AnimatedLogoExample } from '.'

const meta: Meta<typeof AnimatedLogoExample> = {
  title: 'Examples/AnimatedLogo',
  component: AnimatedLogoExample,
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
