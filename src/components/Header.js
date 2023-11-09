import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Image, Row, Col, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { push } from '../modules/history';
import { logout, setDarkMode } from '../redux/actions';
import avatar from '../assets/images/avatar.svg';
import logo from '../assets/images/logoWhite.svg';
import Icon from './Icon';

const Header = () => {
  const dispatch = useDispatch();

  const { user, darkmode } = useSelector(({ auth }) => auth);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const onlogout = () => {
    dispatch(logout());
  };

  const onDarkMode = () => {
    dispatch(setDarkMode());
  };

  const navbarStyle = {
    backgroundColor: darkmode ? '#2C313E' : '#6A6F8E', // Color oscuro o claro según el modo
  };

  return (
    <Navbar collapseOnSelect expand='sm' style={navbarStyle}>
      <Container fluid className='px-0 mx-0'>
        <Navbar.Brand className='ms-5'>
          <Image src={logo} style={{ width: 104, height: 30 }} onClick={() => push('/')} className='c-pointer' />
        </Navbar.Brand>
        <Navbar.Brand className='ms-5 d-flex align-items-center c-pointer d-none d-sm-flex' onClick={() => push('/')}>
          <h5 className='my-0' style={{ color: '#A0A0A0' }}>
            Home
          </h5>
        </Navbar.Brand>
        <Navbar.Brand
          className='ms-5 d-flex align-items-center c-pointer d-none d-sm-flex'
          onClick={() => push('/contacts')}
        >
          <h5 className='my-0' style={{ color: '#A0A0A0' }}>
            Contacts
          </h5>
        </Navbar.Brand>
        <Navbar.Brand
          className='ms-5 d-flex align-items-center c-pointer d-none d-sm-flex'
          onClick={() => push('/add-task')}
        >
          <h5 className='my-0' style={{ color: '#A0A0A0' }}>
            Add task
          </h5>
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleClick} className='me-4 me-md-3'>
          {isClicked ? (
            <Icon name='fa-solid fa-x' fontSize={20} color={'#FEFEFE'} />
          ) : (
            <Icon name='fa-solid fa-bars' fontSize={30} color={'#FEFEFE'} />
          )}
        </Navbar.Toggle>

        <Navbar.Collapse id='responsive-navbar-nav' style={{ backgroundColor: 'transparent' }}>
          <Nav className='me-auto d-sm-none pt-3 ' style={{ overflow: 'scroll' }}>
            <div className='mx-4 text-start'>
              <Form.Check
                type='switch'
                id='custom-switch'
                label='Dark Mode'
                checked={darkmode}
                onChange={onDarkMode}
                style={{ color: darkmode ? 'white' : '#212E36' }}
              />
            </div>
            <Nav.Link href='#' className='mx-4 text-start' onClick={() => push('/')}>
              <h5 className='mb-2 fc-red' style={{ color: darkmode ? 'white' : '#212E36' }}>
                Home
              </h5>
            </Nav.Link>
            <Nav.Link href='#' className='mx-4 text-start' onClick={() => push('/contacts')}>
              <h5 className='mb-2 fc-red' style={{ color: darkmode ? 'white' : '#212E36' }}>
                Contacts
              </h5>
            </Nav.Link>
            <Nav.Link href='#' className='mx-4 text-start' onClick={() => push('/add-task')}>
              <h5 className='mb-2 fc-red' style={{ color: darkmode ? 'white' : '#212E36' }}>
                Add task
              </h5>
            </Nav.Link>
            <Nav.Link href='#' className='mx-4 text-start' onClick={onlogout}>
              <h5 className='mb-2 fc-red' style={{ color: darkmode ? 'white' : '#212E36' }}>
                Log out
              </h5>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className='d-none d-sm-inline '>
          <NavDropdown
            align='end'
            id='collasible-nav-dropdown'
            title={<Image roundedCircle src={avatar} alt='user' style={{ width: 44, height: 44 }} />}
            className='p-0 me-4'
          >
            <Form.Check
              type='switch'
              id='custom-switch'
              label='Dark Mode'
              className='m-2'
              checked={darkmode}
              onChange={onDarkMode}
            />

            <p className='py-2 pb-2 p-3'>User: {user.username}</p>
            <NavDropdown.Item href='#' onClick={onlogout} className='py-2 pb-2 p-3' style={{ color: '#be0548' }}>
              Log out
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
