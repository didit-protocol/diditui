import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, useState } from 'react'
import { Text } from '../Text'
import { Icon } from '../Icon'

const copyValueStyles = cva(
  [
    'flex items-center justify-center gap-3 group',
    'bg-surface-ulo py-2 px-3 rounded-3xl text-surface-md'
  ],
  {
    variants: {
      isSecret: {
        true: 'backdrop-blur-md'
      }
    },
    defaultVariants: {
      isSecret: false
    }
  }
)

type CopyValueProps = ComponentProps<'div'> &
  VariantProps<typeof copyValueStyles> & {
    value: string
    label?: string
  }

function CopyValue({ label, value, isSecret, className, ...props }: CopyValueProps) {
  const [isHidden, setIsHidden] = useState(isSecret)

  const valueClassNames = cn('text-inherit group-hover:text-foreground truncate', {
    blur: isHidden
  })

  return (
    <div className={cn(copyValueStyles({ isSecret, className }))} {...props}>
      {label && (
        <Text className="text-inherit" variant="StyledLabel" as="span">
          {label}
        </Text>
      )}
      <Text className={valueClassNames} variant="P3" as="p">
        {value}
      </Text>

      {isSecret && (
        <button onClick={() => setIsHidden(prev => !prev)}>
          <Icon
            className="text-inherit group-hover:text-foreground"
            type={isHidden ? 'eye' : 'eyeSlash'}
            size="sm"
          />
        </button>
      )}
      <button onClick={() => navigator.clipboard.writeText(value)}>
        <Icon className="text-inherit group-hover:text-foreground" type="copy" size="sm" />
      </button>
    </div>
  )
}

export { CopyValue }
