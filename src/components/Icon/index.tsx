import { cn } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps, FC } from 'react'
import { IconType } from '@/types/index.js'

// -- Svg's-------------------------------- //
import ScanSvg from '@/assets/icons/scan.svg'
import Scan2Svg from '@/assets/icons/scan2.svg'
import SettingSvg from '@/assets/icons/settings.svg'
import InfoSvg from '@/assets/icons/info.svg'
import ArrowRightSvg from '@/assets/icons/arrow-right.svg'
import WarningSvg from '@/assets/icons/warning.svg'
import CheckSvg from '@/assets/icons/check.svg'
import CopySvg from '@/assets/icons/copy.svg'
import ConnectSvg from '@/assets/icons/connect.svg'
import passKeySvg from '@/assets/icons/pass-key.svg'
import DiditSvg from '@/assets/icons/didit.svg'
import DiditLogoSvg from '@/assets/icons/didit-logo.svg'
import DiditNameLogoSvg from '@/assets/icons/didit-name-logo.svg'
import CloseSvg from '@/assets/icons/close.svg'
import CarSvg from '@/assets/icons/car.svg'
import IdCardSvg from '@/assets/icons/id-card.svg'
import PassportSvg from '@/assets/icons/passport.svg'
import CloseCircleSvg from '@/assets/icons/close-circle.svg'
import CloseCircleBoldSvg from '@/assets/icons/close-circle-bold.svg'
import CheckCircleSvg from '@/assets/icons/check-circle.svg'
import CheckCircleBoldSvg from '@/assets/icons/check-circle-bold.svg'
import RefreshSvg from '@/assets/icons/refresh.svg'
import ChevronLeftSvg from '@/assets/icons/chevron-left.svg'
import EyeSvg from '@/assets/icons/eye.svg'
import EyeSlashSvg from '@/assets/icons/eye-slash.svg'
import EmailSvg from '@/assets/icons/email.svg'
import FaceSvg from '@/assets/icons/face.svg'
import LocationSvg from '@/assets/icons/location.svg'
import SearchSvg from '@/assets/icons/search.svg'
import ShieldSearchSvg from '@/assets/icons/shield-search.svg'
import SlackSvg from '@/assets/icons/slack.svg'
import WifiSvg from '@/assets/icons/wifi.svg'
import ExternalSvg from '@/assets/icons/external.svg'

type SVGIcon = FC<React.SVGProps<SVGElement>>

export const svgOptions: Record<IconType, SVGIcon> = {
  scan: ScanSvg,
  scan2: Scan2Svg,
  settings: SettingSvg,
  info: InfoSvg,
  arrowRight: ArrowRightSvg,
  warning: WarningSvg,
  check: CheckSvg,
  copy: CopySvg,
  connect: ConnectSvg,
  passKey: passKeySvg,
  didit: DiditSvg,
  close: CloseSvg,
  diditLogo: DiditLogoSvg,
  diditNameLogo: DiditNameLogoSvg,
  idCard: IdCardSvg,
  car: CarSvg,
  passport: PassportSvg,
  closeCircle: CloseCircleSvg,
  checkCircle: CheckCircleSvg,
  closeCircleBold: CloseCircleBoldSvg,
  checkCircleBold: CheckCircleBoldSvg,
  refresh: RefreshSvg,
  chevronLeft: ChevronLeftSvg,
  eye: EyeSvg,
  eyeSlash: EyeSlashSvg,
  email: EmailSvg,
  face: FaceSvg,
  location: LocationSvg,
  search: SearchSvg,
  shieldSearch: ShieldSearchSvg,
  slack: SlackSvg,
  wifi: WifiSvg,
  external: ExternalSvg
}

const iconStyles = cva(['flex items-center justify-center'], {
  variants: {
    size: {
      xxs: 'size-[14px]',
      xs: 'size-4',
      sm: 'size-[18px]',
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
    type?: IconType
  }

function Icon({ type = 'scan', size, className, ...props }: IconProps) {
  const IconComponent = svgOptions[type] || null

  return (
    <span className={cn(iconStyles({ size, className }))} {...props}>
      <IconComponent className="size-full text-current" />
    </span>
  )
}

export { Icon }
