import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import { Icon } from '../Icon'

const userCardStyles = cva(['flex items-center gap-3'], {
  variants: {
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: ''
    }
  },
  defaultVariants: {
    size: 'sm'
  }
})

type UserCardProps = ComponentProps<'div'> &
  VariantProps<typeof userCardStyles> & {
    name: string
    label?: string
    avatar?: string
  }

function UserCard({ name, label, avatar, size, className, ...props }: UserCardProps) {
  return (
    <div className={cn(userCardStyles({ size, className }))} {...props}>
      <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
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
