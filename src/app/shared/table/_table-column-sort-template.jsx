//libs and utilities
import React from 'react';
import Icon from '../icons/icons';

export const _tableColumnSortTemplate = ( content, callback, index, sort, fixedColumns, fromWhichColumn ) => {
  const renderActiveState = () => {
    if( index === sort.index && sort.sortOn === 'DESC' ) {
      return 'carrot active';
    } else {
      return 'carrot';
    }
  };
  const renderCarrot = () => {

      return (
        <span onClick={ ( event ) => { callback( event, content, index ); } } className={ renderActiveState() }>
          <Icon name="down-arrow" viewBox="0 0 2040.9 2040.9"/>
        </span>
      )
  }
  return (
    <div className="table-header-template">
      <span className="table-header-template-title">{ content.label }</span>
      {
        renderCarrot()
      }
    </div>
  );
};
