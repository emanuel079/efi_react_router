import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';

const RoutePublic = ({ component: Component, to, ...rest }) => {
  const { isAuthenticated, darkmode } = useSelector(({ auth }) => auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <div style={{ backgroundColor: darkmode ? '#192229' : 'white', minHeight: '100vh' }}>
            <Container fluid style={{ paddingTop: '70px' }}>
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

RoutePublic.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  to: PropTypes.string,
};

RoutePublic.defaultProps = {
  to: '/',
};

export default RoutePublic;
