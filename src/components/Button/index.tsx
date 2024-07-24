import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { Icon } from '../Icon'
import { IconType } from '@/types'
import { Spinner } from '../Spinner'

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'default' | 'primary' | 'soft'
  size?: 'md' | 'lg'
  icon?: IconType
  isLoading?: boolean
}

function Button({
  size,
  variant,
  icon,
  isLoading,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const buttonClassNames = cn([
    'relative w-full min-w-52 flex items-center rounded-full',
    'transition-all duration-300 hover:opacity-70',
    {
      'px-2 py-4': size === 'md',
      'px-3 py-5': size === 'lg',
      'bg-transparent border border-foreground text-foreground': variant === 'default',
      'bg-primary border border-primary text-background': variant === 'primary',
      '': variant === 'soft',
      'pointer-events-none': isLoading || disabled,
      'bg-surface-lo text-surface-mdlo border-surface-lo': disabled
    },
    className
  ])

  const iconWrapperClassNames = cn([
    'absolute right-2 p-[7px] rounded-full z-10',
    {
      'right-2': size === 'md',
      'right-3': size === 'lg',
      'text-foreground': variant === 'default',
      'bg-background text-primary': variant === 'primary',
      'bg-transparent text-surface-mdlo': disabled
    }
  ])

  const iconSize = variant === 'primary' ? 'xs' : 'sm'

  return (
    <button className={buttonClassNames} {...props}>
      <span className="text-sm font-medium leading-[90%] tracking-tight w-full text-center z-20 text-inherit">
        {children}
      </span>
      {icon && !isLoading && (
        <div className={iconWrapperClassNames}>
          <Icon type={icon} size={disabled ? 'sm' : iconSize} />
        </div>
      )}
      {isLoading && (
        <div className={iconWrapperClassNames}>
          <Spinner size="xs" variant={variant} />
        </div>
      )}
    </button>
  )
}

export { Button }
