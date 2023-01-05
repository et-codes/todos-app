import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Todo from "../interfaces/Todo";
import TodoFormProps from "../interfaces/TodoFormProps";

export default function TodoForm(props: TodoFormProps) {
  const { createTodo, updateTodo, todo, openModal } = props;
  const [text, setText] = useState<string>("");
  const [dueDateString, setDueDateString] = useState<string>("");
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (todo) setEditMode(true);
  }, []);

  useEffect(() => {
    if (editMode && todo) {
      setEditMode(true);
      setText(todo.text);
      if (todo.dueDate) {
        setDueDateString(todo.dueDate.substring(0, 10));
      }
    }
  }, [editMode, todo]);

  function handleText(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleDueDate(event: React.ChangeEvent<HTMLInputElement>) {
    setDueDateString(event.target.value);
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const todoToCreate: Todo = {
      text: text,
    };
    if (dueDateString) {
      todoToCreate.dueDate = new Date(dueDateString).toISOString();
    }
    createTodo(todoToCreate);
    setText("");
    setDueDateString("");
  }

  function handleEdit(event: React.SyntheticEvent) {
    event.preventDefault();
    const todoToUpdate: Todo = {
      ...todo,
      text: text,
    };
    if (dueDateString) {
      todoToUpdate.dueDate = new Date(dueDateString).toISOString();
    }
    updateTodo(todoToUpdate);
    setText("");
    setDueDateString("");
    if (openModal) openModal(false);
  }

  return (
    <Form className="mb-3" onSubmit={editMode ? handleEdit : handleSubmit}>
      <Form.Group className="mb-1">
        <Form.Label>Enter new task</Form.Label>
        <Form.Control
          type="text"
          value={text}
          onChange={handleText}
          placeholder="Task description"
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Due date (optional)</Form.Label>
        <Form.Control
          type="date"
          value={dueDateString}
          onChange={handleDueDate}
        />
      </Form.Group>
      <Button type="submit">{editMode ? "Update" : "Create"}</Button>
    </Form>
  );
}
