import { Modal } from "react-bootstrap";
import TodoEditModalProps from "../interfaces/TodoEditModalProps";
import TodoFormProps from "../interfaces/TodoFormProps";
import TodoForm from "./TodoForm";

export default function TodoEditModal(props: TodoEditModalProps) {
  const { editMode, setEditMode, todo, updateTodo, createTodo } = props;

  function handleClose() {
    setEditMode(false);
  }

  const todoFormProps: TodoFormProps = {
    createTodo: createTodo,
    updateTodo: updateTodo,
    openModal: setEditMode,
    todo: todo,
  };

  return (
    <Modal show={editMode} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TodoForm {...todoFormProps} />
      </Modal.Body>
    </Modal>
  );
}
