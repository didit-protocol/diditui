import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckBox } from './index'

const meta: Meta<typeof CheckBox> = {
  title: 'Components/CheckBox',
  component: CheckBox,
  argTypes: {
    label: {
      control: 'text'
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
    label: 'Set as default'
  }
}
