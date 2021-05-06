import './app.styles.scss'

import React, { Component, FC, FunctionComponent, useState } from 'react'
import { RSSItem } from './components/item-renderers/RSSItem'
import { Select, Option } from './components/forms/Select'
// import { PersonListContainer } from './containers/PersonListContainer'
import { useRSSFeed } from './hooks/useRSSFeed'
import feeds from './data/feeds'

const App = () => {
  const rssFeedOptions: Option[] = feeds.map((i) => ({
    label: i.title,
    value: i.feed,
  }))
  const [selectedValue, setValue] = useState<Option>(rssFeedOptions[0])
  const [data, loading, error] = useRSSFeed(selectedValue.value)
  return (
    <div>
      <h1 className='mb-5 text-xl font-bold text-blue-600'>
        Sample detailed list implementation
      </h1>
      {/* <PersonListContainer /> */}
      <Select
        options={rssFeedOptions}
        value={selectedValue}
        onChange={setValue}
      />
      <div className='grid w-full grid-cols-3 gap-2'>
        {error && <p>{error}</p>}
        {loading ? 'loading' : data.map((i) => <RSSItem {...i} />)}
      </div>
    </div>
  )
}

export default App
