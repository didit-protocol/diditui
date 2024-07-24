import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'

const cardStyles = cva(['w-full rounded-[32px] overflow-hidden'], {
  variants: {
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
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

function Card({ className, padding, shadow, children, ...props }: CardProps) {
  return (
    <div className={cn(cardStyles({ shadow, padding, className }))} {...props}>
      {children}
    </div>
  )
}

export { Card }
