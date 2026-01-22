'use client'

import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, CSSProperties, forwardRef } from 'react'
import Svg from '@/assets/icons/spinner.svg'

const spinnerStyles = cva(['flex items-center justify-center'], {
  variants: {
    size: {
      xxs: 'size-[14px]',
      xs: 'size-4',
      sm: 'size-[18px]',
      md: 'size-5',
      lg: 'size-6',
      xl: 'size-12'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export type SpinnerIconProps = ComponentProps<'span'> &
  VariantProps<typeof spinnerStyles> & {
    color?: string
  }

export const SpinnerIcon = forwardRef<HTMLSpanElement, SpinnerIconProps>(
  ({ size, className, color, style, ...props }, ref) => {
    const customStyle: CSSProperties = {
      ...style,
      ...(color && { color }),
    }

    return (
      <span
        ref={ref}
        className={cn(spinnerStyles({ size, className }))}
        style={customStyle}
        {...props}
      >
        <Svg className="size-full text-current" />
      </span>
    )
  }
)

SpinnerIcon.displayName = 'SpinnerIcon'
