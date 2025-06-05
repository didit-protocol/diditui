'use client'

import OriginalReactModal, { Props as ReactModalProps } from 'react-modal'
import { IconButton } from '../IconButton'
import { cn } from '@/utils'
import { useEffect } from 'react'

interface Props extends ReactModalProps {
  withBorder?: boolean
  appElementId?: string
  contentLabel?: ReactModalProps['contentLabel']
  className?: ReactModalProps['className']
  overlayClassName?: ReactModalProps['overlayClassName']
  children?: ReactModalProps['children']
  onRequestClose?: ReactModalProps['onRequestClose']
}

function Modal({
  children,
  contentLabel = 'modal',
  className,
  overlayClassName,
  withBorder = false,
  appElementId = '#__next',
  onRequestClose,
  ...props
}: Props) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      OriginalReactModal.setAppElement(appElementId)
    }
  }, [appElementId])

  const overlayClassNameBase = cn([
    'fixed right-0 left-0 bottom-0 z-[1000] h-screen overflow-y-auto',
    'overflow-x-hidden md:inset-0 md:h-full bg-foreground/5 backdrop-blur-md',
    overlayClassName
  ])

  const contentClassName = cn([
    'font-inter size-full flex items-end justify-center md:items-center overflow-visible'
  ])

  const contentClassNameCard = cn([
    'relative max-h-[90%] overflow-hidden rounded-t-[32px]',
    'bg-background animate-slide-in shadow-card opacity-0 pt-6',
    'md:rounded-[32px] md:max-w-[90%]',
    { 'border border-surface-lo': withBorder },
    className
  ])

  return (
    <OriginalReactModal
      closeTimeoutMS={300}
      className={contentClassName}
      overlayClassName={overlayClassNameBase}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      {...props}
    >
      <div className={contentClassNameCard}>
        <IconButton
          className="absolute right-6 top-6"
          icon="close"
          size="xs"
          onClick={onRequestClose}
        />
        {children}
      </div>
    </OriginalReactModal>
  )
}

export { Modal }
