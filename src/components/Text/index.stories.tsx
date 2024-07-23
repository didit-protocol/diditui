import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    as: {
      control: 'radio',
      options: ['h1', 'p', 'span']
    },
    variant: {
      control: 'radio',
      options: ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
    },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right']
    },
    italic: {
      control: 'boolean'
    },
    underline: {
      control: 'boolean'
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
    as: 'h1',
    variant: 'H1',
    align: 'left',
    children: 'Your submission under review'
  }
}
