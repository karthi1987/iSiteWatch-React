import React from 'react';
import './error-message.scss';

class ErrorMessage extends React.Component {
	render() {
		const {
			message
		} = this.props;


		return <div className={ "error-message-box" }>
			<i className="vz vz-alert" />
			<div className="message">
				{message}
			</div>
		</div>;
	}
}

ErrorMessage.propTypes = {
	message: React.PropTypes.string,
};

export default ErrorMessage;
