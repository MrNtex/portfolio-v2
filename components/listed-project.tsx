import React from 'react'

export interface ListedProjectProps {
  title: string;
  description: string;
  link: string;
}

export default function ListedProject({ title, description, link }: ListedProjectProps) {
  return (
    <li>
      <a href={link}>{title}</a>
      <p>{description}</p>
    </li>
  )
}
