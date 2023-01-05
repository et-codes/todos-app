import { Table } from "react-bootstrap";
import Todo from "../interfaces/Todo";
import TodoProps from "../interfaces/TodoProps";
import TodosProps from "../interfaces/TodosProps";
import TodoItem from "./TodoItem";

export default function TodosTable(todosProps: TodosProps) {
  const { todos, ...rest } = todosProps;

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th className="text-center">Complete</th>
          <th>Task</th>
          <th className="text-center">Created On</th>
          <th className="text-center">Due Date</th>
          <th className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo: Todo) => {
          const todoProps: TodoProps = { todo, ...rest };
          return <TodoItem key={todo.id} {...todoProps} />;
        })}
      </tbody>
    </Table>
  );
}
