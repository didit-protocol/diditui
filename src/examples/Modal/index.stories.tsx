import type { Meta, StoryObj } from '@storybook/react'
import { ModalExample } from '.'

const meta: Meta<typeof ModalExample> = {
  title: 'Examples/Modal',
  component: ModalExample,
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
