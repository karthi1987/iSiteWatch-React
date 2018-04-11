//utils
import $ from 'jquery';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment-timezone';
import Numeral from 'numeral';
//lang
import { VALUE_TYPE_CHAR } from 'app/app-lang';


/*******************************************************************************
 *
 *   1. connectAndMap
 *   2. formatting helpers
 *   3. check user agent
 *   4. DOM helpers
 *   5. session helpers
 *   6. miscellaneous helpers
 */

/*******************************************************************************
 *  1. connectAndMap
 *
 *
 * returns specific parts of your store as well as actionCreators bound with dispatch
 * 
 * dataCodes: an array of dataCode strings that references which part of the store to connect the component to - default is null
 * actionCreators: an object containing functions that will be connected to the component, and have dispatch bound to them - default is null
*/
var connectAndMap = ( dataCodes, actionCreators ) => connect(
    dataCodes
    ? ( state ) => 
         { 
            const newProps = {};
            for ( const dataCode in dataCodes ) {

                const codes = dataCodes[ dataCode ].split( '.' );

                let data = state[ codes[ 0 ] ];

                for( let i = 1; i < codes.length; i++ ) {
                    data = data[ codes[ i ] ];
                }

                newProps[ codes[ codes.length - 1 ] ] = data;

            }
            return newProps;
        } 
    : null,
    actionCreators
    ? ( dispatch ) => bindActionCreators( actionCreators, dispatch )
    : null,
    null,
    { pure: true }
);

/*******************************************************************************
 *  2. formatting helpers
 *
 * simple helpers to format strings
 */
var formatNameString = ( string ) => {
    if( string ) {
        return string.replace( /\w\S*/g, function( txt ) {return txt.charAt( 0 ).toUpperCase() + txt.substr( 1 ).toLowerCase();} );
    }else{
        return '';
    }
};

var formatMetricString = ( string ) => {
    string = string.split( '-' );
    if( string[ 1 ] ) {
        return string[ 0 ] + '-' + string[ 1 ].replace( /\w\S*/g, function( txt ) {return txt.charAt( 0 ).toUpperCase() + txt.substr( 1 ).toLowerCase();} );
    }else{
        return string;
    }
};

var formatNumeral = ( integer, valueType ) => {
    let formattedNumeral;
    switch( valueType ) {
        case 'pct':
            formattedNumeral = Numeral( integer ).format( '0[.]0[0]a' ) + VALUE_TYPE_CHAR.PCT;
            break;
        /*
         * for case 'cur' we need to check whether our valueRaw is less than or greater than 1000
         * to determine wether to use Number() and setFixed()
         */
        case 'cur':
            formattedNumeral = VALUE_TYPE_CHAR.CUR + Numeral( integer ).format( '0[.]0[0]a' );
            break;
        case 'unit':
        default:
            formattedNumeral = Numeral( integer ).format( '0[.]0[0]a' );
            break;
    }
    return formattedNumeral;
};

const formatLabel = ( label, valueType ) => {
    let formattedLabel = label.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' );

    if( valueType ) {
        switch( valueType ) {
            case 'cur':
                formattedLabel = VALUE_TYPE_CHAR.CUR + Number( Numeral( formattedLabel ) ).toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' );
                break;
            case 'pct':
                formattedLabel = formattedLabel + VALUE_TYPE_CHAR.PCT;
                break;
            default:
            case 'unit':
                formattedLabel = formattedLabel;
                break;
        }
    }

    return formattedLabel;
};

/*******************************************************************************
 *  3. check user agent
 *
 *
 * USE AS A LAST RESORT
 * sets some values based on navigator.userAgent, to make a modification based on OS or browser
 */
export const checkUserAgent = () => {
    const userAgent = navigator.userAgent;
    if( userAgent.indexOf( 'Windows NT 6.1' ) > 0 ) {
        window.UA_WINDOWS = true;
    }
    if( userAgent.indexOf( 'Macintosh' ) > 0 ) {
        window.UA_MAC = true;
    }
    if( userAgent.indexOf( 'Internet Explorer' ) > 0 ) {
        window.UA_IE = true;
    }
    if( userAgent.indexOf( 'Firefox' ) > 0 ) {
        window.UA_FIREFOX = true;
    }
    if( userAgent.indexOf( 'Safari' ) > 0 && navigator.userAgent.indexOf( 'Chrome' ) < 1 ) {
        window.UA_SAFARI = true;
    }
     if( userAgent.indexOf( 'Chrome' ) > 0 ) {
        window.UA_CHROME = true;
    }
};

/*******************************************************************************
 *  4. DOM Helpers
 *
 *
 * returns specific parts of your store as well as actionCreators bound with dispatch
 * 
 * dataCodes: an array of dataCode strings that references which part of the store to connect the component to - default is null
 * actionCreators: an object containing functions that will be connected to the component, and have dispatch bound to them - default is null
*/

/*
 * sets the font-size on the base html element so that the rems become much more useful in a reponsive approach.
 */
var setCoreREMSize = () => {
    const navCoeff = 0.9;  //the navbar eats about 10% of the page.
    const divisor = 0.0125;

    const newWidth = (
        Math.max( 1280,
            window.innerWidth * navCoeff
            )
            * divisor
        ) ;
    $( 'html' ).css( { 'font-size': newWidth } );
};

/*
 * fix for older versions of Windows Phone
 * fixes the size of virtual px vs real px.
 */
var msViewPortFix = () => {
    if ( navigator.userAgent.match( /IEMobile\/10\.0/ ) ) {
        const msViewportStyle = document.createElement( 'style' );
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.getElementsByTagName( 'head' )[ 0 ].
        appendChild( msViewportStyle );
    }
};

/*
 * disables user browser resizing
 */
var disableResize = ( rvCheck ) => {
    const size = [ window.width, window.height ];
    const rvChecked = rvCheck();
    if( rvChecked ) {
        window.addEventListener( 'resize', () => {
            window.resizeTo( size[ 0 ], size[ 1 ] );
        } );
    }
    
};

/*******************************************************************************
 *  5. session helpers
 *
 */
var ssoCheckToken = () => {
    const regex = new RegExp( '[?&]ssoToken(=([^&#]*)|&|#|$)' );
    const results = regex.exec( window.location.href );
    if ( !results || !results[ 2 ] ) {
        return null;
    }else{
        return decodeURIComponent( results[ 2 ].replace( /\+/g, ' ' ) );
    }
};

var rvCheck = () => {
    if( typeof window.rvLoad == 'function' ) {
        window.rvLoad();
        const RV = RVHost.getRVHost();
        const hostInfo = RV.getHostInfo();
        const classifications = RV.getClassifications();
        const replicationFiles = RV.getReplicationFiles();

        if( hostInfo && classifications ) {
            return {
                hostInfo: hostInfo,
                classifications: classifications,
                replicationFiles: replicationFiles
            };
        } else {
            return false;
        }
    }else{
        return false;
    }
};

/*******************************************************************************
 *  6. miscellaneous helpers
 *
 */
var checkLoading = ( loading, loadCodes ) => {
    let loader = false;

    if( loading && loadCodes ) {
        for( const i in loading ) {
            for( const k in loadCodes ) {
                if( i.indexOf( loadCodes[ k ] ) > -1 && loading[ i ] === true ) { loader = true; }
            }
        }
    }else{
        loader = true;
    }

    return loader;
};

var grabTimestamp = () => {
    const currentDate = moment( moment.x );
    const time = currentDate.format( 'h:mm' );
    const date = currentDate.format( 'dddd, MMMM DD' );
    const timeOfDay = currentDate.format( 'A' );
    return {
        date: date,
        time: time,
        timeOfDay: timeOfDay,
        full: date + ' ' + time + timeOfDay
    };
};

var cleanHierarchyIds = ( hierarchyIds ) => {
    const cleanIds = {};
    for ( const id in hierarchyIds ) {
        if ( hierarchyIds.hasOwnProperty( id ) ) {
            if( typeof hierarchyIds[ id ] !== 'boolean' && hierarchyIds[ id ] ) {
                cleanIds[ id ] = hierarchyIds[ id ];
            }
        }
    }
    return cleanIds;
};

var getRandomIntInclusive = ( min, max ) => {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
};

var diagnosticConsoleLog = function () {
	/*
		DO NOT convert this to arrow syntax, or it will take arguments from the parent function, not from itself.
		The only reason we're doing this funny-business with `arguments` is to allow 'multi-parameter' use of this,
		in the same way one would use console.log.  I.e. `console.log('logging in', credentials)`
	*/
	if(SHOW_DIAGNOSTIC_CONSOLE_OUTPUT === true) {
		console.log.apply(console, arguments);
	}	
}


export{
    formatNumeral as formatNumeral,
    formatLabel as formatLabel,
    formatNameString as formatNameString,
    formatMetricString as formatMetricString,
    connectAndMap as connectAndMap,
    setCoreREMSize as setCoreREMSize,
    msViewPortFix as msViewPortFix,
    checkLoading as checkLoading,
    grabTimestamp as grabTimestamp,
    cleanHierarchyIds as cleanHierarchyIds,
    ssoCheckToken as ssoCheckToken,
    rvCheck as rvCheck,
    disableResize as disableResize,
    getRandomIntInclusive as getRandomIntInclusive,
    diagnosticConsoleLog as diagnosticConsoleLog
};
