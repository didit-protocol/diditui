import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Text } from '../Text'

const statusLabelStyles = cva(
  [
    'border border-foreground',
    'rounded-3xl',
    'p-2',
    'bg-transparent',
    'flex items-center justify-center'
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary/10 border-primary/20 text-primary',
        accent: 'bg-accent/10 border-accent/20 text-accent',
        success: 'bg-success/10 border-success/20 text-success',
        warning: 'bg-warning/10 border-warning/20 text-warning',
        error: 'bg-error/10 border-error/20 text-error'
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)

type StatusLabelProps = ComponentProps<'div'> &
  VariantProps<typeof statusLabelStyles> & {
    label: string
  }

function StatusLabel({ label, variant, className, ...props }: StatusLabelProps) {
  return (
    <div className={cn(statusLabelStyles({ variant, className }))} {...props}>
      <Text className="text-inherit" variant="StyledLabel" as="span">
        {label}
      </Text>
    </div>
  )
}

export { StatusLabel }
