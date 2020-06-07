import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/landing';
import NavBar from './components/layout/navbar';
import Alert from './components/layout/alert';
import Dashboard from './components/dashboard/dashboard';
import CreateProfile from './components/profile-form/create.profile';
import EditProfile from './components/profile-form/edit.profile';
import AddExperience from './components/profile-form/add.experience';
import AddEducation from './components/profile-form/add.education';
import Profiles from './components/profiles/profiles';
import Profile from './components/profile/profile';
import Posts from './components/posts/posts';
import Post from './components/post/post';
import Login from './components/auth/login';
import Register from './components/auth/register';
import PrivateRouter from './components/routing/privateroute';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import './App.css';

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<NavBar />
					<Route exact path='/' component={Landing} />
					<Alert />
					<Switch>
						<Route exact path='/register' component={Register} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/profiles' component={Profiles} />
						<Route exact path='/profile/:id' component={Profile} />
						<PrivateRouter
							exact
							path='/dashboard'
							component={Dashboard}
						/>
						<PrivateRouter
							exact
							path='/create-profile'
							component={CreateProfile}
						/>
						<PrivateRouter
							exact
							path='/edit-profile'
							component={EditProfile}
						/>
						<PrivateRouter
							exact
							path='/add-experience'
							component={AddExperience}
						/>
						<PrivateRouter
							exact
							path='/add-education'
							component={AddEducation}
						/>
						<PrivateRouter exact path='/posts' component={Posts} />
						<PrivateRouter
							exact
							path='/posts/:id'
							component={Post}
						/>
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
