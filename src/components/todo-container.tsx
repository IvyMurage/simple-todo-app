import TodoForm from './todo-form'
import TodoItem from './todo-item'
import Search from './Search'
import { useTodoContextState } from '../context/TodoContext'
import { nanoid } from 'nanoid'
import { TodoItemType } from '../types'
import { useState } from 'react'



function TodoContainer() {
    const state = useTodoContextState()
    const [task, addTask] = useState({
        id: '',
        title: '',
        isCompleted: false
    })

    const [visible, setVisible] = useState(false)

    const taskList = state.todos.map((task, index) => {
        return (
            <TodoItem key={`${index}-${nanoid()}`} {...{ task, index, }} handleEdit={() => handleEdit(task)} />
        )
    })

    function handleEdit(task: TodoItemType) {
        addTask(task)
        setVisible(true)
    }
    return (
        <div className='w-1/2 relative flex flex-col  text-white p-4 rounded-lg shadow-lg h-[80vh] bg-todoContainer'>

            <Search />
            {taskList.length > 0 ? taskList : <h2 className='justify-self-center place-items-center'>No Tasks Added</h2>}
            <TodoForm
                task={task}
                addTask={addTask}
                visible={visible}
                setVisible={setVisible}
            />
        </div>
    )
}

export default TodoContainer