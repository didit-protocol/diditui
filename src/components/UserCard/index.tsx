import { cn } from '@/utils'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import { Icon } from '../Icon'

type UserCardProps = ComponentProps<'div'> & {
  name: string
  label?: string
  avatar?: string
  radius?: 'full' | 'md' | 'sm' | 'none'
}

function UserCard({ name, label, avatar, radius = 'full', className, ...props }: UserCardProps) {
  const avatarClassNames = cn('w-[36px] h-[36px] overflow-hidden', {
    'rounded-none': radius === 'none',
    'rounded-full': radius === 'full',
    'rounded-md': radius === 'md',
    'rounded-sm': radius === 'sm'
  })

  return (
    <div className={cn('flex items-center gap-3', className)} {...props}>
      <div className={avatarClassNames}>
        {!avatar ? (
          <Icon type="didit" className="size-full object-cover" />
        ) : (
          <img src={avatar} alt="avatar" className="size-full object-cover" />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Text className="text-foreground" as="h6" variant="H6">
          {name}
        </Text>
        {label && (
          <Text className="text-surface-md" as="span" variant="Label3">
            {label}
          </Text>
        )}
      </div>
    </div>
  )
}

export { UserCard }
