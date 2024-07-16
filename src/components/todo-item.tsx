import { TodoItemProps } from "../types";

export default function TodoItem({ task, index }: TodoItemProps) {

    return (
        <div key={index} className='flex justify-between p-2 bg-todoItem'>
            <p>{task.title}</p>
            <button className='bg-red-600 p-1 rounded-lg'>Delete</button>
        </div>)
}

