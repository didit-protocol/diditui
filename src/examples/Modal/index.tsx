import { Button, Text, Modal } from '@/components'
import { useCallback, useState } from 'react'

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onRequestClose={handleClose}>
        <div className="w-full p-6 pt-[30px] border">
          <Text variant="H4" as="h4" className="p-10" align="center">
            What is included in Didit’s Identity verification solution?
          </Text>
          <div className="flex flex-col gap-6 px-6 py-2">
            <div>
              <Text variant="H5" as="h5" className="mb-1">
                Document Verification
              </Text>
              <Text variant="P2" as="p" className="text-surface-md">
                Document integrity verification, OCR extraction, Credential reuse
              </Text>
            </div>
            <div>
              <Text variant="H5" as="h5" className="mb-1">
                Facial Verification
              </Text>
              <Text variant="P2" as="p" className="text-surface-md">
                Liveness detection, Face matching
              </Text>
            </div>
            <div>
              <Text variant="H5" as="h5" className="mb-1">
                AML List Verification
              </Text>
              <Text variant="P2" as="p" className="text-surface-md">
                Sanctions list verification, Warnings and PEP
              </Text>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export { ModalExample }
