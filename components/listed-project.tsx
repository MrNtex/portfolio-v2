import React from 'react'

export interface ListedProjectProps {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  demoLink?: string;
  otherLinks?: { label: string; url: string }[];
  favorite?: boolean;
}

export default function ListedProject({ title, description, link, technologies, demoLink, otherLinks, favorite }: ListedProjectProps) {
  return (
    <li className='py-2'>
      <div>
        {favorite && <span className='text-yellow-500 pr-2 text-shadow-amber-300/20 text-shadow-md'>★</span>}
        <a className='font-semibold text-xl' href={link}>[{title}]</a>
        {demoLink && <a className='ml-2 text-sm text-blue-600' href={demoLink}>(Demo)</a>}
        {otherLinks && otherLinks.map(({ label, url }) => (
          <a key={label} className='ml-2 text-sm text-blue-600' href={url}>({label
        })</a>
        ))}
      </div>
      <p className='mt-1 font-light'>{description}</p>
      <p className='text-sm text-stone-600 italic mt-2'>{technologies?.join(', ')}</p>
    </li>
  )
}
