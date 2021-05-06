import { useEffect, useState } from 'react'
import get from 'lodash/fp/getOr'
import flow from 'lodash/fp/flow'
import map from 'lodash/fp/map'
import omit from 'lodash/fp/omit'
import replace from 'lodash/fp/replace'
import cond from 'lodash/fp/cond'
import has from 'lodash/fp/has'
import stubTrue from 'lodash/fp/stubTrue'
import first from 'lodash/fp/first'
import { formatDate } from '../formatters/formatDate'
import { RSSItemProps } from 'src/components/item-renderers/RSSItem'
import { fetchRSSFeed } from '../services/fetchRSSFeed'

// text sanitization
const stripHtml = replace(/(<([^>]+)>)/gi, '')
const stripHtmlEntities = replace(/&#?[A-z0-9]*;/gi, '')
const sanitizeText = flow(stripHtml, stripHtmlEntities)

// transducer formatting server data to format consumed by view
const prepRSSFeed: (data: unknown) => RSSItemProps[] = flow(
  get([], 'data.rss.rss2Feed.items'),
  map((entry) => ({
    ...omit(['pubDate'], entry),
    description: sanitizeText(entry.description),
    date: formatDate(entry.pubDate),
  }))
)

export const useRSSFeed: (
  url: string
) => [RSSItemProps[], boolean, string, number] = (url) => {
  const [retry, setRetry] = useState(0)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const setDataOrError = cond([
    // error condition
    [
      // if data contains errors
      has('errors'),
      flow(
        // get errors array
        get('', 'errors'),
        // pick first item
        first,
        // get message field
        get('', 'message'),
        // set error message
        setError,
        // retry data fetching every 2.5 seconds,
        // but do it 3 times at most for single URL
        () => retry < 2 && setTimeout(() => setRetry(retry + 1), 2500)
      ),
    ],
    // success condition
    [
      stubTrue,
      flow(
        // transduce feed data
        prepRSSFeed,
        // set them for rendering
        setData,
        // reset retry counter
        () => setRetry(0)
      ),
    ],
  ])

  useEffect(() => {
    // reset error
    setError(null)
    setData([])
    // enable loading state
    setLoading(true)

    // fetch feed data
    fetchRSSFeed({ url })
      // handle graphql error or success response
      .then(setDataOrError)
      // disable loading state
      .then(() => {
        setLoading(false)
      })
      // handle runtime errors
      .catch(setError)
  }, [
    url, // update every feed URL change
    retry === 0 ? null : retry, // do not run when we are just resetting retries
  ])

  return [data, loading, error, retry]
}
