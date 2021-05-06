import React from 'react'
import { CurrencyRenderer } from '../value-renderers/CurrencyRenderer'
import { DateRenderer } from '../value-renderers/DateRenderer'
import { StringRenderer } from '../value-renderers/StringRenderer'
import { NumberRenderer } from '../value-renderers/NumberRenderer'
import { HighlightedRenderer } from '../value-renderers/HighlightedRenderer'

const renderers = {
  date: DateRenderer,
  string: StringRenderer,
  number: NumberRenderer,
  currency: CurrencyRenderer,
  highlighted: HighlightedRenderer,
}

export const RenderValue = ({ type, editable, content }) => {
  const Renderer = renderers[type]
  return <Renderer {...content} />
}
