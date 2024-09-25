import { Input } from '@/components'
import { useCallback, useState } from 'react'

function InputExample() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleValueChange = useCallback((v: string) => {
    setEmail(v)
    if (v) {
      // check if valid email
      const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailExp.test(v)) {
        setError('Invalid email')
      } else {
        setError('')
      }
    } else {
      setError('')
    }
  }, [])

  return (
    <div className="w-full flex items-center justify-center">
      <Input
        label="Email"
        placeholder="Enter you email address"
        value={email}
        onValueChange={handleValueChange}
        error={error}
      />
    </div>
  )
}

export { InputExample }
