import React, { useState } from 'react'
import feeds from '../data/feeds'
import { useRSSFeed } from '../hooks/useRSSFeed'
import { Option, Select } from '../components/forms/Select'
import { RSSItem } from '../components/item-renderers/RSSItem'
import { Loading } from '../components/state/Loading'

export const RSSFeedContainer = () => {
  const rssFeedOptions: Option[] = feeds.map((i) => ({
    label: i.title,
    value: i.feed,
  }))
  const [selectedValue, setValue] = useState<Option>(rssFeedOptions[0])
  const [data, loading, error] = useRSSFeed(selectedValue.value)
  return (
    <section>
      <h1 className='text-5xl font-thin text-center'>RSS reader</h1>

      <Select
        className='block max-w-sm mx-auto my-10'
        options={rssFeedOptions}
        value={selectedValue}
        onChange={setValue}
      />

      {error && <p>{error}</p>}
      {loading ? (
        <Loading />
      ) : (
        <ul className='grid w-full grid-cols-3 gap-2'>
          {data.map((i) => (
            <li key={i.title}>
              <RSSItem {...i} />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
