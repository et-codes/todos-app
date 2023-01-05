import Todo from "./Todo";

export default interface TodoFormProps {
  createTodo: (todoToCreate: Todo) => void;
}
