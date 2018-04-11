import React from 'react';
import $ from 'jquery';

/*
 *
 *   3. GaugeFooter
 *
 *   GaugeFooter handles the rank and outOfRank metric displays
 */
export default class GaugeFooter extends React.Component {
    componentDidMount() {
        setTimeout( () => {
            $( this.gaugeFooter ).removeClass( 'no-opacity' );
        }, 400 );
    }
    render() {
        const gauge = this.props.gauge;
        return(
            <div className={ 'gauge-rank-footer gauge-' + this.props.count + '-rank-footer gauge-footer-opacity no-opacity' }
                ref={ ( ref ) => this.gaugeFooter = ref }>
                {
                    gauge.rankTitle
                    &&
                    <h4 className="gauge-rank-footer-rank-title">{ gauge.rankTitle }</h4>
                }
                {
                    ( gauge.rank > -1 && gauge.rank !== null && gauge.outOfRank > 0 )
                    ?
                    <h5 className="gauge-rank-footer-rank">
                        <span className="gauge-rank-footer-rank-value">{ gauge.rank }</span>
                        <span>/</span>
                        <span className="gauge-rank-footer-out-of-rank-value">{ gauge.outOfRank }</span>
                    </h5>
                    :
                    <h5 className="gauge-rank-footer-rank">
                        <span className="gauge-rank-footer-rank-value">{ gauge.outOfRank }</span>
                    </h5>
                }

            </div>
        );
    }
}
