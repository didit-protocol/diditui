'use client'

import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'


const diditAnimatedLogoStyles = cva(
  [
    'relative flex items-center justify-center overflow-hidden',
    'rounded-full md:w-[1-px]'
  ],
  {
    variants: {
      size: {
        smaller: 'w-[32px] h-[42px]',
        small: 'w-[52px] h-[69px]',
        medium: 'w-[70px] h-[93px] md:w-[100px] md:h-[133px]',
        large: 'w-[100px] h-[133px] md:w-[130px] md:h-[173px]'
      }
    },
    defaultVariants: {
      size: 'medium'
    }
  }
)

type DiditAnimatedLogoProps = VariantProps<typeof diditAnimatedLogoStyles> & {
  animate?: boolean
  backgroundClassName?: string
  gradientColors?: {
    from: string
    via: string
    to: string
  }
}

function DiditAnimatedLogo({
  size,
  animate = true,
  backgroundClassName,
  gradientColors = { from: '#493dd1', via: '#2a57f6', to: '#9ecffb' }
}: DiditAnimatedLogoProps) {
  const borderClassNames = cn('p-3.5 w-[150%] h-[120%] absolute -top-[10%] -left-1/4 rounded-full', {
    'animate-spin': animate
  })

  return (
    <div className={diditAnimatedLogoStyles({ size })} style={{ transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}>
      <div
        className={borderClassNames}
        style={{
          background: `linear-gradient(to bottom left, ${gradientColors.from} 10%, ${gradientColors.via} 30%, ${gradientColors.to} 70%)`
        }}
      />
      <div
        className={cn(
          'relative z-20 w-3/4 h-[80%] rounded-full bg-background',
          backgroundClassName
        )}
      />
    </div>
  )
}

export { DiditAnimatedLogo }
