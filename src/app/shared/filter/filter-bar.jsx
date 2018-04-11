	/* ---------------------- Node Includes ---------------------- */
import React from 'react';
import classNames from 'classnames';
import { sortBy, filter } from 'lodash';

	/* ---------------------- Local Includes ---------------------- */
const Filter = require( './filter' );


	/* ---------------------- Page-Specific Includes ---------------------- */
require( './filter-bar.scss' );

class FilterBarInternal extends React.Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div className="filter-bar">
				{
					sortBy( filter( this.props.filters, { display: true } ), [ 'order' ] ).map( ( value, index ) => {
						return ( <Filter ref={`${value.name}Filter`} options={value.options} multiselect={value.multiselect} filterID={value.name} placeholderText={value.defaultOption} onFilter={this.onFilterChange}  key={index} /> );
					} )
				}
				<button className={ classNames( 'submit-button', 'button', 'button-primary', { 'disabled': !this.shouldDisplayButton() } ) } onClick={ this.submitFilterData }>Filter</button>
			</div>
		);
	}
}

class FilterBar extends React.Component {

	constructor( props ) {
		super( props );
	}

	render() {
		return (
			false
		);
	}
}

module.exports = FilterBar, FilterBarInternal;
