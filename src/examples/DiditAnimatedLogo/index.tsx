import { DiditAnimatedLogo } from '@/components'

function AnimatedLogoExample() {
  return (
    <div className="p-10 w-[900px] border border-error flex items-center justify-center gap-4 bg-background">
      <DiditAnimatedLogo
        size="smaller"
        backgroundClassName="bg-background"
        gradientColors={{
          from: '#FF6B6B',
          via: '#FF8E53',
          to: '#FFAF40'
        }}
      />
      <DiditAnimatedLogo
        size="smaller"
        backgroundClassName="bg-background"
        gradientColors={{
          from: '#4158D0',
          via: '#C850C0',
          to: '#FFCC70'
        }}
      />
      <DiditAnimatedLogo
        size="smaller"
        backgroundClassName="bg-background"
        gradientColors={{
          from: '#0093E9',
          via: '#48B1EA',
          to: '#80D0C7'
        }}
      />
      <DiditAnimatedLogo
        size="smaller"
        backgroundClassName="bg-background"
        gradientColors={{
          from: '#8EC5FC',
          via: '#E0C3FC',
          to: '#FBC2EB'
        }}
      />
    </div>
  )
}

export { AnimatedLogoExample }
