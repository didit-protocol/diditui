'use client'

import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import { Icon } from '../Icon'
import { IconType } from '@/types'

const statusLabelStyles = cva(
  [
    'w-fit max-w-full border border-foreground rounded-3xl py-[6px] px-2 bg-transparent',
    'flex items-center justify-center gap-1 overflow-hidden'
  ],
  {
    variants: {
      variant: {
        default: 'bg-surface-ulo border-surface-lo text-surface-md',
        soft: 'bg-soft/50 border-soft text-surface-hi',
        primary: 'bg-soft border-primary/20 text-primary',
        accent: 'bg-accent/10 border-accent/20 text-accent',
        success: 'bg-success/10 border-success/20 text-success',
        warning: 'bg-warning/10 border-warning/20 text-warning',
        error: 'bg-error/10 border-error/20 text-error'
      },
      withIcon: {
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
    withIcon?: boolean
  }

const iconMap: Record<string, IconType | undefined> = {
  success: 'checkCircleBold',
  warning: 'warningBold',
  error: 'closeCircleBold',
  default: 'info',
  soft: 'info',
  primary: 'refresh',
  accent: 'info',
  '': undefined
}

function StatusLabel({
  label,
  icon,
  withIcon = false,
  variant,
  className,
  ...props
}: StatusLabelProps) {
  const selectedIcon = withIcon ? iconMap[variant || ''] : icon

  return (
    <div
      className={cn(statusLabelStyles({ variant, withIcon: !!selectedIcon, className }))}
      {...props}
    >
      {selectedIcon && <Icon className="shrink-0" type={selectedIcon} size="xs" />}
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
