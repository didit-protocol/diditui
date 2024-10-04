import { FC, SVGProps, useCallback } from 'react'
import clsx from 'clsx'
import { Text } from '@/components/Text'

interface SelectDropdownOptionProps {
  value: string
  label: string
  Icon?: FC<SVGProps<SVGSVGElement>> | null
  id?: string
  className?: string
  dataTestId?: string
  onClick?: (value: string) => void
}

function SelectDropdownOption({
  label,
  value,
  Icon = null,
  id = '',
  dataTestId = '',
  className = '',
  onClick = () => {}
}: SelectDropdownOptionProps) {
  const handleClick = useCallback(() => {
    onClick(value)
  }, [value, onClick])

  const selectFieldOptionClassnames = clsx(
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
        {Icon && <span>{<Icon />}</span>}
        <Text variant="P3" as="span">
          {label}
        </Text>
      </button>
    </li>
  )
}

export default SelectDropdownOption
