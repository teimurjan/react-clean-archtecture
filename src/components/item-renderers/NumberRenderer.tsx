import React from 'react'
import { split } from './CurrencyRenderer'

export const NumberRenderer = ({ value, className }) => (
  <strong {...{ className }}>{split(value)}</strong>
)
