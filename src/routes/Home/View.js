import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Row, Col, Card, Spinner, Form, Button } from 'react-bootstrap';

function View() {
  const { darkmode } = useSelector(({ auth }) => auth);

  const [list, setList] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${perPage}`)
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        setLoading(false);
      });
  }, [page, perPage, filter]);

  useEffect(() => {
    switch (filter) {
      case 'completed':
        setFilteredTasks(list.filter((task) => task.completed));
        break;
      case 'pending':
        setFilteredTasks(list.filter((task) => !task.completed));
        break;
      default:
        setFilteredTasks(list);
    }
  }, [list, filter]);

  const handlePerPageChange = (e) => {
    const selectedPerPage = e.target.value;
    setPerPage(selectedPerPage);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleToggleComplete = (taskId) => {
    setList((prevList) =>
      prevList.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    );
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const renderList = () => {
    const tasksToRender = filteredTasks.length ? filteredTasks : list;
    return tasksToRender.map((item) => (
      <Col key={item.id} sm={6} md={4} lg={3} className='mb-3'>
        <Card style={{ minHeight: '200px', position: 'relative' }}>
          <Card.Body>
            <Card.Title style={{ color: darkmode ? 'white' : '#212E36' }}>{item.title}</Card.Title>
            <Card.Text style={{ color: darkmode ? 'white' : '#212E36' }}>User ID: {item.userId}</Card.Text>
            <h3 style={{ fontSize: '14px', color: item.completed ? '#44924B' : '#EC7070' }}>
              {item.completed ? 'Completed task' : 'Pending task'}
            </h3>
          </Card.Body>
          <div className='d-flex justify-content-center mb-3'>
            <Button
              className='w-a y-2'
              variant={darkmode ? 'light' : 'primary'}
              size='sm'
              onClick={() => handleToggleComplete(item.id)}
            >
              {item.completed ? 'Uncheck' : 'Check'}
            </Button>
          </div>
        </Card>
      </Col>
    ));
  };

  return (
    <div className='mb-4'>
      <Form.Group>
        <h1 className='py-4' style={{ color: darkmode ? 'white' : 'black' }}>
          List of task:
        </h1>
        <Row className='mb-3'>
          <Col>
            <Form.Label style={{ color: darkmode ? 'white' : 'black' }}>Filter by status:</Form.Label>
            <Form.Control
              as='select'
              onChange={handleFilterChange}
              value={filter}
              className={`${darkmode ? 'bg-dark text-white' : 'bg-light'} w-auto`}
            >
              <option value='all'>All</option>
              <option value='completed'>Completed</option>
              <option value='pending'>Pending</option>
            </Form.Control>
          </Col>
          <Col>
            <Form.Label style={{ color: darkmode ? 'white' : 'black' }}>Tasks per Page:</Form.Label>
            <Form.Control
              as='select'
              onChange={handlePerPageChange}
              value={perPage}
              className={`${darkmode ? 'bg-dark text-white' : 'bg-light'} w-auto`}
            >
              <option value='10'>10</option>
              <option value='15'>15</option>
              <option value='20'>20</option>
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>
      <Row style={{ marginTop: '20px' }}>
        {loading ? (
          <div className='text-center'>
            <Spinner animation='border' role='status' className='mt-5 text-center' />
          </div>
        ) : (
          <>
            {renderList()}
            <p>
              <span className={`${darkmode ? 'text-white' : 'text-dark'} w-auto`}> {page}</span>
            </p>
            <Col sm={12} className='text-center mt-3'>
              <Button
                variant={darkmode ? 'light' : 'primary'}
                className='me-2'
                onClick={handlePrevPage}
                disabled={page === 1}
              >
                Previous
              </Button>
              
              <Button variant={darkmode ? 'light' : 'primary'} onClick={handleNextPage}>
                Next
              </Button>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
}

export default View;
