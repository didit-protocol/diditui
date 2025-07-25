'use client'

import { FC, LegacyRef, ReactNode, SVGProps, useCallback, useMemo, useRef, useState } from 'react'
import { useKeyPress, useOnClickOutside } from '@/hooks'

import { SearchMini } from '@/components/SearchMini'

import SelectDropdownOption from './SelectDropdownOption'
import SelectDropdownTrigger from './SelectDropdownTrigger'
import { Text } from '../Text'

import { cn } from '@/utils'
interface SelectDropdownOptionType {
  label: string
  value: string
  Icon?: FC<SVGProps<SVGSVGElement>> | null
  disabled?: boolean
}

interface SelectDropdownProps {
  id?: string
  className?: string
  dataTestId?: string
  label?: string
  placeholder?: string
  value?: string
  options: SelectDropdownOptionType[]
  disabled?: boolean
  required?: boolean
  withSearch?: boolean
  showIcon?: boolean
  errorMessage?: string
  dropdownClassName?: string
  dropdownTriggerClassName?: string
  dropdownOptionClassName?: string
  dropdownSelectedOptionClassName?: string
  iconPosition?: 'left' | 'right'
  labelIcon?: ReactNode | null
  noOptionsMessage?: string
  onChange?: (value: SelectDropdownOptionType['value']) => void
  onClick?: (value?: SelectDropdownOptionType['value']) => void
}

function SelectDropdown({
  id = '',
  className = '',
  dataTestId = '',
  label = '',
  placeholder = '',
  value = undefined,
  options,
  disabled = false,
  required = false,
  withSearch = false,
  showIcon = false,
  errorMessage = '',
  dropdownClassName = '',
  dropdownTriggerClassName = '',
  dropdownOptionClassName = '',
  dropdownSelectedOptionClassName = '',
  iconPosition = 'left',
  labelIcon = null,
  noOptionsMessage = 'No options',
  onChange = (_value: string) => {},
  onClick = () => {}
}: SelectDropdownProps) {
  const buttonRef = useRef<HTMLElement | null>(null)
  const divRef = useRef<HTMLElement | null>(null)

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState('')
  const filtredOptions = useMemo(() => {
    if (searchQuery) {
      return options.filter(opt => opt.label.toLowerCase().startsWith(searchQuery.toLowerCase()))
    }

    return options
  }, [searchQuery, options])
  const selectedOption = useMemo(
    () => options.find(option => option.value === value),
    [options, value]
  )

  useKeyPress('Escape', () => setIsDropdownOpen(false))

  useOnClickOutside(buttonRef, divRef, () => setIsDropdownOpen(false))

  const handleOptionClick = useCallback(
    (_value: SelectDropdownOptionType['value']) => {
      onChange(_value)
      setIsDropdownOpen(false)
    },
    [onChange]
  )

  const handleFieldClick = useCallback(() => {
    if (!disabled) {
      onClick()
    }
  }, [onClick, disabled])

  const selectFieldClassName = cn('w-full min-w-[230px]', className)

  const dropdownClassNames = cn(
    'absolute righ-0 top-[calc(100%+8px)] w-full bg-background rounded-2xl p-2',
    'shadow-card z-50 transition-all duration-300 overflow-hidden overflow-y-auto',
    'scrollbar-none max-h-[240px]',
    {
      'cursor-pointer': !!onClick,
      'pt-0': withSearch
    },
    dropdownClassName
  )

  return (
    <div className={selectFieldClassName} data-testid={dataTestId} onClick={handleFieldClick}>
      <div className="relative">
        <SelectDropdownTrigger
          className={dropdownTriggerClassName}
          label={label}
          buttonRef={buttonRef as LegacyRef<HTMLButtonElement>}
          hasError={!!errorMessage}
          id={id}
          required={required}
          disabled={disabled}
          isDropdownOpen={isDropdownOpen}
          placeholder={placeholder}
          selectedOption={selectedOption}
          showIcon={showIcon}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          labelIcon={labelIcon}
        />
        {isDropdownOpen && (
          <div ref={divRef as LegacyRef<HTMLDivElement>} className={dropdownClassNames}>
            <div
              className={cn('sticky top-0 left-0 w-full bg-background', {
                hidden: !withSearch
              })}
            >
              <SearchMini
                immediateFocus
                placeholder="Search"
                value={searchQuery}
                onChange={setSearchQuery}
              />
            </div>
            <ul className="[&>*:last-child]:border-none">
              {!filtredOptions.length ? (
                <Text as="p" variant="P2" className="truncate p-4 text-center">
                  {noOptionsMessage}
                </Text>
              ) : (
                filtredOptions.map((option, idx) => (
                  <SelectDropdownOption
                    key={`${option.value}-${idx}`}
                    dataTestId={`${dataTestId}-option-${option.value}`}
                    Icon={option.Icon}
                    label={option.label}
                    value={option.value}
                    onClick={handleOptionClick}
                    className={cn(
                      dropdownOptionClassName,
                      value === option.value && dropdownSelectedOptionClassName
                    )}
                    iconPosition={iconPosition}
                    disabled={option.disabled}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </div>
      {errorMessage && (
        <Text
          variant="P3"
          as="span"
          className={cn('text-error mt-1 pl-1', { invisible: isDropdownOpen })}
        >
          {errorMessage}
        </Text>
      )}
    </div>
  )
}

export { SelectDropdown, type SelectDropdownOptionType, type SelectDropdownProps }
