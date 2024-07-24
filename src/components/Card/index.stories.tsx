import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '.'
import { Text } from '../Text'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg']
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
    padding: 'md',
    shadow: false,
    children: (
      <Text variant="H4" as="h4" className="p-10" align="center">
        this is a card
      </Text>
    )
  }
}
