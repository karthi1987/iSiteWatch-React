

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
const overlayState = {
    open: false,
    overlay: null
};

/*******************************************************************************
 *  2. Action Types
 */
const OPEN_MODAL = 'openModal';
const CLOSE_MODAL = 'closeModal';

/*******************************************************************************
 *  3. Action Creators
 */
export function openModal ( overlay ) {
    return ( dispatch ) => {
        dispatch( {
            type: OPEN_MODAL,
            open: true,
            overlay
        } );
    };
}

export function closeModal () {
    return ( dispatch ) => {
        dispatch( {
            type: OPEN_MODAL,
            open: false,
            overlay: null
        } );
    };
}

/*******************************************************************************
 *  4. Reducers
 */
export default function overlay( state = overlayState, action ) {
    switch ( action.type ) {
        case OPEN_MODAL:
            return {
                ...state,
                open: action.open,
                overlay: action.overlay
            };
        case CLOSE_MODAL:
            return {
                ...state,
                open: action.open,
                overlay: action.overlay
            };
        default:
            return state;
    }
}
