import React from 'react'

export type RSSItemProps = {
  title: string
  description: string
  link: string
  date: string
}

export const RSSItem = ({ title, description, link, date }: RSSItemProps) => {
  return (
    <div className='flex flex-col p-6 rounded-lg bg-gray-50'>
      <time className='mb-4 text-xs font-medium tracking-widest text-blue-500 title-font'>
        {date}
      </time>
      <h2 className='mb-4 text-lg font-medium text-gray-900 title-font'>
        <a href={link}>{title}</a>
      </h2>
      <p className='text-base leading-relaxed line-clamp-4'>{description}</p>
    </div>
  )
}
