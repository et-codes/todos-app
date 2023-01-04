export interface Todo {
  id: string;
  text: string;
  createdOn: Date;
  dueDate?: Date;
  isComplete: boolean;
}
