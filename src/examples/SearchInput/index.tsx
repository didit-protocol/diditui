import { SearchInput } from '@/components/SearchInput'
import { useCallback, useState } from 'react'

function SearchInputExample() {
  const [country, setCountry] = useState('')
  const [error, setError] = useState('')

  const handleValueChange = useCallback((v: string) => {
    setCountry(v)
    if (v) {
      // check if the input value contains only valid characters
      const validCharsExp = /^[a-zA-Z\s]*$/
      if (!validCharsExp.test(v)) {
        setError('Please enter valid characters only')
      } else {
        setError('')
      }
    } else {
      setError('')
    }
  }, [])

  return (
    <div className="w-full flex items-center justify-center">
      <SearchInput
        label="Serach country"
        placeholder="Type to search"
        value={country}
        onValueChange={handleValueChange}
        error={error}
      />
    </div>
  )
}

export { SearchInputExample }
