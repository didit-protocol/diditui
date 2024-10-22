'use client'

import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import { IconType } from '@/types'
import { Icon } from '../Icon'

const statusLabelStyles = cva(
  [
    'w-fit border border-foreground rounded-3xl py-[6px] px-2 bg-transparent',
    'flex items-center justify-center gap-1 overflow-hidden'
  ],
  {
    variants: {
      variant: {
        default: 'bg-surface-ulo border-surface-lo text-surface-md',
        primary: 'bg-primary/10 border-primary/20 text-primary',
        accent: 'bg-accent/10 border-accent/20 text-accent',
        success: 'bg-success/10 border-success/20 text-success',
        warning: 'bg-warning/10 border-warning/20 text-warning',
        error: 'bg-error/10 border-error/20 text-error'
      },
      icon: {
        true: 'pl-1 pr-2'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

type StatusLabelProps = ComponentProps<'div'> &
  VariantProps<typeof statusLabelStyles> & {
    label: string
    icon?: IconType
  }

function StatusLabel({ label, icon, variant, className, ...props }: StatusLabelProps) {
  return (
    <div className={cn(statusLabelStyles({ variant, icon: !!icon, className }))} {...props}>
      {icon && <Icon type={icon} size="xs" />}
      <Text
        className="text-inherit text-[9px] truncate whitespace-nowrap"
        variant="StyledLabel"
        as="span"
      >
        {label}
      </Text>
    </div>
  )
}

export { StatusLabel }
