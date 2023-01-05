import Todo from "./Todo";

export default interface TodoProps {
  todo: Todo;
  updateTodo: (todoToUpdate: Todo) => void;
  deleteTodo: (todoToDelete: Todo) => void;
  createTodo: (todoToCreate: Todo) => void;
}
