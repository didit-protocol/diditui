'use client'

import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const cardStyles = cva(['w-full rounded-[32px] overflow-hidden bg-background'], {
  variants: {
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    },
    border: {
      true: 'border border-surface-lo'
    },
    shadow: {
      true: 'shadow-card'
    }
  },
  defaultVariants: {
    padding: 'md',
    shadow: false
  }
})

type CardProps = ComponentProps<'div'> & VariantProps<typeof cardStyles>

function Card({ className, padding, border, shadow, children, ...props }: CardProps) {
  return (
    <div className={cn(cardStyles({ border, shadow, padding, className }))} {...props}>
      {children}
    </div>
  )
}

export { Card }
