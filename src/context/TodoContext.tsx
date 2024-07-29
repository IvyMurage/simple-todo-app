import { createContext, ReactNode, useContext, useReducer } from "react"
import { Action, State } from "../types"
import { todoReducer } from "../TodoReducer"


const INITIAL_STATE: State = {
    todos: []
}

const TodoContextState = createContext<State | undefined>(undefined)
const TodoContextDispatch = createContext<React.Dispatch<Action> | undefined>(undefined)
export function useTodoContextState() {
    const todoState = useContext(TodoContextState)
    if (todoState === undefined) {
        throw new Error('No context provided')
    }
    return todoState
}

export function useTodoContextDispatch() {
    const todoState = useContext(TodoContextDispatch)
    if (todoState === undefined) {
        throw new Error('No context provided')
    }
    return todoState
}
function TodoProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE)
    return (
        <TodoContextState.Provider value={state}>
            <TodoContextDispatch.Provider value={dispatch}>
                {children}
            </TodoContextDispatch.Provider>
        </TodoContextState.Provider >
    )
}

export default TodoProvider
