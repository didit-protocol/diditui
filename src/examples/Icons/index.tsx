import { Icon, svgOptions } from '@/components'
import { IconType } from '@/types'

const icons = Object.keys(svgOptions)

function IconsExample() {
  return (
    <div className="p-10 w-[900px] flex items-center justify-center gap-4 bg-background flex-wrap">
      {icons.map(icon => (
        <Icon key={icon} type={icon as IconType} size="lg" />
      ))}
    </div>
  )
}

export { IconsExample }
