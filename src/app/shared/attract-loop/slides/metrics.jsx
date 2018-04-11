import React from 'react';
import { formatNumeral } from 'utils/utils';
import Moment from 'moment-timezone';

export default class Metrics extends React.Component {

	calculateFontSize() {
		const length = this.props.metrics.metrics.length;

		switch( length ) {
			case 1:
				return {
					metricWidth: { 'width': '40%' },
					imageWidth: { 'width': '30%' },
					valueSize: { 'fontSize': '' },
					labelSize: { 'fontSize': '' }
				};

			case 2: 
				return {
					metricWidth: { 'width': '50%' },
					imageWidth: { 'width': '30%' },
					valueSize: { 'fontSize': '5rem' },
					labelSize: { 'fontSize': '' }
				};

			case 3: 
				return {
					metricWidth: { 'width': '50%' },
					imageWidth: { 'width': '30%' },
					valueSize: { 
						'fontSize': '4rem',
					},
					labelSize: { 
						'fontSize': '1.8rem',
						'lineHeight': '1.8rem'
					}

				};

			case 4: 
				return {
					metricWidth: { 'width': '50%' },
					imageWidth: { 'width': '30%' },
					valueSize: { 'fontSize': '' },
					labelSize: { 'fontSize': '' }
				};

			default:
				return {};
		}
	}

	chunkArray( arr, size ) {
		var result = [];

	  	for ( var i = 0; i < arr.length; i += size ) {
	  		result.push( arr.slice( i, size + i ) );
	  	}

  		return result;
	}

	render() {
		const style = {
			backgroundImage: 'url(\'' + this.props.metrics.img + '?' + Moment().format('M-D') + '\')'
        };

        const itemStyle = this.calculateFontSize();

        let chunkedArray = [];
        if( this.props.metrics.metrics.length > 2 ) {
        	chunkedArray = this.chunkArray( this.props.metrics.metrics, 2 );
        }

		return (
			<div className="metrics">
				<div className="header">
					<div className="location">
							{ this.props.location }
					</div>
				</div>
				<div className="body">
					<div className="data">
					{
						this.props.metrics.metrics.length <= 2
						?
						<div className="metric-row">
						{
							this.props.metrics.metrics.map(
								( metric, i ) => 
									<div key={ i } className="metric" style={ itemStyle.metricWidth }>
										<div className="value" style={ itemStyle.valueSize }>{ formatNumeral( metric.value, metric.valueType ) }</div>
										<div className="label" style={ itemStyle.labelSize }>{ metric.label }</div>
									</div>
							)
						}
						</div>
						:
						<div className="metric-group">
						{
							chunkedArray.map(
								( chunk, i ) =>
									<div key={ i } className="metric-row">
										{
											chunk.map(
												 ( metric, j ) => 
													<div key={ j } className="metric" style={ itemStyle.metricWidth }>
														<div className="value" style={ itemStyle.valueSize }>{ formatNumeral( metric.value, metric.valueType ) }</div>
														<div className="label" style={ itemStyle.labelSize }>{ metric.label }</div>
													</div>
											)
										}
									</div>
							)
						}
						</div>
					}	
					</div>
					<div className="graphic" style={ itemStyle.imageWidth }>
						<div className="image" style={ style }/>
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