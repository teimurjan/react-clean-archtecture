import './app.styles.scss'

import React from 'react'
import { PersonListContainer } from './containers/PersonListContainer'
import { RSSFeedContainer } from './containers/RSSFeedContainer'
import { UserListContainer } from './containers/UserListContainer'

const App = () => {
  return (
    <div className='grid grid-cols-1 gap-10 p-10'>
      <UserListContainer />
      <hr className='my-20' />
      <RSSFeedContainer />
      <hr className='my-20' />
      <PersonListContainer />
    </div>
  )
}

export default App
