import React from 'react';
import Moment from 'moment-timezone';

export default class Agenda extends React.Component {

	createMarkup() {
  		return { __html: this.props.agenda.summary };
	}

	render() {
		const style = {
            backgroundImage: 'url(\'' + this.props.agenda.img + '?' + Moment().format( 'M-D' ) + '\')'
        };

		return (
			<div className="agenda" >
				<div className="header">
					<div className="location">
							{ this.props.location }
					</div>
				</div>
				<div className="body">
					<div className="data">
						<div className="details">
							<div className="agenda-label">
								{ this.props.agenda.label }
							</div>
							<div className="description">
								{ this.props.agenda.description }
							</div>
							<div className="timeFrame">
								<div>
									{ this.props.agenda.startDate + '  ' } &#8211;
								</div>
								<div>
									{ this.props.agenda.endDate }
								</div>	
							</div>
						</div>
						<div className="summary">
							<div className="spacer-top">{"\u00a0"}</div>
							<div className="content"dangerouslySetInnerHTML={ this.createMarkup() }></div>
							<div className="spacer-bot">{"\u00a0"}</div>
						</div>
					</div>
					<div className="agenda-graphic">
						<div className="image" style={ style }>
						</div>
					</div>
				</div>

				{
					SHOW_UPDATED_AS_OF_TIME_ON_ATTRACT_LOOP
					&&
					<div className="timestamp">
						{ 'Updated as of: ' + this.props.lastUpdate }
					</div>
				}

			</div>

		);
	}
}