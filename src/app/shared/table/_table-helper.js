import Numeral from 'numeral';

const isNumeric = ( number ) => {
  return !isNaN( parseFloat( number ) ) && isFinite( number );
};

const listOfCharactersAllowedForHyphen = 3;
const doNumberFormatting = ( number ) => {
  const regExPattern = /^[\w&.%$\-]*$/;
  if( regExPattern.test( String( number ) ) ) {
    const stringAfterSpecialCharacterRemoved = String( number ).replace( /[^\w\s]/gi, '' );
    if ( stringAfterSpecialCharacterRemoved.length <= listOfCharactersAllowedForHyphen ) {
      return number;
    } else {
      const number2 = String( parseFloat( number ) ).replace( /(.)(?=(\d{3})+$)/g, '$1,' );
      if ( number2 === 'NaN' ) {
        return number;
      }
      return number2;
    }
  } else {
    const number3 = String( parseFloat( number ) ).replace( /(.)(?=(\d{3})+$)/g, '$1,' );
    if ( number3 === 'NaN' ) {
      return number;
    }
    return number3;
  }
};

/* Label Format */
const doLabelFormatting = ( label, valueType ) => {
    let formattedLabel = '';
    if ( label ) {
        formattedLabel = label.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' );
    }
    if( valueType ) {
        switch( valueType ) {
            case 'cur':
                formattedLabel = Number( Numeral( formattedLabel ) ).toFixed( 2 ).toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' );
                break;
            case 'pct':
                formattedLabel = formattedLabel;
                break;
            default:
            case 'unit':
                formattedLabel = formattedLabel;
                break;
        }
    }
    return formattedLabel;
};

export const setUnit = ( valueType, item ) => {
  let item2;

  if( item.label === null ) {
    return { label: '-' };
  }

  if( item.label === undefined ) {
    return false;
  }

  if( !isNumeric( item.label ) ) {
    return item;
  }

  switch ( valueType ) {
    case null:
      item2 = item;
      break;
    case undefined:
      item2 = item;
      break;
    case 'unit':
      item2 = Object.assign( item, {
        label: doLabelFormatting( item.label, valueType )
      } );
      break;
    case 'cur':
      item2 = Object.assign( item, {
        label: '$' + doLabelFormatting( item.label, valueType )
      } );
      break;
    case 'pct':
      item2 = Object.assign( item, {
        label: doLabelFormatting( item.label, valueType ) + '%'
      } );
      break;
  }
  return item2;
};
