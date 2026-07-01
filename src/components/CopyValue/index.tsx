'use client'

import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, useCallback, useState } from 'react'
import { Text } from '../Text'
import { CopyIcon, EyeIcon, EyeSlashIcon } from '@/icons'
import { Tooltip } from '../Tooltip'

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
    onCopy?: () => void
  }

function CopyValue({ label, value, isSecret, className, onCopy, ...props }: CopyValueProps) {
  const [isHidden, setIsHidden] = useState(isSecret)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(value)
    onCopy?.()
  }, [value, onCopy])

  const valueClassNames = cn('text-inherit group-hover:text-foreground truncate', {
    blur: isHidden
  })

  return (
    <div className={cn(copyValueStyles({ isSecret, className }))} {...props}>
      {label && (
        <Text className="text-inherit text-nowrap" variant="StyledLabel" as="span">
          {label}
        </Text>
      )}
      <Text className={valueClassNames} variant="P3" as="p">
        {value}
      </Text>
      {isSecret && (
        <Tooltip label={isHidden ? 'Show' : 'Hide'}>
          <button onClick={() => setIsHidden(prev => !prev)}>
            {isHidden ? (
              <EyeIcon className="text-inherit group-hover:text-foreground" size="sm" />
            ) : (
              <EyeSlashIcon className="text-inherit group-hover:text-foreground" size="sm" />
            )}
          </button>
        </Tooltip>
      )}
      <Tooltip label="Copy">
        <button onClick={handleCopy}>
          <CopyIcon className="text-inherit group-hover:text-foreground" size="sm" />
        </button>
      </Tooltip>
    </div>
  )
}

export { CopyValue }
