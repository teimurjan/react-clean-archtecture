import React from 'react'
import { User } from '../../services/fetchUsers'
export const UserCard = ({ username, name }: Partial<User>) => {
  return (
    <div className='flex items-center h-full p-4 border border-gray-200 rounded-lg'>
      <img
        alt='team'
        className='flex-shrink-0 object-cover object-center w-16 h-16 mr-4 bg-gray-100 rounded-full'
        src='https://dummyimage.com/80x80'
      />
      <div className='flex-grow'>
        <h2 className='font-medium text-gray-900 title-font'>{name}</h2>
        <p className='text-gray-500'>@{username}</p>
      </div>
    </div>
  )
}
