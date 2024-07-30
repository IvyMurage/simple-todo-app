import { Action, State } from "./types"

export function todoReducer(state:State, action: Action){
switch(action.type){
    case 'FETCH-TODOS':
        return {
            ...state,
            todos: action.payload
        }
    case 'ADD-TODO': 
    return{
        ...state, 
        todos:[ action.payload, ...state.todos]
    }
    case 'DELETE-TODO': 
    return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
    }

    case 'EDIT-TODO':
        return {
            ...state,
            todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload: todo)
        }
    default:
        return state
}
}