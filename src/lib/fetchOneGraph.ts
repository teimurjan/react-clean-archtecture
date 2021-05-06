import { auth, APP_ID } from './auth'

export const fetchOneGraph = (
  query: string,
  {
    variables,
    operationName,
  }: { variables?: unknown; operationName?: string } = {}
) => {
  return fetch(`https://serve.onegraph.com/graphql?app_id=${APP_ID}`, {
    method: 'POST',
    headers: { ...auth.authHeaders() },
    body: JSON.stringify({
      query: query,
      variables: variables,
      operationName: operationName,
    }),
  })
    .then((res) => res.json())
    .catch((networkError) => {
      console.log('Network error in fetchData', networkError.toString())
      return { networkError: networkError }
    })
}
