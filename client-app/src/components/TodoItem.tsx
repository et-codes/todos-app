import { ListGroup } from "react-bootstrap";
import { Todo } from "../interfaces/Todo";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const todoString = `${todo.text} ${todo.createdOn} ${todo.dueDate} ${todo.isComplete}`;
  return <ListGroup.Item>{todoString}</ListGroup.Item>;
}

export default TodoItem;
