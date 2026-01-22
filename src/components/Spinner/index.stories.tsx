import type { Meta, StoryObj } from '@storybook/react-vite'
import { Spinner } from '.'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'soft', 'accent', 'error', 'success', 'warning']
    },
    size: {
      control: 'select',
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl']
    },
    color: {
      control: 'color'
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
    variant: 'default',
    size: 'md'
  }
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'lg'
  }
}

export const CustomColor: Story = {
  args: {
    color: '#8b5cf6',
    size: 'lg'
  }
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner variant="default" size="lg" />
      <Spinner variant="primary" size="lg" />
      <Spinner variant="soft" size="lg" />
      <Spinner variant="accent" size="lg" />
      <Spinner variant="success" size="lg" />
      <Spinner variant="warning" size="lg" />
      <Spinner variant="error" size="lg" />
    </div>
  )
}

export const CustomColors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner color="#ef4444" size="lg" />
      <Spinner color="#22c55e" size="lg" />
      <Spinner color="#3b82f6" size="lg" />
      <Spinner color="#8b5cf6" size="lg" />
      <Spinner color="#f59e0b" size="lg" />
    </div>
  )
}
