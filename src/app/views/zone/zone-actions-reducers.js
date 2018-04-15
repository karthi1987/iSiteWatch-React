import Ajax, * as ajax from 'utils/ajax';
import FEEDS from 'endpoints/endpoints';
import { ERRORs } from 'app/app-lang';

import moment from 'moment';
import * as _ from 'lodash';

import PropTypes from 'prop-types'; // ES6

/*******************************************************************************
 *
 *   1. Default State
 *   2. Action Types
 *   3. ACtion Creators
 *   4. Reducers
 *
 */

/*******************************************************************************
 *  1. Default State
 */

let incrementValue = 1;

const currentDate = moment(new Date());
const cDate = currentDate.clone();
const cDateUTC = moment.utc(cDate).format();

const firstDate = cDate.subtract(7, 'days');
const firstDateClone = firstDate.clone();
const firstDateUTC = moment.utc(firstDateClone).format();

const secondDate = firstDate.add(1, 'days');
const secondDateClone = secondDate.clone();
const secondDateUTC = moment.utc(secondDateClone).format();

const thirdDate = secondDate.add(1, 'days');
const thirdDateClone = thirdDate.clone();
const thirdDateUTC = moment.utc(thirdDateClone).format();

const fourthDate = thirdDate.add(1, 'days');
const fourthDateClone = fourthDate.clone();
const fourthDateUTC = moment.utc(fourthDateClone).format();

const fifthDate = fourthDate.add(1, 'days');
const fifthDateClone = fifthDate.clone();
const fifthDateUTC = moment.utc(fifthDateClone).format();

const sixthDate = fifthDate.add(1, 'days');
const sixthDateClone = sixthDate.clone();
const sixthDateUTC = moment.utc(sixthDateClone).format();


const consolidatedWeekDates = []; //Array where rest of the dates will be stored
var prevDate = moment().subtract(7, 'days');//7 days back date from today(This is the from date)
var nextDate = moment();//Date after 7 days from today (This is the end date)

//extracting date from objects in MM-DD-YYYY format
prevDate = moment(prevDate._d).format();
nextDate = moment(nextDate._d).format();

//creating JS date objects
var start = new Date(prevDate);
var end = new Date(nextDate);

//Logic for getting rest of the dates between two dates("FromDate" to "EndDate")
while( start < end ) {
   consolidatedWeekDates.push(moment(start).format());
   var newDate = start.setDate(start.getDate() + 1);
   start = new Date(newDate);  
}

const zoneState = {
    data: {
        oneWeekDay:[
            {
                'key': 'firstDay',
                'label': consolidatedWeekDates[ 0 ],
                'utcFormat': firstDateUTC,
                'show': true,
                'items': []
            },
            {
                'key': 'secondDay',
                'label': consolidatedWeekDates[ 1 ],
                'utcFormat': secondDateUTC,
                'show': true,
                'items': []
            },
            {
                'key': 'thirdDay',
                'label': consolidatedWeekDates[ 2 ],
                'utcFormat': thirdDateUTC,
                'show': true,
                'items': []
            },
            {
                'key': 'fourthDay',
                'label': consolidatedWeekDates[ 3 ],
                'utcFormat': fourthDateUTC,
                'show': true,
                'items': []
            },
            {
                'key': 'fifthDay',
                'label': consolidatedWeekDates[ 4 ],
                'utcFormat': fifthDateUTC,
                'show': true,
                'items': []
            },
            {
                'key': 'sixthDay',
                'label': consolidatedWeekDates[ 5 ],
                'utcFormat': sixthDateUTC,
                'show': false,
                'items': []
            },
            {
                'key': 'seventhDay',
                'label': consolidatedWeekDates[ 6 ],
                'utcFormat': cDateUTC,
                'show': true,
                'items': []
            }
        ]
    }
};

/*******************************************************************************
 *  2. Action Types
 */
const ZONE = 'zoneViewData';
const LOAD_ZONEDATA = 'loadZoneViewData';
const CLEAR_LAUNCHED_QUICKHIT = 'clearLaunchedQuickhit';
const LAUNCH_QUICKHIT = 'launchQuickhit';
const ZONE_ERROR_REPORT = 'quickhitsErrorReport';
const SET_SELECTED_DATE_BY_CHANGE = 'setTheSelectedDate';

/*******************************************************************************
 *  3. Action Creators
 */

export function loadZoneData ( info ) {
    return ( dispatch ) => {
        const type = ZONE;

        dispatch( ajax.loading( type ) );

        //To do: Get deviceId from the Location details dashboardInfo
        let deviceId = "B827EB2C749D";
        if ( info.dashboardInfo && info.dashboardInfo.length > 0 ) {
          const filteredLocation = _.filter( info.dashboardInfo, { 'location_id': info.locationId } );
          if( filteredLocation && filteredLocation.length > 0 ) {
            deviceId = filteredLocation[ 0 ].device_id;
          }
        }

        let fromDate = '';
        let toDate  = '';
        if( info.startDate && info.endDate ) {
          fromDate = info.startDate.format('YYYY-MM-DD');
          toDate = info.endDate.format('YYYY-MM-DD');
        }

        const ZonePayLoad = JSON.stringify(
          {
            "customer_id": info.customerId,
            "site_id": info.user.siteId,
            "device_id": deviceId,
            "location_id": info.locationId,
            "from": fromDate,
            "to": toDate,
            "user_login": info.user.userLogin,
            "user_token": info.session.token
          }
        );

        Ajax( {
            url: 'https://wejllcr10k.execute-api.us-east-1.amazonaws.com/BETA/thumbs-history',
            type: 'POST',
            data: ZonePayLoad,
            success: ( results ) => {
                //debugger;
                if ( !results.data ) {
                    dispatch( ajax.loadingError( type, results.errorMessage ) );
                } else {
                    dispatch( {
                        type: LOAD_ZONEDATA,
                        data: results.data
                    } );

                    dispatch( ajax.loaded( type ) );

                   /* const hasResults = results.data.quickhits.length > 0;
                    dispatch( ajax.handleResultsMessage( type, hasResults, ERRORs().QUICK_HITS_VIEW_NO_RESULTS ) );*/
                }
            },
            fail: ( error ) => {
                dispatch( ajax.loadingError( type, error.textStatus ) );
            },
            timeout: 50000
        } );

    };
}

export function setSelectedDate( date ) {
   return ( dispatch ) => {
      dispatch( {
        type: SET_SELECTED_DATE_BY_CHANGE,
        selectedDate: date
      } );
    };
}

export function clearLaunchedQuickhit() {
    return ( dispatch ) => {
        dispatch( {
            type: CLEAR_LAUNCHED_QUICKHIT
        } );
    };
}

/*******************************************************************************
 *  4. Reducers
 */
export default function quickhits( state = zoneState, action ) {
    switch ( action.type ) {
        case LOAD_ZONEDATA:

        //To do: create unique JSON adding Images with the week data

        var result = _.chain( action.data )
          .groupBy("yyyy_mm_dd")
          .toPairs()
          .map(function (currentItem) {
              return _.fromPairs(_.zip(["yyyy_mm_dd", "image"], currentItem));
          })
          .value();
         const galleryResults = result;

          const tDates = _.map( state.data.oneWeekDay, function(item, index ) {
          var localTime = moment(item['utcFormat']).format('YYYY-MM-DD'); // store localTime
          var proposedDate = localTime + "T00:00:00.000Z"; // convert the localTime to UTC format
           const tD = moment(item['utcFormat']).format('D');
           const imageGallery = _.filter( galleryResults, function(o) { 
             if( proposedDate == o.yyyy_mm_dd ) {
                let galleyCustomizedImages = [];
                galleyCustomizedImages = _.map( o.image, function(i, ix){
                   const cImages = {};
                   cImages['original'] = i['image'];
                   cImages['thumbnail'] = i['image_thumbnail'];
                   cImages['description'] = 'Time: '+i['hhmm'];
                   galleyCustomizedImages.push( cImages );
                   return cImages;
                 })
               return item['items'] = galleyCustomizedImages;
             }
           });
           return item;
         });

       const thumbnailDates = tDates;

            return {
                ...state,
                data: {
                    ...state.data,
                    oneWeekDay: [
                        ...thumbnailDates
                    ]
                }
            };
        case SET_SELECTED_DATE_BY_CHANGE:
          const currentStateModel = state.data.oneWeekDay;
          let filteredItem = null;
          if( currentStateModel ) {
            filteredItem = _.filter( currentStateModel, function( item, index ) {
                const currentDateInNumber = moment(item.label).format('D');
                const selectedDateInNumber = moment(action.selectedDate).format('D');
                if( currentDateInNumber == selectedDateInNumber ) {
                  return item;
                }
            } );
          }
          if( filteredItem && filteredItem.length > 0 ) {
              for( var i = 0; i < currentStateModel.length; i++ ) {
                currentStateModel[ i ].show = true;
                const currentDateInFilteredNumber = moment(currentStateModel[ i ].label).format('D');
                const selectedDateInFilteredNumber = moment(filteredItem[ 0 ].label).format('D');
                if ( currentDateInFilteredNumber == selectedDateInFilteredNumber ) {
                  currentStateModel[ i ].show = false;
                }
              }
              return {
                ...state,
                data: {
                    ...state.data,
                    oneWeekDay: [
                      ...currentStateModel
                    ]
                }
            };
          } else {
            return {
              ...state,
              data: {
                  ...state.data,
                  oneWeekDay: [
                    ...currentStateModel
                  ]
              }
            };
          }
          return {
            ...state,
            quickhitId: action.quickhitId
          };

        case LAUNCH_QUICKHIT:
            return {
                ...state,
                quickhitId: action.quickhitId
            };
        case CLEAR_LAUNCHED_QUICKHIT:
            return {
                ...state,
                quickhitId: null
            };
        default:
            return state;
    }
}
