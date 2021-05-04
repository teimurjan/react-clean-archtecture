import React from 'react'
import { formatDate } from '../../formatters/formatDate'

export const DateRenderer = ({ value, className }) => {
  return <strong {...{ className }}>{formatDate(value)}</strong>
}
