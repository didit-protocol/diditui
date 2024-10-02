import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { IconType } from '@/types'
import { Text } from '../Text'

type InputProps = ComponentProps<'input'> & {
  label: string
  placeholder: string
  value: string
  icon?: IconType
  diabled?: boolean
  error?: string
  onValueChange?: (v: string) => void
}

function Input({
  label,
  placeholder,
  value,
  disabled,
  className,
  error,
  onValueChange = () => {},
  ...props
}: InputProps) {
  const inputClassNames = cn(
    [
      'w-full min-h-[68px] bg-surface-lo pt-[20px] pl-[20px] pr-14',
      'rounded-3xl placeholder:text-sm placeholder:font-normal border-transparent',
      'placeholder:leading-[140%] placeholder:tracking-tight',
      'placeholder:text-surface-mdlo text-sm font-normal leading-[140%] tracking-tight',
      'focus:ring-0 focus:bg-transparent focus:border-foreground',
      className
    ],
    {
      'opacity-80': disabled,
      'border-error focus:border-error bg-error/5': error
    }
  )

  const clearButtonClassNames = cn(
    ['flex justify-center align-items-center absolute right-3 top-[26px]', 'z-20 hover:opacity-80'],
    {
      invisible: !value
    }
  )

  return (
    <div className="w-full relative">
      <Text
        variant="StyledLabel"
        as="label"
        className="absolute left-[22px] top-[12px] text-surface-md truncate w-[85%]"
      >
        {label}
      </Text>
      <input
        className={inputClassNames}
        value={value}
        type="email"
        onChange={e => onValueChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
      <button className={clearButtonClassNames} onClick={() => onValueChange('')}>
        <Text variant="StyledLabel" as="span" className="text-[9px] text-surface-md m-0">
          CLEAR
        </Text>
      </button>
      <Text variant="P3" as="span" className="text-error mt-1 pl-1 w-full block">
        {error}
      </Text>
    </div>
  )
}

export { Input }
