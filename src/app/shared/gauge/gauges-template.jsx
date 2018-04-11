import React from 'react';
import Gauge from './gauge';
import GaugeFooter from './gauge-footer';
import './gauges-template.scss';
import ErrorMessage from 'app/shared/error-message/error-message';
import { ERRORs } from 'app/app-lang';

export const renderGauges = ( props ) => {
	if ( !props ) {
		return false;
	}
	const renderGauges = () => {

		if ( props.length === 0 ) {
			return (
				<ErrorMessage message={ERRORs().SCORECARD_MODULE_NO_RESULTS} />
			);
		}

		return props.map( ( item, index ) => {
			return (
				<div className="gauge-template" key={index}>
					<Gauge
						id={ 'gauge-' + index }
						nameSpace="scorecard-module"
						name={ item.description }
						percentage={ Number( item.achievement ) || 0 }
						graphic={ true }
						achievement={ item.achievement }
						objective={ Number( item.objective ) }
						result={ Number( item.attainment ) }
						tails={ Number( item.objective ) ? true : false }
						flipped={ item.objective ? false : null }
						strokeWidth={ 60 }
						valueType={ item.valueType }
						valueRaw={ item.value }
						hasShadow={ false }
						milestoneId={ item.milestoneId }
						scheme="red" />
					<GaugeFooter gauge={ item } count={ index } />
					<svg className="shadow" width="100%" height="100px" viewBox="0 0 375 75"><desc>Created with Snap</desc><defs><filter id="Six7sea8u84k" filterUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="10"></feGaussianBlur></filter></defs><ellipse cx="187.5" cy="37.5" rx="140" ry="15" filter="url('#Six7sea8u84k')"></ellipse></svg>
				</div>
			);
		} );
	};
	return (
		<div className="gauges-template">
			{ renderGauges() }
		</div>
	);
};
