import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function TodoForm() {
  const [text, setText] = useState<string>("");
  const [dueDate, setDueDate] = useState<Date | null>(null);

  return (
    <Form className="mb-3">
      <Form.Group className="mb-1">
        <Form.Label>Enter new task</Form.Label>
        <Form.Control type="text" placeholder="Task description" />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Due date (optional)</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
