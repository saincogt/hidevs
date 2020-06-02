import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/landing';
import NavBar from './components/layout/navbar';
import Alert from './components/layout/alert';
import Login from './components/auth/login';
import Register from './components/auth/register';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path='/' component={ Landing } />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={ Register } />
            <Route exact path='/login' component={ Login } />
          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
