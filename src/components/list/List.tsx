import React from 'react'
import { RenderRow } from './RenderRow'

export const List = ({ data }) => {
  return (
    <ul className='flex flex-wrap mt-10'>
      {data.map((item, index) => (
        <RenderRow key={index.toString()} {...item} className={item.bg} />
      ))}
    </ul>
  )
}
