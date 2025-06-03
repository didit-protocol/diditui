import type { Meta, StoryObj } from '@storybook/react-vite'

import { UserCard } from '.'

const meta: Meta<typeof UserCard> = {
  title: 'Components/UserCard',
  component: UserCard,
  argTypes: {
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'full']
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
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'John Doe',
    label: 'Software Engineer'
  }
}
