import { useEffect } from 'react'
import TodoForm from './todo-form'
import TodoItem from './todo-item'
import Search from './Search'
import { useTodoContextDispatch, useTodoContextState } from '../context/TodoContext'
import { nanoid } from 'nanoid'



function TodoContainer() {
    const state = useTodoContextState()
    const dispatch = useTodoContextDispatch()
    useEffect(() => {
        let ignore = false
        const taskItems = localStorage.getItem('tasks')!

        if (taskItems && !ignore)
            dispatch({ type: 'FETCH-TODOS', payload: JSON.parse(taskItems) })

        return () => {
            ignore = true
        }
    }, [dispatch])

    const taskList = state.todos.map((task, index) => {
        return (
            <TodoItem key={`${index}-${nanoid()}`} {...{ task, index }} />
        )
    })
    return (
        <div className='w-1/2 h-fit text-white p-4 rounded-lg shadow-lg bg-todoContainer'>

            <Search />
            <div className="flex justify-between max-w-1/2">
                <h2>All Todos</h2>
                <h2>Home</h2>
                <h2>The Gym</h2>
            </div>
            {taskList}
            <TodoForm />
        </div>
    )
}

export default TodoContainer