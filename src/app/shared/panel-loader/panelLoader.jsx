import React from 'react';
import 'panelLoader.scss';

export default class PanelLoader extends React.Component {

	render() {
		return (
			<div>
				<div className="progress-indicator">
					<div className="progress-indicator-image">
						<img src={ require( '../images/new-loader.gif' ) } />
					</div>
				</div>
			</div>
		);
	}
}
