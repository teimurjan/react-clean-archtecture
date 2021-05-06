import React from 'react'
import { NumberRenderer } from './NumberRenderer'

export const HighlightedRenderer = ({ value, className }) => (
  <NumberRenderer
    className={`${value < 0 ? 'text-red-500' : 'text-green-500'} ${className}`}
    value={value}
  />
)
