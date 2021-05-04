import React from 'react'

// Input
const input: number = 17883294145

// Custom types
enum Direction {
  left,
  right,
}

type List<a> = (
  | { kind: 'empty' }
  | { kind: 'cons'; head: a; tail: List<a> }
) & {
  count: (this: List<a>) => number
  isEmpty: boolean // Check if this can be optimized (turned into property).
  toString: (this: List<a>) => string
  equals: (this: List<a>, l: List<a>) => boolean
  // Added challenge: add reducer function here //
}
const Empty = <a,>(): List<a> => ({
  kind: 'empty',
  isEmpty: true,
  count: (): number => 0,
  toString: (): string => '',
  equals: function (l: List<a>): boolean {
    return match(this)(l)
  },
})
const Cons = <a,>(head: a) => (tail: List<a>): List<a> => ({
  kind: 'cons',
  isEmpty: false,
  head: head,
  tail: tail,
  count: function (): number {
    return count(this)
  },
  toString: function (): string {
    return all(this)
  },
  equals: function (l: List<a>): boolean {
    return match(this)(l)
  },
})
const all = <a,>(l: List<a>): string =>
  l.kind === 'empty' ? 'EMPTY' : l.head.toString() + ', ' + all(l.tail)
const count = <a,>(l: List<a>): number =>
  l.kind === 'empty' ? 0 : 1 + count(l.tail)
const match = <a,>(l1: List<a>) => (l2: List<a>): boolean =>
  (l1.kind === 'empty' && l2.kind === 'empty') ||
  (l1.kind === 'cons' &&
    l2.kind === 'cons' &&
    l1.head === l2.head &&
    match(l1.tail)(l2.tail))
const listFrom = <a,>(...elements: a[]): List<a> =>
  elements.length === 0
    ? Empty()
    : Cons(elements[0])(listFrom(...elements.slice(1)))

const formatCurrency = (input: number) => (currency: string = 'USD'): string =>
  `${split(input)} ${currency}`

export const split = (input: number): string => {
  const paddedInput: string = pad(input.toString())(3)()()
  const reversedInput: string = reverse(paddedInput)
  const pullFromReversedInput = pull(reversedInput)
  const reversedCents: string = pullFromReversedInput(0)(2)
  const reversedUnits: string = pullFromReversedInput(2)()

  const cents: string = reverse(reversedCents)
  const units: string = reverse(insertAtEvery(reversedUnits)(',')(3))

  const result = `${units}.${cents}`

  return result
}

const insertAtEvery = (input: string) => (character: string) => (
  interval: number
): string => {
  if (input === '') return input

  const amountOfCharacters: number = input.length
  const amountOfSplits: number = amountOfCharacters / interval

  const parts: List<string> = splitEvery(input)(interval)
  const result: string = join(parts)(',')

  return result
}

const splitEvery = (input: string) => (interval: number): List<string> =>
  input === ''
    ? Empty()
    : Cons(pull(input)(0)(3))(splitEvery(pull(input)(3)())(interval))

const join = <a extends Object>(input: List<a>) => (
  character: string
): string => {
  if (input.kind === 'empty') return ''
  if (input.tail.kind === 'empty') return input.head.toString()

  return input.head.toString() + character + join(input.tail)(character)
}

const repeat = <A,>(amount: number) => <A,>(f: (y: A) => A) => (x: A): A =>
  amount <= 0 ? x : repeat(amount - 1)(f)(f(x))

const reverse = (input: string): string =>
  input === '' ? input : reverse(pull(input)(1)()) + input[0]

const pad = (input: string) => (amount: number) => (
  direction: Direction = Direction.left
) => (character: string = '0'): string => {
  const inputString: string = input.toString()
  if (inputString.length >= amount) return inputString

  const amountOfCharsToAdd: number = amount - inputString.length
  const charsToAdd: string = repeat(amountOfCharsToAdd)(
    (str: string) => str + character
  )('')
  if (direction === Direction.left) {
    return `${charsToAdd}${input}`
  }
  return `${input}${charsToAdd}`
}

const pull = (input: string) => (index: number) => (
  amount?: number
): string => {
  if (input === '') {
    return input
  } else if (!amount && amount !== 0) {
    // Added challenge: avoid using slice and implement yourself //
    return input.slice(index)
  } else if (index > input.length - 1 || amount <= 0) {
    return ''
  } else if (index > 0) {
    return pull(pull(input)(1)())(index - 1)(amount)
  } else if (amount === 1) {
    return input[0]
  }

  return input[0] + pull(pull(input)(1)())(index)(amount - 1)
}

export const CurrencyRenderer = ({ value, currency, className }) => <strong {...{ className }}>{formatCurrency(value)(currency)}</strong>
