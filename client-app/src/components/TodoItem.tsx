import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TodoEditModalProps from "../interfaces/TodoEditModalProps";
import TodoProps from "../interfaces/TodoProps";
import TodoEditModal from "./TodoEditModal";

export default function TodoItem(todoProps: TodoProps) {
  const [editMode, setEditMode] = useState(false);
  const { todo, updateTodo, deleteTodo } = todoProps;
  // prettier-ignore
  const createdOnString = todo.createdOn 
    ? new Date(todo.createdOn).toLocaleDateString()
    : "";
  // prettier-ignore
  const dueDateString = todo.dueDate
    ? (<span>{new Date(todo.dueDate).toLocaleDateString()}</span>) 
    : (<span className="text-muted">none</span>);

  const style = todo.isComplete ? "text-muted" : "";

  function toggleComplete(): void {
    todo.isComplete = !todo.isComplete;
    updateTodo(todo);
  }

  function handleDelete(): void {
    deleteTodo(todo);
  }

  function handleEdit(): void {
    setEditMode(true);
  }

  const todoEditModalProps: TodoEditModalProps = {
    editMode: editMode,
    setEditMode: setEditMode,
    todo: todo,
  };

  return (
    <tr>
      <td>
        <Form.Check
          id={todo.id}
          checked={todo.isComplete}
          onChange={toggleComplete}
          className="text-center"
        />
      </td>
      <td className={style}>{todo.text}</td>
      <td className={`${style} text-center`}>{createdOnString}</td>
      <td className={`${style} text-center`}>{dueDateString}</td>
      <td className="text-center">
        <Button
          size="sm"
          className="mx-1"
          variant="outline-primary"
          onClick={handleEdit}
        >
          Edit
        </Button>
        <Button
          size="sm"
          className="mx-1"
          variant="danger"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </td>
      <TodoEditModal {...todoEditModalProps} />
    </tr>
  );
}
