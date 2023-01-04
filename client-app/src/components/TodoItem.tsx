import { Button, Form } from "react-bootstrap";
import { Todo } from "../interfaces/Todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const createdOn = new Date(todo.createdOn).toLocaleDateString();
  const dueDate = todo.dueDate
    ? new Date(todo.dueDate).toLocaleDateString()
    : "None";

  return (
    <tr>
      <td>
        <Form.Check id={todo.id} checked={todo.isComplete} />
      </td>
      <td>{todo.text}</td>
      <td>{createdOn}</td>
      <td>{dueDate}</td>
      <td>
        <Button size="sm">Edit</Button>
      </td>
      <td>
        <Button size="sm">Delete</Button>
      </td>
    </tr>
  );
}
