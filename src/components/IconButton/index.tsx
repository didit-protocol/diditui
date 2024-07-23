import { IconType } from '@/types'
import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Icon } from '../Icon'
import { Text } from '../Text'

const iconButtonStyles = cva(
  ['bg-surface-lo', 'rounded-full', 'flex items-center justify-center'],
  {
    variants: {
      size: {
        sm: 'p-[11px]',
        md: 'p-4',
        lg: 'p-5'
      }
    },
    defaultVariants: {
      size: 'sm'
    }
  }
)

type IconButtonProps = ComponentProps<'button'> &
  VariantProps<typeof iconButtonStyles> & {
    icon: IconType
    label?: string
  }

function IconButton({ icon, label, size, className, ...props }: IconButtonProps) {
  const buttonClassNames = cn(
    [
      'flex flex-col items-center justify-center gap-[6px]',
      'opacity-70 hover:opacity-100',
      'transition-opacity duration-300',
      'text-surface-hi'
    ],
    className
  )
  return (
    <button className={buttonClassNames} {...props}>
      <div className={cn(iconButtonStyles({ size }))}>
        <Icon className="text-inherit" type={icon} size={size} />
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
