import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodosTable from "./components/TodosTable";
import Todo from "./interfaces/Todo";
import TodosProps from "./interfaces/TodosProps";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);

  function updateTodo(todoToUpdate: Todo) {
    const updatedTodos = todos.map((todo: Todo) => {
      if (todo.id === todoToUpdate.id) {
        axios.put(`http://localhost:5000/api/todos/${todo.id}`, todoToUpdate);
        return todoToUpdate;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  }

  function deleteTodo(todoToDelete: Todo) {
    axios.delete(`http://localhost:5000/api/todos/${todoToDelete.id}`);
    const updatedTodos = todos.filter(
      (todo: Todo) => todo.id !== todoToDelete.id
    );
    setTodos(updatedTodos);
  }

  function createTodo(todoToCreate: Todo) {}

  const todosProps: TodosProps = {
    todos: todos,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo,
    createTodo: createTodo,
  };

  return (
    <Container>
      <Header />
      <TodoForm />
      <TodosTable {...todosProps} />
    </Container>
  );
}

export default App;
