import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Card, Form, Button, Image, Spinner } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

import { login } from '../../redux/actions';

import PasswordInput from '../../components/PasswordInput';
import logo from './../../assets/images/logo.svg';

const Login = () => {
  const { loading, darkmode } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  const signIn = (values) => {
    dispatch(login(values));
  };

  const schema = yup.object({
    username: yup.string().required('The username is required'),
    password: yup.string().required('The password is required'),
  });

  return (
    <Row>
      <Col xs={12} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} className='fill'>
        <div className='text-center my-5'>
          <Image src={logo} />
        </div>
        <Card style={{ backgroundColor: darkmode && '#212E36' }}>
          <Card.Header className='text-center' style={{ backgroundColor: darkmode ? '#2A3B47' : '#EEEEEE' }}>
            <p style={{ color: darkmode && 'white' }}>Login</p>
          </Card.Header>
          <Card.Body className='p-5'>
            <Formik
              validationSchema={schema}
              onSubmit={signIn}
              initialValues={{ username: '', password: '' }}
            >
              {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} controlId='formHorizontalEmail'>
                      <Form.Label column>
                        <p style={{ color: darkmode ? 'white' : '#212E36' }}>Username</p>
                      </Form.Label>
                      <Col sm={12}>
                        <Form.Control
                          name='username'
                          placeholder='Username'
                          value={values.username}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Form.Control.Feedback type='invalid' style={{ display: 'initial' }}>
                          {errors.username}
                        </Form.Control.Feedback>
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId='formHorizontalPassword'>
                      <Form.Label column>
                        <p style={{ color: darkmode ? 'white' : '#212E36' }}>Password</p>
                      </Form.Label>
                      <Col sm={12}>
                        <PasswordInput
                          name='password'
                          placeholder='Password'
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Form.Control.Feedback type='invalid' style={{ display: 'initial' }}>
                          {errors.password}
                        </Form.Control.Feedback>
                      </Col>
                    </Form.Group>

                    <Row>
                      <div className='d-grid gap-2'>
                        <Button
                          type='submit'
                          disabled={!isValid}
                          className=' mt-5 mb-3 w-auto px-5'
                        >
                          {loading ? (
                            <Spinner
                              as='span'
                              animation='border'
                              size='sm'
                              role='status'
                              aria-hidden='true'
                            />
                          ) : (
                            'Login'
                          )}
                        </Button>
                      </div>
                    </Row>
                  </Form>
                );
              }}
            </Formik>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
