'use client'

import { cn } from '@/utils'
import { ComponentProps, useRef, useState } from 'react'
import { Icon } from '../Icon'
import { Text } from '../Text'

type SearchInputProps = ComponentProps<'input'> & {
  label: string
  placeholder: string
  value: string
  diabled?: boolean
  error?: string
  onValueChange?: (v: string) => void
}

function SearchInput({
  label,
  placeholder,
  value,
  disabled,
  className,
  error,
  onValueChange = () => {},
  ...props
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  const wrapperClassNames = cn(
    [
      'w-full overflow-hidden min-h-[68px] py-2 pr-2 cursor-pointer',
      'flex items-center gap-2 border-b-[1.5px] border-transparent',
      'focus:bg-transparent focus:border-foreground transition-all duration-300'
    ],
    {
      'opacity-80': disabled,
      'border-foreground': isFocused,
      'border-error': error
    },
    className
  )

  const inputClassNames = cn([
    ' placeholder:text-sm placeholder:font-normal placeholder:leading-[140%]',
    'placeholder:text-surface-mdlo text-sm font-normal leading-[140%]',
    'placeholder:tracking-tight tracking-tight',
    'focus:ring-0 active:border-none bg-transparent border-none transition-all duration-300',
    'p-0 m-0'
  ])

  const clearButtonClassNames = cn(
    ['flex justify-center align-items-center hover:opacity-80 p-[2px]'],
    {
      invisible: !value
    }
  )

  const leftIconClassNames = cn(
    ['rounded-full bg-surface-ulo p-[9px] opacity-70', 'cursor-pointer hover:opacity-100'],
    {
      'opacity-100': isFocused,
      'bg-error/5': error && isFocused
    }
  )

  return (
    <div className="w-full overflow-hidden">
      <div className={wrapperClassNames} onClick={() => inputRef.current?.focus()}>
        <div className={leftIconClassNames}>
          <Icon type="search" size="sm" />
        </div>
        <div className="flex flex-col gap-[6px] grow overflow-hidden min-w-0">
          <Text
            variant="StyledLabel"
            as="label"
            className="text-surface-md cursor-pointer truncate"
          >
            {label}
          </Text>
          <input
            ref={inputRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={inputClassNames}
            value={value}
            type="text"
            onChange={e => onValueChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            {...props}
          />
        </div>
        <button className={clearButtonClassNames} onClick={() => onValueChange('')}>
          <Icon type="closeCircleBold" size="sm" className="text-surface-mdlo" />
        </button>
      </div>
      <Text variant="P3" as="span" className="text-error mt-1">
        {error}
      </Text>
    </div>
  )
}

export { SearchInput }
