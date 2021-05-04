import React from 'react'
import { List } from '../components/list/List'
import { usePersonData } from '../services/usePersonData'
/*
let _data = data.reduce((acc, row, index) => {
    const rowNum =
      (index > 0 ? acc[index - 1].rowNum : 0) + (row.fullWidth ? 1 : 0.5)
    return [
      ...acc,
      {
        ...row,
        rowNum,
        bg:
          rowNum % 2 === 0 || (rowNum + 0.5) % 2 === 0
            ? `lg:bg-gray-100 ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`
            : `lg:bg-white ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`,
      },
    ]
  }, [])
*/
export const PersonListContainer = () => {
  const [data, loading] = usePersonData()
  return <div>{loading ? 'Loading...' : <List data={data} />}</div>
}
