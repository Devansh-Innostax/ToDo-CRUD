import React from 'react'

const TaskCard = ({ task, index }) => {

    if (!task) return
    const handleClick = (e) => {
        const tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks[index].isCompleted = !tasks[index].isCompleted;
        localStorage.setItem('tasks', JSON.stringify(tasks))
        window.location.reload();
    }

    const handleDelete = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks[index] = '';
        localStorage.setItem("tasks", JSON.stringify(tasks))
        console.log("clicked")
        window.location.reload();
    }
    return (
        <div className='flex border p-3 hover:shadow-xl w-full justify-between'>
            <div className={`${task.isCompleted ? 'line-through' : ''} flex flex-col p-2`}>
                <p className='text-xl'>Task : {task.task}</p>
                <p>Due Date : {task.dueDate}</p>
            </div>
            <div className='flex flex-col items-center gap-5'>
                {task.isCompleted ? <><input type="checkbox" checked onClick={handleClick} className='w-[30px] h-[30px] rounded-2xl' /></> : <input type='checkbox' onClick={handleClick} className='w-[30px] h-[30px] rounded-2xl' />}
                <button onClick={handleDelete} className='text-md border rounded-md p-1 text-white  bg-red-500 '>Delete</button>
            </div>
        </div>
    )
}

export default TaskCard