import React from 'react';
import './tabs.scss';
import { Link } from 'react-router';

export const _tabs = ( props ) => {

	const renderTabState = ( index ) => {
		if( index === props._index ) {
			return 'active';
		}
		return '';
	};

	const renderRoute = ( item, index ) => {
		const renderLink = ( route ) => {
			if( !route ) {
				return item.name;
			}
			return (
				<Link to={ item.route }>
						{ item.name }
				</Link>
			);
		};
		return(
			<li
				key={ index }
				className={ 'tab ' + renderTabState( index ) }
				onClick={ ( event ) => { props._callback( event, index ); } }>
				{ renderLink( item.route ) }
			</li>
		);
	};

	return (
		<ul className="tab-container">
			{
				props._state.map( ( item, index ) => {
					return renderRoute( item, index );
				} )
			}
		</ul>
	);
};
