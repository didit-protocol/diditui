import { cn } from '@/utils'
import { ComponentProps, useRef, useState } from 'react'
import { IconType } from '@/types'
import { Text } from '../Text'
import { Tooltip } from '../Tooltip'
import { Icon } from '../Icon'

type InputProps = ComponentProps<'input'> & {
  label: string
  placeholder: string
  value: string
  icon?: IconType
  diabled?: boolean
  error?: string
  showClearButton?: boolean
  showCopyButton?: boolean
  onValueChange?: (v: string) => void
  onCopyClick?: () => void
}

function Input({
  label,
  placeholder,
  value,
  disabled,
  className,
  error,
  showClearButton = true,
  showCopyButton = false,
  type = 'text',
  onValueChange = () => {},
  onCopyClick,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const isClearButtonVisible = showClearButton && value && !showCopyButton
  const isCopyButtonVisible = showCopyButton && value

  const wrapperClassNames = cn(
    'w-full min-h-[68px] py-4 px-5 cursor-text rounded-3xl',
    'flex items-center gap-2 bg-surface-lo hover:bg-surface-ulo',
    'transition-all duration-300 border border-transparent',
    {
      'opacity-80': disabled,
      'border-error bg-error/5': error,
      'bg-transparent border-foreground hover:bg-transparent': isFocused,
      'border-error': isFocused && error
    }
  )

  const inputClassNames = cn(
    'text-sm font-normal leading-[140%] tracking-tight p-0 bg-transparent',
    'placeholder:text-sm placeholder:font-normal border-transparent',
    'placeholder:leading-[140%] placeholder:tracking-tight',
    'placeholder:text-surface-mdlo',
    'focus:ring-0 focus:border-transparent'
  )

  const rightButtonWrapperClassNames = cn([
    'size-8 flex justify-center align-items-center hover:opacity-80',
    'text-surface-md',
    { invisible: !isClearButtonVisible && !isCopyButtonVisible }
  ])

  return (
    <div className={className}>
      <div className={wrapperClassNames} onClick={() => inputRef.current?.focus()}>
        <div className="flex flex-col gap-[6px] grow overflow-hidden min-w-0">
          <Text
            variant="StyledLabel"
            as="label"
            className="text-surface-md cursor-pointer truncate w-fit"
          >
            {label}
          </Text>
          <input
            ref={inputRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={inputClassNames}
            value={value}
            type={type}
            onChange={e => onValueChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            {...props}
          />
        </div>
        <div className={rightButtonWrapperClassNames}>
          {isClearButtonVisible && (
            <button onClick={() => onValueChange('')} disabled={disabled}>
              <Text variant="StyledLabel" as="span" className="text-[9px] m-0">
                CLEAR
              </Text>
            </button>
          )}
          {isCopyButtonVisible && (
            <Tooltip label="Copy">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(value)
                  onCopyClick?.()
                }}
              >
                <Icon type="copy" size="sm" />
              </button>
            </Tooltip>
          )}
        </div>
      </div>
      <Text variant="P3" as="span" className="text-error mt-1 pl-1">
        {error}
      </Text>
    </div>
  )
}

export { Input }
