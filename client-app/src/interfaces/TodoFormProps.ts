import Todo from "./Todo";

export default interface TodoFormProps {
  createTodo: (todoToCreate: Todo) => void;
  updateTodo: (todoToUpdate: Todo) => void;
  openModal?: (value: boolean) => void;
  todo?: Todo;
}
