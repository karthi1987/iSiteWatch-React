//libs and utilities
import React from 'react';

export const _tableRow = ( props ) => {
	const { _state, _callback, _index, _template, _fixedColumns, _fromWhichColumn } = props;

	if ( _state.length === 0 ) {
		return false;
	}

	const renderTemplate = ( column, index ) => {

		if ( _template ) {
			return _template( column, _callback, index, _index, _fixedColumns, _fromWhichColumn );
		} else {
			return column.label;
		}

	};

	return (
		<div className="flex-table-row">
			{
				_state.map( ( column, index ) => {
					return(
						<div className="flex-table-column" key={ index } >
							{
								renderTemplate( column, index )
							}
						</div>
					);
				} )
			}
		</div>
	);
};
