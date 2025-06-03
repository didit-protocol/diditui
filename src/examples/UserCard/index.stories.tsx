import type { Meta, StoryObj } from '@storybook/react-vite'
import { UserCardExample } from '.'

const meta: Meta<typeof UserCardExample> = {
  title: 'Examples/UserCard',
  component: UserCardExample,
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
