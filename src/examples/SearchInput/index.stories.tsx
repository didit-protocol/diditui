import type { Meta, StoryObj } from '@storybook/react-vite'
import { SearchInputExample } from './index'

const meta: Meta<typeof SearchInputExample> = {
  title: 'Examples/SearchInput',
  component: SearchInputExample,
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
