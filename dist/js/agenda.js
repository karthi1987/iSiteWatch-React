webpackJsonp([8,12],{

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _classnames = __webpack_require__(28);var _classnames2 = _interopRequireDefault(_classnames);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}



	/*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <Icon
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             name="string" //name decides which vector path or group to grab
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             className="string"
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             viewBox="sting"
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             svgStyle={ {} } //react styles object
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         />
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */var

	Icon = function (_React$Component) {_inherits(Icon, _React$Component);

	    /*
	                                                                        * assign our vector on mount
	                                                                        */

	    function Icon(props) {_classCallCheck(this, Icon);var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this,
	        props));

	        _this.state = {
	            Vector: _this.assignVector(_this.props.name) };return _this;


	    }_createClass(Icon, [{ key: 'componentWillReceiveProps', value: function componentWillReceiveProps(


	        nextProps) {
	            if (nextProps.name !== this.props.name) {
	                this.setState({ Vector: this.assignVector(nextProps.name) });
	            }
	        }


	        /*
	           * switch statement assigns our vector on name case
	           */ }, { key: 'assignVector', value: function assignVector(

	        name) {

	            var Vector = void 0;

	            switch (name) {
	                case 'menu':Vector = _react2.default.createElement(Menu, null);break;
	                case 'close':Vector = _react2.default.createElement(Close, null);break;
	                case 'my-rewards':Vector = _react2.default.createElement(MyRewards, null);break;
	                case 'shop':Vector = _react2.default.createElement(Shop, null);break;
	                case 'programs':Vector = _react2.default.createElement(Programs, null);break;
	                case 'scorecard':Vector = _react2.default.createElement(Scorecard, null);break;
	                case 'leaderboard':Vector = _react2.default.createElement(Leaderboard, null);break;
	                case 'quickhits':Vector = _react2.default.createElement(QuickHits, null);break;
	                case 'recognition':Vector = _react2.default.createElement(Recognition, null);break;
	                case 'videos':Vector = _react2.default.createElement(Videos, null);break;
	                case 'agenda':Vector = _react2.default.createElement(Agenda, null);break;
	                case 'agenda-new':Vector = _react2.default.createElement(AgendaNew, null);break;
	                case 'extras':Vector = _react2.default.createElement(Extras, null);break;
	                case 'tools':Vector = _react2.default.createElement(Tools, null);break;
	                case 'right-arrow':Vector = _react2.default.createElement(RightArrow, null);break;
	                case 'left-arrow':Vector = _react2.default.createElement(LeftArrow, null);break;
	                case 'up-arrow':Vector = _react2.default.createElement(UpArrow, null);break;
	                case 'down-arrow':Vector = _react2.default.createElement(DownArrow, null);break;
	                case 'right-arrow-circled':Vector = _react2.default.createElement(RightArrowCircled, null);break;
	                case 'list':Vector = _react2.default.createElement(List, null);break;
	                case 'pie-chart':Vector = _react2.default.createElement(PieChart, null);break;
	                case 'flip-arrow':Vector = _react2.default.createElement(FlipArrow, null);break;
	                case 'comments':Vector = _react2.default.createElement(Comments, null);break;
	                case 'smiley':Vector = _react2.default.createElement(Smiley, null);break;
	                case 'static-arrow':Vector = _react2.default.createElement(StaticArrow, null);break;
	                case 'positive-arrow':Vector = _react2.default.createElement(PositiveArrow, null);break;
	                case 'negative-arrow':Vector = _react2.default.createElement(NegativeArrow, null);break;
	                case 'info':Vector = _react2.default.createElement(Info, null);break;
	                case 'share':Vector = _react2.default.createElement(Share, null);break;
	                case 'check':Vector = _react2.default.createElement(Check, null);break;
	                case 'plus':Vector = _react2.default.createElement(Plus, null);break;
	                case 'minus':Vector = _react2.default.createElement(Minus, null);break;
	                case 'socialhub':Vector = _react2.default.createElement(SocialHub, null);break;
	                case '2016-base-plan':Vector = _react2.default.createElement(DollarSign, null);break;
	                case 'recognition-travel':Vector = _react2.default.createElement(Travel, null);break;
	                case 'goal-quest-2015-managers':Vector = _react2.default.createElement(Warehouse, null);break;
	                case 'goal-quest':Vector = _react2.default.createElement(Warehouse, null);break;
	                case 'e-recognition':Vector = _react2.default.createElement(ERecognition, null);break;
	                case 'vz-badges':Vector = _react2.default.createElement(VzBadges, null);break;
	                case 'quizzes-and-surveys':Vector = _react2.default.createElement(Quiz, null);break;
	                case 'multi-media':Vector = _react2.default.createElement(MultiMedia, null);break;
	                case 'help-center':Vector = _react2.default.createElement(HelpCenter, null);break;
	                case 'taxes':Vector = _react2.default.createElement(Taxes, null);break;
	                case 'miscellaneous':Vector = _react2.default.createElement(Miscellaneous, null);break;
	                case 'awardperqs-issuance':Vector = _react2.default.createElement(AwardperqsIssuance, null);break;
	                case 'etickets-issuance':Vector = _react2.default.createElement(ETicketsIssuance, null);break;
	                case 'user-management-tools':Vector = _react2.default.createElement(UserManagementTools, null);break;
	                case 'web-trend-reports':Vector = _react2.default.createElement(WebTrendReports, null);break;
	                case 'instant-win-management':Vector = _react2.default.createElement(InstantWinManagement, null);break;
	                case 'download':Vector = _react2.default.createElement(Download, null);break;
	                case 'print':Vector = _react2.default.createElement(Print, null);break;
	                case 'big-arrow':Vector = _react2.default.createElement(BigArrow, null);break;}


	            return Vector;
	        } }, { key: 'render', value: function render()

	        {var _props =


	            this.props,name = _props.name,className = _props.className,viewBox = _props.viewBox,svgStyle = _props.svgStyle;
	            var Vector = this.state.Vector;
	            return (
	                _react2.default.createElement('svg', { viewBox: viewBox || '0 0 25 25',
	                        style: svgStyle || {},
	                        className: (0, _classnames2.default)(
	                        'icon',
	                        'icon-' + name,
	                        className) },

	                    Vector));


	        } }]);return Icon;}(_react2.default.Component);



	Icon.propTypes = {
	    name: _react2.default.PropTypes.string,
	    className: _react2.default.PropTypes.string,
	    viewBox: _react2.default.PropTypes.string,
	    svgStyle: _react2.default.PropTypes.object };exports.default =


	Icon;


	/*
	       * "dumb" vector components
	       */

	var Menu = function Menu() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M25,5.4c0,0.7-0.6,1.2-1.2,1.2H1.3C0.6,6.6,0,6.1,0,5.4V4.1c0-0.7,0.6-1.2,1.2-1.2h22.4c0.7,0,1.2,0.6,1.2,1.2 V5.4z' }),

	            _react2.default.createElement('path', { d: 'M25,13.1c0,0.7-0.6,1.2-1.2,1.2H1.3c-0.7,0-1.2-0.6-1.2-1.2v-1.2c0-0.7,0.6-1.2,1.2-1.2h22.4 c0.7,0,1.2,0.6,1.2,1.2V13.1z' }),

	            _react2.default.createElement('path', { d: 'M25,20.9c0,0.7-0.6,1.2-1.2,1.2H1.3c-0.7,0-1.2-0.6-1.2-1.2v-1.2c0-0.7,0.6-1.2,1.2-1.2h22.4 c0.7,0,1.2,0.6,1.2,1.2V20.9z' })));};




	var Close = function Close() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M1.031,19.304l6.807-6.805L1.033,5.695C-0.254,4.41-0.254,2.317,1.031,1.031 c1.285-1.283,3.38-1.285,4.664,0l6.803,6.806l6.807-6.806c1.285-1.285,3.378-1.287,4.664,0c1.283,1.285,1.285,3.38,0,4.664 l-6.805,6.806l6.802,6.803c1.288,1.287,1.288,3.38,0.003,4.664c-1.285,1.287-3.378,1.287-4.664-0.002l-6.803-6.802l-6.809,6.804 c-1.283,1.287-3.378,1.287-4.663,0C-0.255,22.682-0.255,20.592,1.031,19.304' })));};






	var MyRewards = function MyRewards() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M0,10.2c0,1.4,0,2.7,0,3.9C0,14.7,0.4,15,0.9,15c1.9,0,3.8,0,5.7,0v-4.8H0z' }),
	            _react2.default.createElement('path', { d: 'M7.8,15.1c1.9,0,3.8,0,5.6,0c0.3,0,0.9-0.5,0.9-0.8c0.1-1.3,0-2.6,0-4H7.8V15.1z' }),
	            _react2.default.createElement('path', { d: 'M7.8,9.2c0-1.3,0-2.5,0-3.7c0-0.4-0.2-0.7-0.6-0.7C6.9,4.8,6.6,5,6.6,5.5c0,1.2,0,2.4,0,3.7H0c0-1.3-0.1-2.7,0-4c0-0.7,0.7-0.8,1.3-0.9c0.9,0,1.8,0,2.7,0c-0.5-0.7-1-1.4-1.3-2.1C2.4,1.6,2.3,0.9,2.8,0.4C3.4-0.2,4.1,0,4.7,0.2c1.1,0.4,1.9,1.2,2.4,2.1C7.8,1.7,8.5,1,9.2,0.5c0.9-0.6,1.9-0.6,2.4-0.1c0.6,0.8,0.3,1.6-0.1,2.3c-0.3,0.6-0.7,1-1.2,1.6c0.8,0,1.7,0,2.5,0c1.2,0,1.6,0.3,1.6,1.5c0,1.1,0,2.2,0,3.3H7.8z M8,3.8c1.3,0,2.7-1.4,2.5-2.5C9.3,1.6,8.5,2.4,8,3.8 M6.3,3.8C6.1,2.5,4.8,1.2,3.8,1.4C4,2.6,5.1,3.7,6.3,3.8' }),
	            _react2.default.createElement('path', { d: 'M0,10.2h6.5v4.8c-1.9,0-3.8,0-5.7,0C0.4,15,0,14.7,0,14.2C0,12.9,0,11.6,0,10.2' }),
	            _react2.default.createElement('path', { d: 'M7.8,15.1v-4.8h6.5c0,1.4,0.1,2.7,0,4c0,0.3-0.6,0.8-0.9,0.8C11.6,15.1,9.7,15.1,7.8,15.1' })));};



	var Shop = function Shop() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M22.5,11.4c-1.1,0-2,0.8-2,1.8c0,1,0.9,1.8,2,1.8c1.1,0,2-0.8,2-1.8C24.5,12.2,23.6,11.4,22.5,11.4' }),
	            _react2.default.createElement('path', { d: 'M30.2,11.4c-1.1,0-2,0.8-2,1.8c0,1,0.9,1.8,2,1.8c1.1,0,2-0.8,2-1.8C32.2,12.2,31.3,11.4,30.2,11.4' }),
	            _react2.default.createElement('path', { d: 'M32.4,11.1H21c-0.2,0-0.5-0.1-0.6-0.4l-3.9-9.6H15c-0.3,0-0.6-0.2-0.6-0.6C14.4,0.2,14.6,0,15,0h2 c0.2,0,0.5,0.1,0.6,0.4l3.9,9.6h11c0.3,0,0.6,0.2,0.6,0.6C33,10.8,32.7,11.1,32.4,11.1' }),
	            _react2.default.createElement('path', { d: 'M33.7,1.6H19.1c0,0,2.7,6.6,2.7,6.7C22,8.9,22.3,9,22.8,9h9.8c0,0,0.9-3.1,2-6c0-0.1,0.1-0.4,0.1-0.5 C34.6,2,34.2,1.6,33.7,1.6' })));};



	var Programs = function Programs() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('ellipse', { cx: '3.5', cy: '3.5', rx: '3.5', ry: '3.5' }),
	            _react2.default.createElement('ellipse', { cx: '12.4', cy: '3.5', rx: '3.5', ry: '3.5' }),
	            _react2.default.createElement('ellipse', { cx: '21.2', cy: '3.5', rx: '3.5', ry: '3.5' }),
	            _react2.default.createElement('ellipse', { cx: '3.5', cy: '12.5', rx: '3.5', ry: '3.5' }),
	            _react2.default.createElement('ellipse', { cx: '12.4', cy: '12.5', rx: '3.5', ry: '3.5' }),
	            _react2.default.createElement('ellipse', { cx: '21.2', cy: '12.5', rx: '3.5', ry: '3.5' }),
	            _react2.default.createElement('ellipse', { cx: '3.5', cy: '21.5', rx: '3.5', ry: '3.5' }),
	            _react2.default.createElement('ellipse', { cx: '12.4', cy: '21.5', rx: '3.5', ry: '3.5' }),
	            _react2.default.createElement('ellipse', { cx: '21.2', cy: '21.5', rx: '3.5', ry: '3.5' })));};



	var Scorecard = function Scorecard() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M9,1900.8c0,22.6,18.1,40.6,40.6,40.6h1950.8c22.3,0,40.5-18,40.5-40.6v-40.7c0-22.5-18.1-40.5-40.5-40.5H49.6c-22.5,0-40.6,18-40.6,40.5V1900.8z' }),
	            _react2.default.createElement('path', { d: 'M1431.4,1684.8c0,18.1,14.5,32.6,32.6,32.6h503.6c18,0,32.6-14.5,32.6-32.6V844.3c0-18.1-14.6-32.8-32.6-32.8H1464c-18.1,0-32.6,14.6-32.6,32.8V1684.8z' }),
	            _react2.default.createElement('path', { d: 'M740.4,1682.7c0,19.2,15.8,34.9,34.9,34.9h499.3c19.1,0,34.9-15.6,34.9-34.9V720.5c0-19.2-15.8-35-34.9-35H775.3c-19.1,0-34.9,15.8-34.9,35V1682.7z' }),
	            _react2.default.createElement('path', { d: 'M49.7,1688.6c0,16,13,28.9,28.9,28.9h511c16,0,28.9-12.9,28.9-28.9v-655.3c0-16-12.9-29.2-28.9-29.2h-511c-15.9,0-28.9,13.2-28.9,29.2V1688.6z' }),
	            _react2.default.createElement('path', { d: 'M106.4,833c19.9,0,39.7-6.3,56.5-19.5l590.6-463.9l755.7,279.2c35.6,13.4,75.6,3,100.5-25.7l142.2-163l137.2,119.7L1994.3,23l-517.7,177.2L1614,319.8l-100.8,115.6L769,160.4c-29.7-11-63.3-5.8-88.2,13.8L50,669.7c-39.7,31-46.5,88.6-15.5,128.3C52.6,821,79.5,833,106.4,833' })));};



	var Leaderboard = function Leaderboard() {return (
	        _react2.default.createElement('path', { d: 'M21.9,5.1h-7.3V3.3c0-0.4-0.3-0.7-0.7-0.7H5.4V0.8c0-0.4-0.3-0.7-0.7-0.7H3.1c-0.4,0-0.7,0.3-0.7,0.7v23.3c0,0.4,0.3,0.7,0.7,0.7h1.5c0.4,0,0.7-0.3,0.7-0.7v-7.9h4.1V18c0,0.4,0.3,0.7,0.7,0.7h11.6c0.4,0,0.7-0.3,0.7-0.7V5.8C22.6,5.4,22.3,5.1,21.9,5.1' }));};


	var QuickHits = function QuickHits() {return (
	        _react2.default.createElement('path', { d: 'M12.5,0C5.6,0,0,5.6,0,12.5S5.6,25,12.5,25C19.4,25,25,19.4,25,12.5S19.4,0,12.5,0 M16.7,18.6l-4.2-2.4 l-4.3,2.3l0.9-4.8l-3.5-3.4l4.8-0.6l2.1-4.4l2.1,4.4l4.8,0.7l-3.6,3.3L16.7,18.6z' }));};


	var Recognition = function Recognition() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M4.9,10.6c0.6,0,1.1,0.5,1.1,1.1V21c0,0.6-0.5,1.1-1.1,1.1H1.2c-0.6,0-1.1-0.5-1.1-1.1v-9.2c0-0.6,0.5-1.1,1.1-1.1H4.9z' }),
	            _react2.default.createElement('path', { d: 'M24.9,11.3c0-1-0.8-1.8-1.8-1.8h-8V2.8c0-1-0.8-1.8-1.8-1.8c-1,0-1.8,0.8-1.8,1.8v0.4c0,2.2-0.8,5.9-2.6,7v0c-0.7,0.5-1.2,1.3-1.2,2.2v9c0,0.2,0,0.4,0.1,0.5C8,23,8.8,23.8,9.9,24c0.1,0,9.4,0,9.4,0c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8h1.2c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8h1.8c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8h0.7C24.1,13.1,24.9,12.3,24.9,11.3' })));};



	var Videos = function Videos() {return (
	        _react2.default.createElement('path', { d: 'M23.7,2.6H1.3c-0.7,0-1.2,0.6-1.2,1.2v17.4c0,0.7,0.6,1.2,1.2,1.2h22.4c0.7,0,1.2-0.6,1.2-1.2V3.8C24.9,3.1,24.4,2.6,23.7,2.6 M4.2,20.2H1.9V18h2.2V20.2z M4.2,15.8H1.9v-2.2h2.2V15.8z M4.2,11.4H1.9V9.1h2.2V11.4z M4.2,7H1.9V4.7h2.2V7z M17.5,13.2l-7.3,4.4c-0.1,0.1-0.3,0.1-0.4,0.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.1-0.4-0.4-0.4-0.7V8.1c0-0.3,0.1-0.5,0.4-0.6c0.2-0.1,0.5-0.1,0.8,0l7.3,4.4c0.2,0.1,0.4,0.4,0.4,0.6C17.9,12.8,17.8,13,17.5,13.2 M23.1,20.3h-2.2v-2.2h2.2V20.3z M23.1,15.8h-2.2v-2.2h2.2V15.8z M23.1,11.4h-2.2V9.1h2.2V11.4z M23.1,6.9h-2.2V4.7h2.2V6.9z' }));};


	var Extras = function Extras() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M22,0.1H8c-1.5,0-2.8,1.1-2.8,2.6v1.2h11.6c2.4,0,4.4,1.8,4.4,4.2v11.5H22c1.5,0,2.8-1.4,2.8-2.9V2.7C24.8,1.2,23.5,0.1,22,0.1' }),
	            _react2.default.createElement('path', { d: 'M16.9,5.4H3c-1.5,0-2.7,1.2-2.7,2.7V22c0,1.5,1.2,2.9,2.7,2.9h13.9c1.5,0,2.8-1.4,2.8-2.9V8.1C19.7,6.6,18.4,5.4,16.9,5.4 M14.7,16.3h-3.6v3.5c0,0.7-0.6,1.2-1.3,1.2c-0.7,0-1.3-0.5-1.3-1.2v-3.5H5.1c-0.7,0-1.2-0.5-1.2-1.1c0-0.7,0.5-1.1,1.2-1.1h3.4v-3.7c0-0.7,0.6-1.2,1.3-1.2c0.7,0,1.3,0.5,1.3,1.2V14h3.6c0.7,0,1.2,0.5,1.2,1.1C15.9,15.8,15.4,16.3,14.7,16.3' })));};



	var Tools = function Tools() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M13.4,13.8L5.8,6.3L5.7,4.7L1.4,1.8L0.1,3.2L3,7.5l1.5,0.1l7.5,7.5c-1.1,2.1,0.5,3.6,0.5,3.6s3.6,3.6,5.5,5.5c1.8,1.8,4.2-0.4,4.2-0.4s2.2-2.3,0.4-4.2c-1.8-1.8-5.5-5.5-5.5-5.5S15.5,12.7,13.4,13.8' }),
	            _react2.default.createElement('path', { d: 'M10.6,15.6l-2.7-2.7c0,0,0,0-0.1-0.1L1,19.7c-1.2,1.2-1.2,3.1,0,4.3c1.2,1.2,3.1,1.2,4.3,0l5.6-5.6C10.5,17.6,10.3,16.7,10.6,15.6 M3,22.9c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9c0.5,0,0.9,0.4,0.9,0.9C3.9,22.5,3.5,22.9,3,22.9' }),
	            _react2.default.createElement('path', { d: 'M24.5,4.3c0,0-3.7,3.7-4.3,4.3L17,8l-0.6-3.2c0.6-0.6,4.3-4.3,4.3-4.3S17.2-1.3,13.8,2c-3.4,3.4,0,4.9-2.3,7.2l-0.4,0.4c0,0,2.7,2.6,2.7,2.6c0.8-0.1,2-0.3,3,0.3c1.8-0.8,3.2,1.3,6-1.6C26.3,7.7,24.5,4.3,24.5,4.3' })));};



	var RightArrow = function RightArrow() {return (
	        _react2.default.createElement('path', { d: 'M6.325,0C6.747,0,7.173,0.137,7.53,0.419L22,11.822L7.587,24.09c-0.821,0.698-2.05,0.6-2.748-0.219c-0.698-0.821-0.598-2.049,0.221-2.748l10.789-9.186L5.118,3.48C4.27,2.813,4.126,1.588,4.791,0.742C5.176,0.255,5.748,0,6.325,0' }));};


	var LeftArrow = function LeftArrow() {return (
	        _react2.default.createElement('path', { d: 'M1574.5,0c47.1,0,93.8,20.8,125.2,60.6c54.3,69.1,42.5,169.1-26.7,223.5L797,974.5l880.8,749.9c66.9,57.1,75,157.3,18,224.3c-57,66.9-157.3,74.9-224.3,17.9L294.8,965.1L1476.1,34.2C1505.3,11.2,1540.1,0,1574.5,0' }));};


	var UpArrow = function UpArrow() {return (
	        _react2.default.createElement('path', { d: 'M2016.7,1562.5c0,47.1-20.8,93.8-60.6,125.2c-69.1,54.3-169.1,42.5-223.5-26.7L1042.2,785l-749.9,880.8c-57.1,66.9-157.3,75-224.3,18C1,1626.8-7,1526.5,50,1459.5L1051.5,282.8l930.9,1181.3C2005.5,1493.3,2016.7,1528.1,2016.7,1562.5' }));};


	var DownArrow = function DownArrow() {return (
	        _react2.default.createElement('path', { d: 'M2016.7,442.2c0,34.5-11.2,69.2-34.2,98.4l-930.9,1181.3L50,545.2c-57-67-49-167.4,17.9-224.3c67-57,167.3-48.8,224.3,18l749.9,880.8l690.4-876.1c54.5-69.2,154.5-81,223.5-26.7C1995.8,348.4,2016.7,395.1,2016.7,442.2' }));};


	var RightArrowCircled = function RightArrowCircled() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16c8.8,0,16-7.2,16-16 S24.8,0,16,0z M16,29.3c-7.4,0-13.3-6-13.3-13.3c0-7.4,6-13.3,13.3-13.3c7.4,0,13.3,6,13.3,13.3C29.3,23.4,23.4,29.3,16,29.3z M20.5,14.8C20.5,14.8,20.5,14.8,20.5,14.8l-5.4-5.2c-0.5-0.4-1.2-0.4-1.7,0L13,10c-0.5,0.4-0.5,1.2,0,1.6l4.6,4.4L13,20.4 c-0.5,0.4-0.5,1.2,0,1.6l0.4,0.4c0.5,0.4,1.2,0.4,1.7,0l5.4-5.2c0,0,0,0,0,0l0.4-0.4c0.2-0.2,0.3-0.5,0.3-0.8 c0-0.3-0.1-0.6-0.3-0.8L20.5,14.8z' })));};



	var List = function List() {return (
	        _react2.default.createElement('svg', { viewBox: '0 0 2040.9 2040.9', className: 'icon icon-list', 'data-reactid': '.0.2.0.$=1$scorecard.1.0.0.0.$/=10.0.0.1.0.$1/=11.0.0' }, _react2.default.createElement('g', { 'data-reactid': '.0.2.0.$=1$scorecard.1.0.0.0.$/=10.0.0.1.0.$1/=11.0.0.0' }, _react2.default.createElement('g', { 'data-reactid': '.0.2.0.$=1$scorecard.1.0.0.0.$/=10.0.0.1.0.$1/=11.0.0.0.0' }, _react2.default.createElement('path', { d: 'M2037.5,568.7c0,43.7-35.5,79.2-79.2,79.2H534c-43.8,0-79.2-35.5-79.2-79.2v-79.2c0-43.6,35.4-79.1,79.2-79.1h1424.3c43.7,0,79.2,35.5,79.2,79.1V568.7z', 'data-reactid': '.0.2.0.$=1$scorecard.1.0.0.0.$/=10.0.0.1.0.$1/=11.0.0.0.0.0' }), _react2.default.createElement('path', { d: 'M2037.5,1059.4c0,43.7-35.5,79.2-79.2,79.2H534c-43.8,0-79.2-35.5-79.2-79.2v-79.1c0-43.7,35.4-79.1,79.2-79.1h1424.3c43.7,0,79.2,35.4,79.2,79.1V1059.4z', 'data-reactid': '.0.2.0.$=1$scorecard.1.0.0.0.$/=10.0.0.1.0.$1/=11.0.0.0.0.1' }), _react2.default.createElement('path', { d: 'M2037.5,1550c0,43.7-35.5,79.2-79.2,79.2H534c-43.8,0-79.2-35.5-79.2-79.2v-79.1c0-43.7,35.4-79.2,79.2-79.2h1424.3c43.7,0,79.2,35.5,79.2,79.2V1550z', 'data-reactid': '.0.2.0.$=1$scorecard.1.0.0.0.$/=10.0.0.1.0.$1/=11.0.0.0.0.2' })), _react2.default.createElement('g', { 'data-reactid': '.0.2.0.$=1$scorecard.1.0.0.0.$/=10.0.0.1.0.$1/=11.0.0.0.1' }, _react2.default.createElement('path', { d: 'M317.7,568.7c0,43.7-35.5,79.2-79.2,79.2H83.9c-43.8,0-79.2-35.5-79.2-79.2v-79.2c0-43.6,35.4-79.1,79.2-79.1h154.6c43.7,0,79.2,35.5,79.2,79.1V568.7z', 'data-reactid': '.0.2.0.$=1$scorecard.1.0.0.0.$/=10.0.0.1.0.$1/=11.0.0.0.1.0' }), _react2.default.createElement('path', { d: 'M317.7,1059.4c0,43.7-35.5,79.2-79.2,79.2H83.9c-43.8,0-79.2-35.5-79.2-79.2v-79.1c0-43.7,35.4-79.1,79.2-79.1h154.6c43.7,0,79.2,35.4,79.2,79.1V1059.4z', 'data-reactid': '.0.2.0.$=1$scorecard.1.0.0.0.$/=10.0.0.1.0.$1/=11.0.0.0.1.1' }), _react2.default.createElement('path', { d: 'M317.7,1550c0,43.7-35.5,79.2-79.2,79.2H83.9c-43.8,0-79.2-35.5-79.2-79.2v-79.1c0-43.7,35.4-79.2,79.2-79.2h154.6c43.7,0,79.2,35.5,79.2,79.2V1550z', 'data-reactid': '.0.2.0.$=1$scorecard.1.0.0.0.$/=10.0.0.1.0.$1/=11.0.0.0.1.2' })))));};


	var PieChart = function PieChart() {return (

	        _react2.default.createElement('g', { 'data-reactid': '.0.2.0.$=1$scorecard.1.0.0.0.$/=10.0.0.1.0.$0/=10.0.0.0' }, _react2.default.createElement('path', { d: 'M1135.1-5.3c86.4,6.6,170.8,24.6,251.2,52.7l-251.2,251.1V-5.3z M31.2,1309.9 C-110.5,781.6,203.2,238.5,731.8,97c60.3-16.2,120.7-26.3,180.9-31v956.3L236,1698.5C142.2,1589.3,70.9,1458,31.2,1309.9 M1805.9,1612.7c-128.8,188.5-323.2,333.7-561.3,397.3c-328,87.9-661.6,0.4-901.6-204.8l657.6-657.1L1805.9,1612.7z M1517.4,104.2 c40.5,21.1,79.4,45,116.6,71.3l-498.9,498.6V486.2L1517.4,104.2z M1737.4,259.8c32.2,30.2,62.5,62.7,90.8,97.2l-622.6,622.1 l-70.4-40.5v-76.8L1737.4,259.8z M1905.9,467c24.6,40.2,46.4,82.7,65.3,126.9l-524.7,524.5l-121.8-70.5L1905.9,467z M2018.8,734.1 c13.7,53.3,23,106.8,27.9,160l-362,361.7l-119.1-68.8L2018.8,734.1z M2045.5,1082.9c-11.7,114.7-43.6,225.4-92.6,327.6l-149.1-86 L2045.5,1082.9z', 'data-reactid': '.0.2.0.$=1$scorecard.1.0.0.0.$/=10.0.0.1.0.$0/=10.0.0.0.0' })));};



	var FlipArrow = function FlipArrow() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('g', null,
	                _react2.default.createElement('path', { d: 'M1736.6,298.8c-396-395.8-1040.1-395.8-1436,0c-395.9,396-395.9,1040.2,0,1436c385.6,385.6,1006.4,394.7,1404.3,28.7l53-52C2131.4,1314.1,2124.9,687.1,1736.6,298.8 M1598.4,1596.6c-319.8,319.7-840,319.7-1159.7,0C119.1,1277,119.1,756.7,438.8,437.1c319.5-319.5,839.6-319.5,1159.5,0C1918,756.7,1918,1277,1598.4,1596.6' })),

	            _react2.default.createElement('g', null,
	                _react2.default.createElement('path', { d: 'M1451.5,947.4c0,0-130.8-176.5-496.1-211.5V598.6c0-75.1-48.7-99-108.2-53.1L479.6,829.3c-38.4,29.7-51.6,71.1-40.1,108.8l0.1,0.1c6.4,20.7,20,40.3,41.4,56.2l364.7,271.6c60.3,44.8,109.6,20.1,109.6-55.1v-124.4c3.9-1,536.4-136,618.9,414.1c1.1,6.8,1.1,10.8,2.8,10.3c0,0,1.6,1.7,3.2-14C1589.9,1411.4,1608.4,1121.5,1451.5,947.4' }))));};




	var Comments = function Comments() {return (
	        _react2.default.createElement('path', { d: 'M22.5,2.6h-20C1.1,2.6,0,3.7,0,5.1v11.2c0,1.4,1.1,2.5,2.5,2.5H4v3.6l10-3.6h8.5c1.4,0,2.5-1.1,2.5-2.5V5.1 C25,3.7,23.8,2.6,22.5,2.6' }));};



	var StaticArrow = function StaticArrow() {return (
	        _react2.default.createElement('path', { d: 'M21.2,11.3l-4.8-4.8c-0.6-0.6-1.1-0.4-1.1,0.5v2.6h-1.7h-2.5h-0.1v0c0,0,0,0,0,0H9.7V7c0-0.9-0.5-1.1-1.1-0.5l-4.8,4.8 c-0.6,0.6-0.6,1.7,0,2.3l4.8,4.8c0.6,0.6,1.1,0.4,1.1-0.5v-2.6h1.7h2.5h0.1v0c0,0,0,0,0,0h1.2V18c0,0.9,0.5,1.1,1.1,0.5l4.8-4.8 C21.9,13,21.9,12,21.2,11.3z' }));};




	var PositiveArrow = function PositiveArrow() {return (
	        _react2.default.createElement('path', { d: 'M7,12.8h2.6v1.7V17v0.1h0c0.1,0.8,0.8,1.5,1.6,1.5h2.5c0.9,0,1.6-0.7,1.6-1.5h0V17v-2.5v-1.7H18c0.9,0,1.1-0.5,0.5-1.1 l-4.8-4.8c-0.6-0.6-1.7-0.6-2.3,0l-4.8,4.8C5.9,12.3,6.1,12.8,7,12.8' }));};



	var NegativeArrow = function NegativeArrow() {return (
	        _react2.default.createElement('path', { d: 'M18,12.2h-2.6v-1.7V8V7.9h0c-0.1-0.8-0.8-1.5-1.6-1.5h-2.5c-0.9,0-1.6,0.7-1.6,1.5h0V8v2.5v1.7H7c-0.9,0-1.1,0.5-0.5,1.1 l4.8,4.8c0.6,0.6,1.7,0.6,2.3,0l4.8-4.8C19.1,12.7,18.9,12.2,18,12.2' }));};




	var Info = function Info() {return (
	        _react2.default.createElement('path', { d: 'M12.5,0.2C5.6,0.2,0,5.8,0,12.7c0,6.9,5.6,12.5,12.5,12.5S25,19.6,25,12.7C25,5.8,19.4,0.2,12.5,0.2 M12.2,5 c0.9,0,1.7,0.8,1.7,1.7c0,0.9-0.8,1.7-1.7,1.7c-0.9,0-1.7-0.8-1.7-1.7C10.5,5.7,11.2,5,12.2,5 M16,19.3H9c-0.5,0-1-0.4-1-1 c0-0.5,0.4-1,1-1v0h2.2v-5.9H9.7v0c-0.5,0-1-0.4-1-1c0-0.5,0.4-1,1-1h3.1c0.5,0,1,0.4,1,1l0,0v6.9H16v0c0.5,0,1,0.4,1,1 C17,18.8,16.6,19.3,16,19.3' }));};





	var Share = function Share() {return (
	        _react2.default.createElement('path', { d: 'M12.5,0C5.6,0,0,5.6,0,12.5S5.6,25,12.5,25C19.4,25,25,19.4,25,12.5S19.4,0,12.5,0z M18,17.5 c-0.6,1.1-1.9,1.6-3,1c-0.9-0.4-1.4-1.4-1.2-2.4l-3.3-1.9c-0.9,0.7-2.2,0.7-3.1-0.1c-0.9-0.9-0.9-2.3,0-3.2c0.8-0.8,2.2-0.9,3.1-0.1 l3.3-1.9c-0.2-1.1,0.5-2.1,1.5-2.5c1.2-0.4,2.5,0.2,2.9,1.4c0.4,1.2-0.2,2.5-1.4,2.9c-0.8,0.3-1.6,0.1-2.2-0.4l-3.3,1.9 c0,0.2,0,0.4,0,0.7l3.3,1.9c0.7-0.6,1.6-0.7,2.5-0.3C18.1,15,18.6,16.3,18,17.5z' }));};





	var Check = function Check() {return (
	        _react2.default.createElement('path', { d: 'M8.2,21.3c0.5,0.5,1.2,0.5,1.7,0L24.6,6.6c0.5-0.5,0.5-1.2,0-1.7l-2.6-2.6c-0.5-0.5-1.2-0.5-1.7,0L9.9,12.8 c-0.5,0.5-1.2,0.5-1.7,0L4.6,9.2c-0.5-0.5-1.2-0.5-1.7,0l-2.6,2.6c-0.5,0.5-0.5,1.2,0,1.7L8.2,21.3z' }));};



	var Smiley = function Smiley() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { fill: '#FCE821', d: 'M22,22C-7.3,51.3-7.3,98.8,22,128.1c14.6,14.6,33.8,22,53,22V0.1C55.8,0,36.6,7.3,22,22z' }),
	            _react2.default.createElement('path', { fill: '#F1CB21', d: 'M75,0v150c19.2,0,38.4-7.3,53-22c29.3-29.3,29.3-76.8,0-106.1C113.4,7.3,94.2,0,75,0z' }),
	            _react2.default.createElement('circle', { fill: '#FFFFFF', cx: '48.5', cy: '54.1', r: '20' }),
	            _react2.default.createElement('path', { fill: '#333333', d: 'M50.9,54.5c-2-2.7-0.4-7.4,3.7-11c-1.8-1-3.8-1.6-6-1.6c-6.7,0-12.2,5.5-12.2,12.2s5.5,12.2,12.2,12.2 c6.5,0,11.7-5,12.2-11.4C56.7,56.9,52.7,56.8,50.9,54.5z' }),

	            _react2.default.createElement('path', { fill: '#333333', d: 'M33.7,96.3c-1.7,1-2.2,3.1-1.3,4.8c2,3.4,4.4,6.6,7.1,9.4l4.9-4.9c-2.3-2.4-4.3-5.1-6-8 C37.5,95.9,35.4,95.3,33.7,96.3z' }),

	            _react2.default.createElement('path', { d: 'M50.1,118.9c7.3,4.3,15.9,6.8,24.9,6.8c9.1,0,17.6-2.5,24.9-6.8s13.4-10.5,17.7-17.8c1-1.7,0.4-3.8-1.3-4.8 c-1.7-1-3.8-0.4-4.8,1.3c-3.6,6.3-8.9,11.6-15.2,15.3c-6.3,3.7-13.6,5.8-21.4,5.8s-15.1-2.1-21.4-5.8c-3.4-2-6.5-4.5-9.1-7.3 l-4.9,4.9C42.6,113.7,46.2,116.6,50.1,118.9z' }),


	            _react2.default.createElement('path', { fill: '#FFFFFF', d: 'M89.4,54.1c0-6.7,5.5-12.2,12.2-12.2c1.9,0,3.7,0.4,5.3,1.2l5.7-5.7c-3.2-2.1-7-3.3-11-3.3c-11,0-20,9-20,20 c0,4.1,1.2,7.9,3.3,11l5.7-5.7C89.8,57.8,89.4,56,89.4,54.1z' }),

	            _react2.default.createElement('path', { fill: '#F2F2F2', d: 'M101.5,74.1c11,0,20-9,20-20c0-7-3.6-13.1-9-16.7l-5.7,5.7c0.2,0.1,0.5,0.2,0.7,0.4c-4,3.6-5.7,8.3-3.7,11 c1.8,2.3,5.8,2.4,9.8,0.5c-0.4,6.4-5.7,11.4-12.2,11.4c-4.8,0-9-2.8-11-6.9l-5.7,5.7C88.4,70.6,94.6,74.1,101.5,74.1z' }),

	            _react2.default.createElement('path', { fill: '#333333', d: 'M89.4,54.1c0,1.9,0.5,3.7,1.2,5.3l16.3-16.3c-1.6-0.8-3.4-1.2-5.3-1.2C94.8,41.9,89.4,47.4,89.4,54.1z' }),
	            _react2.default.createElement('path', { d: 'M101.6,66.3c6.5,0,11.7-5,12.2-11.4c-4,1.9-8.1,1.9-9.8-0.5c-2-2.7-0.4-7.4,3.7-11c-0.2-0.1-0.5-0.3-0.7-0.4L90.7,59.3 C92.6,63.5,96.7,66.3,101.6,66.3z' })));};




	var Agenda = function Agenda() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M18.9,7.1c0-0.4-0.1-0.7-0.3-1.1c-0.3-0.6-0.9-1-1.8-1c-1.3,0-1.6-1.3-1.6-2.1c0-1.5-1.2-2.7-2.7-2.7c-1.5,0-2.7,1.2-2.7,2.7c0,0.9-0.7,2.1-1.6,2.1c0,0,0,0,0,0h0c-0.6,0-1.3,0.4-1.7,1C6.2,6.4,6.1,6.8,6.1,7.1v1.1h12.8V7.1z M12.5,1.8c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7C11.8,2.1,12.1,1.8,12.5,1.8' }),
	            _react2.default.createElement('path', { d: 'M19.5,6.3c0.1,0.3,0.1,0.6,0.1,0.9v1.1v0.7h-0.7H6.1H5.4V8.2V7.1c0-0.3,0.1-0.6,0.2-0.9c-0.8,0.3-1.3,1-1.3,1.9v14.6c0,1.1,0.9,2.1,2.1,2.1h12.4c1.1,0,2.1-0.9,2.1-2.1V8.1C20.7,7.3,20.2,6.6,19.5,6.3z M16.7,20.3H8.3c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6h8.5c0.3,0,0.6,0.3,0.6,0.6C17.4,20.1,17.1,20.3,16.7,20.3z M16.7,17.5H8.3c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6h8.5c0.3,0,0.6,0.3,0.6,0.6C17.4,17.2,17.1,17.5,16.7,17.5z M16.7,14.7H8.3c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6h8.5c0.3,0,0.6,0.3,0.6,0.6C17.4,14.4,17.1,14.7,16.7,14.7z' })));};



	var AgendaNew = function AgendaNew() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('rect', { className: 'cls-1', x: '44.68', y: '-91.09', width: '56.6', height: '12.94', rx: '3.5', ry: '3.5', transform: 'translate(-31.44 104.37) rotate(-8.35)' }),
	            _react2.default.createElement('circle', { className: 'cls-2', cx: '47.86', cy: '-84.62', r: '1.41', transform: 'translate(-31.71 100.72) rotate(-8.35)' }),
	            _react2.default.createElement('circle', { className: 'cls-2', cx: '97.38', cy: '-91.89', r: '1.41', transform: 'translate(-30.13 107.84) rotate(-8.35)' }),
	            _react2.default.createElement('path', { className: 'cls-3', d: 'M104.58-45.6l-47,7.12a32.66,32.66,0,0,0-7.16-5.45L44.9-80.3l56-8.48,6.06,40A2.79,2.79,0,0,1,104.58-45.6Z', transform: 'translate(-44.51 94.66)' }),
	            _react2.default.createElement('line', { className: 'cls-4', x1: '12.87', y1: '20.03', x2: '17.11', y2: '48.02' }),
	            _react2.default.createElement('line', { className: 'cls-4', x1: '23.95', y1: '18.35', x2: '28.19', y2: '46.34' }),
	            _react2.default.createElement('line', { className: 'cls-4', x1: '35.03', y1: '16.67', x2: '39.27', y2: '44.66' }),
	            _react2.default.createElement('line', { className: 'cls-4', x1: '46.11', y1: '14.99', x2: '50.35', y2: '42.98' }),
	            _react2.default.createElement('polygon', { className: 'cls-5', points: '11.9 50.29 13.06 56.19 5.9 50.74 11.9 50.29' }),
	            _react2.default.createElement('circle', { className: 'cls-6', cx: '57.73', cy: '41.32', r: '21.16' }),
	            _react2.default.createElement('rect', { className: 'cls-3', x: '104.38', y: '-68.99', width: '2.83', height: '1.83', rx: '0.33', ry: '0.33', transform: 'translate(101.48 145.8) rotate(-75.87)' }),
	            _react2.default.createElement('rect', { className: 'cls-3', x: '116.27', y: '-50.66', width: '1.75', height: '2.71', transform: 'translate(91.84 170.99) rotate(-75.87)' }),
	            _react2.default.createElement('rect', { className: 'cls-3', x: '97.65', y: '-39.41', width: '2.71', height: '1.75', transform: 'translate(67.69 161.55) rotate(-75.87)' }),
	            _react2.default.createElement('rect', { className: 'cls-3', x: '86.03', y: '-58.21', width: '1.83', height: '2.83', transform: 'translate(76.29 136.04) rotate(-75.87)' }),
	            _react2.default.createElement('rect', { className: 'cls-3', x: '91.16', y: '-64.7', width: '1.75', height: '2.71', transform: 'translate(28.87 141.48) rotate(-45.85)' }),
	            _react2.default.createElement('rect', { className: 'cls-3', x: '111.72', y: '-64.52', width: '2.71', height: '1.75', transform: 'translate(35.52 156.5) rotate(-45.87)' }),
	            _react2.default.createElement('rect', { className: 'cls-3', x: '112.43', y: '-43.97', width: '1.75', height: '2.71', transform: 'translate(20.44 163.03) rotate(-45.85)' }),
	            _react2.default.createElement('rect', { className: 'cls-3', x: '90.91', y: '-43.17', width: '2.71', height: '1.75', transform: 'translate(13.87 148.04) rotate(-45.87)' }),
	            _react2.default.createElement('rect', { className: 'cls-3', x: '85.66', y: '-49.57', width: '2.83', height: '1.83', transform: 'translate(-27.45 117.05) rotate(-16.22)' }),
	            _react2.default.createElement('rect', { className: 'cls-3', x: '97.61', y: '-68.63', width: '1.75', height: '2.71', transform: 'translate(-21.81 119.48) rotate(-16.21)' }),
	            _react2.default.createElement('path', { className: 'cls-3', d: 'M101.13-53.06a.91.91,0,0,0,.91.64h.27l16.16-4.38a.94.94,0,0,0,.64-1.1.94.94,0,0,0-1.1-.64l-16.16,4.38A.88.88,0,0,0,101.13-53.06Z', transform: 'translate(-44.51 94.66)' }),
	            _react2.default.createElement('rect', { className: 'cls-3', x: '105.95', y: '-40.03', width: '1.75', height: '2.71', transform: 'translate(-29.48 122.93) rotate(-16.2)' }),
	            _react2.default.createElement('path', { className: 'cls-3', d: 'M101.54-52.71a.59.59,0,0,0,.65-.31l.09-.15,2.64-10.5a.61.61,0,0,0-.42-.71.61.61,0,0,0-.71.42l-2.64,10.5A.57.57,0,0,0,101.54-52.71Z', transform: 'translate(-44.51 94.66)' })));};



	var Plus = function Plus() {return (
	        _react2.default.createElement('path', { d: 'M10.1,22.3L10,15l-7.3-0.1c-1.4,0-2.5-1.2-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5L10,10L9.9,2.6c0-1.4,1.1-2.5,2.5-2.5 c1.4,0,2.5,1.2,2.5,2.5L15,10l7.3,0.1c1.4,0,2.5,1.2,2.6,2.5c0,1.4-1.1,2.5-2.5,2.5L15,15.1l0.1,7.3c0,1.4-1.1,2.5-2.5,2.5 C11.3,24.9,10.1,23.7,10.1,22.3' }));};




	var Minus = function Minus() {return (
	        _react2.default.createElement('path', { d: 'M2.5,10c0,0,18.5,0,19.9,0c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5L2.5,15C1.1,15,0,13.9,0,12.5 C0,11.1,1.1,10,2.5,10' }));};



	var SocialHub = function SocialHub() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M14,10.5H1.6C0.7,10.5,0,11.2,0,12v7c0,0.9,0.7,1.6,1.6,1.6h0.9v2.3l6.3-2.3H14c0.9,0,1.6-0.7,1.6-1.6v-7 C15.6,11.2,14.9,10.5,14,10.5 M8.4,17.3H3.2c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6h5.2c0.3,0,0.6,0.3,0.6,0.6 C9,17,8.7,17.3,8.4,17.3 M12.3,14.8H3.2c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6h9.1c0.3,0,0.6,0.3,0.6,0.6 C12.9,14.5,12.6,14.8,12.3,14.8' }),



	            _react2.default.createElement('path', { d: 'M25,8.4C25,4.9,21.3,2,16.7,2S8.5,4.9,8.5,8.4c0,0.2,0,0.3,0,0.4H14c1.7,0,3.2,1.4,3.2,3.2v3.4l3.9,1.2v-2.8 l0,0C23.4,12.8,25,10.8,25,8.4' })));};




	var Miscellaneous = function Miscellaneous() {return (
	        _react2.default.createElement('path', { d: 'M3,21l4.9-6.7L0,11.8l2.2-5.3l7.4,2.6V0.5h6v8.5L23,6.5l2,5.3l-7.8,2.6l5,6.7l-4.7,3.4l-5-7l-5,7.1L3,21z' }));};


	var ERecognition = function ERecognition() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M4.7,10.6c0.6,0,1.1,0.5,1.1,1.1v9.4c0,0.6-0.5,1.1-1.1,1.1H1c-0.6,0-1.1-0.5-1.1-1.1v-9.4c0-0.6,0.5-1.1,1.1-1.1H4.7z' }),
	            _react2.default.createElement('path', { d: 'M25.1,11.3c0-1-0.8-1.8-1.8-1.8h-8.2V2.6c0-1-0.8-1.8-1.8-1.8c-1,0-1.9,0.8-1.9,1.8v0.4c0,2.3-0.8,6-2.6,7.1v0 c-0.7,0.5-1.2,1.3-1.2,2.3v9.1c0,0.2,0,0.4,0.1,0.5c0.2,1.1,1.1,1.9,2.2,2c0.1,0,9.6,0,9.6,0c1,0,1.9-0.8,1.9-1.8 c0-1-0.8-1.9-1.9-1.9h1.3c1,0,1.8-0.8,1.8-1.9c0-1-0.8-1.8-1.8-1.8h1.8c1,0,1.9-0.8,1.9-1.9c0-1-0.8-1.8-1.9-1.8h0.7 C24.3,13.1,25.1,12.3,25.1,11.3' })));};






	var VzBadges = function VzBadges() {return (
	        _react2.default.createElement('path', { d: 'M19.6,0.1H5.3c-1.4,0-2.6,1.2-2.6,2.6V7v13.5l9.8,4.4l9.7-4.4V7V2.8C22.2,1.3,21.1,0.1,19.6,0.1 M16.5,17.2L12.4,15 l-4.1,2.2l0.9-4.6L5.8,9.4l4.7-0.6l2.1-4.2l2,4.2l4.6,0.7l-3.4,3.2L16.5,17.2z' }));};



	var MultiMedia = function MultiMedia() {return (
	        _react2.default.createElement('path', { d: 'M4,3.3L2.7,3.5C0.9,3.9-0.2,5.3,0.1,6.7l0.2,1.1l1.2-0.2L4,3.3z M20.1,0l-4,0.8l-2.5,4.3l4-0.8L20.1,0z M24.2,1.8 c-0.1-0.5-0.4-1-0.9-1.3l-1.7,3l2.9-0.6L24.2,1.8z M12,1.6L8,2.5L5.5,6.7l4-0.8L12,1.6z M22.1,8l2.9,3.2V8H22.1z M18,8h-4.1 l3.3,3.6H13L9.8,8H5.6l3.3,3.6H4.8L1.5,8H0.3v13.9c0,1.7,1.5,3.1,3.3,3.1h18.2c1.8,0,3.3-1.4,3.3-3.1V11.5h-3.8L18,8z' }));};




	var HelpCenter = function HelpCenter() {return (
	        _react2.default.createElement('path', { d: 'M5,6.5c0-1,0.3-2,1-3c0.6-1,1.6-1.9,2.8-2.5c1.2-0.7,2.6-1,4.3-1c1.5,0,2.9,0.3,4,0.8c1.2,0.6,2.1,1.3,2.7,2.3 c0.6,1,0.9,2,0.9,3.1c0,0.9-0.2,1.7-0.5,2.3c-0.4,0.7-0.8,1.2-1.3,1.7c-0.5,0.5-1.4,1.3-2.7,2.5c-0.4,0.3-0.6,0.6-0.9,0.9 c-0.2,0.2-0.4,0.5-0.5,0.7c-0.1,0.2-0.2,0.4-0.2,0.6c-0.1,0.2-0.1,0.6-0.3,1.1c-0.2,1.1-0.8,1.6-1.9,1.6c-0.5,0-1-0.2-1.4-0.5 c-0.4-0.4-0.6-0.9-0.6-1.6c0-0.9,0.1-1.6,0.4-2.3c0.3-0.6,0.6-1.2,1.1-1.7c0.4-0.5,1.1-1.1,1.8-1.7c0.7-0.6,1.2-1,1.4-1.3 c0.3-0.3,0.5-0.6,0.8-1c0.2-0.4,0.3-0.8,0.3-1.2c0-0.8-0.3-1.5-0.9-2.1C14.8,3.6,14,3.3,13,3.3c-1.1,0-2,0.3-2.5,0.9 c-0.5,0.6-1,1.4-1.4,2.6c-0.4,1.2-1,1.8-2,1.8C6.5,8.5,6,8.3,5.6,7.9C5.2,7.5,5,7,5,6.5 M12.6,25c-0.6,0-1.2-0.2-1.7-0.6 c-0.5-0.4-0.7-1-0.7-1.7c0-0.7,0.2-1.2,0.7-1.7c0.5-0.4,1-0.7,1.7-0.7c0.7,0,1.2,0.2,1.7,0.7c0.4,0.4,0.7,1,0.7,1.7 c0,0.7-0.2,1.3-0.7,1.7C13.8,24.8,13.2,25,12.6,25' }));};









	var Taxes = function Taxes() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M16.5,6.4h4L15,1.3l0,3.7C15,5.7,15.7,6.4,16.5,6.4' }),
	            _react2.default.createElement('path', { d: 'M13.6,5V0H5.5C4.1,0,3,1.1,3,2.5v20C3,23.9,4.1,25,5.5,25h14.1c1.4,0,2.5-1.1,2.5-2.5V7.9h-5.5C14.9,7.9,13.6,6.6,13.6,5 M8.5,19.1v0.7c0,0.4-0.3,0.6-0.6,0.6c-0.3,0-0.6-0.3-0.6-0.6v-0.7H6.5c-0.3,0-0.6-0.3-0.6-0.6c0-0.4,0.3-0.6,0.6-0.6H8 c1.1,0,1.4-0.2,1.4-0.7c0-0.6-0.3-0.8-1.2-0.9c-1.7-0.2-2.4-0.8-2.4-2c0-0.9,0.5-2.1,2.2-2.2v-0.7c0-0.3,0.3-0.6,0.6-0.6 c0.3,0,0.6,0.3,0.6,0.6v0.8h0.5c0.3,0,0.6,0.3,0.6,0.6c0,0.4-0.3,0.6-0.6,0.6H8.3v-0.1c-1,0-1.1,0.5-1.1,0.9c0,0.6,0.5,0.7,1.3,0.8 c1.5,0.2,2.3,0.7,2.3,2.1C10.7,18.2,10.3,19,8.5,19.1 M18.4,19.8h-5.8c-0.4,0-0.7-0.3-0.7-0.8s0.3-0.8,0.7-0.8h5.8 c0.4,0,0.7,0.3,0.7,0.8S18.8,19.8,18.4,19.8 M18.4,16.4h-5.8c-0.4,0-0.7-0.3-0.7-0.8c0-0.4,0.3-0.8,0.7-0.8h5.8 c0.4,0,0.7,0.3,0.7,0.8C19.2,16,18.8,16.4,18.4,16.4 M19.2,12.1c0,0.4-0.3,0.8-0.7,0.8h-5.8c-0.4,0-0.7-0.3-0.7-0.8 c0-0.4,0.3-0.8,0.7-0.8h5.8C18.8,11.4,19.2,11.7,19.2,12.1' })));};










	var DollarSign = function DollarSign() {return (
	        _react2.default.createElement('path', { d: 'M18.9,16.5c0-3.7-2.1-4.9-6-5.4c-2.1-0.3-3.3-0.5-3.3-2c0-1.2,0.4-2.2,3-2.2l4-0.1c0.9,0,1.6-0.7,1.6-1.6 c0-0.9-0.7-1.6-1.6-1.6h-1.4v-2c0-0.9-0.7-1.6-1.6-1.6c-0.9,0-1.6,0.7-1.6,1.6v1.8C7.4,3.6,6.1,6.8,6.1,9c0,3.3,1.7,4.7,6.2,5.3 c2.2,0.3,3.1,0.7,3.1,2.2c0,1.5-0.8,1.9-3.6,1.9H7.8c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6H10v1.7v0c0,0.9,0.7,1.6,1.6,1.6 c0.9,0,1.6-0.7,1.6-1.6v0v-1.8C17.7,21.2,18.9,19.1,18.9,16.5' }));};





	var Travel = function Travel() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M13.6,13.9c-0.1-0.1-0.2-0.1-0.3-0.2c0,0.1,0,0.1,0,0.2c0.1,0,0.1,0,0.2,0.1C13.5,13.9,13.6,13.9,13.6,13.9' }),
	            _react2.default.createElement('path', { d: 'M24.1,10.9c-0.4,0-0.7,0.1-0.9,0.2c-0.3,0.1-3,1.3-3,1.3L11.7,9L11,9.3c0,0-0.3,0.1-0.1,0.4C11,9.9,16.1,14,16.1,14 s0.2,0.2-0.2,0.4c-0.5,0.2-1.6,0.8-2,1c-0.1,0-0.3,0.2-0.4,0.2c0,0,0,0,0,0c-0.1,0-0.2-0.1-0.3-0.1c-0.5-0.2-1.2-0.5-1.7-0.6 c-0.1,0-0.5-0.1-0.6-0.2c0,0,0,0-0.1,0c-0.1,0-0.2,0.1-0.2,0.1l-0.6,0.6l2.3,1.4l-0.5,2.7l0.8,0c0,0,0.2-0.1,0.2-0.2 c0-0.1,0.2-0.4,0.3-0.5c0.2-0.5,0.5-1.2,0.7-1.7c0.1-0.1,0.1-0.3,0.2-0.3c0.1-0.1,0.3-0.1,0.4-0.2c0.4-0.1,1.6-0.6,2.1-0.8 c0.1,0,0.2,0,0.2,0c0.2,0,0.2,0.2,0.2,0.2s-0.6,6.6-0.5,6.8c0,0.1,0.1,0.2,0.2,0.2c0.1,0,0.1,0,0.1,0l0.7-0.3l3.5-8.4 c0,0,2.7-1.1,3-1.3c0.3-0.2,1.3-0.8,1-1.5C24.8,11,24.4,10.9,24.1,10.9' }),





	            _react2.default.createElement('path', { d: 'M10.5,18.3c-0.2,0.1-0.3,0.2-0.5,0.3V17h0l-0.8-0.5l-1.6-1H5.8c-0.4-1-0.7-2.1-0.8-3.4h3.5v2.5L9,14.2l0.6-0.6l0.2-0.2 l0.2-0.1l0,0v-1.2h1.4c-1.7-1.4-1.8-1.6-1.9-1.8C9.3,9.9,9.3,9.4,9.4,8.9C9.6,8.6,9.8,8.3,10,8.2V7.3h2.9C13,7.5,13.1,7.7,13.2,8 l1.7,0.7c-0.1-0.5-0.2-0.9-0.4-1.4h1.6C16.5,8,16.8,8.7,17,9.5l1.4,0.5C17.8,5.6,14,2.1,9.4,2.1c-5.1,0-9.1,4.1-9.1,9.1 c0,5.1,4.1,9.1,9.1,9.1c0.3,0,0.5,0,0.8,0l0.2-1.3L10.5,18.3z M15,5.8h-1.1c-0.3-0.6-0.7-1.2-1.2-1.7C13.5,4.5,14.3,5.1,15,5.8 M10,3.9c0.9,0.5,1.5,1.1,2.1,1.9H10V3.9z M8.5,10.6H5c0-1.3,0.3-2.4,0.6-3.4h2.9V10.6z M8.5,3.9v1.8h-2C7,5.1,7.7,4.5,8.5,3.9 M5.9,4.2c-0.4,0.5-0.8,1-1.2,1.6h-1C4.4,5.1,5.1,4.6,5.9,4.2 M2.6,7.3h1.5c-0.3,1-0.5,2.1-0.6,3.4h-2C1.6,9.4,2,8.3,2.6,7.3 M2.7,15.5c-0.6-1-1.1-2.1-1.2-3.4h2c0.1,1.3,0.3,2.4,0.7,3.4H2.7z M3.9,17h1c0.3,0.5,0.7,1,1.1,1.4C5.2,18,4.5,17.6,3.9,17 M8.5,18.6c-0.7-0.4-1.3-1-1.8-1.6h1.8V18.6z' }),







	            _react2.default.createElement('path', { d: 'M15.1,17.8c-0.1,0.3-0.2,0.6-0.4,0.9c0.2-0.1,0.3-0.2,0.4-0.3c0-0.2,0-0.4,0.1-0.6C15.2,17.8,15.2,17.8,15.1,17.8' })));};



	var Warehouse = function Warehouse() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M17.2,14l-0.6,0.2l-0.4-0.4l-3.3-3.5v12.4l6.6-2.6c2-1,2.7-1.2,2.7-2.8l0.1-5.4L17.2,14z' }),
	            _react2.default.createElement('path', { d: 'M11.7,11.2l-1.6,2.9l-0.3,0.6l-0.7-0.2l-6.3-1.8l0.1,5.4c0,1.5,1.2,2.1,2.7,2.8l6.1,1.7V11.2z' }),
	            _react2.default.createElement('path', { d: 'M21.5,5.6L25,9.8l-8.1,3.4l-4.6-4.9L21.5,5.6z M3,5.9l9.4,2.4l-3,5.4L0.2,11L3,5.9' })));};



	var Quiz = function Quiz() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M23.5,10.2H16v2.5c0,1.9-1.4,3.5-3.3,3.5H11v6.5c0,1,0.8,1.8,1.7,1.8h10.7c1,0,1.5-0.8,1.5-1.8V12 C25,11,24.4,10.2,23.5,10.2 M21,21.6c-0.4,0-0.7-0.2-0.8-0.6l0,0.1l-0.5-1.4h-2.8l-0.5,1.4l0-0.1c-0.1,0.3-0.4,0.5-0.7,0.5 c-0.4,0-0.8-0.4-0.8-0.8c0-0.1,0-0.2,0-0.3l0,0l2.6-6.9l0,0c0.1-0.3,0.5-0.4,0.9-0.4c0.4,0,0.8,0.3,0.9,0.8h0l2.5,6.6c0,0,0,0,0,0 l0,0v0c0,0.1,0.1,0.2,0.1,0.3C21.8,21.2,21.5,21.6,21,21.6' }),



	            _react2.default.createElement('path', { d: 'M7.3,4.6c-0.7,0-1.2,0.2-1.6,0.6C5.3,5.7,5.1,6.4,5.1,7.3c0,0.8,0.2,1.4,0.6,1.9c0.4,0.4,0.9,0.7,1.7,0.7 c0.2,0,0.4,0,0.5,0c0,0,0,0,0,0L7.8,9.7l0,0C7.7,9.6,7.6,9.4,7.6,9.3c0-0.3,0.3-0.6,0.6-0.6c0.1,0,0.3,0,0.3,0.1l0.1,0.1 c0,0,0,0,0,0l0.3,0.2c0.2-0.3,0.3-0.5,0.4-0.8c0.1-0.4,0.1-0.8,0.1-1.1c0-0.8-0.2-1.4-0.6-1.8C8.5,4.8,8,4.6,7.3,4.6' }),


	            _react2.default.createElement('path', { d: 'M12.7,0.5H1.9C1,0.5,0,1.1,0,2v10.7c0,1,1,1.7,1.9,1.7h10.7c0.9,0,1.6-0.8,1.6-1.7V2C14.2,1.1,13.6,0.5,12.7,0.5 M10.6,10.3C10.6,10.3,10.6,10.4,10.6,10.3L10.6,10.3L10.6,10.3c0.2,0.2,0.3,0.3,0.3,0.5c0,0.3-0.3,0.6-0.6,0.6 c-0.2,0-0.3-0.1-0.4-0.2l-0.7-0.6c-0.2,0.1-0.5,0.2-0.7,0.3c-0.3,0.1-0.7,0.1-1,0.1c-1.1,0-2-0.4-2.7-1.2C4,9.3,3.7,8.3,3.7,7.2 c0-1,0.2-1.9,0.7-2.6C5.1,3.7,6,3.3,7.3,3.3c1.3,0,2.3,0.4,2.9,1.3c0.5,0.7,0.7,1.5,0.7,2.5c0,0.5-0.1,0.9-0.2,1.4 C10.6,9,10.3,9.5,10,9.9L10.6,10.3z' })));};







	var AwardperqsIssuance = function AwardperqsIssuance() {return (
	        _react2.default.createElement('path', { d: 'M23.9,1.9c-0.5,0-1,0-1.4,0h-2.6c0-0.2,0-0.4,0-0.6c0-0.6,0-0.7-0.7-0.7c-2.2,0-4.5,0-6.7,0h-0.1h-0.1c-2.2,0-4.5,0-6.7,0 C5.1,0.6,5,0.7,5,1.3c0,0.2,0,0.4,0,0.6H2.5c-0.5,0-1,0-1.4,0c-0.7,0-1,0.3-0.9,1C0.2,5.1,0.8,7.1,1.9,9c1.4,2.3,3.2,4.1,5.5,5.4 c0.5,1.1,1.2,2.2,2.2,2.9c0.5,0.4,1.1,0.6,1.8,0.8c0,0,0,0.1,0,0.1c0,0.3,0,0.5,0,0.8c0,0.7-0.1,1.4-0.3,2.2 c-0.2,0.6-0.6,1.1-1.2,1.4c-0.5,0.2-1.2,0.2-1.7,0.6c-0.4,0.3-0.8,1.2,0,1.2h4.3h4.3c0.8,0,0.5-0.9,0-1.2c-0.5-0.3-1.1-0.3-1.7-0.6 c-0.6-0.3-1-0.8-1.2-1.4c-0.3-0.7-0.3-1.5-0.3-2.2c0-0.3,0-0.5,0-0.8c0,0,0-0.1,0-0.1c0.7-0.1,1.3-0.4,1.8-0.8 c1-0.7,1.7-1.8,2.2-2.9c2.3-1.4,4.2-3.2,5.5-5.4c1.1-1.9,1.8-3.9,1.8-6.1C24.9,2.1,24.7,1.9,23.9,1.9z M6.5,12.1 c-2.3-1.8-3.9-4.1-4.7-7C1.8,4.8,1.7,4.5,1.7,4.3C1.6,3.6,1.9,3.3,2.5,3.3c0.9,0,1.7,0,2.6,0c0.2,3,0.6,6,1.5,8.8 C6.6,12.1,6.5,12.1,6.5,12.1z M16,7.6c-0.5,0.4-0.9,0.8-1.4,1.2c-0.1,0.1-0.2,0.2-0.1,0.4c0.2,0.6,0.3,1.2,0.4,1.7 c0.1,0.2,0,0.4-0.2,0.5c-0.2,0.1-0.4,0.1-0.6,0c-0.5-0.3-1.1-0.7-1.6-1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0c-0.5,0.3-1,0.7-1.6,1 c-0.2,0.1-0.4,0.1-0.6,0c-0.2-0.1-0.2-0.3-0.2-0.5c0.1-0.6,0.3-1.2,0.4-1.7c0-0.2,0-0.3-0.1-0.4C9.9,8.4,9.4,8,9,7.6 C8.9,7.5,8.8,7.4,8.8,7.2c0-0.2,0.1-0.4,0.3-0.5c0.1,0,0.2,0,0.3,0c0.6,0,1.1-0.1,1.7-0.1c0.1,0,0.2-0.1,0.2-0.2 c0.2-0.6,0.5-1.2,0.7-1.8c0.1-0.2,0.2-0.3,0.4-0.3c0,0,0,0,0,0c0,0,0,0,0,0c0.2,0,0.4,0.1,0.4,0.3c0.2,0.6,0.5,1.2,0.7,1.8 c0,0.1,0.1,0.2,0.2,0.2c0.6,0,1.1,0.1,1.7,0.1c0.1,0,0.2,0,0.3,0c0.2,0.1,0.3,0.2,0.3,0.5C16.2,7.4,16.1,7.5,16,7.6z M23.3,4.3 c0,0.3-0.1,0.6-0.2,0.8c-0.7,2.9-2.4,5.1-4.7,7c0,0-0.1,0.1-0.1,0.1c0.9-2.9,1.3-5.8,1.5-8.8c0.9,0,1.8,0,2.6,0 C23.1,3.3,23.4,3.6,23.3,4.3z' }));};
















	var ETicketsIssuance = function ETicketsIssuance() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M23,12.5c0-1.1,0.9-2,2-2v-3c0-1-0.8-1.9-1.9-1.9H10.5c0,0,0,0,0,0c0,0.6-0.5,1.1-1.1,1.1 c-0.6,0-1.1-0.5-1.1-1.1c0,0,0,0,0,0H1.8C0.8,5.7,0,6.5,0,7.5v3c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2v3c0,1,0.8,1.9,1.9,1.9h6.5 c0,0,0,0,0,0c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1c0,0,0,0,0,0h12.7c1,0,1.9-0.8,1.9-1.9v-3C23.9,14.5,23,13.6,23,12.5 M9.4,17c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C10.5,16.5,10,17,9.4,17 M9.4,13.6 c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c0.6,0,1.1,0.5,1.1,1.1C10.5,13.1,10,13.6,9.4,13.6 M9.4,10.2 c-0.6,0-1.1-0.5-1.1-1.1C8.3,8.5,8.8,8,9.4,8c0.6,0,1.1,0.5,1.1,1.1C10.5,9.7,10,10.2,9.4,10.2' })));};








	var UserManagementTools = function UserManagementTools() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M13.4,6c0-2.8-2.3-5.2-5-5.2c-2.8,0-5,2.3-5,5.2s2.3,5.2,5,5.2C11.2,11.2,13.4,8.9,13.4,6' }),
	            _react2.default.createElement('path', { d: 'M14.3,11.4L12.6,11c-1.1,1-2.6,1.6-4.2,1.6c-1.6,0-3-0.6-4.2-1.6l-1.7,0.5c-1.8,0.5-2.4,1.3-2.3,2.3l1.4,8.8 c0.2,1.4,1,2.3,2.3,2.3h4.5h0h4.5c1.3,0,2.1-0.9,2.3-2.3l1.4-8.8C16.7,12.7,16.1,11.9,14.3,11.4 M13.4,16L13.4,16l-5,5L7,22.3 l-1.4-1.4l-2.3-2.3v0c-0.4-0.4-0.4-1,0-1.4c0.2-0.2,0.4-0.3,0.7-0.3c0.2,0,0.5,0.1,0.7,0.3c0,0,0,0,0,0L7,19.6l5-5 c0.2-0.2,0.4-0.3,0.7-0.3c0.2,0,0.5,0.1,0.7,0.3C13.7,15,13.7,15.6,13.4,16' }),



	            _react2.default.createElement('path', { d: 'M18.9,7.7c2,0,3.6-1.7,3.6-3.7c0-2.1-1.6-3.7-3.6-3.7c-2,0-3.6,1.7-3.6,3.7C15.2,6,16.9,7.7,18.9,7.7' }),
	            _react2.default.createElement('path', { d: 'M23.1,7.9l-1.2-0.3c-0.8,0.7-1.9,1.1-3,1.1c-1.2,0-2.2-0.4-3-1.1l-1.2,0.3c-1.3,0.4-1.8,0.9-1.7,1.7l0,0.1l1.6,0.4l0,0l0,0 c3,0.8,3.5,2.5,3.3,3.8l-0.6,3.6h1.5h0h3.3c0.9,0,1.5-0.7,1.7-1.7l1-6.3C24.9,8.8,24.5,8.3,23.1,7.9' })));};




	var WebTrendReports = function WebTrendReports() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M22.5,2.5c0.6,0,1,0.4,1,1v15c0,0.6-0.4,1-1,1h-20c-0.6,0-1-0.4-1-1v-15c0-0.6,0.4-1,1-1H22.5 M22.5,1h-20 C1.1,1,0,2.1,0,3.5v15C0,19.8,1.1,21,2.5,21h20c1.4,0,2.5-1.1,2.5-2.5v-15C25,2.1,23.9,1,22.5,1' }),

	            _react2.default.createElement('path', { d: 'M24.2,24H0.8c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7h23.4c0.4,0,0.7,0.3,0.7,0.7C24.9,23.7,24.6,24,24.2,24' }),
	            _react2.default.createElement('path', { d: 'M13.4,14.1h-2.5c1.3,1.2,2.9,2.2,4.7,2.7C14.8,16.1,14,15.2,13.4,14.1' }),
	            _react2.default.createElement('path', { d: 'M16.9,14.1H14c0.9,1.4,2,2.5,3.3,3c0.3,0,0.6,0.1,0.9,0.1v-1.8C17.5,15.2,17,14.7,16.9,14.1' }),
	            _react2.default.createElement('path', { d: 'M10.3,13.5h2.7c-1-2-1.6-4.4-1.6-7.1h-4C7.6,9.1,8.6,11.6,10.3,13.5' }),
	            _react2.default.createElement('path', { d: 'M16.9,13.5c0.1-0.6,0.6-1.1,1.2-1.2V6.4H12c0,2.7,0.7,5.2,1.7,7.1H16.9z' }),
	            _react2.default.createElement('path', { d: 'M16.9,14.1H14c0.9,1.4,2,2.5,3.3,3c0.3,0,0.6,0.1,0.9,0.1v-1.8C17.5,15.2,17,14.7,16.9,14.1' }),
	            _react2.default.createElement('path', { d: 'M11.6,4H7.7C7.6,4.6,7.5,5.2,7.5,5.9h4C11.5,5.2,11.5,4.6,11.6,4' }),
	            _react2.default.createElement('path', { d: 'M18.1,4h-6C12,4.6,12,5.2,12,5.9h6.2V4z' }),
	            _react2.default.createElement('path', { d: 'M18.1,6.4H12c0,2.7,0.7,5.2,1.7,7.1h3.2c0.1-0.6,0.6-1.1,1.2-1.2V6.4z' }),
	            _react2.default.createElement('path', { d: 'M18.7,5.9H22V4.7C22,4.3,21.6,4,21.2,4h-2.5V5.9z' }),
	            _react2.default.createElement('path', { d: 'M18.7,6.4v5.9c0.6,0.1,1,0.6,1.1,1.2H22V6.4H18.7z' }),
	            _react2.default.createElement('path', { d: 'M19.8,14.1c-0.1,0.6-0.6,1.1-1.1,1.2v1.8c0.3,0,0.6,0,0.9-0.1c0.9-0.3,1.7-0.9,2.4-1.7v-1.2H19.8z' }),
	            _react2.default.createElement('path', { d: 'M6,6.1C6,5.4,6.1,4.7,6.2,4H3.8C3.4,4,3,4.3,3,4.7v12.5C3,17.6,3.4,18,3.8,18h10.9C9.6,16.4,6,11.7,6,6.1' }),
	            _react2.default.createElement('path', { d: 'M13.1,13.5c-1-2-1.6-4.4-1.6-7.1h-4c0.1,2.7,1.1,5.2,2.9,7.1H13.1z' }),
	            _react2.default.createElement('path', { d: 'M13.4,14.1h-2.5c1.3,1.2,2.9,2.2,4.7,2.7C14.8,16.1,14,15.2,13.4,14.1' }),
	            _react2.default.createElement('path', { d: 'M21.2,16.7c0.2-0.1,0.5-0.1,0.7-0.2v-0.4C21.7,16.3,21.5,16.5,21.2,16.7' })));};



	var InstantWinManagement = function InstantWinManagement() {return (
	        _react2.default.createElement('path', { d: 'M5,13.5c-0.5,0.5-0.4,0.8,0.3,0.8h3.2c0.7,0,1,0.5,0.7,1.1l-4.6,9C4.3,25,4.4,25.2,5,24.7L20,11.5c0.5-0.5,0.4-0.8-0.3-0.8 h-3.2c-0.7,0-1-0.5-0.7-1.1l4.6-9C20.7,0,20.6-0.2,20,0.3L5,13.5z' }));};



	var Download = function Download() {return (
	        _react2.default.createElement('path', { d: 'M12.5,0C5.6,0,0,5.6,0,12.5S5.6,25,12.5,25S25,19.4,25,12.5S19.4,0,12.5,0z M8.3,10.7h2V9.4V7.5V7.4h0 c0.1-0.6,0.6-1.2,1.3-1.2h1.9c0.7,0,1.2,0.5,1.3,1.2h0v0.1v1.9v1.3h2c0.7,0,0.9,0.4,0.4,0.9l-3.7,3.7c-0.5,0.5-1.3,0.5-1.8,0 l-3.7-3.7C7.4,11.1,7.6,10.7,8.3,10.7z M16.7,18.8h-6.7H8.3c-0.3,0-0.6-0.3-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6h1.9h6.6 c0.3,0,0.6,0.3,0.6,0.6C17.4,18.5,17.1,18.8,16.7,18.8z' }));};





	var Print = function Print() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M15,10.5H6.3c-0.4,0-0.8-0.3-0.8-0.8S5.9,9,6.3,9H15c0.4,0,0.8,0.3,0.8,0.8S15.5,10.5,15,10.5' }),
	            _react2.default.createElement('path', { d: 'M12.2,7.7H6.3C5.9,7.7,5.6,7.4,5.6,7s0.3-0.8,0.8-0.8h5.9C12.6,6.2,13,6.6,13,7S12.6,7.7,12.2,7.7' }),
	            _react2.default.createElement('path', { d: 'M22.5,12.5L22.5,12.5v-4l-6.3-5.9H5.7c-1.4,0-2.5,1.1-2.5,2.5v7.4H2.5C1.2,12.5,0,13.6,0,15v5c0,1.3,1.1,2.4,2.5,2.4h20 c1.4,0,2.5-1.1,2.5-2.5c0,0,0,0,0,0V15C25,13.6,23.8,12.5,22.5,12.5 M17,5.1l3,2.8h-1.7c-0.7,0-1.2-0.6-1.2-1.2L17,5.1z M4.5,5.1 c0-0.7,0.6-1.2,1.2-1.2h10.1v2.7c0,1.4,1.1,2.5,2.5,2.5c0,0,0,0,0,0h2.9v3.4H4.4L4.5,5.1z M18,18.1c-0.4,0-0.7-0.3-0.7-0.7 c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7c0,0,0,0,0,0C18.8,17.8,18.4,18.1,18,18.1 M21.3,18.1c-0.4,0-0.7-0.3-0.7-0.7 c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7c0,0,0,0,0,0C22.1,17.8,21.7,18.1,21.3,18.1' })));};







	var BigArrow = function BigArrow() {return (
	        _react2.default.createElement('svg', { width: '100%', height: '100%', viewBox: '0 0 39 61' },
	            _react2.default.createElement('path', { d: 'M37.27,27.66c0.739,0.691 1.147,1.667 1.12,2.679c0,1.008 -0.403,1.975 -1.12,2.684l-26.78,26.474c-0.687,0.727 -1.644,1.14 -2.645,1.14c-1,0 -1.958,-0.413 -2.645,-1.14l-4.05,-3.954c-0.736,-0.697 -1.152,-1.668 -1.15,-2.681c-0.006,-1.003 0.412,-1.964 1.15,-2.642l20.22,-20.04l-20.22,-19.724c-0.734,-0.691 -1.15,-1.656 -1.15,-2.663c0,-1.008 0.416,-1.973 1.15,-2.663l4.05,-3.946c0.695,-0.726 1.646,-1.151 2.65,-1.183c0.995,-0.018 1.952,0.381 2.64,1.1l26.78,26.559Z' })));};

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	__webpack_require__(52);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

	ErrorMessage = function (_React$Component) {_inherits(ErrorMessage, _React$Component);function ErrorMessage() {_classCallCheck(this, ErrorMessage);return _possibleConstructorReturn(this, (ErrorMessage.__proto__ || Object.getPrototypeOf(ErrorMessage)).apply(this, arguments));}_createClass(ErrorMessage, [{ key: 'render', value: function render()
			{var

				message =
				this.props.message;


				return _react2.default.createElement('div', { className: "error-message-box" },
					_react2.default.createElement('i', { className: 'vz vz-alert' }),
					_react2.default.createElement('div', { className: 'message' },
						message));


			} }]);return ErrorMessage;}(_react2.default.Component);


	ErrorMessage.propTypes = {
		message: _react2.default.PropTypes.string };exports.default =


	ErrorMessage;

/***/ },

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".dropdown-container {\n  border-bottom: 1px solid #ccc;\n  cursor: pointer;\n  font-size: .75rem;\n  height: 1.75rem;\n  position: relative;\n  z-index: 100; }\n  .dropdown-container .icon-check {\n    fill: #cd040b;\n    height: 18px;\n    margin-left: 15px;\n    margin-right: 10px;\n    width: 18px; }\n  .dropdown-container span {\n    font-weight: bold; }\n\n.dropdown-list {\n  background: white;\n  -webkit-box-shadow: 0 12px 18px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 12px 18px rgba(0, 0, 0, 0.2);\n  display: block;\n  position: absolute;\n  top: 0;\n  min-width: 100%; }\n  .dropdown-list ul {\n    margin: 0;\n    max-height: 41rem;\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding: 0; }\n    .dropdown-list ul li span {\n      color: #666;\n      display: block;\n      padding: 10px 15px 10px 43px;\n      white-space: nowrap; }\n    .dropdown-list ul li li span {\n      padding-left: 79px; }\n    .dropdown-list ul li li li span {\n      padding-left: 99px; }\n    .dropdown-list ul span:hover {\n      background-color: #f5f5f5; }\n\n.dropdown-selected-active-label {\n  white-space: nowrap; }\n\n.dropdown-selected-active {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex; }\n  .dropdown-selected-active .dropdown-selected-active-label {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dropdown-selected-active .icon {\n    -webkit-flex-basis: auto;\n            flex-basis: auto; }\n\n.dropdown-selected {\n  border-bottom: 1px solid #e6e6e6;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 10px 0; }\n  .dropdown-selected:hover {\n    background-color: #ffffff; }\n  .dropdown-selected .icon {\n    -webkit-flex-basis: auto;\n            flex-basis: auto; }\n  .dropdown-selected .dropdown-selected-label {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    padding-right: 15px;\n    white-space: nowrap; }\n\n.icon-down-arrow {\n  height: 0.55rem;\n  width: 0.55rem;\n  position: relative;\n  margin-top: 6px;\n  float: right;\n  fill: #d0151b; }\n", ""]);

	// exports


/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".error-message-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 1.5rem;\n  background-color: #ffcfd1;\n  margin-bottom: 1rem;\n  margin-left: 3.125rem; }\n  .error-message-box .message {\n    margin-left: remCalc(8px);\n    line-height: 1;\n    margin-bottom: 0;\n    font-weight: 700;\n    font-size: remCalc(14px); }\n  .error-message-box i {\n    padding-right: 1em;\n    font-size: 2em; }\n\n.Home_cell .error-message-box {\n  margin: 1rem; }\n\n.Home_cell--scorecardmodule .error-message-box,\n.Home_cell--leaderboardmodule .error-message-box {\n  margin: 0px; }\n\n.Home_cell--leaderboardmodule .error-message-box {\n  margin-top: -webkit-calc(1rem - 0.5625rem);\n  margin-top: calc(1rem - 0.5625rem); }\n", ""]);

	// exports


/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./dropdown.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./dropdown.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./error-message.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./error-message.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports._dropdown = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	__webpack_require__(51);
	var _icons = __webpack_require__(16);var _icons2 = _interopRequireDefault(_icons);
	var _webTrack = __webpack_require__(32);var _webTrack2 = _interopRequireDefault(_webTrack);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

	_dropdown = exports._dropdown = function (_React$Component) {_inherits(_dropdown, _React$Component);

	  function _dropdown(props) {_classCallCheck(this, _dropdown);var _this = _possibleConstructorReturn(this, (_dropdown.__proto__ || Object.getPrototypeOf(_dropdown)).call(this,
	    props));_initialiseProps.call(_this);

	    _this.state = {
	      open: false };return _this;

	  }

	  // if( !props._state ) {
	  //   return false;
	  // }
	  _createClass(_dropdown, [{ key: 'render', value: function render()















	    {
	      var props = this.props;
	      if (this.props._state) {
	        return (
	          _react2.default.createElement('div', { className: 'dropdown-container', onClick: this.openDropdown },

	            _react2.default.createElement('div', { className: 'dropdown-selected-active' },
	              _react2.default.createElement('span', { className: 'dropdown-selected-active-label' }, this.renderLabel(props)),
	              _react2.default.createElement(_icons2.default, { name: 'down-arrow', viewBox: '0 0 2040.9 2040.9' })),



	            this.state.open &&

	            _react2.default.createElement(_dropdownList, _extends({}, this.props, { renderLabel: this.renderLabel, closeDropdown: this.closeDropdown }))));




	      } else {
	        return _react2.default.createElement('div', null);
	      }

	    } }]);return _dropdown;}(_react2.default.Component);var _initialiseProps = function _initialiseProps() {var _this3 = this;this.renderLabel = function (props) {if (!props._label) {return props._state[0] && props._state[0].label;}return props._label;};this.openDropdown = function () {_this3.setState({ open: true });};this.closeDropdown = function (event) {_this3.setState({ open: false });};};var



	_dropdownList = function (_React$Component2) {_inherits(_dropdownList, _React$Component2);function _dropdownList() {var _ref;var _temp, _this2, _ret;_classCallCheck(this, _dropdownList);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _dropdownList.__proto__ || Object.getPrototypeOf(_dropdownList)).call.apply(_ref, [this].concat(args))), _this2), _this2.






	    renderList = function (props) {
	      return props._state.map(function (item, index) {
	        return (
	          _react2.default.createElement('li', { key: index },
	            _react2.default.createElement('span', { onClick: function onClick(event) {
	                  if (item.milestoneId) {
	                    (0, _webTrack2.default)(item.milestoneId);
	                  }
	                  props._callback(event, item.label, item.id || item.value, item.defaultValue || 0);
	                  _this2.props.closeDropdown(false);
	                } }, item.label),
	            _this2.renderSubList(item)));


	      });
	    }, _this2.

	    renderSubList = function (items) {
	      if (!items.children) {
	        return false;
	      }
	      return (
	        _react2.default.createElement('ul', null,
	          _this2.renderSubListItems(items)));


	    }, _this2.

	    renderSubListItems = function (items) {
	      if (!items.children) {
	        return false;
	      }
	      return items.children.map(function (item, index) {
	        return (
	          _react2.default.createElement('li', { key: index },
	            _react2.default.createElement('span', { onClick: function onClick(event) {_this2.props._callback(event, item.label, item.id || item.value);} }, item.label),
	            _this2.renderSubList(item)));


	      });
	    }, _temp), _possibleConstructorReturn(_this2, _ret);}_createClass(_dropdownList, [{ key: 'componentDidMount', value: function componentDidMount() {document.addEventListener('click', this.props.closeDropdown);} }, { key: 'componentWillUnmount', value: function componentWillUnmount() {document.removeEventListener('click', this.props.closeDropdown);} }, { key: 'render', value: function render()

	    {
	      var props = this.props;
	      return (
	        _react2.default.createElement('div', { className: 'dropdown-list' },
	          _react2.default.createElement('div', { className: 'dropdown-selected' },
	            _react2.default.createElement(_icons2.default, { name: 'check' }),
	            _react2.default.createElement('span', { className: 'dropdown-selected-label' },
	              this.props.renderLabel(props))),


	          _react2.default.createElement('ul', null,
	            this.renderList(props))));



	    } }]);return _dropdownList;}(_react2.default.Component);

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*\n\tThis is a mixin which allows an element to have a fixed aspect ratio, but allows the element to NOT have to be floated/etc - the element can stay inside the normal document flow.  It's based on a common workaround which inserts an invisible padding \"before\" meta-element which gives it the desired size (and is floated), and then a subsequent 'clearfix' \"after\" element which makes sure that the bottom of this container stretches far enough to include the entirety of the floated element.\n\n\tTo use this, you'll need to have at least 3 nested divs; they don't need any special classes, but they do need to be the first elements inside their parents.  You apply the mixin to the topmost div, you leave the second div empty, and you put all of your content inside the third div.\n\n\tExpected usage:\n\n\t<div class=\"my-container\">  <-- mixin applied here, on this topmost div\n\t\t<div>\n\t\t\t<div class=\"interior\">\n\t\t\t\t<-- content goes in this div\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\tThen in your scss file:\n\t.my-container {\n\t\t@include aspect-ratio(4.0,3.0,100%);\n\n\t\t.interior {\n\t\t\t//whatever you want\n\t\t}\n\t}\n*/\n/**\n * This is heavily borrowed from how Twitter Bootstrap 4 handles breakpoints.\n *\n * https://github.com/twbs/bootstrap/blob/807a837afe1c5ee2ac5f962658a5741673c04231/scss/mixins/_breakpoints.scss\n */\n/**\n * Finds the next breakpoint up or returns null.\n * @param\t {string} $name\t\t\t\t\t\t\t\tCurrent breakpoint\n * @param\t {list} [$breakpointNames]\t\t\t\t\tAll breakpoints. Defaults to $appBreakpoints names.\n * @return {string|null}\t\t\t\t\t\t\t\tReturns name of next breakpoint or null.\n */\n.filter-bar {\n  min-height: 3rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: row wrap;\n          flex-flow: row wrap; }\n  .filter-bar .form {\n    padding-right: 2em; }\n  .filter-bar .submit-button {\n    padding: 0.75rem 1.0rem;\n    font-size: 0.75rem; }\n    .filter-bar .submit-button.disabled {\n      display: none; }\n\n.filter_modal {\n  margin: 10% auto;\n  width: 80%;\n  background: white;\n  position: relative; }\n  .filter_modal .close-icon {\n    position: absolute;\n    top: 1em;\n    right: 1em;\n    height: 2em;\n    width: 2em;\n    cursor: pointer; }\n    .filter_modal .close-icon i {\n      color: #959595;\n      position: absolute;\n      font-size: 1.5em;\n      padding: 0.05em;\n      top: 52%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n  .filter_modal .filter_wrapper {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    padding-top: 4em;\n    padding-bottom: 4em;\n    padding: 2em; }\n    .filter_modal .filter_wrapper .description {\n      font-weight: bold;\n      min-height: 3em;\n      margin-top: 1em;\n      margin-bottom: 1em;\n      width: 100%;\n      text-align: center; }\n\n.header-filters {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  margin-bottom: .75rem; }\n\n.hide-header-filters {\n  display: none; }\n\n.header-filter {\n  font-weight: 700;\n  margin-right: 1.25em;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 15%;\n          flex: 0 0 15%; }\n\n.header-filter .dropdown-container {\n  font-size: .75rem;\n  height: 1.8em; }\n", ""]);

	// exports


/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(187);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./filter-bar.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./filter-bar.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
	var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _lodash = __webpack_require__(25);
	var _classnames = __webpack_require__(28);var _classnames2 = _interopRequireDefault(_classnames);

	var _utils = __webpack_require__(12);

	var _appStore = __webpack_require__(43);

	var _dropdown2 = __webpack_require__(61);
	var _loader = __webpack_require__(152);

	__webpack_require__(224);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //libs and utils
	//utils
	//actionCreators
	//shared
	//scss
	/*******************************************************************************
	 *  1. H_CHILDREN
	 *  2. Filters
	 */ /*
	     * 1. H_CHILDREN
	     *
	     * H_CHILDREN stands for 'hierarchy drilldown children'.
	     * this object is used to help clear out obsolete drilldown filters.
	     */var H_CHILDREN = {
		channel: { region: false, district: false, area: false, office: false },
		region: { district: false, area: false, office: false },
		district: { area: false, office: false },
		area: { office: false },
		office: {} };


	/*
	                * 2. Filters
	                *
	                * Filters are used in Leaderboard and Agenda views.
	                */
	var AgendaFilters = (0, _utils.connectAndMap)(
	['app.loading', 'app.loaded'],
	{ getFilters: _appStore.getFilters, clearDrilldownFilters: _appStore.clearDrilldownFilters, resetHierarchyAndFilters: _appStore.resetHierarchyAndFilters })(function (_React$Component) {_inherits(_class, _React$Component);



		/*
	                                                                                                                                                                                                                                     * when the Filters Components is constructed,
	                                                                                                                                                                                                                                     * create the defaultSet in the component state,
	                                                                                                                                                                                                                                     * where the the state has five objects,
	                                                                                                                                                                                                                                     * and each object has a label and ddKey( dropdown key )
	                                                                                                                                                                                                                                     */
		function _class(props) {_classCallCheck(this, _class);


			/*
	                                                         * loop through H_CHILDREN and create defaultSet object
	                                                        */var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));
			var defaultSet = {};
			for (var id in H_CHILDREN) {
				if (H_CHILDREN.hasOwnProperty(id)) {
					defaultSet[id] = {};
					defaultSet[id].label = '';
					defaultSet[id].ddKey = null;
				}
			}

			/*
	           * store defaultSet in component state
	     */
			_this.state = { defaultSet: defaultSet };return _this;
		}

		/*
	    * when Filters mount, we have access to the hierarchy ids passed in as props.
	    * we loop through the ids we receive, and make service calls to get our filter options
	    * data per [ id ]: true.
	    */_createClass(_class, [{ key: 'componentWillMount', value: function componentWillMount()
			{
				var hierarchyIds = this.props.hierarchy.ids;
				var hasHierarchy = false;
				for (var id in hierarchyIds) {
					if (hierarchyIds.hasOwnProperty(id)) {
						if (typeof hierarchyIds[id] === 'boolean' && hierarchyIds[id]) {

							this.props.getFilters(id.toUpperCase(), this.props.view);
							hasHierarchy = true;

						}
					}
				}
				this.setState({ hasHierarchy: hasHierarchy });
			}

			/*
	     * when we receive new props data, we do a couple of things:
	     * we loop through hiearchy ids, update our defaultSet and clear the next
	     * drilldown if necessary.
	     */ }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(
			nextProps) {
				var hierarchyIds = nextProps.hierarchy.ids;
				for (var id in hierarchyIds) {
					if (hierarchyIds.hasOwnProperty(id)) {

						/*
	                                           * if we receive new drilldown filters, and they're new filters,
	                                           * update the component state object defaultSet with the new label and ddKey.
	                                           * ddKey is the id/key of the next drilldown filter
	                                          */
						var drilldown = nextProps.drilldown[id];
						var lastDrilldown = this.props.drilldown[id];
						if (
						drilldown && drilldown.filters && drilldown.filters.length > 0 && (

						!lastDrilldown.filters && drilldown.filters ||
						lastDrilldown && !(0, _lodash.isEqual)(lastDrilldown.filters, drilldown.filters)))

						{
							this.setState({
								defaultSet: _extends({},
								this.state.defaultSet, _defineProperty({},
								id, {
									label: drilldown.filters[0].label,
									ddKey: drilldown.ddKey })) });




							/*
	                                       * * if we have a ddKey, clear the options for that drilldown filters
	                                       */
							if (drilldown.ddKey) {
								this.props.clearDrilldownFilters(drilldown.ddKey, this.props.view);
							}
						}

					}
				}
			}

			/*
	     * returns a filter with options,
	     * and passes the correct callback
	     * type is which hierarchy id it is: ( channel, region, office, etc. )
	     */ }, { key: 'componentWillUnmount', value: function componentWillUnmount()
			{
				this.props.resetHierarchyAndFilters(this.props.view);
			} }, { key: 'renderFilter', value: function renderFilter(

			key) {var _this2 = this;

				/*
	                            * this is the callback that gets passed into our _dropdown component as props.
	                            * this callback gets called anytime a user clicks/touches a filter dropdown option.
	                            * event, label and id are all returned from the _dropdown component
	                            */
				var callback = function callback(event, label, id) {

					/*
	                                                        * update the label in the defaultSet for the specific hierarchy filter clicked.
	                                                        */
					_this2.setState({
						defaultSet: _extends({},
						_this2.state.defaultSet, _defineProperty({},
						key, _extends({},
						_this2.state.defaultSet[key], {
							label: label }))) });




					/*
	                             * create a new hierarchyIds object which overwrites the current
	                             * hierarchy ids received as props with the H_CHILDREN - this is done because,
	                             * we want to remove the 'drilldown children' of the clicked hierarchy filters.
	                             * we then assign the new id value of the option returned by _dropdown to the correct key
	                             */
					var hierarchyIds = _extends({},
					_this2.props.hierarchy.ids,
					H_CHILDREN[key], _defineProperty({},
					key, id));


					/*
	                * grab the ddKey from the defaultSet
	                */
					var ddKey = _this2.state.defaultSet[key].ddKey;

					/*
	                                                     * if we have a ddKey, getFilters for that ddKey, and pass in the view string ( to know which view to update ),
	                                                     * the object sent as data in the ajax function ( so that we can request the new drilldown filters ), 
	                                                     * and the hiearchyIds object ( to update global app view state )
	                                                     *
	                                                     * or if we don't have a ddKey, call filterData and make new calls for view data
	                                                     */
					if (ddKey) {
						_this2.props.getFilters(ddKey.toUpperCase(), _this2.props.view, _defineProperty({}, key, id), hierarchyIds);
					} else {
						_this2.props.filterData(hierarchyIds);
					}
				};

				/*
	       * construct our loadCode which is our action type.
	       * if the filters have loaded, show the dropdown, else show the loader.
	       */
				var loadCode = 'get' + this.props.view + key.charAt(0).toUpperCase() + key.slice(1) + 'Filters';
				if (this.props.loaded[loadCode]) {
					return _react2.default.createElement(_dropdown2._dropdown, {
						_label: this.state.defaultSet[key].label,
						_state: this.props.drilldown[key].filters,
						_callback: callback });
				} else if (this.props.loaded[loadCode] && this.props.drilldown[key].filters.length) {
					return _react2.default.createElement(_loader.Loader, {
						loading: this.props.loading,
						type: 'filter',
						overlayHeight: 50,
						loadCodes: [loadCode] });
				}
			} }, { key: 'render', value: function render()
			{var _props$drilldown =



				this.props.drilldown,channel = _props$drilldown.channel,region = _props$drilldown.region,district = _props$drilldown.district,area = _props$drilldown.area,office = _props$drilldown.office,hasHierarchy = this.state.hasHierarchy;
				return (
					_react2.default.createElement('div', { className: (0, _classnames2.default)(
							'header-filters',
							{
								'hide-header-filters': !hasHierarchy }) },




						channel &&
						channel.filters &&
						channel.filters.length > 0 &&
						_react2.default.createElement('div', { className: 'channel-filter header-filter' },
							this.renderFilter('channel')),




						region &&
						region.filters &&
						region.filters.length > 0 &&
						_react2.default.createElement('div', { className: 'region-filter header-filter' },
							this.renderFilter('region')),




						district &&
						district.filters &&
						district.filters.length > 0 &&
						_react2.default.createElement('div', { className: 'district-filter header-filter' },
							this.renderFilter('district')),




						area &&
						area.filters &&
						area.filters.length > 0 &&
						!area.hideSelectBox &&
						_react2.default.createElement('div', { className: 'area-filter header-filter' },
							this.renderFilter('area')),




						office &&
						office.filters &&
						office.filters.length > 0 &&
						!office.hideSelectBox &&
						_react2.default.createElement('div', { className: 'office-filter header-filter' },
							this.renderFilter('office'))));




			} }]);return _class;}(_react2.default.Component));exports.default =



	AgendaFilters;

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
	var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _lodash = __webpack_require__(25);
	var _reactAddonsCssTransitionGroup = __webpack_require__(200);var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	var _momentTimezone = __webpack_require__(31);var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

	var _agendaActionsReducers = __webpack_require__(229);

	var _utils = __webpack_require__(12);
	var _webTrack = __webpack_require__(32);var _webTrack2 = _interopRequireDefault(_webTrack);

	var _filtersAgenda = __webpack_require__(484);var _filtersAgenda2 = _interopRequireDefault(_filtersAgenda);
	var _errorMessage = __webpack_require__(37);var _errorMessage2 = _interopRequireDefault(_errorMessage);
	var _icons = __webpack_require__(16);var _icons2 = _interopRequireDefault(_icons);

	__webpack_require__(962);

	var _appLang = __webpack_require__(20);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //libs and utilities
	//action-creators
	//utils
	//shared
	//import scss
	//lang
	/*******************************************************************************
	 *  1. Agenda
	 *  2. AgendaList
	 *  3. AgendaRow
	 *  4. AgendaSubSheet
	 *  5. AgendaLinkList
	 */ /*
	     * 1. Agenda
	     */var Agenda = (0, _utils.connectAndMap)(['views.agenda', 'app.session', 'app.loadingErrors', 'app.loaded'],
	{ getAgendaData: _agendaActionsReducers.getAgendaData, closeAgendaSubSheet: _agendaActionsReducers.closeAgendaSubSheet })(function (_React$Component) {_inherits(_class, _React$Component);function _class() {_classCallCheck(this, _class);return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));}_createClass(_class, [{ key: 'componentWillMount', value: function componentWillMount()



			{
				var hierarchyIds = this.props.agenda.hierarchy.ids;
				if (typeof hierarchyIds.office !== 'boolean' && hierarchyIds.office) {
					this.props.getAgendaData(hierarchyIds);
				}
				if (this.props.agenda.agendaSheetOpened) {
					this.props.closeAgendaSubSheet();
				}
			} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(

			nextProps) {
				var hierarchyIds = nextProps.agenda.hierarchy.ids;
				if (
				this.props.session.refresh !== nextProps.session.refresh ||
				!(0, _lodash.isEqual)(this.props.agenda.hierarchy.ids, hierarchyIds))
				{
					this.props.getAgendaData(hierarchyIds);
				}
			} }, { key: 'closeSheet', value: function closeSheet()
			{
				$('.agenda-row-dates-before').removeClass();
			} }, { key: 'render', value: function render()

			{var _props$agenda =


				this.props.agenda,data = _props$agenda.data,agendaSheetOpened = _props$agenda.agendaSheetOpened,agendaSubsheetData = _props$agenda.agendaSubsheetData;
				return (
					_react2.default.createElement(AgendaList, {
						data: data,
						subsheet: agendaSheetOpened,
						subsheetData: agendaSheetOpened ? agendaSubsheetData : false,
						drilldown: this.props.agenda.drilldown,
						hierarchy: this.props.agenda.hierarchy,
						getAgendaData: this.props.getAgendaData,
						agendaViewLoaded: this.props.loaded.agendaViewData,
						agendaViewError: this.props.loadingErrors.agendaViewData }));

			} }]);return _class;}(_react2.default.Component));



	/*
	                                                      * 2. AgendaList
	                                                      */var
	AgendaList = function (_React$Component2) {_inherits(AgendaList, _React$Component2);function AgendaList() {_classCallCheck(this, AgendaList);return _possibleConstructorReturn(this, (AgendaList.__proto__ || Object.getPrototypeOf(AgendaList)).apply(this, arguments));}_createClass(AgendaList, [{ key: 'filterData', value: function filterData(

			hierarchyIds) {
				this.props.getAgendaData(hierarchyIds);
			} }, { key: 'renderAgendaList', value: function renderAgendaList()

			{var _props =


				this.props,data = _props.data,agendaViewLoaded = _props.agendaViewLoaded,agendaViewError = _props.agendaViewError;

				if (agendaViewLoaded && agendaViewError) {
					return _react2.default.createElement(_errorMessage2.default, { message: agendaViewError });
				} else if (data) {
					return data.agendaByMonth.map(
					function (item, i) {return (
							_react2.default.createElement('div', {
									className: 'agenda',
									key: i },
								_react2.default.createElement('h1', { className: 'agenda-header' }, item.header),

								item.agendas.length &&

								item.agendas.map(
								function (row, j) {return (
										_react2.default.createElement(AgendaRow, {
											data: row,
											key: j }));})));});




				}
			} }, { key: 'render', value: function render()

			{var _props2 =


				this.props,subsheet = _props2.subsheet,subsheetData = _props2.subsheetData;
				return (
					_react2.default.createElement('div', { className: 'agenda-container' },


						!subsheet &&

						_react2.default.createElement('div', { className: 'agenda-filters-wrapper' },
							_react2.default.createElement(_filtersAgenda2.default, { drilldown: this.props.drilldown,
								hierarchy: this.props.hierarchy,
								filterData: this.filterData.bind(this),
								view: 'Agenda' })),



						this.renderAgendaList(),

						_react2.default.createElement(_reactAddonsCssTransitionGroup2.default, {
								transitionName: 'sheet',
								transitionEnterTimeout: 500,
								transitionLeaveTimeout: 500,
								transitionAppear: false },

							subsheet &&

							_react2.default.createElement(AgendaSubSheet, {
								data: subsheetData,
								key: 'AgendaSubSheet' }))));




			} }]);return AgendaList;}(_react2.default.Component);


	/*
	                                                         * 3. AgendaRow
	                                                         */
	var AgendaRow = (0, _utils.connectAndMap)(null, { openAgendaSubSheet: _agendaActionsReducers.openAgendaSubSheet })(function (_React$Component3) {_inherits(_class2, _React$Component3);

		function _class2(props) {_classCallCheck(this, _class2);return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this,
			props));
		}_createClass(_class2, [{ key: 'toggleAgenda', value: function toggleAgenda()
			{
				window.scrollTo(0, 0);
				this.props.openAgendaSubSheet(this.props.data);
				(0, _webTrack2.default)(this.props.data.milestoneId);
			} }, { key: 'render', value: function render()
			{var _this4 = this;var

				data =
				this.props.data;
				var startMoment = (0, _momentTimezone2.default)(data.startDate, 'MM-DD-YYYY');
				var endMoment = (0, _momentTimezone2.default)(data.endDate, 'MM-DD-YYYY');
				return (
					_react2.default.createElement('div', {
							className: 'agenda-row',
							onClick:
							function onClick() {
								_this4.toggleAgenda();
							} },

						_react2.default.createElement('div', { className: 'agenda-row-dates agenda-row-dates-before' },
							_react2.default.createElement('div', { className: 'agenda-row-dates-month' },

								startMoment.format('MMMM') === endMoment.format('MMMM') ?
								startMoment.format('MMM') :
								startMoment.format('MMM') + ' - ' + endMoment.format('MMM')),


							_react2.default.createElement('div', { className: 'agenda-row-dates-week-of' },

								startMoment.format('D') + '-' + endMoment.format('D')),



							_react2.default.createElement('div', { className: 'icon agenda-row-clipboard-icon' },
								_react2.default.createElement('i', { className: 'vz vz-clipboard' })),


							_react2.default.createElement(_icons2.default, { name: 'right-arrow', className: 'agenda-row-right-arrow-mobile' })),

						_react2.default.createElement('div', { className: 'agenda-row-description' },
							_react2.default.createElement('div', { className: 'new-flag' },

								data.newAgenda === true ? _react2.default.createElement('span', null, 'New!') : ''),


							_react2.default.createElement('div', { className: 'description-text' },
								data.description)),


						_react2.default.createElement('div', null,
							_react2.default.createElement('div', { className: 'agenda-row-summary', dangerouslySetInnerHTML: { __html: data.summary } }),
							_react2.default.createElement(_icons2.default, { name: 'right-arrow', className: 'agenda-row-right-arrow' }))));



			} }]);return _class2;}(_react2.default.Component));



	/*
	                                                       * 4. AgendaSubSheet
	                                                       */
	var AgendaSubSheet = (0, _utils.connectAndMap)(null, { closeAgendaSubSheet: _agendaActionsReducers.closeAgendaSubSheet })(function (_React$Component4) {_inherits(AgendaSubSheet, _React$Component4);

		function AgendaSubSheet(props) {_classCallCheck(this, AgendaSubSheet);return _possibleConstructorReturn(this, (AgendaSubSheet.__proto__ || Object.getPrototypeOf(AgendaSubSheet)).call(this,
			props));
		}_createClass(AgendaSubSheet, [{ key: 'toggleAgenda', value: function toggleAgenda()
			{
				this.props.closeAgendaSubSheet();
			} }, { key: 'render', value: function render()
			{var

				data =
				this.props.data;

				var startMoment = (0, _momentTimezone2.default)(data.startDate, 'MM-DD-YYYY');
				var endMoment = (0, _momentTimezone2.default)(data.endDate, 'MM-DD-YYYY');
				return (
					_react2.default.createElement('div', { className: 'agenda-details' },
						_react2.default.createElement('div', { className: 'agenda-details-back-wrap', onClick: this.toggleAgenda.bind(this) },
							_react2.default.createElement(_icons2.default, { name: 'right-arrow', className: 'agenda-details-back-arrow' }),
							_react2.default.createElement('div', { className: 'agenda-details-back' }, _appLang.AGENDA_VIEW.BACK_TO_AGENDA)),

						_react2.default.createElement('div', { className: 'agenda-details-wrap' },
							_react2.default.createElement('div', { className: 'agenda-details-date' },

								startMoment.format('MMMM') === endMoment.format('MMMM') ?
								startMoment.format('MMMM D') + ' - ' + endMoment.format('D') :
								startMoment.format('MMMM D') + ' - ' + endMoment.format('MMMM D')),


							_react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: data.detail }, className: 'agenda-details-content' }),
							_react2.default.createElement('div', { className: 'agenda-details-link' },

								data.agendaLink && data.agendaLink.length ?

								_react2.default.createElement(AgendaLinkList, { data: data.agendaLink }) :

								''))));





			} }]);return AgendaSubSheet;}(_react2.default.Component));



	/*
	                                                              * 5. AgendaLinkList
	                                                              */var
	AgendaLinkList = function (_React$Component5) {_inherits(AgendaLinkList, _React$Component5);function AgendaLinkList() {_classCallCheck(this, AgendaLinkList);return _possibleConstructorReturn(this, (AgendaLinkList.__proto__ || Object.getPrototypeOf(AgendaLinkList)).apply(this, arguments));}_createClass(AgendaLinkList, [{ key: 'agendaLink', value: function agendaLink(

			agenda, event) {
				event.preventDefault();
				(0, _webTrack2.default)(agenda.milestoneId);
				window.open(agenda.linkUrl, '_blank');
			} }, { key: 'render', value: function render()
			{var _this7 = this;var


				data =
				this.props.data;

				return (

					_react2.default.createElement('ul', null,



						function () {
							if (data && data.length) {
								var agendaMapList = [];
								data.map(
								function (item, index) {
									agendaMapList.push(
									_react2.default.createElement('li', { key: index },
										_react2.default.createElement('a', { href: item.linkUrl, onClick: _this7.agendaLink.bind(_this7, item) }, item.linkText)));


								});

								return agendaMapList;
							} else {
								return '';
							}
						}()));








			} }]);return AgendaLinkList;}(_react2.default.Component);exports.default =



	Agenda;

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*\n\tThis is a mixin which allows an element to have a fixed aspect ratio, but allows the element to NOT have to be floated/etc - the element can stay inside the normal document flow.  It's based on a common workaround which inserts an invisible padding \"before\" meta-element which gives it the desired size (and is floated), and then a subsequent 'clearfix' \"after\" element which makes sure that the bottom of this container stretches far enough to include the entirety of the floated element.\n\n\tTo use this, you'll need to have at least 3 nested divs; they don't need any special classes, but they do need to be the first elements inside their parents.  You apply the mixin to the topmost div, you leave the second div empty, and you put all of your content inside the third div.\n\n\tExpected usage:\n\n\t<div class=\"my-container\">  <-- mixin applied here, on this topmost div\n\t\t<div>\n\t\t\t<div class=\"interior\">\n\t\t\t\t<-- content goes in this div\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\tThen in your scss file:\n\t.my-container {\n\t\t@include aspect-ratio(4.0,3.0,100%);\n\n\t\t.interior {\n\t\t\t//whatever you want\n\t\t}\n\t}\n*/\n/**\n * This is heavily borrowed from how Twitter Bootstrap 4 handles breakpoints.\n *\n * https://github.com/twbs/bootstrap/blob/807a837afe1c5ee2ac5f962658a5741673c04231/scss/mixins/_breakpoints.scss\n */\n/**\n * Finds the next breakpoint up or returns null.\n * @param\t {string} $name\t\t\t\t\t\t\t\tCurrent breakpoint\n * @param\t {list} [$breakpointNames]\t\t\t\t\tAll breakpoints. Defaults to $appBreakpoints names.\n * @return {string|null}\t\t\t\t\t\t\t\tReturns name of next breakpoint or null.\n */\n/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*------------------------------------------------------------------------------\n    Agenda List                                                               */\n#agenda {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column; }\n  #agenda .container {\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    max-width: 100%; }\n  #agenda .sheet-header {\n    margin: 0 auto;\n    max-width: 70rem; }\n    #agenda .sheet-header h2 {\n      padding-left: 1.5rem; }\n\n.agenda-container {\n  height: 38rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n  margin-right: 3rem; }\n\n.agenda {\n  width: 100%;\n  padding: 0;\n  background-color: white;\n  border-bottom: 1px solid #ccc; }\n  .agenda:nth-child(even) {\n    background: #f6f6f6; }\n  .agenda .agenda-header {\n    display: block;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #cd040b;\n    padding: 3rem 1.5rem 1.5rem 3rem;\n    width: 100%; }\n  .agenda .agenda-row-clipboard-icon {\n    width: 6.25rem;\n    height: 6.25rem;\n    fill: #cd040b;\n    position: absolute;\n    left: 9.25rem;\n    top: 2.5rem;\n    color: #cd040b; }\n    .agenda .agenda-row-clipboard-icon .cls-1 {\n      fill: #ec1c24; }\n    .agenda .agenda-row-clipboard-icon .cls-2 {\n      fill: #f6f6f6; }\n    .agenda .agenda-row-clipboard-icon .cls-3 {\n      fill: #fff; }\n    .agenda .agenda-row-clipboard-icon .cls-4 {\n      fill: none;\n      stroke: #e9e9ea; }\n    .agenda .agenda-row-clipboard-icon .cls-4, .agenda .agenda-row-clipboard-icon .cls-6 {\n      stroke-miterlimit: 10; }\n    .agenda .agenda-row-clipboard-icon .cls-5 {\n      fill: #d5d7d8; }\n    .agenda .agenda-row-clipboard-icon .cls-6 {\n      fill: #8acdab;\n      stroke: #fff; }\n    .agenda .agenda-row-clipboard-icon .vz-clipboard {\n      font-size: 5rem;\n      line-height: 3rem; }\n    @media (max-width: 991px) {\n      .agenda .agenda-row-clipboard-icon {\n        display: none; } }\n  .agenda .agenda-row {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    position: relative;\n    clear: both;\n    padding: 1.5rem 3rem;\n    min-height: 9.375rem;\n    min-height: 9.375rem; }\n    @media (max-width: 767px) {\n      .agenda .agenda-row {\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: column;\n                flex-direction: column; } }\n    .agenda .agenda-row:hover {\n      cursor: pointer; }\n      .agenda .agenda-row:hover .agenda-row-clipboard-icon,\n      .agenda .agenda-row:hover .agenda-row-right-arrow,\n      .agenda .agenda-row:hover .agenda-row-right-arrow-mobile {\n        fill: #a80309; }\n    .agenda .agenda-row:active {\n      cursor: pointer; }\n      .agenda .agenda-row:active .agenda-row-clipboard-icon,\n      .agenda .agenda-row:active .agenda-row-right-arrow,\n      .agenda .agenda-row:active .agenda-row-right-arrow-mobile {\n        fill: #740206; }\n    .agenda .agenda-row:first-of-type .agenda-row-dates-before:before {\n      display: none; }\n  .agenda .agenda-row-dates {\n    font-size: 1.375rem;\n    font-weight: 500;\n    width: 20%; }\n    @media (max-width: 767px) {\n      .agenda .agenda-row-dates {\n        width: 100%; } }\n  .agenda .agenda-row-dates-before:before {\n    position: absolute;\n    left: 0;\n    content: \" \";\n    display: block;\n    border-bottom: 1px solid #ccc;\n    width: 130vw;\n    margin-left: -30vw;\n    margin-top: -1.5rem; }\n  .agenda .agenda-row-dates-month {\n    font-size: 0.875rem;\n    font-size: 0.875rem;\n    font-weight: bold;\n    color: black;\n    text-transform: uppercase; }\n  .agenda .agenda-row-dates-week-of {\n    font-size: 1.875rem;\n    font-weight: bold;\n    color: black; }\n  .agenda .agenda-row-description {\n    line-height: 1.3;\n    font-size: 1rem;\n    color: black;\n    width: 30%;\n    padding-left: 3rem; }\n    @media (max-width: 767px) {\n      .agenda .agenda-row-description {\n        width: 100%;\n        padding: 1.125rem 0 1.125rem 0; } }\n  .agenda .agenda-row-description .new-flag {\n    color: #cd040b;\n    font-size: 0.85rem;\n    font-weight: 700; }\n  .agenda .agenda-row-summary {\n    line-height: 1.35;\n    font-size: 0.875rem;\n    color: black;\n    width: 100%;\n    padding-left: 2rem; }\n    @media (max-width: 991px) {\n      .agenda .agenda-row-summary {\n        padding-left: 1.5rem; } }\n    @media (max-width: 767px) {\n      .agenda .agenda-row-summary {\n        padding-left: 0px; } }\n    .agenda .agenda-row-summary h1, .agenda .agenda-row-summary h2, .agenda .agenda-row-summary h3, .agenda .agenda-row-summary h4, .agenda .agenda-row-summary h5, .agenda .agenda-row-summary h6, .agenda .agenda-row-summary i, .agenda .agenda-row-summary b, .agenda .agenda-row-summary ul, .agenda .agenda-row-summary ol, .agenda .agenda-row-summary li, .agenda .agenda-row-summary p, .agenda .agenda-row-summary span, .agenda .agenda-row-summary u, .agenda .agenda-row-summary em {\n      line-height: 1.35;\n      font-size: 1rem;\n      color: black; }\n    .agenda .agenda-row-summary ul {\n      list-style: disc;\n      padding-left: 1.5625rem; }\n    .agenda .agenda-row-summary ol {\n      list-style: decimal;\n      padding-left: 1.5625rem; }\n    .agenda .agenda-row-summary .agenda-topics {\n      list-style-type: disc; }\n      .agenda .agenda-row-summary .agenda-topics h1, .agenda .agenda-row-summary .agenda-topics h2, .agenda .agenda-row-summary .agenda-topics h3, .agenda .agenda-row-summary .agenda-topics h4, .agenda .agenda-row-summary .agenda-topics h5, .agenda .agenda-row-summary .agenda-topics h6, .agenda .agenda-row-summary .agenda-topics i, .agenda .agenda-row-summary .agenda-topics b, .agenda .agenda-row-summary .agenda-topics ul, .agenda .agenda-row-summary .agenda-topics ol, .agenda .agenda-row-summary .agenda-topics li, .agenda .agenda-row-summary .agenda-topics p, .agenda .agenda-row-summary .agenda-topics span, .agenda .agenda-row-summary .agenda-topics u {\n        line-height: 1.35;\n        font-size: 0.875rem;\n        color: black; }\n  .agenda .agenda-row-right-arrow {\n    position: absolute;\n    margin-top: auto;\n    margin-bottom: auto;\n    top: 0;\n    bottom: 0;\n    right: 1.125rem;\n    width: 1.875rem;\n    height: 1.875rem;\n    fill: #cd040b; }\n    @media (max-width: 767px) {\n      .agenda .agenda-row-right-arrow {\n        display: none; } }\n  .agenda .agenda-row-right-arrow-mobile {\n    display: none; }\n    @media (max-width: 767px) {\n      .agenda .agenda-row-right-arrow-mobile {\n        display: block;\n        position: absolute;\n        top: 2.5rem;\n        bottom: 0px;\n        left: 88vw;\n        width: 1.875rem;\n        height: 1.875rem;\n        fill: #cd040b; } }\n\n/*------------------------------------------------------------------------------\n    Agenda Details                                                            */\n#agendaSubsheet {\n  left: 0; }\n\n.agenda-details {\n  position: absolute;\n  top: 0;\n  left: 0%;\n  min-height: 38rem;\n  max-height: 38rem;\n  width: 100%;\n  background: white;\n  padding: 0 9rem 0 3.125rem;\n  overflow-y: scroll; }\n  .agenda-details .agenda-details-link li {\n    list-style: none; }\n\n.agenda-details-content {\n  padding: 1.125rem;\n  padding-left: 0px;\n  color: black;\n  font-size: 1rem; }\n  @media (max-width: 767px) {\n    .agenda-details-content {\n      padding-left: 1.125rem; } }\n  .agenda-details-content h1 {\n    display: block;\n    font-size: 1.375rem;\n    font-weight: bold;\n    color: black;\n    margin: 0 0 30px 0; }\n  .agenda-details-content h2 {\n    display: block;\n    font-size: 1.25rem;\n    font-weight: bold;\n    color: black; }\n  .agenda-details-content h3 {\n    display: block;\n    font-size: 1.125rem;\n    font-weight: bold;\n    color: black; }\n  .agenda-details-content p {\n    font-size: 1.125rem;\n    margin-bottom: 1.25rem;\n    color: black; }\n  .agenda-details-content ul {\n    list-style-type: disc;\n    font-size: 1rem;\n    margin: 0 0 1.25rem 4.375rem;\n    color: black; }\n  .agenda-details-content ol {\n    list-style-type: decimal;\n    font-size: 1rem;\n    margin: 0 0 1.25rem 4.375rem;\n    color: black; }\n  .agenda-details-content strong {\n    font-weight: bold;\n    color: black; }\n  .agenda-details-content em {\n    font-style: italic;\n    color: black; }\n\n.agenda-details-back {\n  font-size: 0.875rem;\n  font-weight: bold;\n  color: black;\n  float: left;\n  padding-left: 0.75rem; }\n\n.agenda-details-back-wrap {\n  padding-top: 2.625rem;\n  padding-bottom: 2.625rem; }\n  @media (max-width: 767px) {\n    .agenda-details-back-wrap {\n      padding-left: 1.125rem; } }\n  .agenda-details-back-wrap:hover {\n    cursor: pointer; }\n    .agenda-details-back-wrap:hover .agenda-details-back-arrow {\n      fill: #a80309; }\n  .agenda-details-back-wrap:active {\n    cursor: pointer; }\n    .agenda-details-back-wrap:active .agenda-details-back-arrow {\n      fill: #740206; }\n\n.agenda-details-back-arrow {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n  height: 1rem;\n  width: 1rem;\n  float: left;\n  fill: #cd040b; }\n\n.agenda-details-date {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #cd040b;\n  padding-bottom: 0.375rem; }\n  @media (max-width: 767px) {\n    .agenda-details-date {\n      padding-left: 1.125rem; } }\n\n.agenda-filters-wrapper {\n  margin: 0 3.125rem; }\n", ""]);

	// exports


/***/ },

/***/ 962:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(731);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./agenda.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./agenda.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=agenda.js.map