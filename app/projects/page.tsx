import React from 'react'
import projects from '@/data/projects'
import ListedProject from '@/components/listed-project'

export default function Page() {
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {
          projects.map((project) => (
            <ListedProject key={project.title} {...project} />
          ))
        }
      </ul>
    </div>
  )
}
