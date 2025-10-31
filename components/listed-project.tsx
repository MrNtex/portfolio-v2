import React from 'react'

export interface ListedProjectProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
}

export default function ListedProject({ title, description, link, technologies }: ListedProjectProps) {
  return (
    <li className='py-2'>
      <a className='font-semibold text-xl' href={link}>[{title}]</a>
      <p className='mt-1 font-light'>{description}</p>
      <p className='text-sm text-stone-600 italic mt-2'>{technologies?.join(', ')}</p>
    </li>
  )
}
