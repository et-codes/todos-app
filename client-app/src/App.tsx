import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodosTable from "./components/TodosTable";
import Todo from "./interfaces/Todo";
import TodoFormProps from "./interfaces/TodoFormProps";
import TodosProps from "./interfaces/TodosProps";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get("/api/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);

  function updateTodo(todoToUpdate: Todo) {
    const updatedTodos = todos.map((todo: Todo) => {
      if (todo.id === todoToUpdate.id) {
        axios.put(`/api/todos/${todoToUpdate.id}`, todoToUpdate);
        return todoToUpdate;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  }

  function deleteTodo(todoToDelete: Todo) {
    axios.delete(`/api/todos/${todoToDelete.id}`);
    const updatedTodos = todos.filter(
      (todo: Todo) => todo.id !== todoToDelete.id
    );
    setTodos(updatedTodos);
  }

  function createTodo(todoToCreate: Todo) {
    axios.post("/api/todos", todoToCreate).then((response) => {
      setTodos((prevTodos) => [...prevTodos, response.data]);
    });
  }

  const todoFormProps: TodoFormProps = {
    createTodo: createTodo,
    updateTodo: updateTodo,
  };

  const todosProps: TodosProps = {
    todos: todos,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo,
    createTodo: createTodo,
  };

  return (
    <Container>
      <Header />
      <TodoForm {...todoFormProps} />
      <TodosTable {...todosProps} />
    </Container>
  );
}

export default App;
