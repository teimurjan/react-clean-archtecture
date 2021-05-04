import React from 'react'
import { CurrencyRenderer } from '../item-renderers/CurrencyRenderer'
import { DateRenderer } from '../item-renderers/DateRenderer'
import { StringRenderer } from '../item-renderers/StringRenderer'
import { NumberRenderer } from '../item-renderers/NumberRenderer'
import { HighlightedRenderer } from '../item-renderers/HighlightedRenderer'

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
