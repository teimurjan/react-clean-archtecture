import React, { useState } from 'react'
import { RenderRow } from './RenderRow'

export const List = ({ data }) => {
  return (
    <ul className='flex flex-wrap'>
      {data.map((item, index) => (
        <RenderRow key={index.toString()} {...item} className={item.bg} />
      ))}
    </ul>
  )
}
