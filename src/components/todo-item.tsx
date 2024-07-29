import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoItemProps } from "../types";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useTodoContextDispatch } from "../context/TodoContext";

export default function TodoItem({ task, handleEdit }: TodoItemProps) {
    const dispatch = useTodoContextDispatch()

    function handeDelete(todoId: string) {
        dispatch({ type: 'DELETE-TODO', payload: todoId })
    }


    return (
        <div className='flex justify-between p-2  items-center bg-todoItem'>
            <p>{task.title}</p>
            <div className="">
                <button onClick={() => handleEdit(task)} className="w-8 h-8 m-2 rounded-lg border-1 border-frame">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button onClick={() => handeDelete(task.id as string)} className='bg-frame m-2 w-8 h-8 p-1 rounded-lg'>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>)
}

