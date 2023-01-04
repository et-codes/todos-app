import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodosTable from "./components/TodosTable";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/todos").then((response) => {
      setTodos(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <TodoForm />
      <TodosTable todos={todos} />
    </Container>
  );
}

export default App;
