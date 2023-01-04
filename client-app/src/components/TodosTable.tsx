import { Table } from "react-bootstrap";
import { Todo } from "../interfaces/Todo";
import TodoItem from "./TodoItem";

interface TodosTableProps {
  todos: Todo[];
}

export default function TodosTable({ todos }: TodosTableProps) {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>Complete</th>
          <th>Task</th>
          <th>Created On</th>
          <th>Due Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo: Todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </tbody>
    </Table>
  );
}
