import { cn } from '@/utils'
import { ComponentProps, useCallback } from 'react'
import { Text } from '../Text'

type CheckboxProps = Omit<ComponentProps<'input'>, 'onChange'> & {
  label?: string
  onToggle?: (checked: boolean) => void
}

function CheckBox({ onToggle = () => {}, label, checked, id, className, ...props }: CheckboxProps) {
  const wrapperClassNames = cn(['inline-flex items-center gap-4'], className)

  const inputClassNames = cn([
    'w-4 h-4 text-primary hover:bg-surface-lo border border-surface-mdlo rounded',
    'focus:ring-transparent focus:ring-0 focus:outline-none'
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
        value=""
        checked={checked}
        onChange={handleToggle}
        className={inputClassNames}
        {...props}
      />
      {label && (
        <Text as="label" htmlFor={id} variant="Label3" className="text-inheret">
          {label}
        </Text>
      )}
    </div>
  )
}

export { CheckBox }
