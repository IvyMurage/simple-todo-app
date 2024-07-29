import { useEffect, useState } from 'react'
import TodoForm from './todo-form'
import { TodoItemType } from '../types'
import TodoItem from './todo-item'
import Search from './Search'



function TodoContainer() {
    const [tasks, setTasks] = useState<TodoItemType[]>([])

    useEffect(() => {
        const taskItems = localStorage.getItem('tasks')!

        if (taskItems)
            setTasks(JSON.parse(taskItems))
    }, [])

    const taskList = tasks.map((task, index) => {
        return (
            <TodoItem {...{ task, index }} />
        )
    })
    return (
        <div className='w-1/2 h-fit text-white p-4 rounded-lg shadow-lg bg-todoContainer'>
            <Search />
            {taskList}
            <TodoForm setTasks={setTasks} />
        </div>
    )
}

export default TodoContainer