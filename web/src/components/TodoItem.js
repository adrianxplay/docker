import React from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({ todo, handleDelete, handleToggle }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <Form.Check
          type="checkbox"
          className="mr-2"
          checked={todo.completed}
          label={todo.description}
          onChange={() => handleToggle(todo)}
        />

      </div>
      <Button
        variant="danger"
        className="align-self-start"
        onClick={() => handleDelete(todo)}
      >
        <FaTrash />
      </Button>
    </ListGroup.Item>
  );
};

export default TodoItem;
