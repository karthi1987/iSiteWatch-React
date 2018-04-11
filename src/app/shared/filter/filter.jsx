	/* ---------------------- Node Includes ---------------------- */
import _ from 'lodash';
import React from 'react';

import Multiselect from 'react-bootstrap-multiselect';

	/* ---------------------- Local Includes ---------------------- */
require( './bootstrap-multiselect.scss' );
// let track = require('../../actions/webtrack').track;


class Filter extends React.Component {

	constructor ( props ) {
		super( props );

		this.onSelectChange = this.onSelectChange.bind( this );
	}

	get value () {
		return this.refs.multiselect.refs.multiselect.value;
	}

	onSelectChange( option, checked ) {

		const event = option[ 0 ];
		event.filterID = this.props.filterID;

		this.props.onFilter( event );

		// track(_.find(this.props.options, (option) => option.value == event.value ).milestoneId );
	}

	render() {

		let selectedIndex;
		const placeholderText = !_.isEmpty( this.props.placeholderText ) ? this.props.placeholderText : 'Select an Option';

		return (
			<div className="multiselect-wrapper">
				<Multiselect
					size={selectedIndex ? this.props.options.length : this.props.options.length + 1 } //NB: this is a workaround to give single-select menus the ability to display a 'none selected' option. https://github.com/davidstutz/bootstrap-multiselect/issues/720 https://github.com/davidstutz/bootstrap-multiselect/issues/129
					data={this.props.options}
					onChange={this.onSelectChange}
					multiple={this.props.multiselect}
					nonSelectedText={placeholderText}
					ref="multiselect"
				/>
			</div>
		);
	}

}

Filter.propTypes = {
	filterID: React.PropTypes.string,
	options:	React.PropTypes.arrayOf(
		React.PropTypes.shape(
			{
				label:	React.PropTypes.string.isRequired,
				value:	React.PropTypes.string.isRequired,
				milestoneId: [ React.PropTypes.number, React.PropTypes.string ],
				selected:	React.PropTypes.bool
			}
		)
	).isRequired,
	onFilter: React.PropTypes.func
};

Filter.defaultProps = {
	onFilter: _.noop
};

module.exports = Filter;
