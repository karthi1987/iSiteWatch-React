import Ajax from 'utils/ajax';
import FEEDS from 'endpoints/endpoints';
import { diagnosticConsoleLog } from 'utils/utils';

export default function webTrack( webTrackId ) {
	Ajax( {
        url: FEEDS.WEB_TRACKING,
        data: {
            webTrackId: webTrackId
        },
        success: ( results ) => {
            if( !results.success ) {
                diagnosticConsoleLog( 'Web Tracking Success False Received' );
            }
        },
        fail: ( error ) => {
            diagnosticConsoleLog( 'Web Tracking Ajax Failed' );
        }
    } );
}
