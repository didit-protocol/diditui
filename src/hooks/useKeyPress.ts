import { useCallback, useEffect } from 'react'

export function useKeyPress(targetKey: string, callback: () => void) {
  const downHandler = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key === targetKey) {
        callback()
      }
    },
    [targetKey, callback]
  )

  useEffect(() => {
    window.addEventListener('keydown', downHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [downHandler])
}
