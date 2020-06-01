import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/landing';
import NavBar from './components/layout/navbar';
import Login from './components/auth/login';
import Register from './components/auth/register';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <NavBar />
      <Route exact path='/' component={ Landing } />
      <section className='container'>
        <Switch>
          <Route exact path='/register' component={ Register } />
          <Route exact path='/login' component={ Login } />
        </Switch>
      </section>
    </Fragment>
  </Router>
);

export default App;
