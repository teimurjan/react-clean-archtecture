import React from 'react'
import { RenderValue } from './RenderValue'

export const RenderRow = ({ label, fullWidth, value, className }) => {
  return (
    <li
      className={`flex py-5 flex-row ${fullWidth ? 'w-full' : 'lg:w-1/2 w-full'} list-none ${className}`}
    >
      <div className='flex-grow-0 w-48 text-sm'>{label}</div>
      <div className='flex-grow'>
        <RenderValue {...value} />
      </div>
    </li>
  )
}
