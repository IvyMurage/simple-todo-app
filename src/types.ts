export type TodoItemProps = {
  task: { [key: string]: string | boolean };
  index: number;
};

export type TodoItemType = {
  title: string;
  isCompleted: boolean;
};


export type Action = {type:'ADD-TODO', payload: TodoItemType} | {type:'FETCH-TODOS',payload: TodoItemType[]}

export interface State  {
  todos: [] | TodoItemType[]
}