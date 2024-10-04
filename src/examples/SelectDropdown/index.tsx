import { SelectDropdown, SelectDropdownOptionType } from '@/components/SelectDropdown'
import { useState } from 'react'

const roleOptions: SelectDropdownOptionType[] = [
  {
    label: 'Arabic',
    value: 'AR'
  },
  {
    label: 'Spanish',
    value: 'ES'
  },
  {
    label: 'French',
    value: 'FR'
  },
  {
    label: 'German',
    value: 'DE'
  }
]

function SelectDropdownExample() {
  const [selectedOption, setSelectedOption] = useState<SelectDropdownOptionType['value']>('')
  const [error, setError] = useState<string>('')

  function handleChange(value: SelectDropdownOptionType['value']) {
    if (value === 'AR') {
      setError('This is an error')
    } else {
      setError('')
    }
    setSelectedOption(value)
  }

  return (
    <SelectDropdown
      dropdownClassName="w-full"
      label="Language"
      options={roleOptions}
      errorMessage={error}
      placeholder="Select a language"
      value={selectedOption}
      onChange={handleChange}
      withSearch
      // eslint-disable-next-line no-console
      onClick={v => console.log('clicked', v)}
    />
  )
}

export { SelectDropdownExample }
