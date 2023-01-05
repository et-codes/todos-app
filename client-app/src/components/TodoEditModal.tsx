import { useState } from "react";
import { Modal } from "react-bootstrap";
import TodoEditModalProps from "../interfaces/TodoEditModalProps";

export default function TodoEditModal(props: TodoEditModalProps) {
  const { editMode, setEditMode, todo } = props;

  function handleClose() {
    console.log("Closing modal.");
    setEditMode(false);
  }

  return (
    <Modal show={editMode} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{todo.text}</p>
        <p>{todo.dueDate}</p>
      </Modal.Body>
    </Modal>
  );
}
