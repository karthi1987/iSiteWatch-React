import React from 'react';
import Moment from 'moment-timezone';

export default class InitialPage extends React.Component {
	render() {

		const style = {
            backgroundImage: 'url(\'' + this.props.initialPage.img + '?' + Moment().format( 'M-D' ) + '\')'
        };

		return (
			<div>
			{
				this.props.initialPage.img
				&&
				<div className="initial-page" style={style}>
				</div>
			}
			</div>
		);
	}
}