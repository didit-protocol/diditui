'use client'

import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const spinnerStyles = cva(['flex items-center justify-center animate-spin'], {
  variants: {
    variant: {
      default: '',
      primary: '',
      soft: '',
      accent: '',
      error: ''
    },
    size: {
      xs: 'size-[14px]',
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
      xl: 'size-12'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'md'
  }
})

type SpinnerProps = ComponentProps<'span'> & VariantProps<typeof spinnerStyles>

function Spinner({ size, variant = 'default', className, ...props }: SpinnerProps) {
  const path1ClassName = cn({
    'stroke-foreground/20': variant === 'default',
    'stroke-primary/20': variant === 'primary',
    'stroke-soft/30': variant === 'soft',
    'stroke-accent/30': variant === 'accent',
    'stroke-error/30': variant === 'error'
  })

  const path2ClassName = cn({
    'stroke-foreground': variant === 'default',
    'stroke-primary': variant === 'primary',
    'stroke-soft': variant === 'soft',
    'stroke-accent': variant === 'accent',
    'stroke-error': variant === 'error'
  })

  return (
    <span className={cn(spinnerStyles({ size, className }))} {...props}>
      <svg
        className="size-full"
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
      >
        <path
          d="M52 28C52 31.1517 51.3792 34.2726 50.1731 37.1844C48.967 40.0962 47.1992 42.742 44.9706 44.9706C42.742 47.1992 40.0962 48.967 37.1844 50.1731C34.2726 51.3792 31.1517 52 28 52C24.8483 52 21.7274 51.3792 18.8156 50.1731C15.9038 48.967 13.258 47.1992 11.0294 44.9706C8.80083 42.742 7.033 40.0962 5.82689 37.1844C4.62078 34.2726 4 31.1517 4 28C4 24.8483 4.62078 21.7274 5.82689 18.8156C7.03301 15.9038 8.80083 13.258 11.0294 11.0294C13.258 8.80083 15.9038 7.033 18.8156 5.82689C21.7274 4.62078 24.8483 4 28 4C31.1517 4 34.2726 4.62078 37.1844 5.82689C40.0962 7.03301 42.742 8.80083 44.9706 11.0294C47.1992 13.258 48.967 15.9038 50.1731 18.8156C51.3792 21.7274 52 24.8483 52 28L52 28Z"
          className={path1ClassName}
          strokeWidth="8"
        />
        <path
          d="M52 28C52 33.0683 50.3955 38.0065 47.4164 42.1068C44.4373 46.2072 40.2366 49.2592 35.4164 50.8254C30.5962 52.3915 25.4038 52.3915 20.5836 50.8254C15.7633 49.2592 11.5627 46.2072 8.58359 42.1068"
          className={path2ClassName}
          strokeWidth="8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

export { Spinner }
