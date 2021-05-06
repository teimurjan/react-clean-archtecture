import { UserCard } from '../components/item-renderers/UserCard'
import React, { useState } from 'react'
import { useLoading } from '../hooks/useLoading'
import { fetchUsers } from '../services/fetchUsers'

export const UserListContainer = () => {
  const [data, loading] = useLoading(fetchUsers, [])
  return (
    <section>
      <h1 className='text-5xl font-thin text-center '>RSS reader</h1>

      {loading ? (
        <div className='mt-10'>Loading</div>
      ) : (
        <ul className='grid grid-cols-2 gap-10 mt-10'>
          {data.map((user) => (
            <li key={user.id}>
              <UserCard {...user} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
