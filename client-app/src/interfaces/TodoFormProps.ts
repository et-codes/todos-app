import Todo from "./Todo";

export default interface TodoFormProps {
  createTodo: (todoToCreate: Todo) => void;
  updateTodo: (todoToUpdate: Todo) => void;
  todo?: Todo;
  openModal?: (value: boolean) => void;
}
