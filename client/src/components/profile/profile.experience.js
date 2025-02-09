import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ProfileExperience = ({
	experience: { company, title, location, current, to, from, description },
}) => {
	return (
		<div>
			<h3 className='text-dark'>{company}</h3>
			<p>
				{`${moment(new Date(from)).format('YYYY/MM/DD')} - ${
					!to ? 'Now' : moment(new Date(to)).format('YYYY/MM/DD')
				}`}
			</p>
			<p>
				<strong>Position: </strong> {title}
			</p>
			<p>
				<strong>Description: </strong> {description}
			</p>
		</div>
	);
};

ProfileExperience.propTypes = {
	experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
