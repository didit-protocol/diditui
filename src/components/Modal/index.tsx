import ReactModal, { Props as ModalProps } from 'react-modal'
import { IconButton } from '../IconButton'
import { cn } from '@/utils'

function Modal({
  children,
  contentLabel = 'modal',
  overlayClassName,
  className,
  onRequestClose,
  ...props
}: ModalProps) {
  const overlayClassNameBase = cn([
    'fixed right-0 left-0 bottom-0 z-[1000] h-screen overflow-y-auto',
    'overflow-x-hidden md:inset-0 md:h-full bg-foreground/5 backdrop-blur-md',
    overlayClassName
  ])

  const contentClassName = cn([
    'font-inter size-full flex items-end justify-center md:items-center overflow-visible'
  ])

  const contentClassNameCard = cn([
    'relative max-h-[90vh] w-full md:w-fit animate-slide-in rounded-t-[32px] opacity-0',
    'md:rounded-[32px] overflow-hidden bg-background p-6 shadow-card min-w-[300px]',
    className
  ])

  return (
    <ReactModal
      closeTimeoutMS={300}
      className={contentClassName}
      data-testid="modalxxxx"
      overlayClassName={overlayClassNameBase}
      contentLabel={contentLabel}
      onRequestClose={onRequestClose}
      {...props}
    >
      <div className={contentClassNameCard}>
        <IconButton className="ml-auto" icon="close" size="xs" onClick={onRequestClose} />
        {children}
      </div>
    </ReactModal>
  )
}

export { Modal }
