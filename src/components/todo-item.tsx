import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TodoItemProps } from "../types";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function TodoItem({ task, index }: TodoItemProps) {

    return (
        <div key={index} className='flex justify-between p-2  items-center bg-todoItem'>
            <p>{task.title}</p>
            <div className="">
                <button className="w-8 h-8 m-2 rounded-lg border-1 border-frame">
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button className='bg-frame m-2 w-8 h-8 p-1 rounded-lg'>
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>)
}

