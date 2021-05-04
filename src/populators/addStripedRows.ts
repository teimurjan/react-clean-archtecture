const cleanUpRelativeRow = (row) => {
  delete row.relativeRow
  return row
}

const addStripedRowsIteratee = (acc, row, index) => {
  const relativeRow =
    (index > 0 ? acc[index - 1].relativeRow : 0) + (row.fullWidth ? 1 : 0.5)
  return [
    ...acc,
    {
      ...row,
      relativeRow,
      bg:
        relativeRow % 2 === 0 || (relativeRow + 0.5) % 2 === 0
          ? `lg:bg-gray-100 ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`
          : `lg:bg-white ${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'}`,
    },
  ]
}

export const addStripedRows = (data) =>
  data.reduce(addStripedRowsIteratee, []).map(cleanUpRelativeRow)
