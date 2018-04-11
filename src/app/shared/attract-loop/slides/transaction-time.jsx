import React from 'react';
import { formatNumeral } from 'utils/utils';
import Moment from 'moment-timezone';

export default class TransactionTime extends React.Component {
	render() {
		const style = {
     		backgroundImage: 'url(\'' + this.props.transactionTime.img + '?' + Moment().format( 'M-D' ) + '\')'
        };

		return (
			<div className="transaction-time">
				<div className="header">
					<div className="location">
						{ this.props.location }
					</div>
				</div>
				<div className="body">
					<div className="data">
						<div className="value">
							{ this.props.transactionTime.value }
						</div>
						<div className="label">
							{ this.props.transactionTime.label }
						</div>						
					</div>
					<div className="graphic">
						<div className="image" style={ style }/>
					</div>
				</div>

				{
					SHOW_UPDATED_AS_OF_TIME_ON_ATTRACT_LOOP
					&&
					<div className="timestamp">
						{ 'Updated as of: ' + this.props.lastUpdate}
					</div>
				}

			</div>
		);
	}
}