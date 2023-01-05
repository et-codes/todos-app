import Todo from "./Todo";

export default interface TodoEditModalProps {
  editMode: boolean;
  setEditMode: (value: boolean) => void;
  todo: Todo;
}
