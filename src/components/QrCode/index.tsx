import { cn } from '@/utils'
import { ComponentProps, ElementType, useMemo } from 'react'
import { Icon } from '../Icon'
import { QrCodeUtil } from './generator'
import { IconType } from '@/types'

type QrCodeProps = ComponentProps<'div'> & {
  uri: string
  size?: 'sm' | 'md' | 'lg' | number
  color?: string
  iconName?: IconType
}

const iconSizeMap = {
  sm: 120,
  md: 200,
  lg: 256
}

function QrCode({ uri, size = 'md', color, iconName = 'didit', className, ...props }: QrCodeProps) {
  if (!uri) {
    return null
  }

  const svgSize = typeof size === 'number' ? size : iconSizeMap[size]

  const dots = useMemo(() => QrCodeUtil.generate(uri, svgSize, svgSize / 4, color), [uri, svgSize])

  const divClassNames = cn(
    ['size-fit', 'flex  items-center justify-center', 'relative overflow-hidden aspect-square'],
    className
  )

  const iconClassNames = cn([
    'size-full absolute top-1/2 left-1/2',
    'transform -translate-x-1/2 -translate-y-1/2 scale-[0.25]',
    'text-primary rounded-3xl overflow-hidden'
  ])

  return (
    <div className={divClassNames} {...props}>
      <Icon type={iconName} className={iconClassNames} />
      <svg width={svgSize} height={svgSize}>
        {dots}
      </svg>
    </div>
  )
}

export { QrCode }
