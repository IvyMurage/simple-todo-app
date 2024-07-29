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
        todos:[...state.todos, action.payload]
    }

    default:
        return state
}
}