import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from './Header';

const RoutePrivate = ({ component: Component, authorized, to, ...rest }) => {
  const { isAuthenticated, darkmode } = useSelector(({ auth }) => auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <div style={{ backgroundColor: darkmode ? '#192229' : 'white', minHeight: '100vh' }}>
            <Header />
            <Container fluid>
              <Component {...props} />
            </Container>
          </div>
        ) : (
          <Redirect
            to={{
              pathname: to,
              state: { redirect: props.location.pathname, isAuthenticated },
            }}
          />
        )
      }
    />
  );
};

RoutePrivate.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
};

RoutePrivate.defaultProps = {
  to: '/login',
};

export default RoutePrivate;
