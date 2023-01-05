import Todo from "./Todo";

export default interface TodoEditModalProps {
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  createTodo: (todoToCreate: Todo) => void;
  updateTodo: (todoToUpdate: Todo) => void;
  todo: Todo;
}
