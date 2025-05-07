import { FC, SVGProps, useCallback } from 'react'
import { Text } from '@/components/Text'
import { cn } from '@/utils'

interface SelectDropdownOptionProps {
  value: string
  label: string
  Icon?: FC<SVGProps<SVGSVGElement>> | null
  id?: string
  className?: string
  dataTestId?: string
  onClick?: (value: string) => void
  iconPosition?: 'left' | 'right'
}

function SelectDropdownOption({
  label,
  value,
  Icon = null,
  id = '',
  dataTestId = '',
  className = '',
  iconPosition = 'left',
  onClick = () => {}
}: SelectDropdownOptionProps) {
  const handleClick = useCallback(() => {
    onClick(value)
  }, [value, onClick])

  const selectFieldOptionClassnames = cn(
    'flex w-full items-center gap-2 px-4 py-3 text-surface-hi',
    'hover:bg-surface-ulo/60 border-b border-surface-ulo',
    'transition-all duration-300',
    className
  )

  return (
    <li>
      <button
        className={selectFieldOptionClassnames}
        data-testid={dataTestId}
        id={id}
        type="button"
        onClick={handleClick}
      >
        {Icon && iconPosition === 'left' && <span>{<Icon />}</span>}
        <Text variant="P3" as="span">
          {label}
        </Text>
        {Icon && iconPosition === 'right' && <span>{<Icon />}</span>}
      </button>
    </li>
  )
}

export default SelectDropdownOption
