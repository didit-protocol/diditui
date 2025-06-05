'use client'

import OriginalReactModal, { Aria, Classes, OnAfterOpenCallback } from 'react-modal'
import { IconButton } from '../IconButton'
import { cn } from '@/utils'
import {
  ComponentPropsWithRef,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  ReactNode,
  useEffect
} from 'react'

interface Props {
  withBorder?: boolean
  appElementId?: string

  testId?: string | undefined
  id?: string | undefined
  children?: ReactNode
  isOpen: boolean
  portalClassName?: string | undefined
  bodyOpenClassName?: string | null | undefined
  htmlOpenClassName?: string | null | undefined
  className?: string | Classes | undefined
  overlayClassName?: string | Classes | undefined
  appElement?: HTMLElement | HTMLElement[] | HTMLCollection | NodeList | undefined
  onAfterOpen?: OnAfterOpenCallback | undefined
  onAfterClose?(): void
  onRequestClose?(event: MouseEvent | KeyboardEvent): void
  closeTimeoutMS?: number | undefined
  ariaHideApp?: boolean | undefined
  shouldFocusAfterRender?: boolean | undefined
  shouldCloseOnOverlayClick?: boolean | undefined
  shouldCloseOnEsc?: boolean | undefined
  shouldReturnFocusAfterClose?: boolean | undefined
  preventScroll?: boolean | undefined
  parentSelector?(): HTMLElement
  aria?: Aria | undefined
  data?: unknown
  role?: string | null | undefined
  contentLabel?: string | undefined
  contentRef?: ((instance: HTMLDivElement) => void) | undefined
  overlayRef?: ((instance: HTMLDivElement) => void) | undefined
  overlayElement?:
    | ((props: ComponentPropsWithRef<'div'>, contentEl: ReactElement) => ReactElement)
    | undefined
  contentElement?:
    | ((props: ComponentPropsWithRef<'div'>, children: ReactNode) => ReactElement)
    | undefined
}

function Modal({
  children,
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
