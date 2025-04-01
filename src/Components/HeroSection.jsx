import React from 'react'
import TaskInputs from './TaskInputs'
import DisplayTask from './DisplayTask'

const HeroSection = () => {
  return (
    <section className='flex flex-col items-center'>
      <TaskInputs />
      <DisplayTask />
    </section>
  )
}

export default HeroSection  