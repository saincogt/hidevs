import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ProfileEducation = ({
	education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
	return (
		<div>
			<h3 className='text-dark'>{school}</h3>
			<p>
				{`${moment(new Date(from)).format('YYYY/MM/DD')} - ${
					!to ? 'Now' : moment(new Date(to)).format('YYYY/MM/DD')
				}`}
			</p>
			<p>
				<strong>Degree: </strong> {degree}
			</p>
			<p>
				<strong>Field of Study: </strong> {fieldofstudy}
			</p>
			<p>
				<strong>Description: </strong> {description}
			</p>
		</div>
	);
};

ProfileEducation.propTypes = {
	education: PropTypes.object.isRequired,
};

export default ProfileEducation;
