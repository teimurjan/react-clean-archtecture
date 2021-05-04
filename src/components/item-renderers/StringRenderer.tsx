import React from 'react'

export const StringRenderer = ({ value, className }) => (
  <strong {...{ className }}>{value}</strong>
)
