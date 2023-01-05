import Todo from "./Todo";

export default interface TodoEditModalProps {
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  todo: Todo;
  createTodo: (todoToCreate: Todo) => void;
  updateTodo: (todoToUpdate: Todo) => void;
}
