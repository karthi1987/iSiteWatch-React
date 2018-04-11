import React from 'react';
import './avatar.scss';

/*
 * Simple Avatar component
 * TODO: improve css

	<Avatar
	 	className="string"
	    avatar="string" // img url
	    firstName="string" // first character gets used in absence of avatar image
	    lastName="string"  // first character gets used in absence of avatar image
	/>

 *
 */
class Avatar extends React.Component {
	render() {

		const {
			avatar, className, firstName, lastName
		} = this.props;

		if( avatar ) {
			return <img className={ 'avatar-image ' + className + '-avatar-image' } src={ avatar } />;
		}else if( firstName && lastName ) {
			return(
				<span className={ 'avatar-initials ' + className + '-avatar-initials' }>
                    { firstName.charAt( 0 ) + lastName.charAt( 0 ) }
                </span>
			);
		}else{
			return <span className={ 'avatar-initials ' + className + '-avatar-initials' }></span>;
		}

	}
}

Avatar.propTypes = {
	className: React.PropTypes.string,
	avatar: React.PropTypes.oneOfType( [
		React.PropTypes.string,
		React.PropTypes.bool
	] ),
	firstName: React.PropTypes.string,
	lastName: React.PropTypes.string
};

export default Avatar;