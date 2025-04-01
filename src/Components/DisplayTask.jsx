import React from 'react'
import TaskCard from './TaskCard';

const DisplayTask = () => {

  const tasks = JSON.parse(localStorage.getItem('tasks'));

  return (
    <section className='w-[500px] mt-2 flex flex-col gap-3'>
      {tasks && tasks.map((task, index) => {
        return (<TaskCard key={index} index={index} task={task} />)
      })}
    </section>
  )
}

export default DisplayTask