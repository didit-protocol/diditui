import { cn } from '@/utils'
import { useCallback } from 'react'
import { Text } from '../Text'

interface CheckboxProps {
  id?: string
  className?: string
  label?: string
  size?: 'sm' | 'md' | 'lg'
  checked?: boolean
  disabled?: boolean
  onToggle?: (checked: boolean) => void
}

function CheckBox({
  id,
  className,
  label,
  size = 'md',
  checked,
  disabled,
  onToggle = () => {}
}: CheckboxProps) {
  const wrapperClassNames = cn(['inline-flex items-center gap-4'], className)

  const inputClassNames = cn([
    'w-5 h-5 text-primary hover:bg-surface-lo border border-surface-mdlo rounded',
    'focus:ring-transparent focus:ring-0 focus:outline-none',
    size === 'sm' && 'w-4 h-4',
    size === 'lg' && 'w-6 h-6'
  ])

  const handleToggle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onToggle(event.target.checked)
    },
    [onToggle]
  )

  return (
    <div className={wrapperClassNames}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        className={inputClassNames}
        onChange={handleToggle}
        disabled={disabled}
      />
      {label && (
        <Text as="label" htmlFor={id} variant="Label3" className="text-inheret truncate">
          {label}
        </Text>
      )}
    </div>
  )
}

export { CheckBox }
