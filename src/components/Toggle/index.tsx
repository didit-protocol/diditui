'use client'

import { cn } from '@/utils'
import { useCallback } from 'react'
import { Text } from '../Text'
import { cva, VariantProps } from 'class-variance-authority'

const toggleStyles = cva(
  [
    'relative bg-surface-lo peer-focus:outline-none',
    'rounded-full peer peer-checked:after:translate-x-full ',
    'rtl:peer-checked:after:-translate-x-full peer-checked:after:border-background',
    `after:content-[''] after:absolute`,
    'after:bg-background after:border-background after:border after:rounded-full',
    'after:transition-all peer-checked:bg-primary'
  ],
  {
    variants: {
      variant: {
        primary: 'peer-checked:bg-primary',
        success: 'peer-checked:bg-success',
        error: 'peer-checked:bg-error'
      },
      size: {
        md: 'w-11 h-6 after:h-5 after:w-5 after:top-[2px] after:start-[2px]',
        sm: 'w-[30px] h-4 after:h-[14px] after:w-[14px] after:top-[1px] after:start-[1px]'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

type ToggleProps = VariantProps<typeof toggleStyles> & {
  id?: string
  className?: string
  label?: string
  checked?: boolean
  disabled?: boolean
  onToggle: (checked: boolean) => void
}

function Toggle({
  id,
  className,
  label,
  checked,
  disabled,
  variant = 'primary',
  size = 'md',
  onToggle = () => {}
}: ToggleProps) {
  const handleToggle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onToggle(event.target.checked)
    },
    [onToggle]
  )

  const wrapperClassNames = cn('inline-flex items-center gap-4 cursor-pointer', className)

  return (
    <label className={wrapperClassNames}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleToggle}
        id={id}
        className="sr-only peer"
        disabled={disabled}
      />
      <div className={cn(toggleStyles({ variant, size, className }))} />
      {label && (
        <Text as="span" variant="P3" className="text-inheret">
          {label}
        </Text>
      )}
    </label>
  )
}

export { Toggle }
