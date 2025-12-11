'use client';

import GravAssistDemo from '@/components/demos/grav-assist-demo'
import React from 'react'

export default function GravAssistDemoPage() {
  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='text-2xl font-semibold py-4 text-center'>GravAssist Demo</h1>
      <h3 className='text-md font-light pb-6 text-center max-w-2xl px-4'> 
        I needed full freedom over the physics calculations so instead of using built-in Unity point-effector I decided to create my own physics engine to calculate the forces between objects. The player can use the gravity of planets to navigate through the levels.
      </h3>
      
      <div className='w-full h-[700px] flex justify-center items-center'>
        <GravAssistDemo />
      </div>
    </div>
  )
}