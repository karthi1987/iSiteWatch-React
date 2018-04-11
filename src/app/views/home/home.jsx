import React from 'react';
// module imports
import DashboardModule from './modules/dashboard/dashboard.jsx';

//utils
import { connectAndMap } from 'utils/utils';
//scss
import './home.scss';

/*******************************************************************************
 *  1. Home
 *  2. HomeCell
 */

/*
 * 1. Home
 */
const Home = connectAndMap(
    [ 'app' ],
    null
)(
    class extends React.Component {
        render() {
            const {
                loading, loaded
            } = this.props.app;
            return (
                <div className="Home">
                    <div className="module-container">
                        <div className="module-wrapper">
                            <div className="module-grid single">
                                <HomeCell module="scorecardmodule">
                                    <DashboardModule />
                                </HomeCell>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
);

/*
 * 1. HomeCell
 */
const HomeCell = ( props ) => (
    <div className={ `Home_cell Home_cell--${ props.module }` }>
        <div className="Home_cellInner">
            <div className="Home_cellContent">
                { props.children }
            </div>
        </div>
    </div>
);

export default Home;
