import type { Meta, StoryObj } from '@storybook/react'

import { Icon, svgOptions } from '.'

// transform object keys into an array

const icons = Object.keys(svgOptions)

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    type: {
      control: 'select',
      options: icons
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    }
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
          ### Changing Icon Color
          To change the color of the icon, you can use Tailwind CSS classes. The icon will take the color of its parent element or any applied class.

          **Example:**
          \`\`\`jsx
          <Icon type="info" className="text-primary" />
          \`\`\`

          In this example, the \`text-primary\` class will set the color of the icon. You can replace \`text-primary\` with any other color class provided by Tailwind CSS or your custom CSS classes.
        `
      }
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'scan',
    size: 'md'
  }
}
