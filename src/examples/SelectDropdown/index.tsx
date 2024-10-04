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
  },
  {
    label: 'Italian',
    value: 'IT'
  },
  {
    label: 'Portuguese',
    value: 'PT'
  },
  {
    label: 'Russian',
    value: 'RU'
  },
  {
    label: 'Chinese',
    value: 'CN'
  },
  {
    label: 'Japanese',
    value: 'JP'
  },
  {
    label: 'Korean',
    value: 'KR'
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
    <div className="flex flex-wrap items-center gap-3 w-[900px]">
      <SelectDropdown
        className="w-full md:w-[calc(50%-12px)]"
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
    </div>
  )
}

export { SelectDropdownExample }
