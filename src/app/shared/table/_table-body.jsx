import React from 'react';
import { _tableRow } from './_table-row';

export const _tableBody = ( props ) => {
	const { _state, _template, _callback } = props;
	if( _state.length === 0 ) {
		return (
			<span className="no-results">No results available</span>
		);
	}

	return (
		<div className="flex-table-body">
			{
				_state.map( ( row, index ) => {
					return (
						<_tableRow
							key={ index }
							_state={ row }
							_template={ _template }
							_callback={ _callback }
							_index={ index }
						/>
					);
				} )
			}
		</div>
	);
 };
