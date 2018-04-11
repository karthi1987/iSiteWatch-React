//libs
import { filter, findIndex } from 'lodash';
import moment from 'moment';
import momentTimezone from 'moment-timezone';


/*******************************************************************************
 *  1. getFilterId
 *  2. getFilterIndex
 *  3. getFilterLabel
 *  4. getDateCode
 *
 *  TODO: some of these helpers belong in dropdown
 */

export const getFilterId = ( filters, label ) => {

  if( !label ) {
    return filters[ 0 ].id;
  }

  const filteredItem = filter( filters, { 'label': label } );

  if( !filteredItem[ 0 ] ) {
    return filters[ 0 ].id;
  }
  return filteredItem[ 0 ].id;
};

export const getFilterIndex = ( filters, label ) => {

  if( !label ) {
    return 0;
  }

  const filterIndex = findIndex( filters, { 'label': label } );

  if( !filterIndex ) {
    return 0;
  }
  return filterIndex;
};

export const getFilterLabel = ( filters, id ) => {

  if( !id ) {
    return filters[ 0 ].label;
  }

  const filteredItem = filter( filters, { 'id': id } );

  if( !filteredItem[ 0 ] ) {
    return filters[ 0 ].label;
  }
  return filteredItem[ 0 ].label;
};

// TODO some of these helpers belong in dropdown
export const getFilterObject = ( filters, label ) => {

  if( !label ) {
    return filters[ 0 ];
  }

  const filteredItem = filter( filters, { 'label': label } );

  if( !filteredItem[ 0 ] ) {
    return filters[ 0 ];
  }
  return filteredItem[ 0 ];
};


export const getDateCode = ( tabs, index ) => {
  switch ( tabs[ index ].name ) {
    case 'Day':
      return 'D';
    break;
    case 'MTD':
      return 'M';
    break;
    case 'QTD':
      return 'Q';
    break;
  }
};

export const getDateByIndex = ( index ) => {
  switch ( index ) {
    case 0:
      return 'D';
    break;
    case 1:
      return 'M';
    break;
    case 2:
      return 'Q';
    break;
    default:
      return 'D';
  }
};



export const getDateIndex = ( tab ) => {
  switch ( tab ) {
    case 'D':
      return 0;
    break;
    case 'M':
      return 1;
    break;
    case 'Q':
      return 2;
    break;
    default:
      return 0;
  }
};

export const convertEstTimeToUserTimeZone = ( dateTime, zone, abbr = true ) => {
  if ( !zone ) {
    zone = moment.tz.guess();
  }

  if ( !dateTime ) {
    dateTime = moment();
  }

  let userCustomizedTime;
  const utcFormat = 'YYYY-MM-DD hh:mm A';
  const easternTimeZone = 'America/New_York';
  const splitDateTime = dateTime.split( '/' );
  const splittedTime = userDefinedFormat( splitDateTime );
  const easternTime = moment.tz( splittedTime, utcFormat, easternTimeZone );
  if ( easternTime.isValid() ) {
    const userTime = easternTime.clone().tz( zone );
    const userZoneAbbr = userTime.zoneAbbr();
    userCustomizedTime = abbr ? userTime.format( utcFormat ) + ' ' + userZoneAbbr : userTime.format( utcFormat );
    const userModifiedTime = userCustomizedTime.split( '-' );
    userCustomizedTime = serverCustomFormat( userModifiedTime );
  } else {
    userCustomizedTime = moment()._d;
  }
  return userCustomizedTime;
};

export const userDefinedFormat = ( props ) => {
  if ( props && props.length > 0 ) {
    const month = props[ 0 ];
    const date = props[ 1 ];
    let year = null;
    let timeFormat = null;
    let mHs = null;
    const yearAndAmPm = props[ 2 ];
    const splitYearAnd12HourDifference = yearAndAmPm.split( ' ' ) || null;
    if ( splitYearAnd12HourDifference && splitYearAnd12HourDifference.length > 0 ) {
      year = splitYearAnd12HourDifference[ 0 ];
      mHs = splitYearAnd12HourDifference[ 1 ];
      timeFormat = splitYearAnd12HourDifference[ 2 ];
    }
    return year + '-' + month + '-' + date + ' ' + mHs + ' ' + timeFormat;
  }
  return null;
};

export const serverCustomFormat = ( props ) => {
  if ( props && props.length > 0 ) {
    const year = props[ 0 ];
    const month = props[ 1 ];
    const dateAndAmPm = props[ 2 ];
    let date = null;
    let timeFormat = null;
    let mHs = null;
    let dayLightSavings = null;
    const splitDateAnd12HourDifference = dateAndAmPm.split( ' ' ) || null;
    if ( splitDateAnd12HourDifference && splitDateAnd12HourDifference.length > 0 ) {
      date = splitDateAnd12HourDifference[ 0 ];
      mHs = splitDateAnd12HourDifference[ 1 ];
      timeFormat = splitDateAnd12HourDifference[ 2 ];
      dayLightSavings = splitDateAnd12HourDifference[ 3 ];
    }
    return month + '/' + date + '/' + year + ' ' + mHs + ' ' + timeFormat + ' ' + dayLightSavings;
  }
  return null;
};
