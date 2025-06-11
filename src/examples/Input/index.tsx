import { Input } from '@/components'
import { useCallback, useState } from 'react'

function InputExample() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

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

  const handlePasswordValueChange = useCallback((v: string) => {
    setPassword(v)
    // min length 8
    if (v.length < 8) {
      setPasswordError('Password must be at least 8 characters')
    } else {
      setPasswordError('')
    }
  }, [])

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <Input
        label="Email"
        placeholder="Enter you email address"
        value={email}
        onValueChange={handleValueChange}
        error={error}
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        value={password}
        onValueChange={handlePasswordValueChange}
        error={passwordError}
        type="password"
      />
    </div>
  )
}

export { InputExample }
