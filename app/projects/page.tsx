import React from 'react'
import projects from '@/data/projects'
import ListedProject from '@/components/listed-project'

export default function Page() {
  return (
    <div className='flex flex-1 py-24 justify-center'>
      <div className='flex-col w-full max-w-3xl'>
        <h1 className='text-2xl font-semibold py-4 '>My Projects</h1>
        <h3 className='text-md font-light pb-6 '>[Names] are links to GitHub repositories</h3>
        <ul>
        {
          projects.map((project) => (
            <ListedProject key={project.title} {...project} />
          ))
        }
      </ul>
      </div>
    </div>
  )
}
