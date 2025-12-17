'use client'

import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, FC, forwardRef } from 'react'

const iconStyles = cva(['flex items-center justify-center'], {
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

export type IconComponentProps = ComponentProps<'span'> & VariantProps<typeof iconStyles>

export function createIcon(SvgComponent: FC<React.SVGProps<SVGElement>>, displayName: string) {
  const IconComponent = forwardRef<HTMLSpanElement, IconComponentProps>(
    ({ size, className, ...props }, ref) => {
      return (
        <span ref={ref} className={cn(iconStyles({ size, className }))} {...props}>
          <SvgComponent className="size-full text-current" />
        </span>
      )
    }
  )
  IconComponent.displayName = displayName

  return IconComponent
}
