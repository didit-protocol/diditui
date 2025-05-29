'use client'

import { IconType } from '@/types'
import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { Spinner } from '../Spinner'

const iconButtonStyles = cva(['flex items-center justify-center', 'rounded-full border'], {
  variants: {
    variant: {
      default: 'bg-surface-ulo text-surface-hi border border-transparent',
      primary: 'bg-primary/10 text-primary border border-primary/20',
      success: 'bg-success/10 text-success border border-success/20',
      error: 'bg-error/10 text-error border border-error/20',
      warning: 'bg-warning/10 text-warning border border-warning/20'
    },
    size: {
      xs: 'p-[8px]',
      sm: 'p-[11px]',
      md: 'p-4',
      lg: 'p-5'
    },
    withBorder: {
      true: 'border-surface-lo',
      false: 'border-transparent'
    }
  },
  compoundVariants: [
    {
      variant: 'primary',
      withBorder: true,
      className: 'border-primary/20'
    }
  ],
  defaultVariants: {
    withBorder: false,
    size: 'sm',
    variant: 'default'
  }
})

type IconButtonProps = ComponentProps<'button'> &
  VariantProps<typeof iconButtonStyles> & {
    icon?: IconType
    label?: string
    isLoading?: boolean
  }

function IconButton({
  icon = 'scan',
  label,
  isLoading,
  size,
  variant,
  withBorder,
  className,
  ...props
}: IconButtonProps) {
  const buttonClassNames = cn(
    [
      'flex flex-col items-center justify-center gap-[6px] text-surface-hi',
      'opacity-70 hover:opacity-100 transition-opacity duration-300',
      'disabled:opacity-50 disabled:hover:opacity-50'
    ],
    className,
    {
      'text-primary': variant === 'primary',
      'opacity-100': isLoading
    }
  )

  return (
    <button className={buttonClassNames} {...props}>
      <div className={cn(iconButtonStyles({ size, variant, withBorder }))}>
        {isLoading ? (
          <Spinner size={size} variant={variant} />
        ) : (
          <Icon className="text-inherit" type={icon} size={size} />
        )}
      </div>
      {label && (
        <Text className="text-inherit" variant="P3">
          {label}
        </Text>
      )}
    </button>
  )
}

export { IconButton }
