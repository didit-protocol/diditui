import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, FC } from 'react'
import { IconType } from '@/types/index.js'

// -- Svg's-------------------------------- //
import ScanSvg from '@/assets/icons/scan.svg'
import SettingSvg from '@/assets/icons/settings.svg'
import InfoSvg from '@/assets/icons/info.svg'
import ArrowRightSvg from '@/assets/icons/arrow-right.svg'
import WarningSvg from '@/assets/icons/warning.svg'
import CheckSvg from '@/assets/icons/check.svg'
import CopySvg from '@/assets/icons/copy.svg'
import ConnectSvg from '@/assets/icons/connect.svg'
import passKeySvg from '@/assets/icons/pass-key.svg'

type SVGIcon = FC<React.SVGProps<SVGElement>>

export const svgOptions: Record<IconType, SVGIcon> = {
  scan: ScanSvg,
  settings: SettingSvg,
  info: InfoSvg,
  arrowRight: ArrowRightSvg,
  warning: WarningSvg,
  check: CheckSvg,
  copy: CopySvg,
  connect: ConnectSvg,
  passKey: passKeySvg
}

const iconStyles = cva(['flex items-center justify-center'], {
  variants: {
    size: {
      xs: 'size-[14px]',
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
      xl: 'size-12'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

type IconProps = ComponentProps<'span'> &
  VariantProps<typeof iconStyles> & {
    type: IconType
  }

function Icon({ type, size, className, ...props }: IconProps) {
  const IconComponent = svgOptions[type]
  return (
    <span className={cn(iconStyles({ className, size }))} {...props}>
      <IconComponent className="size-full text-current" />
    </span>
  )
}

export { Icon }
