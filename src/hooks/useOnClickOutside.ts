import { MutableRefObject } from 'react'
import { useEventListener } from 'usehooks-ts'

type Handler = (event: MouseEvent) => void

export function useOnClickOutside<T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  otherRef: MutableRefObject<T | null>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): void {
  useEventListener(mouseEvent, event => {
    const el = ref?.current
    const elOther = otherRef?.current
    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) {
      return
    }
    if (!elOther || elOther.contains(event.target as Node)) {
      // Do nothing if clicking otherRef's element or descendent elements
      return
    }

    handler(event)
  })
}
