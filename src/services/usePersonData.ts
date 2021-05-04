import { useEffect, useState } from 'react'
import { addStripedRows } from '../populators/addStripedRows'
import sampleData from '../data'

export const usePersonData = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => {
      const preparedData = addStripedRows(sampleData)
      setData(preparedData)
      setLoading(false)
    }, 3000 * Math.random())
    return () => {
      clearTimeout(t)
    }
  }, [])

  return [data, loading]
}
