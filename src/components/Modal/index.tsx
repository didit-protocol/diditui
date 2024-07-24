import clsx from 'clsx'
import { Modal as FlowbiteModal } from 'flowbite-react/components/Modal'
import { ComponentProps } from 'react'
import { IconButton } from '../IconButton'

const customTheme = {
  root: {
    base: 'fixed right-0 left-0 bottom-0 z-[1000] h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full border',
    show: {
      on: 'flex bg-background',
      off: 'hidden'
    }
  },
  content: {
    base: 'size-full flex items-end md:items-center md:w-fit overflow-visible',
    inner:
      'relative max-h-[90vh] w-full animate-slide-in rounded-t-[32px] opacity-0 md:rounded-[32px] overflow-hidden bg-background p-6 shadow-card min-w-[300px]'
  },
  body: {
    base: 'scrollbar-none min-h-[100px] flex-1 overflow-auto',
    popup: 'pt-0'
  }
}

type ModalProps = ComponentProps<'div'> & {
  isOpen?: boolean
  dataTestId?: string
  closeOnBackdropClick?: boolean
  onClose?: () => void
}

function Modal({
  children,
  isOpen = false,
  closeOnBackdropClick = true,
  className,
  onClose = () => {},
  ...props
}: ModalProps) {
  return (
    <FlowbiteModal
      className={clsx('font-inter')}
      show={isOpen}
      theme={customTheme}
      onClose={onClose}
      dismissible={closeOnBackdropClick}
      {...props}
    >
      <IconButton className="ml-auto" icon="close" size="xs" onClick={onClose} />
      <div className={className}>{children}</div>
    </FlowbiteModal>
  )
}

export { Modal }
