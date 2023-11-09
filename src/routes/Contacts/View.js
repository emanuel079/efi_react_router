import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

function View() {
  const { darkmode } = useSelector(({ auth }) => auth);

  return (
    <Container className='min-h-screen d-flex flex-column justify-content-center align-items-center py-5'>
      <h1 style={{ color: darkmode ? 'white' : 'black' }}>Contacts</h1>
      <p style={{ color: darkmode ? 'white' : 'black' }}>Contact information</p>
    </Container>
  );
}

export default View;
