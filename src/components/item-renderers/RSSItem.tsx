import React from 'react'

export type RSSItemProps = {
  title: string
  description: string
  link: string
  date: string
}

export const RSSItem = ({ title, description, link, date }: RSSItemProps) => {
  return (
    <article className='h-full p-6 transition-colors rounded-lg bg-gray-50 hover:bg-blue-200'>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <time className='text-xs font-medium tracking-wide text-blue-500'>
          {date}
        </time>
        <h2 className='mt-2 text-lg font-bold leading-tight text-gray-900'>
          {title}
        </h2>
        <p className='mt-5 text-sm leading-relaxed line-clamp-4'>
          {description}
        </p>
      </a>
    </article>
  )
}
