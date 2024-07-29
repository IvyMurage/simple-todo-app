export type TodoItemProps = {
  task: { [key: string]: string | boolean };
};

export type TodoItemType = {
  id: string;
  title: string;
  isCompleted: boolean;
};


export type Action = {type:'ADD-TODO', payload: TodoItemType} | {type:'FETCH-TODOS',payload: TodoItemType[]} | {type:'DELETE-TODO', payload: string}

export interface State  {
  todos: [] | TodoItemType[]
}