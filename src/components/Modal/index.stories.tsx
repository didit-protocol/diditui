import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from '.'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {},
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

let isOpen = true

function onClose() {
  isOpen = false
}

export const Default: Story = {
  args: {
    isOpen,
    onClose
  }
}
