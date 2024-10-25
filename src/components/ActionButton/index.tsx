'use client'

import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { Icon } from '../Icon'
import { IconType } from '@/types'
import { Spinner } from '../Spinner'
import { cva, VariantProps } from 'class-variance-authority'
import { Text } from '../Text'

const actionButtonStyles = cva(
  [
    'group w-fit max-w-full flex items-center gap-1 rounded-[100px] overflow-hidden',
    'transition-all duration-300 p-[7px] border border-transparent'
  ],
  {
    variants: {
      variant: {
        default:
          'bg-transparent hover:bg-surface-ulo border-surface-lo text-surface-hi hover:text-foreground',
        soft: 'bg-soft/20 border-soft text-surface-hi hover:bg-soft/50 hover:text-foreground',
        primary: 'bg-primary/5 border-primary/20 text-primary hover:bg-primary/10',
        accent: 'bg-accent/10 border-accent/20 text-accent hover:bg-accent/40',
        success: 'bg-success/5 border-success/20 text-success hover:bg-success/10',
        warning: 'bg-warning/5 border-warning/20 text-warning hover:bg-warning/10',
        error: 'bg-error/5 border-error/20 text-error hover:bg-error/10'
      },
      disabled: {
        true: 'pointer-events-none opacity-50'
      },
      isLoading: {
        true: 'pointer-events-none'
      },
      isActive: {
        true: ''
      }
    },
    compoundVariants: [
      {
        variant: 'default',
        isActive: true,
        disabled: false,
        className: 'text-foreground bg-surface-ulo'
      },
      {
        variant: 'soft',
        isActive: true,
        disabled: false,
        className: 'text-foreground bg-soft/50'
      },
      {
        variant: 'primary',
        isActive: true,
        disabled: false,
        className: 'bg-primary/10'
      },
      {
        variant: 'accent',
        isActive: true,
        disabled: false,
        className: 'bg-accent/40'
      },
      {
        variant: 'success',
        isActive: true,
        disabled: false,
        className: 'bg-success/10'
      },
      {
        variant: 'warning',
        isActive: true,
        disabled: false,
        className: 'bg-warning/10'
      },
      {
        variant: 'error',
        isActive: true,
        disabled: false,
        className: 'bg-error/10'
      }
    ],
    defaultVariants: {
      variant: 'default',
      disabled: false,
      isLoading: false
    }
  }
)

type ActionButtonProps = ComponentProps<'button'> &
  VariantProps<typeof actionButtonStyles> & {
    icon?: IconType
  }

function ActionButton({
  variant = 'default',
  icon,
  isLoading = false,
  isActive = false,
  disabled,
  className,
  children,
  ...props
}: ActionButtonProps) {
  const buttonClassNames = cn(
    actionButtonStyles({ variant, isLoading, disabled, isActive, className }),
    {
      'pr-[9px]': !!icon || isLoading
    }
  )

  const iconClassNames = cn('transition-colors duration-300', {
    'text-surface-md group-hover:text-foreground': variant === 'default',
    'text-surface-hi': isActive && variant === 'default'
  })

  return (
    <button className={buttonClassNames} {...props}>
      {icon && !isLoading && <Icon type={icon} size="xs" className={iconClassNames} />}
      {isLoading && <Spinner size="xs" variant={variant === 'soft' ? 'default' : variant} />}
      <Text as="span" className="truncate" variant="Label4">
        {children}
      </Text>
    </button>
  )
}

export { ActionButton }
