import React from 'react';

export const _tablePaginator = function( props ) {

  const { _state } = props;

  if ( _state.length === 0 ) {
    return false;
  }

  const renderActiveState = ( item ) => {
  if( item === true ) {
    return 'active';
  }
    return '';
  };
  return(
    <div className="slidable-table-paginator">
    {
      props._state.map( ( item, index ) => {
        return (
          <div
            className={ 'slidable-table-page ' + renderActiveState( item ) }
            key={ index }
            onClick={ ( event ) => { props._callback( event, index ); } }>
          </div>
        );
      } )
    }
    </div>
  );
};
