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
  required?: boolean
  isDropdownOpen?: boolean
  buttonRef?: LegacyRef<HTMLButtonElement>
  onClick: () => void
  hasError?: boolean
  showIcon?: boolean
}

function SelectDropdownTrigger({
  id = '',
  className = '',
  label,
  placeholder,
  selectedOption = { label: '', value: '', Icon: null },
  disabled = false,
  required = false,
  isDropdownOpen = false,
  buttonRef = undefined,
  hasError = false,
  showIcon = false,
  onClick
}: SelectDropdownTriggerProps) {
  const wrapperClassNames = cn(
    'w-full min-h-[68px] py-4 px-5 rounded-3xl',
    'flex items-center gap-2 bg-surface-lo hover:bg-surface-ulo',
    'transition-all duration-300 border border-transparent',
    {
      'opacity-50 hover:bg-surface-lo': disabled,
      'border-error bg-error/5': hasError,
      'bg-transparent border-foreground hover:bg-transparent': isDropdownOpen,
      'border-error': isDropdownOpen && hasError
    },
    className
  )

  const valueClassNames = cn('truncate w-fit', {
    'text-surface-md': !selectedOption.value
  })

  const rightButtonWrapperClassNames = cn([
    'transition-all duration-300',
    {
      '-rotate-180': isDropdownOpen
    }
  ])

  return (
    <button
      disabled={disabled}
      id={id}
      className={wrapperClassNames}
      ref={buttonRef}
      onClick={onClick}
      type="button"
    >
      <div className="flex flex-col gap-[6px] grow overflow-hidden min-w-0">
        {(label || required) && (
          <Text variant="StyledLabel" as="label" className="text-surface-md truncate w-fit">
            {label}
            {required && <span className="text-error text-[14px] leading-[90%]">*</span>}
          </Text>
        )}

        {!(showIcon && selectedOption.Icon) ? (
          <Text as="span" variant="P2" className={valueClassNames}>
            {selectedOption.label || placeholder}
          </Text>
        ) : (
          <div className="flex items-center gap-2">
            <selectedOption.Icon />
            <Text as="span" variant="P2" className={valueClassNames}>
              {selectedOption.label || placeholder}
            </Text>
          </div>
        )}
      </div>
      <div className={rightButtonWrapperClassNames}>
        <Icon type="chevronDown" size="sm" />
      </div>
    </button>
  )
}

export default SelectDropdownTrigger
