import React, { useState } from 'react'

function TodoForm({ setTasks }: { setTasks: React.Dispatch<React.SetStateAction<{ [key: string]: string | boolean }[]>> }) {
    const [task, addTask] = useState({
        title: '',
        isCompleted: false
    })

    const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        addTask({
            ...task,
            title: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const tasks = localStorage.getItem('tasks')
        if (tasks) {
            localStorage.setItem('tasks', JSON.stringify([...JSON.parse(tasks), task]))
        } else {
            localStorage.setItem('tasks', JSON.stringify([task]))
        }
        setTasks((prevTasks) => [...prevTasks, task])
        console.log(task)
        addTask({
            ...task,
            title: ''
        })
    }
    return (
        <form className='w-full flex justify-between' onSubmit={handleSubmit}>
            <input className='max-w-4/5 focus:border-transparent focus:ring-0 focus:ring-offset-0 flex-grow py-2 px-2 border-1 rounded-l-lg border-frame bg-transparent' placeholder="what is your task todo?" value={task.title} onChange={handleTaskChange} name='task' />
            <input type='submit' value='ADD TASK' className=' p-2 focus:border-transparent focus:ring-0 focus:ring-offset-0 bg-frame rounded-r-lg flex-grow max-w-[20%]' />
        </form>
    )
}

export default TodoForm