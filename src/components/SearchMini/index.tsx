'use client'

import { cn } from '@/utils'
import { useEffect, useRef, useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'
import { Icon } from '../Icon'

const DEBOUNCE_VALUE_TIME = 500

interface SearchMiniProps {
  id?: string
  className?: string
  disabled?: boolean
  placeholder?: string
  immediateFocus?: boolean
  value: string
  onChange: (searchQuery: string) => void
}

function SearchMini({
  id,
  className,
  disabled,
  placeholder,
  immediateFocus,
  value,
  onChange
}: SearchMiniProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const debounced = useDebounceCallback(onChange, DEBOUNCE_VALUE_TIME)

  useEffect(() => {
    if (immediateFocus) {
      inputRef?.current?.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const searcherClassName = cn(
    'flex w-full items-center gap-3 px-4 py-3',
    'border-b border-surface-ulo text-surface-hi',
    className
  )
  const inputClassName = cn(
    'text-xs remove-arrow :focus:shadow-none grow shrink-0 truncate',
    'placeholder:body-text placeholder:text-surface-md',
    'border-none bg-transparent p-0 !shadow-none outline-none ring-0 ring-offset-0',
    'focus:border-none focus:outline-none focus:ring-0',
    'disabled:opacity-25'
  )

  const iconClassName = cn('shrink-0', { 'opacity-25 transition-opacity duration-300': !isFocused })

  return (
    <div className={searcherClassName} id={id}>
      <div className={iconClassName}>
        <Icon size="sm" type="search" />
      </div>
      <input
        disabled={disabled}
        ref={inputRef}
        className={inputClassName}
        placeholder={placeholder}
        type="text"
        defaultValue={value}
        onBlur={() => setIsFocused(false)}
        onChange={event => debounced(event.target.value)}
        onFocus={() => setIsFocused(true)}
      />
    </div>
  )
}

export { SearchMini }
