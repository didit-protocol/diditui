import { LegacyRef } from 'react'

import { SelectDropdownOptionType } from './index'
import { Icon } from '@/components/Icon'
import { cn } from '@/utils'
import { Text } from '@/components/Text'

interface SelectDropdownTriggerProps {
  id?: string
  className?: string
  label: string
  placeholder: string
  selectedOption?: SelectDropdownOptionType
  disabled?: boolean
  isDropdownOpen?: boolean
  buttonRef?: LegacyRef<HTMLButtonElement>
  onClick: () => void
  hasError?: boolean
}

function SelectDropdownTrigger({
  id = '',
  className = '',
  label,
  placeholder,
  selectedOption = { label: '', value: '', Icon: null },
  disabled = false,
  isDropdownOpen = false,
  buttonRef = undefined,
  hasError = false,
  onClick
}: SelectDropdownTriggerProps) {
  const wrapperClassNames = cn(
    'w-full min-h-[68px] py-4 px-5 cursor-text rounded-3xl',
    'flex items-center gap-2 bg-surface-lo hover:bg-surface-ulo',
    'transition-all duration-300 border border-transparent',
    {
      'opacity-80': disabled,
      'border-error bg-error/5': hasError,
      'bg-transparent border-foreground hover:bg-transparent': isDropdownOpen,
      'border-error': isDropdownOpen && hasError
    },
    className
  )

  const valueClassNames = cn('truncate w-fit', {
    'text-surface-background': isDropdownOpen,
    'text-surface-md': !isDropdownOpen
  })

  const rightButtonWrapperClassNames = cn([
    'transition-all duration-300',
    {
      '-rotate-180': isDropdownOpen
    }
  ])

  return (
    <button id={id} className={wrapperClassNames} ref={buttonRef} onClick={onClick}>
      <div className="flex flex-col gap-[6px] grow overflow-hidden min-w-0">
        <Text variant="StyledLabel" as="label" className="text-surface-md truncate w-fit">
          {label}
        </Text>
        <Text as="span" variant="P2" className={valueClassNames}>
          {selectedOption.label || placeholder}
        </Text>
      </div>
      <div className={rightButtonWrapperClassNames}>
        <Icon type="chevronDown" size="sm" />
      </div>
    </button>
  )
}

export default SelectDropdownTrigger
