import type { Meta, StoryObj } from '@storybook/react-vite'
import { SelectDropdownExample } from '.'

const meta: Meta<typeof SelectDropdownExample> = {
  title: 'Examples/SelectDropdownExample',
  component: SelectDropdownExample,
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
