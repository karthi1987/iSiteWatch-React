//libs and utilities
import React from 'react';
import Icon from '../icons/icons';

export const _tableColumnDrilldownTemplate = ( content, callback, index ) => {

	const renderCarrot = ( label, index ) => {

		if ( index === 0 && label ) {
			return (
				<span className="drilldown-carrot">
					<Icon name="right-arrow" viewBox="0 0 25 25"/>
				</span>
			)
		}
		return false;
	};

	const renderCallback = ( content, callback, index ) => {

		if ( index === 0 && content.label ) {
			return (
					<div className="table-column-drilldown-template">
						<span onClick={ ( event ) => { callback( event, content ); } }>
							{ content.label }
						</span>
						{ renderCarrot( content.label, index ) }
					</div>
				)
		} else {
			return (
				<div className="table-column-drilldown-template">
					<span>
						{ content.label }
					</span>
					{ renderCarrot( content.label, index ) }
				</div>
			)
		}

	};

	return (
		<div>
			{ renderCallback( content, callback, index ) }
		</div>
	);
};
