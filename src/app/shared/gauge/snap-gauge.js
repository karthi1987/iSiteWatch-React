/*globals mina*/
import Snap from '!!imports?this=>window,fix=>module.exports=0!snapsvg';
import Numeral from 'numeral';

const VALUE_TYPE_CHAR = {
	PCT: '%',
	CUR: '$'
};

 /*
  * SnapGauge uses the snapsvg javascript svg animation library
  * SnapGauge handles gauge creation and animation, as well as shadow
  * and gauge value creation
  */
export default class SnapGauge {

    init( props ) {

        const defaultProps = {
            size: 300,
            strokeWidth: 30,
            scheme: 'primary',

            percentage: 0,
            useOver: true,

            animate: true,
            animationAutoplay: true,
            animationDelay: 0,
            animationDuration: 2500,

            valueType: 'unit',

            //formatUnit: '0[.]0[0]a',
            formatUnit: '0[.]00',
            formatPct: '0[.]0[0]a',
            formatCur: '0[.]0[0]a',

            hasPlaceholder: true,

            hasShadow: true,
            shadowHeightScale: 1 / 8,
            shadowBlur: 5,
            negativeCurMinusWidth: 0
        };

        /*
         * replace our default props with any actual props passed in to the SnapGauge
         */
        for( const prop in props ) {
            defaultProps[ prop ] = props[ prop ];
        }

        this.props = defaultProps;
    }

    /*
     * drawGauge creates our gauge, as well as the gauge placeholder,
     * and kicks off animation
     */
    drawGauge( gaugeElement ) {
        const {
            size, hasPlaceholder, animate, percentage,
            animationAutoplay, animationDelay, valueRaw,
            valueType
        } = this.props;

        this.gaugeSvg = Snap( gaugeElement );

        /*
         * make gauge responsive - this is potentially a legacy line,
         * may not be needed
         */
        this.gaugeSvg.attr( { viewBox: `0 0 ${ size } ${ size }` } );

        /*
         * draw our 'placeholder',
         * which is the empty arc that sits behind the animating arc
         */
        if ( hasPlaceholder ) {
            this.drawArc( 100, 'placeholder' );
        }

        /*
         * if autoPlay is true, animate the gauge
         * after it is created as a Snap object
         */
        if ( animate && Math.abs( percentage ) > 0 ) {

            if ( animationAutoplay ) {
                setTimeout(
                    () => {
                        this.animateGauge();
                    }, animationDelay
                );
            }

        } else {
            this.drawFrame( percentage, valueRaw, valueType );
        }

    }

    drawFrame( percentage, value, type ) {
        const percentageAbs = Math.abs( percentage );
        const sign = percentage > 0 ? 1 : -1 ;

        if ( this.frameArc ) {
            this.frameArc.remove();
        }

        this.frameArc = this.drawArc( percentage, this.props.nameSpace + '-arc ' + this.props.nameSpace + '-' + this.props.id + '-arc' );

        if ( percentageAbs > 100 ) {

            if ( this.frameOverArc ) {
                this.frameOverArc.remove();
            }

            this.frameOverArc = this.drawArc( percentage - ( 100 * sign ), 'over', true );

        }

        if ( this.frameValue ) {
            this.frameValue.remove();
            if ( type === 'pct' || type === 'cur' ) {
                this.char.remove();
            }
        }

        this.frameValue = this.drawValue( value, type );

        if ( type === 'pct' || type === 'cur' ) {
            var charCenter = ( this.props.size + this.props.textWidth ) / 2;
            var typeChar, charCenter;

            switch( type ) {
                case 'pct':
                    typeChar = VALUE_TYPE_CHAR.PCT;
                    charCenter = ( this.props.size + this.props.textWidth ) / 2;
                    break;
                case 'cur':
                    typeChar = VALUE_TYPE_CHAR.CUR;
                    charCenter = ( this.props.size - this.props.textWidth ) / 2;
                    break;
            }

            this.char = this.gaugeSvg.text( charCenter, 158, typeChar ).addClass( type + '-format ' + this.props.nameSpace + '-format' );
            this.props.charWidth = this.char.getBBox().width;

        }

    }

    drawArc( percentage, arcClass, overArc ) {

        percentage = Number( percentage );

        if ( isNaN( percentage ) ) {
          throw new Error( 'Gauge percentage must be a number' );
        }

        const percentageAbs = Math.abs( percentage );

        let strokeWidth = this.props.strokeWidth;

        if( overArc ) {
            strokeWidth /= 2;
        }

        // What is the center of the gauge
        const centerPoint = ( this.props.size / 2 );
        const radius = centerPoint - ( strokeWidth / 2 );

        let arc;

        // We don't need an arc at 100 percent
        if ( percentageAbs >= 100 ) {
            arc = this.gaugeSvg.circle( centerPoint, centerPoint, radius );
        } else {

            // Magic math

            // SVG arcs use two endpoints one needs to start at the top of the circle.
            const startY = centerPoint - radius;

            // Convert the percentage to how many degrees we need
            const degrees = ( percentage / 100 ) * 360;

            // This is need to shift the arc to the top
            const degreesNormalized = degrees - 90;

            // Convert degrees to radians
            const radians = ( Math.PI * degreesNormalized ) / 180;

            // Find the X endpoint
            const endX = centerPoint + radius * Math.cos( radians );

            // Find the Y endpoint
            const endY = centerPoint + radius * Math.sin( radians );

            // Handles the end points being behind the start points
            const largeArc = Math.abs( degrees ) > 180 ? 1 : 0;

            // Checks for negative percentages
            const sweepFlag = degrees > 0 ? 1 : 0;

            // Build the SVG path
            const path = `M ${ centerPoint } ${ startY } A ${ radius } ${ radius }, 0, ${ largeArc }, ${ sweepFlag }, ${ endX } ${ endY }`;

            /// Break down of the SVG path
            ///
            /// M(ove) (start x) (start y)
            /// A(rc)  (radius x) (raidus y), (x axis rotation), (large arc flag), (sweep flag), (end x) (end y)
            ///
            /// Large Arc - Arc should be more than 180 degrees
            /// Sweep - Arc should use negative angles
            ///
            /// More Info: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths#Arcs

            arc = this.gaugeSvg.path( path );
            arc.addClass( 'arc-path' );
        }

        arc
          .addClass( 'arc' )
          .addClass( arcClass );

        return arc;

    }

    drawValue( value, type ) {

        // Numeral wants percentages as decimals
        // if ( type === 'pct' ) {
        //     value *= 100;
        // }

        const formatNumbers = ( value, format ) => {
            if ( value === null ) {
                return 'N/A';
            } else {
                return Numeral( value ).format( format );
            }
        };

        let format, displayValue;
        // Get the format style.
        switch ( type ) {
            case 'pct':
                format = this.props.formatPct;
                displayValue = formatNumbers( value, format );
                break;
            case 'cur':
                format = this.props.formatCur;
                displayValue =  formatNumbers( value, format );
                break;
            case 'unit':
            default:
                format = this.props.formatUnit;
                displayValue = formatNumbers( value, format );
                break;
        }


        // Center text in the middle
        let centerPointX;
        const centerPointY = centerPointX = this.props.size / 2;
        isNaN( this.props.charWidth ) ?  this.props.charWidth = 26 : null;
        if ( type === 'pct' ) {
            centerPointX = centerPointY - ( this.props.charWidth / 2 );
        }else if ( type === 'cur' ) {
            centerPointX = centerPointY + ( ( this.props.charWidth + this.props.negativeCurMinusWidth ) / 2 );
        }else{
            centerPointX = centerPointY;
        }
        //if( this.negativeCur ){
            //displayValue = displayValue.replace(/-/g, '');
        //}
        // Create the text object
        const text = this.gaugeSvg.text( centerPointX, ( centerPointY + 18 ), displayValue );

        // Make it a value text
        text.addClass( 'value ' + this.props.nameSpace + '-value' );

        //set text width as prop
        this.props.textWidth = text.getBBox().width;

        // Have the text fill as much as it can
        //this.fitToBox( text );

        // return the text object.
        return text;

    }

    fitToBox( element ) {

        // Find the stroke width
        const strokeWidth = this.props.strokeWidth;

        // Get the maximum sizes
        const maxWidth = this.props.size - strokeWidth * 3;
        const maxHeight = maxWidth / 2;

        // Find the current position
        const borderBox = element.getBBox();

        // Find how much the element needs to be scaled to fit the sizes
        const widthScalar = maxWidth / borderBox.width;
        const heightScalar = maxHeight / borderBox.height;
        // Use the smallest scalar
        let scalar = widthScalar < heightScalar ? widthScalar : heightScalar;

        // Multiply the scalar by 80% to give some breathing room
        scalar *= 0.75;

        // Apply a fudge factor to help deal with rounding errors
        const fudge = 0.994;

        // Scaling translates the element. Calculate how to put it back
        const xTranslate = borderBox.cx - ( fudge * scalar * borderBox.cx );
        const yTranslate = borderBox.cy - ( fudge * scalar * borderBox.cy );

        // Scale the element
        element.attr( {
            transform: `matrix( ${ scalar }, 0, 0, ${ scalar }, ${ xTranslate }, ${ yTranslate } )`
        } );

    }

    animateGauge() {
        const percentage = this.props.percentage;
        const percentageAbs = Math.abs( percentage );
        const sign = percentage > 0 ? 1 : -1;
        const value = this.props.valueRaw;
        const type = this.props.valueType;
        const maxPercentage = this.props.useOver ? 200 : 100;

        const endpoint = percentageAbs > maxPercentage ? maxPercentage * sign : percentage;


        Snap.animate( 0, endpoint, ( currentPosition ) => {

            const currentValue = value * ( currentPosition / endpoint );

            this.drawFrame( currentPosition, currentValue, type );

        }, this.props.animationDuration, mina.easeinout );

    }

    drawShadow( shadowElement ) {

        const shadowSvg = Snap( shadowElement );

        const blur = this.props.shadowBlur;

        const shadowWidth = this.props.size;
        const shadowX = shadowWidth / 2;
        const shadowHeight = this.props.size * this.props.shadowHeightScale;
        const shadowY = shadowHeight / 2;

        // Make shadow responsive
        shadowSvg.attr( { viewBox: `0 0 ${ shadowWidth } ${ shadowHeight }` } );

        const ellipse = shadowSvg.ellipse( shadowX, shadowY, shadowX - blur * 1.5, shadowY - blur * 1.5 );
        const blurFilter = shadowSvg.filter( Snap.filter.blur( blur ) );

        ellipse.attr( {
            filter: blurFilter
        } );

    }


}
