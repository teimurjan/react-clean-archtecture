import { useEffect, useState } from 'react'

export const useLoading = (
  fn: () => Promise<any>,
  initialState
): [any, boolean] => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(initialState)
  useEffect(() => {
    setLoading(true)
    fn()
      .then((response) => response.json())
      .then(setResult)
      .then(() => setLoading(false))
  }, [fn])
  return [result, loading]
}
