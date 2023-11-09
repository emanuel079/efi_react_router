import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';

function View() {
  const { darkmode } = useSelector(({ auth }) => auth);

  return (
    <Container className='min-h-screen d-flex flex-column justify-content-center align-items-center py-5'>
      <h1 style={{ color: darkmode ? 'white' : 'black' }}>Add task</h1>
      <Form style={{ width: '300px', marginTop: '20px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ color: darkmode ? 'white' : 'black' }}>Task</Form.Label>
          <Form.Control type="text" placeholder="Enter task" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </Form>
    </Container>
  );
}

export default View;
