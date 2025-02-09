import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import Spinner from '../layout/spinner';
import DashboardActions from './dashboard.actions';
import Experience from './experience';
import Education from './education';

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading },
	deleteAccount,
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);
	return loading && profile === null ? (
		<Spinner />
	) : (
		<section className='container'>
			<h1 className='large text-primary'>Dashboard</h1>
			<p className='lead'>
				<i className='fas fa-user'></i> Welcome {user && user.name}
			</p>
			{profile !== null ? (
				<Fragment>
					<DashboardActions />
					<Experience experience={profile.experience} />
					<Education education={profile.education} />
					<div className='my-2'>
						<button
							className='btn btn-danger'
							onClick={() => deleteAccount()}
						>
							<i className='fas fa-user-alt-slash'></i> Delete My
							Account
						</button>
					</div>
				</Fragment>
			) : (
				<Fragment>
					<p>
						You have not yet setup a profile, please add some info
					</p>
					<Link to='/create-profile' className='btn btn-primary my-1'>
						Create Profile
					</Link>
				</Fragment>
			)}
		</section>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
	deleteAccount: PropTypes.func.isRequired,
};

const maptStateToProps = ({ auth, profile }) => ({ auth, profile });

export default connect(maptStateToProps, { getCurrentProfile, deleteAccount })(
	Dashboard
);
