import { Card, CheckBox, IconButton, Text } from '@/components'

function CardExample() {
  return (
    <Card className="w-[391px]" padding="md" shadow>
      <IconButton icon="close" size="xs" className="ml-auto" />
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
        <CheckBox label="Checkbox" checked={true} onToggle={() => {}} disabled />
      </div>
    </Card>
  )
}

export { CardExample }
