import React, { useEffect, useState } from 'react'
import TodoForm from './todo-form'

function TodoContainer() {
    const [tasks, setTasks] = useState<{ [key: string]: string | boolean }[]>([])

    useEffect(() => {
        const taskItems = localStorage.getItem('tasks')!

        if (taskItems)
            setTasks(JSON.parse(taskItems))
    }, [])

    const taskList = tasks.map((task, index) => {
        return (
            <div key={index} className='flex justify-between p-2 bg-todoItem'>
                <p>{task.title}</p>
                <button className='bg-red-600 p-1 rounded-lg'>Delete</button>
            </div>
        )
    })
    return (
        <div className='w-1/2 h-fit text-white p-4 bg-todoContainer'>
            <TodoForm setTasks={setTasks} />
            {taskList}
        </div>
    )
}

export default TodoContainer