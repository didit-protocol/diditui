import { Button, Tooltip } from '@/components'

function TooltipExample() {
  return (
    <div className="w-full flex items-center justify-center">
      <Tooltip label="Settings" direction="right">
        <Button variant="primary">Hover me</Button>
      </Tooltip>
    </div>
  )
}

export { TooltipExample }
