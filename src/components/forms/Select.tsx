import React, { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

export type Option = { label: string; value: string; disabled?: boolean }

type SelectProps = {
  options: Option[]
  value: Option
  onChange: (value: unknown) => void
}

export const Select = ({ options, value, onChange }: SelectProps) => {
  return (
    <Listbox onChange={onChange} value={value.value}>
      {({ open }) => (
        <>
          <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left text-white bg-blue-700 rounded-lg shadow-md cursor-default border-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm'>
            <span className='block truncate'>{value.label}</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <SelectorIcon
                className='w-5 h-5 text-blue-200'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            show={open}
            as={React.Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options
              static
              className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg rounded-xl max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
            >
              {options.map((option) => (
                <Listbox.Option
                  key={option.label}
                  value={option}
                  disabled={option.disabled}
                  className={`cursor-default select-none relative py-2 pl-3 pr-4 hover:bg-gray-100 ${
                    value.label === option.label && 'font-bold'
                  }`}
                >
                  {option.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  )
}
