import { Button, Form } from "react-bootstrap";
import TodoProps from "../interfaces/TodoProps";

export default function TodoItem(todoProps: TodoProps) {
  const { todo, updateTodo, deleteTodo } = todoProps;
  // prettier-ignore
  const createdOn = todo.createdOn 
    ? new Date(todo.createdOn).toLocaleDateString()
    : "";
  // prettier-ignore
  const dueDate = todo.dueDate
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
    throw new Error("Not implemented.");
  }

  return (
    <tr>
      <td>
        <Form.Check
          id={todo.id}
          checked={todo.isComplete}
          onChange={toggleComplete}
        />
      </td>
      <td className={style}>{todo.text}</td>
      <td className={style}>{createdOn}</td>
      <td className={style}>{dueDate}</td>
      <td>
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
    </tr>
  );
}
