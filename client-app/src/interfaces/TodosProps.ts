import Todo from "./Todo";

export default interface TodosProps {
  todos: Todo[];
  updateTodo: (todoToUpdate: Todo) => void;
  deleteTodo: (todoToDelete: Todo) => void;
}
