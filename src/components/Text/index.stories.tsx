import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '.'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'p', 'span']
    },
    variant: {
      control: 'select',
      options: [
        'H1',
        'H2',
        'H3',
        'H4',
        'H5',
        'H6',
        'P1',
        'P2',
        'P3',
        'Label1',
        'Label2',
        'Label3',
        'Label4',
        'StyledLabel'
      ]
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right']
    },
    italic: {
      control: 'boolean'
    },
    underline: {
      control: 'boolean'
    }
  },
  parameters: {},
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div className="">
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    as: 'h1',
    variant: 'H1',
    align: 'left',
    children: 'Your submission under review',
    className: 'text-primary'
  }
}
