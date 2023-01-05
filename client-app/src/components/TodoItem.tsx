import { Button, Form } from "react-bootstrap";
import TodoProps from "../interfaces/TodoProps";

export default function TodoItem(todoProps: TodoProps) {
  const { todo, updateTodo, deleteTodo } = todoProps;
  const createdOn = new Date(todo.createdOn).toLocaleDateString();
  // prettier-ignore
  const dueDate = todo.dueDate
    ? (<span>{new Date(todo.dueDate).toLocaleDateString()}</span>) 
    : (<span className="text-muted">none</span>);

  function toggleComplete(): void {
    todo.isComplete = !todo.isComplete;
    updateTodo(todo);
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
      <td>{todo.text}</td>
      <td>{createdOn}</td>
      <td>{dueDate}</td>
      <td>
        <Button size="sm" className="mx-1" variant="outline-primary">
          Edit
        </Button>
        <Button
          size="sm"
          className="mx-1"
          variant="danger"
          onClick={() => deleteTodo(todo)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
