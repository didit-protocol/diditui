'use client'

import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { Icon } from '../Icon'
import { IconType } from '@/types'
import { Spinner } from '../Spinner'
import { cva, VariantProps } from 'class-variance-authority'

const buttonStyles = cva(
  [
    'group relative w-full min-w-52 flex items-center rounded-full overflow-hidden',
    'transition-all duration-300'
  ],
  {
    variants: {
      variant: {
        default: 'bg-transparent border border-foreground text-foreground',
        white: 'bg-transparent border border-background text-background',
        primary: 'bg-primary border border-primary text-background',
        soft: 'bg-soft border border-soft text-primary',
        error: 'bg-error border border-error text-background'
      },
      size: {
        md: 'px-2 py-4 pl-4',
        lg: 'px-3 py-5 pl-5'
      },
      disabled: {
        true: 'pointer-events-none bg-surface-lo text-surface-mdlo border-surface-lo'
      },
      isLoading: {
        true: 'pointer-events-none'
      },
      animate: {
        true: '',
        false: 'hover:opacity-70'
      }
    },
    compoundVariants: [
      {
        animate: true,
        variant: 'primary',
        className: 'hover:text-primary'
      },
      {
        animate: true,
        variant: 'error',
        className: 'hover:text-error'
      }
    ],
    defaultVariants: {
      size: 'md',
      variant: 'default',
      disabled: false,
      isLoading: false,
      animate: false
    }
  }
)

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonStyles> & {
    icon?: IconType
  }

function Button({
  size = 'md',
  variant = 'default',
  icon,
  isLoading = false,
  animate = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const iconWrapperClassNames = cn([
    'absolute right-2 p-[7px] rounded-full z-20 flex justify-end items-center',
    'transition-color duration-300',
    {
      'right-2': size === 'md',
      'right-3': size === 'lg',
      'text-foreground': variant === 'default',
      'bg-background text-primary': variant === 'primary',
      'bg-background text-error': variant === 'error',
      'bg-transparent text-surface-mdlo': disabled
    }
  ])

  const backgroundClassName = cn([
    'hidden absolute right-2 size-7',
    'bg-background rounded-full z-10 transition-all duration-300',
    'group-hover:w-[calc(100%-4px)] group-hover:right-[2px] group-hover:h-[calc(100%-4px)]',
    {
      'right-2': size === 'md',
      'right-3': size === 'lg',
      'text-foreground': variant === 'default',
      'bg-background text-primary': variant === 'primary',
      'bg-background text-error': variant === 'error',
      'bg-transparent text-surface-mdlo': disabled,
      block: animate
    }
  ])

  const textClassName = cn([
    'text-sm font-medium leading-[90%] tracking-tight w-full text-center z-30',
    'text-inherit',
    { 'mr-[32px]': !!icon }
  ])

  const iconSize = variant === 'primary' ? 'xs' : 'sm'

  return (
    <button
      className={cn(buttonStyles({ variant, size, isLoading, disabled, animate, className }))}
      {...props}
    >
      <span className={textClassName}>{children}</span>
      {icon && !isLoading && (
        <div className={iconWrapperClassNames}>
          <Icon type={icon} size={disabled ? 'sm' : iconSize} />
        </div>
      )}
      {isLoading && (
        <div className={iconWrapperClassNames}>
          <Spinner size="xs" variant={variant === 'white' ? 'soft' : variant} />
        </div>
      )}
      <div className={backgroundClassName} />
    </button>
  )
}

export { Button }
