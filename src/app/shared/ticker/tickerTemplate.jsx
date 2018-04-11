import React from 'react';

export default class extends React.Component {
    constructor( props ) {
        super( props );
    }
    renderHeadline( item ) {
        if( item.urgentMsg === true ) {
            return (
                <span className="alert">{ item.headline }</span>
            );
        } else {
            return (
                <span>{ item.headline }</span>
            );
        }
    }
    render() {
        return this.props._state.map( ( item, index ) => {
            return (
                <div className="ticker-content" key={ index }>
                    { this.renderHeadline( item ) }
                    <span className="separator">/</span>
                </div>
            );
        } );
    }
}
