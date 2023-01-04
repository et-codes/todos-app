import axios from "axios";
import { useEffect, useState } from "react";
import { Container, ListGroup, Navbar } from "react-bootstrap";
import TodoItem from "./components/TodoItem";
import { Todo } from "./interfaces/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);

  return (
    <Container>
      <Navbar>
        <Navbar.Brand className="text-primary">Todo List</Navbar.Brand>
      </Navbar>
      <ListGroup>
        {todos.map((todo: Todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ListGroup>
    </Container>
  );
}

export default App;
