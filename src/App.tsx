import './app.styles.scss'

import React, { Component, FC, FunctionComponent, useState } from 'react'
import { RSSItem } from './components/item-renderers/RSSItem'
import { Select, Option } from './components/forms/Select'
import { PersonListContainer } from './containers/PersonListContainer'
import { RSSFeedContainer } from './containers/RSSFeedContainer'
import { useRSSFeed } from './hooks/useRSSFeed'
import feeds from './data/feeds'
import { UserListContainer } from './containers/UserListContainer'

const App = () => {
  return (
    <div className='grid grid-cols-1 gap-10 p-10'>
      <UserListContainer />
      <hr className="my-20"/>
      <RSSFeedContainer />
      <hr className="my-20"/>
      <PersonListContainer />
    </div>
  )
}

export default App
