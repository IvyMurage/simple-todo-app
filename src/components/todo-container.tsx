import TodoForm from './todo-form'
import TodoItem from './todo-item'
import Search from './Search'
import { useTodoContextState } from '../context/TodoContext'
import { nanoid } from 'nanoid'
import Nav from './Nav'



function TodoContainer() {
    const state = useTodoContextState()

    const taskList = state.todos.map((task, index) => {
        return (
            <TodoItem key={`${index}-${nanoid()}`} {...{ task, index }} />
        )
    })
    return (
        <div className='w-1/2  overflow-y-scroll text-white p-4 rounded-lg shadow-lg h-[80vh] bg-todoContainer'>

            <Search />
            <Nav />
            {taskList}
            <TodoForm />
        </div>
    )
}

export default TodoContainer