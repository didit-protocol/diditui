'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { cn } from '@/utils'

interface TooltipProps {
  label: string
  children: React.ReactNode
  className?: string
  tooltipClassName?: string
  direction?: 'top' | 'bottom' | 'left' | 'right'
}

function Tooltip({
  label,
  children,
  direction = 'top',
  className,
  tooltipClassName
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const getPosition = useCallback(() => {
    let top = 0
    let left = 0
    if (triggerRef.current && tooltipRef.current && isVisible) {
      const triggerRect = triggerRef.current.getBoundingClientRect()
      const tooltipRect = tooltipRef.current.getBoundingClientRect()
      if (direction === 'top') {
        top = (tooltipRect.height + 12) * -1
        left = triggerRect.width / 2 - tooltipRect.width / 2
      }
      if (direction === 'bottom') {
        top = triggerRect.height + 12
        left = triggerRect.width / 2 - tooltipRect.width / 2
      }
      if (direction === 'left') {
        top = triggerRect.height / 2 - tooltipRect.height / 2
        left = (tooltipRect.width + 12) * -1
      }
      if (direction === 'right') {
        top = triggerRect.height / 2 - tooltipRect.height / 2
        left = triggerRect.width + 12
      }

      return { top, left }
    }

    return { top, left }
  }, [direction, isVisible])

  useEffect(() => {
    if (triggerRef.current && tooltipRef.current) {
      const { top, left } = getPosition()
      tooltipRef.current.style.top = `${top}px`
      tooltipRef.current.style.left = `${left}px`
    }
  }, [getPosition])

  const wrapperClassNames = cn(
    'absolute z-10 px-3 py-2 text-background text-sm bg-surface-hi',
    'rounded-xl shadow-sm whitespace-nowrap transition-opacity duration-300',
    { hidden: !isVisible },
    tooltipClassName
  )

  const arrowClassNames = cn([
    'absolute w-3 h-3 bg-surface-hi',
    'transform rotate-45',
    {
      hidden: !isVisible,
      'left-1/2 -translate-x-1/2': direction === 'top',
      'left-1/2 -translate-x-1/2 -top-1/2 translate-y-full': direction === 'bottom',
      'translate-y-full -translate-x-1/2 top-0 left-full': direction === 'left',
      'translate-y-full translate-x-1/2 top-0 right-full': direction === 'right'
    }
  ])

  return (
    <div
      className={cn('relative inline-flex', className)}
      ref={triggerRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <div ref={tooltipRef} role="tooltip" className={wrapperClassNames}>
        {label}
        <div className={arrowClassNames}></div>
      </div>
    </div>
  )
}

export { Tooltip }
