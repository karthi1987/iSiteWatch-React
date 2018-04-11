import React from 'react';

export class LeftArrow extends React.Component {

	render() {
	       return ( <button type="button" data-role="none" className="slick-prev" {...this.props}><div><i className="vz vz-back-caret"/></div></button> );
	}

}

export class RightArrow extends React.Component {

	render() {
	       return ( <button type="button" data-role="none" className="slick-next" {...this.props}><div><i className="vz vz-forward-caret"/></div></button> );
	}

}

// export default LeftArrow;
