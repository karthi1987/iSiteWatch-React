import React from 'react';
import './dropdown.scss';
import Icon from '../icons/icons';
import webTrack from 'utils/web-tracking/web-track';

export class _dropdown extends React.Component {

  constructor( props ) {
    super( props );

    this.state = {
      open: false
    };
  }

  // if( !props._state ) {
  //   return false;
  // }

  renderLabel = ( props ) => {
    if( !props._label ) {
      return props._state[ 0 ] && props._state[ 0 ].label;
    }
    return props._label;
  };

  openDropdown = () => {
    this.setState( { open: true } );
  }

  closeDropdown = ( event ) => {
    this.setState( { open: false } );
  }

  render() {
    const props = this.props;
    if( this.props._state ) {
      return (
        <div className="dropdown-container" onClick={ this.openDropdown }>

          <div className="dropdown-selected-active">
            <span className="dropdown-selected-active-label">{ this.renderLabel( props ) }</span>
            <Icon name="down-arrow" viewBox="0 0 2040.9 2040.9" />
          </div>

          {
            this.state.open
            &&
            <_dropdownList { ...this.props } renderLabel={ this.renderLabel } closeDropdown={ this.closeDropdown } />
          }

        </div>
      );
    }else{
      return <div />;
    }
    
  }
	
}

class _dropdownList extends React.Component {
  componentDidMount() {
    document.addEventListener( 'click', this.props.closeDropdown );
  }
  componentWillUnmount() {
    document.removeEventListener( 'click', this.props.closeDropdown );
  }
  renderList = ( props ) => {
    return props._state.map( ( item, index ) => {
      return (
        <li key={ index }>
          <span onClick={ ( event ) => { 
            if ( item.milestoneId ) {
              webTrack( item.milestoneId )
            }
            props._callback( event, item.label, ( item.id || item.value ), ( item.defaultValue || 0 ) );
            this.props.closeDropdown( false ); 
          } }>{ item.label }</span>
          { this.renderSubList( item ) }
        </li>
      );
    } );
  };

  renderSubList = ( items ) => {
    if( !items.children ) {
      return false;
    }
    return (
      <ul>
        { this.renderSubListItems( items ) }
      </ul>
    );
  };

  renderSubListItems = ( items ) => {
    if( !items.children ) {
      return false;
    }
    return items.children.map( ( item, index ) => {
      return (
        <li key={ index }>
          <span onClick={ ( event ) => { this.props._callback( event, item.label, ( item.id || item.value ) ); } }>{ item.label }</span>
          { this.renderSubList( item ) }
        </li>
      );
    } );
  };

  render() {
    const props = this.props;
    return(
      <div className="dropdown-list">
        <div className="dropdown-selected">
          <Icon name="check"/>
          <span className="dropdown-selected-label">
            { this.props.renderLabel( props ) }
          </span>
        </div>
        <ul>
          { this.renderList( props ) }
        </ul>
      </div>
    );
  }
}
