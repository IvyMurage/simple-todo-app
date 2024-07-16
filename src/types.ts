export type TodoItemProps = {
  task: { [key: string]: string | boolean };
  index: number;
};

export type TodoItemType = {
  title: string;
  isCompleted: boolean;
};
