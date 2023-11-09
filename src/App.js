import React from 'react';
import { Switch, Router } from 'react-router-dom';

import history from './modules/history';

import RoutePrivate from './components/RoutePrivate';
import RoutePublic from './components/RoutePublic';

import Home from './routes/Home/Home';
import Contacts from './routes/Contacts/Contacts';
import AddTasks from './routes/AddTasks/AddTasks';


import Login from './routes/Authentication/Login';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <RoutePublic exact path='/login' component={Login} />
        <RoutePrivate exact path='/' component={Home} />
        <RoutePrivate exact path='/contacts' component={Contacts} />
        <RoutePrivate exact path='/add-task' component={AddTasks} />

      </Switch>
    </Router>
  );
}

export default App;
