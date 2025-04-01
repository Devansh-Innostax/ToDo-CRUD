import React, { useState } from 'react'

const TaskInputs = () => {
  const [formData, setFormData] = useState({
    task: "",
    dueDate: null,
    isCompleted: false,
  })

  const handleSubmmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    if (formData.dueDate < today) {
      alert("Due date cannot be earlier than today.");
      return; // Prevent form submission if the date is invalid
    }
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(formData)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    window.location.reload();
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <section className='flex justify-center w-[500px]'>
      <form action="" className='flex flex-col items-center gap-10 p-10 text-lg border rounded-sm w-full' onSubmit={handleSubmmit}>

        <div>
          <label htmlFor="taskInput">Task:</label>
          <input type="text" name="task" id="taskInput" placeholder='Enter your task.' onChange={handleInputChange} className='ml-3 border rounded-md p-2' required />
        </div>
        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input type="date" name="dueDate" id="dueDate" onChange={handleInputChange} className='ml-3 border rounded-md p-2' required />
        </div>
        <div>
          <input type='submit' name="submit" id="submit" className='bg-indigo-500 text-white p-3 rounded-md place-content-center' />
        </div>

      </form>
    </section>
  )
}

export default TaskInputs