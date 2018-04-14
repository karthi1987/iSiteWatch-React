webpackJsonp([1,13],{

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
	                case 'big-arrow':Vector = _react2.default.createElement(BigArrow, null);break;
	                case 'mail':Vector = _react2.default.createElement(Mail, null);break;
	                case 'customer-support':Vector = _react2.default.createElement(CustomerSupport, null);break;
	                case 'calling':Vector = _react2.default.createElement(Calling, null);break;}


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



	var Mail = function Mail() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M-170.2,227.5c-0.8-0.4-1.2,0-2.3,0.3l-43.4,15.6c-0.6,0.2-2.1,0.6-3,0.6c-1,0-1.9-0.2-2.8-0.5l-43.7-15.7 c-1.1-0.3-1.6-0.6-2.3-0.3c-0.7,0.4-1.2,1.1-1.2,1.9V264c0,5.5,4.5,10,10,10h80c5.5,0,10-4.5,10-10v-34.6 C-169,228.6-169.5,227.9-170.2,227.5' }),


	            _react2.default.createElement('path', { d: 'M-174,208h-45h-45c-2.8,0-5,2.2-5,5v4.2c0,3.6,0.3,3.4,5.7,5.3c0.2,0.1,41,14.8,41,14.8c1.1,0.3,2.3,0.8,3.3,0.8 c1.1,0,2.3-0.5,3.3-0.8c0,0,40.8-14.8,41-14.8c5.4-1.9,5.7-1.7,5.7-5.3V213C-169,210.2-171.2,208-174,208' })));};





	var CustomerSupport = function CustomerSupport() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M6.3,29h3.7V16.5h0c2.6-8.3,9.8-13.8,19-13.8c9.2,0,16.4,5.5,19,13.9v10.9c-1.1,2.5-3.9,7.1-9.7,9.5 c-0.7-1-1.8-1.6-3.1-1.6c-2.1,0-3.8,1.7-3.8,3.8c0,2.1,1.7,3.8,3.8,3.8c2,0,3.6-1.5,3.8-3.4c6.5-2.5,9.8-7.6,11.3-10.6l1.4,0 c1.8,0,3.2-1.4,3.2-3.2v-6.2c0-1.8-1.4-3.2-3.2-3.2h-0.9C47.9,6.7,39.5,0,28.9,0C18.3,0,9.9,6.7,7.1,16.5H6.3 c-1.8,0-3.2,1.4-3.2,3.2v6.2C3.1,27.6,4.5,29,6.3,29z' }),



	            _react2.default.createElement('path', { d: 'M35.1,33.5c1,0,1.9,0.2,2.6,0.7c4.6-2.1,6.8-5.8,7.6-7.8v-9.7c-2.6-6.7-9-11.4-16.5-11.4 c-7.4,0-13.8,4.7-16.5,11.3v0.1V29v1.4c2.7,6.6,9,11.3,16.5,11.3c0.4,0,0.7,0,1.1,0c-0.4-0.8-0.6-1.6-0.6-2.5 C29.4,36,32,33.5,35.1,33.5z' }),


	            _react2.default.createElement('path', { d: 'M49.9,42.6l-6.1-1.6c-4,3.5-9.1,5.6-14.7,5.6c-5.6,0-10.8-2.1-14.7-5.6l-6.1,1.6c-6.5,1.8-8.6,4.5-8.1,8.1 L1.4,59h55.3l1.3-8.3C58.5,47.1,56.4,44.4,49.9,42.6z' })));};






	var Calling = function Calling() {return (
	        _react2.default.createElement('g', null,
	            _react2.default.createElement('path', { d: 'M-186.8,220.4c6.1,0,11-5.1,11-11.3s-4.9-11.3-11-11.3s-11,5.1-11,11.3C-197.8,215.4-192.9,220.4-186.8,220.4' }),
	            _react2.default.createElement('path', { d: 'M-174,220.9l-3.8-1c-2.5,2.2-5.6,3.5-9.1,3.5s-6.6-1.3-9.1-3.5l-3.8,1c-4,1.1-5.3,2.8-5,5l3,19.1c0.4,3,2.2,5,5,5h9.9l0,0 h9.8c2.8,0,4.6-2,5-5l3-19.1C-168.6,223.8-169.9,222.2-174,220.9' }),

	            _react2.default.createElement('path', { d: 'M-221.2,260.5c6.1,0,11-5.1,11-11.3s-4.9-11.3-11-11.3s-11,5.1-11,11.3C-232.2,255.4-227.2,260.5-221.2,260.5' }),
	            _react2.default.createElement('path', { d: 'M-208.3,261l-3.8-1c-2.4,2.2-5.6,3.5-9.1,3.5s-6.6-1.3-9.1-3.5l-3.8,1c-4,1.1-5.3,2.8-5,5l3,19.1c0.4,3,2.2,5,5,5h9.9l0,0 h9.8c2.8,0,4.6-2,5-5l3-19.1C-203,263.8-204.3,262.2-208.3,261' }),

	            _react2.default.createElement('path', { d: 'M-251,218.6c6.1,0,11-5.1,11-11.3s-4.9-11.3-11-11.3s-11,5.1-11,11.3C-262,213.6-257.1,218.6-251,218.6' }),
	            _react2.default.createElement('path', { d: 'M-238.1,219.1l-3.8-1c-2.4,2.2-5.6,3.5-9.1,3.5s-6.6-1.3-9.1-3.5l-3.8,1c-4,1.1-5.3,2.8-5,5l3,19.1c0.4,3,2.2,5,5,5h9.9 l0,0h9.9c2.8,0,4.6-2,5-5l3-19.1C-232.8,221.9-234.1,220.2-238.1,219.1' }),

	            _react2.default.createElement('g', null,
	                _react2.default.createElement('path', { d: 'M-242.8,275c-2.3-1.6-4.6-3.9-6.7-7l7-3.1l-19.5-14l-2.4,23.9l7.1-3.2c2.9,4.5,6.2,8,9.7,10.4c0.7,0.5,1.6,0.7,2.4,0.7 c1.3,0,2.7-0.7,3.5-1.8C-240.3,279-240.8,276.2-242.8,275z' }),

	                _react2.default.createElement('path', { d: 'M-200.5,208l-18-16l-1.6,7.7c-4.3,0-8.5,0.6-13.6,1.4c-2.3,0.4-3.9,2.6-3.5,4.9c0.3,2.1,2.1,3.6,4.2,3.6 c0.2,0,0.4,0,0.5-0.1c4.2-0.6,7.5-1.1,10.7-1.2l-1.5,7.3L-200.5,208z' }),

	                _react2.default.createElement('path', { d: 'M-178.9,253.2c-2.2-0.9-4.7,0.1-5.6,2.3c-1.5,3.6-3.3,7.1-5.5,10.3l-5.2-5.5l-6.8,23l23.3-5.6l-5.3-5.6 c3-4.1,5.5-8.5,7.4-13.3C-175.7,256.7-176.7,254.1-178.9,253.2z' }))));};

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	__webpack_require__(50);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

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

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".error-message-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 1.5rem;\n  background-color: #ffcfd1;\n  margin-bottom: 1rem;\n  margin-left: 3.125rem; }\n  .error-message-box .message {\n    margin-left: remCalc(8px);\n    line-height: 1;\n    margin-bottom: 0;\n    font-weight: 700;\n    font-size: remCalc(14px); }\n  .error-message-box i {\n    padding-right: 1em;\n    font-size: 2em; }\n\n.Home_cell .error-message-box {\n  margin: 1rem; }\n\n.Home_cell--scorecardmodule .error-message-box,\n.Home_cell--leaderboardmodule .error-message-box {\n  margin: 0px; }\n\n.Home_cell--leaderboardmodule .error-message-box {\n  margin-top: -webkit-calc(1rem - 0.5625rem);\n  margin-top: calc(1rem - 0.5625rem); }\n", ""]);

	// exports


/***/ },

/***/ 50:
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

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(63);
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

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports._dropdown = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	__webpack_require__(59);
	var _icons = __webpack_require__(16);var _icons2 = _interopRequireDefault(_icons);
	var _webTrack = __webpack_require__(33);var _webTrack2 = _interopRequireDefault(_webTrack);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

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

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".dropdown-container {\n  border-bottom: 1px solid #ccc;\n  cursor: pointer;\n  font-size: .75rem;\n  height: 1.75rem;\n  position: relative;\n  z-index: 100; }\n  .dropdown-container .icon-check {\n    fill: #cd040b;\n    height: 18px;\n    margin-left: 15px;\n    margin-right: 10px;\n    width: 18px; }\n  .dropdown-container span {\n    font-weight: bold; }\n\n.dropdown-list {\n  background: white;\n  -webkit-box-shadow: 0 12px 18px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 12px 18px rgba(0, 0, 0, 0.2);\n  display: block;\n  position: absolute;\n  top: 0;\n  min-width: 100%; }\n  .dropdown-list ul {\n    margin: 0;\n    max-height: 41rem;\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding: 0; }\n    .dropdown-list ul li span {\n      color: #666;\n      display: block;\n      padding: 10px 15px 10px 43px;\n      white-space: nowrap; }\n    .dropdown-list ul li li span {\n      padding-left: 79px; }\n    .dropdown-list ul li li li span {\n      padding-left: 99px; }\n    .dropdown-list ul span:hover {\n      background-color: #f5f5f5; }\n\n.dropdown-selected-active-label {\n  white-space: nowrap; }\n\n.dropdown-selected-active {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex; }\n  .dropdown-selected-active .dropdown-selected-active-label {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dropdown-selected-active .icon {\n    -webkit-flex-basis: auto;\n            flex-basis: auto; }\n\n.dropdown-selected {\n  border-bottom: 1px solid #e6e6e6;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 10px 0; }\n  .dropdown-selected:hover {\n    background-color: #ffffff; }\n  .dropdown-selected .icon {\n    -webkit-flex-basis: auto;\n            flex-basis: auto; }\n  .dropdown-selected .dropdown-selected-label {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    padding-right: 15px;\n    white-space: nowrap; }\n\n.icon-down-arrow {\n  height: 0.55rem;\n  width: 0.55rem;\n  position: relative;\n  margin-top: 6px;\n  float: right;\n  fill: #d0151b; }\n", ""]);

	// exports


/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports._tabs = undefined;var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	__webpack_require__(226);
	var _reactRouter = __webpack_require__(32);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

	var _tabs = exports._tabs = function _tabs(props) {

		var renderTabState = function renderTabState(index) {
			if (index === props._index) {
				return 'active';
			}
			return '';
		};

		var renderRoute = function renderRoute(item, index) {
			var renderLink = function renderLink(route) {
				if (!route) {
					return item.name;
				}
				return (
					_react2.default.createElement(_reactRouter.Link, { to: item.route },
						item.name));


			};
			return (
				_react2.default.createElement('li', {
						key: index,
						className: 'tab ' + renderTabState(index),
						onClick: function onClick(event) {props._callback(event, index);} },
					renderLink(item.route)));


		};

		return (
			_react2.default.createElement('ul', { className: 'tab-container' },

				props._state.map(function (item, index) {
					return renderRoute(item, index);
				})));



	};

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*\n\tThis is a mixin which allows an element to have a fixed aspect ratio, but allows the element to NOT have to be floated/etc - the element can stay inside the normal document flow.  It's based on a common workaround which inserts an invisible padding \"before\" meta-element which gives it the desired size (and is floated), and then a subsequent 'clearfix' \"after\" element which makes sure that the bottom of this container stretches far enough to include the entirety of the floated element.\n\n\tTo use this, you'll need to have at least 3 nested divs; they don't need any special classes, but they do need to be the first elements inside their parents.  You apply the mixin to the topmost div, you leave the second div empty, and you put all of your content inside the third div.\n\n\tExpected usage:\n\n\t<div class=\"my-container\">  <-- mixin applied here, on this topmost div\n\t\t<div>\n\t\t\t<div class=\"interior\">\n\t\t\t\t<-- content goes in this div\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\tThen in your scss file:\n\t.my-container {\n\t\t@include aspect-ratio(4.0,3.0,100%);\n\n\t\t.interior {\n\t\t\t//whatever you want\n\t\t}\n\t}\n*/\n/**\n * This is heavily borrowed from how Twitter Bootstrap 4 handles breakpoints.\n *\n * https://github.com/twbs/bootstrap/blob/807a837afe1c5ee2ac5f962658a5741673c04231/scss/mixins/_breakpoints.scss\n */\n/**\n * Finds the next breakpoint up or returns null.\n * @param\t {string} $name\t\t\t\t\t\t\t\tCurrent breakpoint\n * @param\t {list} [$breakpointNames]\t\t\t\t\tAll breakpoints. Defaults to $appBreakpoints names.\n * @return {string|null}\t\t\t\t\t\t\t\tReturns name of next breakpoint or null.\n */\n.tab-container {\n  border-bottom: 1px solid #d2d3d4;\n  display: inline-block;\n  font-size: .75rem;\n  height: 1.75rem;\n  margin: 0;\n  padding: 0; }\n  .tab-container a {\n    color: #222; }\n  .tab-container li {\n    display: inline-block;\n    float: left;\n    height: 1.75rem; }\n\n.tab {\n  font-size: .75rem;\n  font-weight: 700;\n  margin-right: 1rem;\n  border-bottom: 3px solid transparent; }\n  .tab:last-child {\n    margin: 0; }\n  .tab:hover {\n    cursor: pointer; }\n  .tab.active {\n    border-bottom: 3px solid #CD040B; }\n", ""]);

	// exports


/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(191);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./tabs.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./tabs.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 471:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkE2QzVBNUMwQzNFMTFFNEE5QTJGN0UzNTRDQUY2MUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkE2QzVBNUQwQzNFMTFFNEE5QTJGN0UzNTRDQUY2MUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QTZDNUE1QTBDM0UxMUU0QTlBMkY3RTM1NENBRjYxRiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QTZDNUE1QjBDM0UxMUU0QTlBMkY3RTM1NENBRjYxRiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PidhP10AAAHnSURBVHja7JlNKERRFMdnfIx8ZOOrUUqxYqyIQrJRLLCxYOVjQ8pGSkgshJWdlIXYURZCSRRhSLExM1spZBIrUkMa/1Nn6jXNzHs1i3tnnFu/7n33nqn3m3fPvff17MFg0JYMJcWWJEVEREREREREREREREREROT/iKTF82OP12clbAiUg7GwfjsYBHfgMtRZ5arU7onQjc6BFZAVYbyex45Bk65TKx2sgakYMTfgGmSCTZCnm0gO2AV9JnEB0AFegJOfnjYiReAEtEYZrwDroIGvX8E0twdAsSoR+hcXwTyoBW5QEyN+BPSCHVDCfST2ABygR5UI5cA4mABnoMwknpL7C+SDWe775alIpUWHqZVhIYaW2iVud/GiQOWUa1cibYgHXOcaptcz14WJvrM7EvGI0sb1B3jkttOwiikXCViIoRwY5fY2+OF2aDn2qhKh5fYWnINmcG8SP8zHlXcww32poJPbR0oOjSiNYdf0z+6D6ijxyyAbrBqmFe0rpeAbbOmSI35+ModRxn18426+LjAcTWhjfNIp2T9BO9iwsO/scaL7TQ6YylYtSuJ+sBAjhqZfHU+pbvCm7MXKpNAXpEnOhUhHlytOfg+4iPvlR75YiYiIiIiIiIiIiIiIiIiIiIii8ifAADStUzR+kRZUAAAAAElFTkSuQmCC"

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();__webpack_require__(971);




	var _webTrack = __webpack_require__(33);var _webTrack2 = _interopRequireDefault(_webTrack);
	var _webTrackIds = __webpack_require__(117);var _webTrackIds2 = _interopRequireDefault(_webTrackIds);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var React = __webpack_require__(4);var classNames = __webpack_require__(28);


	//------------------------------ Button Classes ------------------------------//
	var
	PlayPauseButton = function (_React$Component) {_inherits(PlayPauseButton, _React$Component);function PlayPauseButton() {_classCallCheck(this, PlayPauseButton);return _possibleConstructorReturn(this, (PlayPauseButton.__proto__ || Object.getPrototypeOf(PlayPauseButton)).apply(this, arguments));}_createClass(PlayPauseButton, [{ key: 'render', value: function render()

			{
				var classes = classNames({
					'play-pause-button': true,
					'play': !this.props.isPlaying,
					'pause': this.props.isPlaying });


				return (
					React.createElement('div', { className: classes, title: 'Play/Pause', onClick: this.props.doAction }));

			} }]);return PlayPauseButton;}(React.Component);var


	TimeDisplay = function (_React$Component2) {_inherits(TimeDisplay, _React$Component2);function TimeDisplay() {_classCallCheck(this, TimeDisplay);return _possibleConstructorReturn(this, (TimeDisplay.__proto__ || Object.getPrototypeOf(TimeDisplay)).apply(this, arguments));}_createClass(TimeDisplay, [{ key: 'stringToSeconds', value: function stringToSeconds(
			str) {
				var p = str.split(':'),
				s = 0,m = 1;

				while (p.length > 0) {
					s += m * parseInt(p.pop(), 10);
					m *= 60;
				}

				return s;
			} }, { key: 'secondsToTime', value: function secondsToTime(

			secs)
			{
				secs = Math.round(secs);
				var hours = Math.floor(secs / (60 * 60));

				var divisor_for_minutes = secs % (60 * 60);
				var minutes = Math.floor(divisor_for_minutes / 60);

				var divisor_for_seconds = divisor_for_minutes % 60;
				var seconds = Math.ceil(divisor_for_seconds);

				if (hours > 0) {
					return hours + ':' + this.padInteger(minutes, 2) + ':' + this.padInteger(seconds, 2);
				} else {
					return minutes + ':' + this.padInteger(seconds, 2);
				}
			} }, { key: 'doTimeFormatting', value: function doTimeFormatting(

			secs, expectedDuration) {
				if (secs) {
					return this.secondsToTime(secs);
				} else {
					if (expectedDuration && this.stringToSeconds(expectedDuration)) {
						return this.secondsToTime(this.stringToSeconds(expectedDuration));
					} else {
						return "0:00";
					}
				}
			} }, { key: 'padInteger', value: function padInteger(

			num, size) {
				if (num.toString().length >= size) {return num;}
				return (Math.pow(10, size) + Math.floor(num)).toString().substring(1);
			} }, { key: 'render', value: function render()

			{
				return (
					React.createElement('div', { className: 'timeDisplay', title: 'Time' },
						React.createElement('p', null,
							React.createElement('span', { className: 'currentTime' }, this.doTimeFormatting(this.props.currentTime)),
							React.createElement('span', null, ' / '),
							React.createElement('span', { className: 'totalTime' }, this.doTimeFormatting(this.props.duration, this.props.expectedDuration)))));



			} }]);return TimeDisplay;}(React.Component);var




	ProgressBar = function (_React$Component3) {_inherits(ProgressBar, _React$Component3);
		function ProgressBar(props) {_classCallCheck(this, ProgressBar);var _this3 = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this,
			props));_this3.


















			setPlaybackTime = function (e) {
				if (_this3.state.isCurrentlyChangingValue) {
					_this3._setPlaybackTime(e);
				}
			};_this3.

			_setPlaybackTime = function (e) {
				var bounds = _this3.refs.progressBar.getBoundingClientRect();
				var normalized_val = e.clientX - bounds.left;
				var proportion = Math.min(Math.max(normalized_val / bounds.width, 0.0), 1.0);

				_this3.props.onUpdate(proportion);
			};_this3.




			mousedownListener = function (e) {
				_this3.setState({ isCurrentlyChangingValue: true });
				_this3._setPlaybackTime(e);
				_this3.captureMouseEvents(e);
				e.stopPropagation();
			};_this3.

			mousemoveListener = function (e) {
				_this3.setPlaybackTime(e);
				e.stopPropagation();
				// do whatever is needed while the user is moving the cursor around
			};_this3.

			mouseupListener = function (e) {
				var restoreGlobalMouseEvents = function restoreGlobalMouseEvents() {
					document.body.style['pointer-events'] = 'auto';
				};

				restoreGlobalMouseEvents();
				document.removeEventListener('mouseup', _this3.mouseupListener, { capture: true });
				document.removeEventListener('mousemove', _this3.mousemoveListener, { capture: true });
				e.stopPropagation();

				_this3.setState({ isCurrentlyChangingValue: false });
			};_this3.

			captureMouseEvents = function (e) {
				var preventGlobalMouseEvents = function preventGlobalMouseEvents() {
					document.body.style['pointer-events'] = 'none';
				};

				preventGlobalMouseEvents();
				document.addEventListener('mouseup', _this3.mouseupListener, { capture: true });
				document.addEventListener('mousemove', _this3.mousemoveListener, { capture: true });
				e.preventDefault();
				e.stopPropagation();
			};_this3.state = { isCurrentlyChangingValue: false };return _this3;}_createClass(ProgressBar, [{ key: 'componentDidMount', value: function componentDidMount() {} }, { key: 'normalizedProgress', value: function normalizedProgress() {var duration = this.props.duration ? this.props.duration : 0.0000001;return 100.0 * (this.props.currentTime / duration);} }, { key: 'filledStyle', value: function filledStyle() {return { width: this.normalizedProgress() + '%' };} }, { key: 'bufferedStyle', value: function bufferedStyle() {return { width: 100.0 * this.props.bufferedFraction + '%' };} }, { key: 'sliderStyle', value: function sliderStyle() {return { left: 'calc(' + this.normalizedProgress() + '% - 8px)' };} }, { key: 'render', value: function render()


			{
				return (
					React.createElement('div', { className: 'progress-bar-wrapper' },
						React.createElement('div', { className: 'video-progress-bar-back', ref: 'progressBar',
								onMouseDown: this.mousedownListener,
								onMouseMove: this.mousemoveListener },

							React.createElement('div', { className: 'video-progress-bar-buffered', ref: 'buffer', style: this.bufferedStyle() }),
							React.createElement('div', { className: 'video-progress-bar-filled', ref: 'fill', style: this.filledStyle() }),
							React.createElement('div', { className: 'video-progress-bar-slider', ref: 'slider', style: this.sliderStyle() }))));



			} }]);return ProgressBar;}(React.Component);var



	VolumeButton = function (_React$Component4) {_inherits(VolumeButton, _React$Component4);
		function VolumeButton(props) {_classCallCheck(this, VolumeButton);var _this4 = _possibleConstructorReturn(this, (VolumeButton.__proto__ || Object.getPrototypeOf(VolumeButton)).call(this,
			props));_this4.








			setVolumeLevel = function (e) {
				if (_this4.state.isCurrentlyChangingValue) {
					_this4._setVolumeLevel(e);
				}
			};_this4.

			_setVolumeLevel = function (e) {
				var bounds = _this4.refs.volumeBar.getBoundingClientRect();
				var normalized_val = e.clientY - bounds.top;
				var proportion = 1.0 - normalized_val / bounds.height;

				_this4.props.onUpdate(proportion);
			};_this4.



			mousedownListener = function (e) {
				_this4.setState({ isCurrentlyChangingValue: true });
				_this4._setVolumeLevel(e);
				_this4.captureMouseEvents(e);
				e.stopPropagation();
			};_this4.

			mousemoveListener = function (e) {
				_this4.setVolumeLevel(e);
				e.stopPropagation();
				// do whatever is needed while the user is moving the cursor around
			};_this4.

			mouseupListener = function (e) {
				var restoreGlobalMouseEvents = function restoreGlobalMouseEvents() {
					document.body.style['pointer-events'] = 'auto';
				};

				restoreGlobalMouseEvents();
				document.removeEventListener('mouseup', _this4.mouseupListener, { capture: true });
				document.removeEventListener('mousemove', _this4.mousemoveListener, { capture: true });
				e.stopPropagation();

				_this4.setState({ isCurrentlyChangingValue: false });
			};_this4.

			captureMouseEvents = function (e) {
				var preventGlobalMouseEvents = function preventGlobalMouseEvents() {
					document.body.style['pointer-events'] = 'none';
				};

				preventGlobalMouseEvents();
				document.addEventListener('mouseup', _this4.mouseupListener, { capture: true });
				document.addEventListener('mousemove', _this4.mousemoveListener, { capture: true });
				e.preventDefault();
				e.stopPropagation();
			};_this4.




			openVolumeSlider = function () {
				_this4.setState({ isVolumeButtonOpen: !_this4.state.isVolumeButtonOpen });
			};_this4.

			filledStyle = function () {return { height: 100 * _this4.props.volumeLevel + '%' };};_this4.
			sliderStyle = function () {return { bottom: 'calc(' + 100 * _this4.props.volumeLevel + '% - 8px)' };};_this4.state = { isVolumeButtonOpen: false, isCurrentlyChangingValue: false };return _this4;}_createClass(VolumeButton, [{ key: 'render', value: function render()


			{
				var sliderClasses = classNames({
					'volume-bar-container': true,
					'active': this.state.isVolumeButtonOpen });


				return (
					React.createElement('div', { className: 'volume-button-wrapper' },
						React.createElement('div', { className: 'volume-button', title: 'Volume', onClick: this.openVolumeSlider }),
						React.createElement('div', { className: sliderClasses },
							React.createElement('div', { className: 'volume-bar-back', ref: 'volumeBar',
									onMouseDown: this.mousedownListener,
									onMouseMove: this.mousemoveListener },

								React.createElement('div', { className: 'volume-bar-filled', style: this.filledStyle() }),
								React.createElement('div', { className: 'volume-bar-slider', style: this.sliderStyle() })))));




			} }]);return VolumeButton;}(React.Component);var


	CenteredPlayerIcon = function (_React$Component5) {_inherits(CenteredPlayerIcon, _React$Component5);
		function CenteredPlayerIcon(props) {_classCallCheck(this, CenteredPlayerIcon);var _this5 = _possibleConstructorReturn(this, (CenteredPlayerIcon.__proto__ || Object.getPrototypeOf(CenteredPlayerIcon)).call(this,
			props));

			_this5.triggerAction = _this5.triggerAction.bind(_this5);return _this5;
		}_createClass(CenteredPlayerIcon, [{ key: 'triggerAction', value: function triggerAction()

			{
				this.props.doAction();
			} }, { key: 'render', value: function render()

			{
				var classes = classNames({
					'video-player-icon': true,
					'active': this.props.isPlaying });


				return (
					React.createElement('div', { onClick: this.triggerAction, className: 'video-player-icon-wrapper' },
						React.createElement('div', { className: classes }),
						this.props.children));


			} }]);return CenteredPlayerIcon;}(React.Component);





	//------------------------------ Primary Container ------------------------------//
	var
	VideoPlayer = function (_React$Component6) {_inherits(VideoPlayer, _React$Component6);
		function VideoPlayer(props) {_classCallCheck(this, VideoPlayer);var _this6 = _possibleConstructorReturn(this, (VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).call(this,
			props));_this6.
















































































































			toggleCenteredIcon = function () {
				_this6.setPlayback(!_this6.state.isPlaying);
			};_this6.
			togglePlayback = function () {
				(0, _webTrack2.default)(_webTrackIds2.default.VIDEO_PLAY_PAUSE);
				_this6.setPlayback(!_this6.state.isPlaying);
			};_this6.

			setPlayback = function (isActive) {
				_this6.setState({ isPlaying: isActive });
			};_this6.

			resetPlayback = function () {
				_this6.setPlayback(false);
				_this6.setProgress(0.0);
			};_this6.

			setProgress = function (value) {
				var newProgress = _this6.state.duration * value;

				if (_this6.refs.videoTag && Number.isFinite(newProgress) && newProgress !== null) {
					if (_this6.refs.videoTag.canPlayThrough) {
						_this6.refs.videoTag.currentTime = newProgress;
					}

					_this6.setState({
						currentTime: newProgress });

				}
			};_this6.

			setVolume = function (value) {
				_this6.refs.videoTag.volume = value;

				_this6.setState({
					volumeLevel: value });

			};_this6.

			goFullScreen = function (event) {

				var doFullScreen = function doFullScreen(element) {

					if (!element) {
						return false;
					}
					if (element.requestFullscreen) {
						element.requestFullscreen();
					} else if (element.mozRequestFullScreen) {
						element.mozRequestFullScreen();
					} else if (element.webkitRequestFullscreen) {
						element.webkitRequestFullscreen();
					} else if (element.msRequestFullscreen) {
						element.msRequestFullscreen();
					}
				};
				_this6.setState({
					fullScreenMode: true });

				doFullScreen(_this6.refs.videoPlayer);
			};_this6.
			removeFullScreen = function (event) {

				var doFullScreen = function doFullScreen(element) {
					if (document.exitFullscreen) {
						document.exitFullscreen();
					} else if (document.mozCancelFullScreen) {
						document.mozCancelFullScreen();
					} else if (document.webkitCancelFullScreen) {
						document.webkitCancelFullScreen();
					} else if (document.msExitFullscreen) {
						document.msExitFullscreen();
					}
				};
				_this6.setState({
					fullScreenMode: false });

				doFullScreen(_this6.refs.videoPlayer);
			};_this6.state = { isPlaying: false, currentTime: 0.0, duration: 0.0, volumeLevel: 1.0, fullScreenMode: false };return _this6;}_createClass(VideoPlayer, [{ key: 'shouldComponentUpdate', value: function shouldComponentUpdate(nextProps, nextState) {if (nextState.fullScreenMode !== this.state.fullScreenMode || nextState.isPlaying !== this.state.isPlaying || nextState.currentTime !== this.state.currentTime || nextState.duration !== this.state.currentTime || nextState.volumeLevel !== this.state.volumeLevel || nextProps.poster !== this.props.poster || nextProps.url !== this.props.url) {return true;}return false;} }, { key: 'componentDidMount', value: function componentDidMount() {var _this7 = this;this.canPlayThrough = false;this.canPlay = false;if (!this.refs.videoTag) {return false;}this.refs.videoTag.addEventListener('canplaythrough', function () {this.canPlayThrough = true;}, false);this.refs.videoTag.addEventListener('canplay', function (e) {_this7.canPlay = true;}, false);this.refs.videoTag.addEventListener('timeupdate', function (e) {_this7.setState({ currentTime: e.target.currentTime, duration: e.target.duration });}, false);this.refs.videoTag.addEventListener('progress', function () {var max_val = 0;var i = 0; /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   	A little bit of crazy design here:  First (and the non-crazy part) the browser does not just give us a single "loaded amount" value for how much of a video is buffered.  Instead, it automatically handles the non-trivial case of the user skipping ahead to later parts of the video - it will actually stop loading the first part, and immediate start loading the later part of the video that they've switched to.  This means that rather than one contiguous range of video having been loaded, we've instead got multiple, separate chunks.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   		The crazy bit is how we access this.  Instead of just giving us an array, it gives us a "number of chunks" (named `length`), and then for each numerical index into this, gives us a function we can call (with the index as a parameter) to get the `start()` and `end()` of each range.  I have to imagine this is an optimization to keep the same API working regardless of how it gets abused (probably for some incredibly 'perverse case" like a video which has hundreds or even thousands of chunks in it as it loaded - you wouldn't ever get such a thing from the user clicking on it, but some procedural playhead movement, like a jog controller, could easily cause this kind of breakage).
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */try {if (_this7.refs.videoTag && _this7.refs.videoTag.buffered) {for (i; i < _this7.refs.videoTag.buffered.length; i++) {if (_this7.refs.videoTag.buffered.end && _this7.refs.videoTag.buffered.end(i)) {if (_this7.refs.videoTag.buffered.end(i) > max_val) {max_val = _this7.refs.videoTag.buffered.end(i);}}}if (_this7.refs.videoTag.duration) {_this7.setState({ bufferedFraction: max_val / _this7.refs.videoTag.duration });}}} catch (exception) {}}); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    	Stop video when it is completed playing
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */this.refs.videoTag.addEventListener('ended', function (e) {_this7.setState({ isPlaying: false, currentTime: 0.0, duration: 0.0 });}, false);} }, { key: 'componentDidUpdate', value: function componentDidUpdate() {if (this.refs.videoTag) {if (this.state.isPlaying) {try {if (this.canPlay) {this.refs.videoTag.play();}} catch (e) {}} else {this.refs.videoTag.pause();}}} }, { key: 'render', value: function render() {return React.createElement('div', { className: 'video-primary-player-display', ref: 'videoPlayer' }, React.createElement('div', { className: 'video-and-controls-wrapper' },
						React.createElement(CenteredPlayerIcon, _extends({ doAction: this.toggleCenteredIcon }, this.state),
							React.createElement('video', { id: 'mainVideoPlayer', ref: 'videoTag', src: this.props.url, poster: this.props.poster, onClick: this.togglePlayback })),

						React.createElement('div', { id: 'mediaControls' },
							React.createElement(PlayPauseButton, _extends({}, this.state, { doAction: this.togglePlayback })),
							React.createElement(ProgressBar, _extends({}, this.state, { onUpdate: this.setProgress })),
							React.createElement(TimeDisplay, _extends({}, this.state, { expectedDuration: this.props.expectedDuration })),
							React.createElement(VolumeButton, _extends({}, this.state, { onUpdate: this.setVolume })),
							React.createElement(FullScreenButton, _extends({}, this.state, { goFullScreen: this.goFullScreen, removeFullScreen: this.removeFullScreen })))));




			} }]);return VideoPlayer;}(React.Component);var


	FullScreenButton = function (_React$Component7) {_inherits(FullScreenButton, _React$Component7);
		function FullScreenButton(props) {_classCallCheck(this, FullScreenButton);var _this8 = _possibleConstructorReturn(this, (FullScreenButton.__proto__ || Object.getPrototypeOf(FullScreenButton)).call(this,
			props));

			_this8.toggleFullScreen = _this8.toggleFullScreen.bind(_this8);return _this8;
		}_createClass(FullScreenButton, [{ key: 'toggleFullScreen', value: function toggleFullScreen(



			event) {
				if (this.props.fullScreenMode) {
					this.props.removeFullScreen(event);
				} else {
					this.props.goFullScreen(event);
				}
			} }, { key: 'render', value: function render()

			{var _this9 = this;
				return (
					React.createElement('div', {
						className: this.props.fullScreenMode ? 'exit-fullscreen-button' : 'fullscreen-button',
						title: 'Fullscreen',
						onClick: function onClick(event) {_this9.toggleFullScreen(event);} }));



			} }]);return FullScreenButton;}(React.Component);exports.default =




	VideoPlayer;

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
	var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _classnames = __webpack_require__(28);var _classnames2 = _interopRequireDefault(_classnames);
	var _momentTimezone = __webpack_require__(31);var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

	var _utils = __webpack_require__(12);
	var _webTrack = __webpack_require__(33);var _webTrack2 = _interopRequireDefault(_webTrack);
	var _webTrackIds = __webpack_require__(117);var _webTrackIds2 = _interopRequireDefault(_webTrackIds);
	var _endpoints = __webpack_require__(22);var _endpoints2 = _interopRequireDefault(_endpoints);

	var _videosActionsReducers = __webpack_require__(235);

	var _videoPlayer = __webpack_require__(512);var _videoPlayer2 = _interopRequireDefault(_videoPlayer);
	var _dropdown2 = __webpack_require__(60);
	var _tabs2 = __webpack_require__(161);
	var _errorMessage = __webpack_require__(38);var _errorMessage2 = _interopRequireDefault(_errorMessage);

	__webpack_require__(972);

	var _appLang = __webpack_require__(20);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //libs
	//utils
	// action creators
	// shared components
	//scss
	//consts
	/*******************************************************************************
	 *  1. VideoThumbnailCell
	 *  2. Videos
	 */ /*
	     * 1. VideoThumbnailCell
	     */var VideoThumbnailCell = function (_React$Component) {_inherits(VideoThumbnailCell, _React$Component);function VideoThumbnailCell(props) {_classCallCheck(this, VideoThumbnailCell);var _this = _possibleConstructorReturn(this, (VideoThumbnailCell.__proto__ || Object.getPrototypeOf(VideoThumbnailCell)).call(this,
			props));

			_this.setActiveVideo = _this.setActiveVideo.bind(_this);return _this;
		}_createClass(VideoThumbnailCell, [{ key: 'componentWillReceiveProps', value: function componentWillReceiveProps(

			nextProps) {
				if (this.props.instance.index === 0 && this.props.currentVideo !== nextProps.currentVideo) {
					this.props.setActiveVideo(nextProps.currentVideo);
					this.props.resetPlayback();
				}
			} }, { key: 'setActiveVideo', value: function setActiveVideo()

			{var _this2 = this;
				var videos = this.props.videos.data.videos;

				var targetVideo = videos.find(function (value) {
					return value.id == _this2.props.instance.id;
				});

				if (targetVideo) {
					this.props.setActiveVideo(targetVideo.id);
				}

				this.props.resetPlayback();
				(0, _webTrack2.default)(this.props.instance.webTrackId);
			} }, { key: 'renderVideoTitle', value: function renderVideoTitle(
			video) {
				if (video.isNew) {
					return (
						_react2.default.createElement('span', { className: 'video-new' }, 'New! '));

				}
				return false;
			} }, { key: 'render', value: function render()
			{var _this3 = this;
				var videos = this.props.videos.data.videos;
				var me = this.props.instance;
				/*const currentVideo = this.props.videos.currentVideo;
	                                 let ogIndex;
	                                 for( let i in videos){
	                                 	if( this.props.instance.id === videos[i].id ){
	                                 		ogIndex = i;
	                                 	}
	                                 }*/

				var currentVideo = videos.find(function (value) {
					return value.id == _this3.props.videos.currentVideo;
				}) || videos[0];


				return (
					_react2.default.createElement('div', { className: (0, _classnames2.default)('video-thumbnail', { active: currentVideo.id == me.id }), onClick: this.setActiveVideo },

						_react2.default.createElement('div', { className: 'video-thumbnail-image', style: { backgroundImage: 'url(' + this.props.videosImageFilePath() + me.tnImage + '?' + (0, _momentTimezone2.default)().format('M-D') + ')' } }),

						_react2.default.createElement('div', { className: 'description' },
							_react2.default.createElement('div', { className: 'video-thumbnail-title' },
								this.renderVideoTitle(me), _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: me.title } })),

							_react2.default.createElement('div', { className: 'duration' },
								me.duration),

							_react2.default.createElement('div', { className: 'added-date' }, 'Added ',
								(0, _momentTimezone2.default)(me.dateAdded).format('M/D/YYYY')))));




			} }]);return VideoThumbnailCell;}(_react2.default.Component);


	/*
	                                                                 * 2. Videos
	                                                                 */
	var Videos = (0, _utils.connectAndMap)(
	['views.videos', 'app.session', 'app.loadingErrors', 'app.loaded'], { loadVideos: _videosActionsReducers.loadVideos, setActiveVideo: _videosActionsReducers.setActiveVideo })(function (_React$Component2) {_inherits(_class, _React$Component2);


		function _class(props) {_classCallCheck(this, _class);var _this4 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this,
			props));
			_this4.videosVideoFilePath = _this4.videosVideoFilePath.bind(_this4);
			_this4.videosImageFilePath = _this4.videosImageFilePath.bind(_this4);
			_this4.resetPlayback = _this4.resetPlayback.bind(_this4);

			_this4.state = {
				videoDropdownLabel: _appLang.VIDEOS_VIEW.DROPDOWN_LABEL,
				videoDropdownId: _appLang.VIDEOS_VIEW.DROPDOWN_SELECT_ID,
				videoTabsIndex: 0,
				videoTabs: [
				{
					name: _appLang.VIDEOS_VIEW.CURRENT_TAB },

				{
					name: _appLang.VIDEOS_VIEW.ARCHIVED_TAB }] };



			_this4.onVideoCategoriesDropdown = _this4.onVideoCategoriesDropdown.bind(_this4);return _this4;
		}_createClass(_class, [{ key: 'componentWillMount', value: function componentWillMount()

			{
				var rvHost = this.props.session.rvHost;
				this.props.loadVideos(rvHost, 'View');
			} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(

			nextProps) {
				if (this.props.session.refresh !== nextProps.session.refresh) {
					var rvHost = this.props.session.rvHost;
					this.props.loadVideos(rvHost, 'View');
				}
			} }, { key: 'videosVideoFilePath', value: function videosVideoFilePath()

			{
				return _endpoints2.default.VIDEOS_VIDEO_FILE_PATH;
			} }, { key: 'videosImageFilePath', value: function videosImageFilePath()

			{
				return _endpoints2.default.VIDEOS_IMAGE_FILE_PATH;
			} }, { key: 'filterVideos', value: function filterVideos(
			videos, videoTabIndex, id) {
				var originalVideos = videos;
				//const { videoDropdownId } = this.state;
				//const { categories } = this.props.videos.data;

				var filterVideoByCategory = function filterVideoByCategory(videos, id) {
					var videos2 = [];

					for (var i = 0; i < videos.length; i++) {
						for (var j = 0; j < videos[i].categories.length; j++) {
							if (videos[i].categories[j] === id) {
								videos2.push(videos[i]);
							}
						}

					}

					return videos2;
				};

				var filterVideoByIndex = function filterVideoByIndex(videos) {
					var videos3 = [];
					var videoCode = '';
					var currentVideo = 0;
					switch (videoTabIndex) {
						case 0:
							videoCode = 'C';
							break;
						case 1:
							videoCode = 'A';
							break;}

					for (var i in videos) {
						if (videos[i].archiveOrCurrent === videoCode) {
							videos3.push(videos[i]);
						}
					}
					for (var _i in originalVideos) {
						for (var j in videos3) {
							if (Number(j) === 0 && originalVideos[_i].id === videos3[j].id) {
								currentVideo = originalVideos[_i].id;
							}
						}
					}
					var videoBundle = {
						videos: videos3,
						currentVideo: currentVideo };

					return videoBundle;
				};

				var filterVideos = function filterVideos(videos, videoTabIndex, id) {
					if (id === _appLang.VIDEOS_VIEW.DROPDOWN_ALL_ID || id === _appLang.VIDEOS_VIEW.DROPDOWN_SELECT_ID) {
						return filterVideoByIndex(videos);
					}
					var filteredVideos = filterVideoByCategory(videos, id);
					return filterVideoByIndex(filteredVideos);
				};

				return filterVideos(videos, videoTabIndex, this.state.videoDropdownId);
			} }, { key: 'resetPlayback', value: function resetPlayback()
			{
				this.refs.videoPlayer.resetPlayback();
			} }, { key: 'onVideoCategoriesDropdown', value: function onVideoCategoriesDropdown(
			event, label, id) {
				this.setState({ videoDropdownLabel: label, videoDropdownId: id });
			} }, { key: 'renderVideoThumbnails', value: function renderVideoThumbnails(
			videos, videoTabIndex) {var _this5 = this;
				var videoBundle = this.filterVideos(videos, videoTabIndex);
				var videos2 = videoBundle.videos;
				if (videos2.length === 0) {
					return (
						_react2.default.createElement('div', { className: 'video-thumbnail' },
							_react2.default.createElement(_errorMessage2.default, { message: (0, _appLang.ERRORs)().VIDEOS_VIEW_NO_RESULTS })));



				}
				return videos2.map(function (value, index) {
					return (
						_react2.default.createElement(VideoThumbnailCell, _extends({}, _this5.props, {
							videosImageFilePath: _this5.videosImageFilePath,
							resetPlayback: _this5.resetPlayback,
							instance: _extends({ index: index }, value),
							currentVideo: videoBundle.currentVideo,
							key: index })));

				});
			} }, { key: 'renderVideoDuration', value: function renderVideoDuration(
			individualVideoData) {

				if (!individualVideoData.duration) {
					return false;
				}

				return (
					_react2.default.createElement('div', { className: 'video-duration' },
						individualVideoData.duration, ' |'));


			} }, { key: 'renderVideoTitle', value: function renderVideoTitle(
			video) {
				var renderTitle = function renderTitle(video) {
					if (video.isNew) {
						return (
							_react2.default.createElement('div', null,
								_react2.default.createElement('span', { className: 'video-new' }, 'New!'), _react2.default.createElement('span', null, ' ', video.title)));


					} else {
						return (
							_react2.default.createElement('span', null, video.title));

					}
				};

				return (
					_react2.default.createElement('div', { className: 'video-title' },
						renderTitle(video)));


			} }, { key: 'handleTab', value: function handleTab(
			event, index) {
				(0, _webTrack2.default)(index == 1 ? _webTrackIds2.default.VIDEO_VIEW_ARCHIVED : _webTrackIds2.default.VIDEO_VIEW_CURRENT);
				this.setState({ videoTabsIndex: index });
			} }, { key: 'render', value: function render()

			{var _this6 = this;
				var videos = this.props.videos.data.videos;
				//const currentVideo = this.props.videos.currentVideo;

				var currentVideo = videos ? videos.find(function (value) {
					return value.id == _this6.props.videos.currentVideo;
				}) || videos[0] : null;

				/*
	                           	The "currentVideo" thing exists so that if we come from e.g. the homepage, we can load a *particular* video, rather than just a default one.  If we don't find one, then we'll just default to the very first video in the array.
	                           */


				var videosViewLoaded = this.props.loaded.videosView;
				var videosViewError = this.props.loadingErrors.videosView;

				return (
					_react2.default.createElement('div', { className: 'videos-page-container' },
						_react2.default.createElement('div', { className: 'video-controls' },

							videos && this.props.videos.data.categories.length > 0 &&

							_react2.default.createElement('div', { className: 'dropdown-wrapper' },
								_react2.default.createElement(_dropdown2._dropdown, {
									_label: this.state.videoDropdownLabel,
									_state: this.props.videos.data.categories,
									_callback: this.onVideoCategoriesDropdown })),



							_react2.default.createElement('div', { className: 'tab-wrapper' },
								_react2.default.createElement(_tabs2._tabs, {
									_index: this.state.videoTabsIndex,
									_state: this.state.videoTabs,
									_callback: this.handleTab.bind(this) }))),




						videosViewLoaded && videosViewError &&

						_react2.default.createElement(_errorMessage2.default, { message: videosViewError }),



						videosViewLoaded && !videosViewError && videos && videos.length > 0 &&

						_react2.default.createElement('div', { className: 'videos-page' },
							_react2.default.createElement('div', { className: 'video-content' },
								_react2.default.createElement('div', { className: 'video-player-wrapper' },
									_react2.default.createElement(_videoPlayer2.default, { url: this.videosVideoFilePath() + currentVideo.videoUrl, poster: this.videosImageFilePath() + currentVideo.tnImage + '?' + (0, _momentTimezone2.default)().format('M-D'), expectedDuration: currentVideo.duration, ref: 'videoPlayer' })),

								_react2.default.createElement('div', { className: 'video-details' },
									this.renderVideoTitle(currentVideo),
									this.renderVideoDuration(currentVideo),
									_react2.default.createElement('div', { className: 'video-date-added' },
										_appLang.VIDEOS_VIEW.ADDED_LABEL, ' ', (0, _momentTimezone2.default)(currentVideo.dateAdded).format('M/D/YYYY')))),



							_react2.default.createElement('div', { className: 'video-thumbnail-list' },
								this.renderVideoThumbnails(videos, this.state.videoTabsIndex)))));






			} }]);return _class;}(_react2.default.Component));exports.default =



	Videos;

/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*-----------------------------------------------------------------------------\r\n    Description area beneath video\r\n  ---------------------------------------------------------------------------*/\n#video-information-readout {\n  position: relative;\n  width: 1200px;\n  height: 70px;\n  color: #595a5d;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  font-weight: 600;\n  font-size: 22px;\n  font-height: 48px;\n  text-align: left; }\n  #video-information-readout .left-side span.new-tag {\n    color: #ed1c24; }\n  #video-information-readout .right-side {\n    position: absolute;\n    right: 0px;\n    top: 25%; }\n\n/*-----------------------------------------------------------------------------\r\n    Wrappers for major UI blocks\r\n  ---------------------------------------------------------------------------*/\n.video-primary-player-display {\n  -webkit-transition: opacity 0.4s ease-in-out;\n  transition: opacity 0.4s ease-in-out; }\n  .video-primary-player-display h1 {\n    margin: 20px;\n    font-weight: 600;\n    font-size: 24px;\n    font-height: 48px;\n    text-align: left;\n    width: 920px; }\n  .video-primary-player-display .video-and-controls-wrapper {\n    background-color: black;\n    position: absolute;\n    display: inline-block;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer; }\n    .video-primary-player-display .video-and-controls-wrapper.is_full_screen {\n      position: absolute;\n      top: 0px;\n      width: 100%;\n      height: 100%; }\n    .video-primary-player-display .video-and-controls-wrapper video {\n      height: 100%;\n      width: 100%; }\n  .video-primary-player-display .video-player-icon-wrapper {\n    position: relative;\n    height: 100%;\n    width: 100%; }\n    .video-primary-player-display .video-player-icon-wrapper .video-player-icon {\n      position: absolute;\n      height: 100%;\n      width: 100%;\n      background-image: url(" + __webpack_require__(1008) + ");\n      background-position: center center;\n      background-repeat: no-repeat;\n      opacity: 0.8;\n      -webkit-transition: opacity 0.25s linear;\n      transition: opacity 0.25s linear; }\n      .video-primary-player-display .video-player-icon-wrapper .video-player-icon.active {\n        opacity: 0.0; }\n      .video-primary-player-display .video-player-icon-wrapper .video-player-icon.loading {\n        background-image: none; }\n\n/*-----------------------------------------------------------------------------\r\n    Custom HTML5 Video Player\r\n  ---------------------------------------------------------------------------*/\n#mediaControls {\n  background: rgba(51, 51, 51, 0.8);\n  height: 50px;\n  width: 100%;\n  position: absolute;\n  bottom: 0%; }\n  #mediaControls .progress-bar-wrapper {\n    width: -webkit-calc( 100% - 250px);\n    width: calc( 100% - 250px);\n    position: relative; }\n    #mediaControls .progress-bar-wrapper .video-progress-bar-back {\n      background: black;\n      height: 8px;\n      width: 100%;\n      top: 21px;\n      left: 53px;\n      border-radius: 4px;\n      position: relative; }\n    #mediaControls .progress-bar-wrapper .video-progress-bar-buffered {\n      background: #636364;\n      height: 8px;\n      width: 8px;\n      top: 0px;\n      border-radius: 4px;\n      position: relative; }\n    #mediaControls .progress-bar-wrapper .video-progress-bar-filled {\n      background: red;\n      height: 8px;\n      width: 8px;\n      top: 0px;\n      border-radius: 4px;\n      position: absolute; }\n    #mediaControls .progress-bar-wrapper .video-progress-bar-slider {\n      background: #d2d3d4;\n      height: 16px;\n      top: -4px;\n      width: 16px;\n      border-radius: 8px;\n      position: absolute; }\n  #mediaControls .play-pause-button {\n    height: 50px;\n    width: 50px;\n    position: absolute; }\n    #mediaControls .play-pause-button.play {\n      background-image: url(" + __webpack_require__(1007) + "); }\n    #mediaControls .play-pause-button.play:hover {\n      background-image: url(" + __webpack_require__(1006) + "); }\n    #mediaControls .play-pause-button.pause {\n      background-image: url(" + __webpack_require__(1005) + "); }\n    #mediaControls .play-pause-button.pause:hover {\n      background-image: url(" + __webpack_require__(1004) + "); }\n  #mediaControls .timeDisplay {\n    position: absolute;\n    width: 80px;\n    height: 50px;\n    vertical-align: middle;\n    top: 0px;\n    right: 100px; }\n    #mediaControls .timeDisplay p {\n      margin-top: 16px;\n      font-size: 14px;\n      font-family: Arial;\n      font-weight: bold;\n      color: white; }\n  #mediaControls .fullscreen-button {\n    background-image: url(" + __webpack_require__(1003) + ");\n    height: 50px;\n    width: 50px;\n    position: absolute;\n    top: 0px;\n    right: 0px; }\n    #mediaControls .fullscreen-button:hover {\n      background-image: url(" + __webpack_require__(1002) + "); }\n  #mediaControls .exit-fullscreen-button {\n    background-image: url(" + __webpack_require__(1001) + ");\n    height: 50px;\n    width: 50px;\n    position: absolute;\n    top: 0px;\n    right: 0px; }\n    #mediaControls .exit-fullscreen-button:hover {\n      background-image: url(" + __webpack_require__(1000) + "); }\n  #mediaControls .volume-button-wrapper {\n    height: 50px;\n    width: 50px;\n    position: absolute;\n    top: 0px;\n    right: 50px; }\n    #mediaControls .volume-button-wrapper .volume-button {\n      height: 50px;\n      width: 50px;\n      background-image: url(" + __webpack_require__(1009) + "); }\n      #mediaControls .volume-button-wrapper .volume-button:hover {\n        background-image: url(" + __webpack_require__(471) + "); }\n      #mediaControls .volume-button-wrapper .volume-button.active {\n        background-image: url(" + __webpack_require__(471) + ");\n        background-color: #515255; }\n    #mediaControls .volume-button-wrapper .volume-bar-container {\n      height: 135px;\n      width: 50px;\n      position: absolute;\n      bottom: 50px;\n      right: 0px;\n      background: rgba(51, 51, 51, 0.8);\n      display: none; }\n      #mediaControls .volume-button-wrapper .volume-bar-container.active {\n        display: block; }\n      #mediaControls .volume-button-wrapper .volume-bar-container div.volume-bar-back {\n        background: #636364;\n        height: 94px;\n        width: 8px;\n        top: 21px;\n        left: 21px;\n        border-radius: 4px;\n        position: absolute; }\n      #mediaControls .volume-button-wrapper .volume-bar-container div.volume-bar-filled {\n        background: red;\n        height: 94px;\n        width: 8px;\n        bottom: 0px;\n        border-radius: 4px;\n        position: absolute; }\n      #mediaControls .volume-button-wrapper .volume-bar-container div.volume-bar-slider {\n        background: white;\n        height: 16px;\n        width: 16px;\n        border-radius: 8px;\n        bottom: 84px;\n        left: -4px;\n        position: absolute; }\n", ""]);

	// exports


/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*\n\tThis is a mixin which allows an element to have a fixed aspect ratio, but allows the element to NOT have to be floated/etc - the element can stay inside the normal document flow.  It's based on a common workaround which inserts an invisible padding \"before\" meta-element which gives it the desired size (and is floated), and then a subsequent 'clearfix' \"after\" element which makes sure that the bottom of this container stretches far enough to include the entirety of the floated element.\n\n\tTo use this, you'll need to have at least 3 nested divs; they don't need any special classes, but they do need to be the first elements inside their parents.  You apply the mixin to the topmost div, you leave the second div empty, and you put all of your content inside the third div.\n\n\tExpected usage:\n\n\t<div class=\"my-container\">  <-- mixin applied here, on this topmost div\n\t\t<div>\n\t\t\t<div class=\"interior\">\n\t\t\t\t<-- content goes in this div\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\tThen in your scss file:\n\t.my-container {\n\t\t@include aspect-ratio(4.0,3.0,100%);\n\n\t\t.interior {\n\t\t\t//whatever you want\n\t\t}\n\t}\n*/\n/**\n * This is heavily borrowed from how Twitter Bootstrap 4 handles breakpoints.\n *\n * https://github.com/twbs/bootstrap/blob/807a837afe1c5ee2ac5f962658a5741673c04231/scss/mixins/_breakpoints.scss\n */\n/**\n * Finds the next breakpoint up or returns null.\n * @param\t {string} $name\t\t\t\t\t\t\t\tCurrent breakpoint\n * @param\t {list} [$breakpointNames]\t\t\t\t\tAll breakpoints. Defaults to $appBreakpoints names.\n * @return {string|null}\t\t\t\t\t\t\t\tReturns name of next breakpoint or null.\n */\n.videos-page-container {\n  padding: 0 3.125rem;\n  vertical-align: top; }\n  .videos-page-container > :first-child {\n    vertical-align: top; }\n  .videos-page-container .video-player-wrapper,\n  .videos-page-container .video-thumbnail-list {\n    display: inline-block;\n    vertical-align: inherit; }\n  .videos-page-container .video-player-wrapper {\n    overflow: hidden;\n    width: 100%;\n    position: relative;\n    height: 31.75rem; }\n    .videos-page-container .video-player-wrapper > :first-child:before {\n      float: left;\n      content: \"\";\n      padding-bottom: 56.25%; }\n    .videos-page-container .video-player-wrapper > :first-child > :first-child {\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0; }\n    .videos-page-container .video-player-wrapper:after {\n      content: \"\";\n      display: table;\n      clear: both; }\n  .videos-page-container .dropdown-container {\n    margin-bottom: 2rem;\n    width: 20%; }\n\n.video-content {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  height: 32rem; }\n\n.videos-page {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  height: 32rem; }\n  .videos-page .video-thumbnail-list {\n    -webkit-box-flex: .33;\n    -webkit-flex: .33;\n            flex: .33;\n    height: 34rem;\n    overflow-y: auto;\n    overflow-x: hidden; }\n    .videos-page .video-thumbnail-list .video-thumbnail {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n      -webkit-flex-direction: row;\n              flex-direction: row;\n      padding: .75rem 0 .75rem .75rem; }\n      .videos-page .video-thumbnail-list .video-thumbnail:first-child {\n        padding-top: 0; }\n      .videos-page .video-thumbnail-list .video-thumbnail .video-thumbnail-image {\n        background-size: cover;\n        background-position: center;\n        border: 4px solid transparent;\n        -webkit-box-sizing: border-box;\n           -moz-box-sizing: border-box;\n                box-sizing: border-box;\n        cursor: pointer;\n        height: 4.9rem;\n        width: 100%;\n        -webkit-box-flex: 1;\n        -webkit-flex: 1;\n                flex: 1;\n        -webkit-transform: translate(0px);\n                transform: translate(0px); }\n      .videos-page .video-thumbnail-list .video-thumbnail.active .video-thumbnail-image {\n        border: 4px solid #CD040B; }\n      .videos-page .video-thumbnail-list .video-thumbnail .error-message {\n        background: #ffffcc;\n        border: 1px solid #CD040B;\n        font-size: .75rem;\n        margin-top: .75rem;\n        padding: 5px 0;\n        width: 100%;\n        text-align: center; }\n      .videos-page .video-thumbnail-list .video-thumbnail .alert-icon {\n        height: 1rem;\n        margin-right: .25rem;\n        margin-top: -4px; }\n      .videos-page .video-thumbnail-list .video-thumbnail .description {\n        -webkit-box-flex: 1;\n        -webkit-flex: 1;\n                flex: 1;\n        display: inline-block;\n        line-height: 1.25;\n        padding-left: 0.75rem; }\n        .videos-page .video-thumbnail-list .video-thumbnail .description .video-thumbnail-title {\n          font-weight: bold;\n          font-size: 0.75rem;\n          margin-bottom: .5rem; }\n        .videos-page .video-thumbnail-list .video-thumbnail .description .duration {\n          font-size: 0.75rem; }\n        .videos-page .video-thumbnail-list .video-thumbnail .description .added-date {\n          font-size: .65rem; }\n\n.video-details {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  font-weight: bold;\n  margin-top: 1rem; }\n\n.video-title {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  line-height: 1em; }\n\n.video-duration {\n  margin-right: .25rem; }\n\n.video-date-added {\n  font-size: 1rem;\n  line-height: 1.5em;\n  margin-left: .25rem; }\n\n.video-new {\n  color: #CD040B; }\n\n.video-controls {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: initial;\n  -webkit-align-items: initial;\n          align-items: initial;\n  height: 12%; }\n\n.video-controls .dropdown-wrapper {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 50%;\n          flex: 0 0 50%; }\n\n.video-controls .dropdown-wrapper .dropdown-container {\n  width: 40%; }\n\n.video-controls .tab-wrapper {\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 50%;\n          flex: 0 0 50%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex; }\n\n.video-controls .tab-wrapper .tab-container {\n  margin-left: auto; }\n", ""]);

	// exports


/***/ },

/***/ 971:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(739);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/index.js!./video-player.scss", function() {
				var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/postcss-loader/index.js!../../../../../node_modules/sass-loader/index.js!./video-player.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 972:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(740);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./videos.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./videos.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 1000:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "eec2f74b8f866b95af49f0f1c50eda9c.png"

/***/ },

/***/ 1001:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "027a93b8e083bdd01acfb6b4744b7b80.png"

/***/ },

/***/ 1002:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUU2Qzk0MEMwQzNFMTFFNEI3NjBBMEFGMTNGODQ3RjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUU2Qzk0MEQwQzNFMTFFNEI3NjBBMEFGMTNGODQ3RjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RTZDOTQwQTBDM0UxMUU0Qjc2MEEwQUYxM0Y4NDdGNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RTZDOTQwQjBDM0UxMUU0Qjc2MEEwQUYxM0Y4NDdGNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjYWAd4AAAFcSURBVHja7JlNK0RhFMfnCsmCpYTyVhYzs/ay8Vq29spCygdQLGz5BHYWdj6APSmmfAAjNQtKkqVSQur63TqLabr3aUq5zvif+m2ec+/t+fW8nacbxXFcaIVoK7RISEQiEpGIRCQiEYlIRCL/R6T9px+4rt4089g2LMIQ9EEXdFvuDSrlUnE5V5EmYx0mMnKJ0KSXqbUEtUC+x4vII6xA1r068rTYtwIdfvUiMmvrJCs+vYjsp4xG3DD1XIiMNAgcQrFuA7j3IrIKz3AJc7AJtzAPVWvP90AkdmDDDrwHa1uAPRiGNTiF/pR3n6D8V0qUKRiHcyjBkXV82jp/7KJEqZv/o0nFkpKveSkaBwK5ZGHvehHpCOSS3enCi0hvYDQOPN1H3gP10wkMehH5COTG4MzLrlWBGei0u8ULfFnZcQdXvyES6Y+VRCQiEYlIRCISkYhEJCKRnOJbgAEAW503Y6nxBqEAAAAASUVORK5CYII="

/***/ },

/***/ 1003:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEY5NjBFMkMwQzNFMTFFNDg3QzU4NkZFNUMzNjkwQTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEY5NjBFMkQwQzNFMTFFNDg3QzU4NkZFNUMzNjkwQTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Rjk2MEUyQTBDM0UxMUU0ODdDNTg2RkU1QzM2OTBBMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Rjk2MEUyQjBDM0UxMUU0ODdDNTg2RkU1QzM2OTBBMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgBSuFkAAAFcSURBVHja7JnNK0RRGIfnakizGEsJZYyywNrHBkPZ2isLKTuSYmHLWthZ2PkD7Ekx5Q+gpmZBSbJUSkhdz62zmKZ7T1PK9Y7fW8/mvPfeztP5ek83CMMw0wzRkmmSkIhEJCIRiUhEIhKRiET+j0j2px9YXVtv5LFNmIFe6IR2yLncG5QP9vfmUhVpMJZgMCEXCY1amVqzUPXk81ZEHmEeku7VgaXFvuHp8KsVkUm3TpLi04rIbsxohHVTz4RIoU7gCIZqNoB7KyIL8AxXMAUrUIFpuHXt6R6IxBYsuwPvwbWVYAf6YBHOoCvm3ScY+SslyhgMwAUMw7Hr+Ljr/ImJEqVm/vfDTUy+aqVo7PbkooW9bUWk1ZOLdqdLKyIdntE4tHQfeffUT6fQY0Xkw5MrwrmVXasME9Dm7hYv8OXKjju4/g2RQH+sJCIRiUhEIhKRiEQkIhGJpBTfAgwABq03Ywl7VTAAAAAASUVORK5CYII="

/***/ },

/***/ 1004:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjFFNjJGMUMwQzMyMTFFNDg2OThFRDA4NjQ1MDU1REYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjFFNjJGMUQwQzMyMTFFNDg2OThFRDA4NjQ1MDU1REYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMUU2MkYxQTBDMzIxMUU0ODY5OEVEMDg2NDUwNTVERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMUU2MkYxQjBDMzIxMUU0ODY5OEVEMDg2NDUwNTVERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmXk/OwAAABxSURBVHja7NnBCYAwDAXQVtxG3UCn1w3UeWKPIh6FQn0fciiEwCOn0BwRqYV0qZGAgICAgICAgICA/AfSfzVoP863w2Yptd3ec6n12TSNQ7YREBAQEBAQEBAQEBCQysl+rEBAQEBAQEBAQEBAKuUSYADpGAxfbcXnmQAAAABJRU5ErkJggg=="

/***/ },

/***/ 1005:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTBDMjVEREMwQzMyMTFFNDhBNTZCODVGMURBMDcwRTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTBDMjVEREQwQzMyMTFFNDhBNTZCODVGMURBMDcwRTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMEMyNUREQTBDMzIxMUU0OEE1NkI4NUYxREEwNzBFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMEMyNUREQjBDMzIxMUU0OEE1NkI4NUYxREEwNzBFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhkOR34AAABySURBVHja7NnBCYAwDAXQVhxLV1KcRHQl3Sv2KOJRKNT3IYdCCDxyCs0RkVpIlxoJCAgICAgICAgIyH8g/VeDpnl5O2zGUuftPZQ6nk37tmYbAQEBAQEBAQEBAQEBqZzsxwoEBAQEBAQEBAQEpFIuAQYAolAMX36mKKEAAAAASUVORK5CYII="

/***/ },

/***/ 1006:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTE1RTIxOEMwQzMyMTFFNDgwODVBQkFCRDZERkY2QzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTE1RTIxOEQwQzMyMTFFNDgwODVBQkFCRDZERkY2QzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MTVFMjE4QTBDMzIxMUU0ODA4NUFCQUJENkRGRjZDOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MTVFMjE4QjBDMzIxMUU0ODA4NUFCQUJENkRGRjZDOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhpTvpkAAAEVSURBVHja7Nk9agJBAIbhXU0j2AnW2kZjpwcQEb2CEKyEgE0qIRdIJ15BUK8g6AWsxISoTSBaCqa3CazvwvZa7LrO5Bt4sFJ5d5wf0PU8z7FhJBxLhkIUohCFKEQhClGIQhTyf0Iewvqgr/Xmk5dfvOD72vc9FQt3NyMlVOEHvYX5kOL6aaXwjiXKNqwRf4YWGCBt+mJP4tVfQmjasGvlMMUEWRu23xa2aMM1/RzJYIg58jYciLUgxoqT3bMhZIa6ySFHPKOBvakhIzxifLeXxgtjF1wm51F9QdQz8oc+ilFGRD0jK3SCy6ORl8YTeqjcKiLsGfnAAV383HordPWPlUIUohCFKEQhClGIQhSikJjGWYABANfZKkGRhX4EAAAAAElFTkSuQmCC"

/***/ },

/***/ 1007:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUFBQUNFQUMwQzMyMTFFNDkzODJFRDZBMDQ3ODExODQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUFBQUNFQUQwQzMyMTFFNDkzODJFRDZBMDQ3ODExODQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QUFBQ0VBQTBDMzIxMUU0OTM4MkVENkEwNDc4MTE4NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QUFBQ0VBQjBDMzIxMUU0OTM4MkVENkEwNDc4MTE4NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlzI22IAAAETSURBVHja7NnBikFRAIdxd9hMzU5Zs5XsxgNI4hVozEopGyvlBezkFYTrERQvYCU0ZaPGLKfY26jrU3dvFvfinPmf+mXl3r573HNOcTzPi9gwXiKWDIUoRCEKUYhCFKIQhSjk/4TEgrpQpVrb8HFEA7u/fm/iDp9uRrLI4xrUCfIhPeqn9Youlni34R25ztACfbyZ/rJH0cIXyjasWklM4SJhw/JbwRafcEzfR+IYYI6UDRtiwY+xYmf3bAiZoWhyyAEfKOHH1JAR0hg/7aHxxtj7h8l5WDcIe0bO6CETZkTYM7JC3T88GnloPKGN3L0igp6RNX7RxPe9l0JH/1gpRCEKUYhCFKIQhShEIQp50LgIMACI4SpBTA/25gAAAABJRU5ErkJggg=="

/***/ },

/***/ 1008:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABjCAYAAACPO76VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUFEMDg5Q0Y2NDZCMTFFNEE1NDNEMjQwNzFEQTZDMjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUFEMDg5RDA2NDZCMTFFNEE1NDNEMjQwNzFEQTZDMjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQUQwODlDRDY0NkIxMUU0QTU0M0QyNDA3MURBNkMyMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQUQwODlDRTY0NkIxMUU0QTU0M0QyNDA3MURBNkMyMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtUeMXEAAA3vSURBVHja7F0LUBRXFu3hLzJ8h9/IT6MmfBJ3HYIxKggFJH421ipJ1M0HCWhVSiNRY1gsDVFDaURIablVIgnBJGazYMVVKCOiFTAag6JbgWhFDSAgUYTAAPILn73XaanHs5kPDDPdQ5+qW9pvepjue/rdd+97796WDAwMMCL4ATNRBfyBhUCu0xHEH2QKiB+IG4gLiB3IROK8ByDtIE0gDSDVIJUg10FaRDJG1ltngoSCzGX/76uHv3sb5ArIDyAl7P/7+XTjEp6MGdYg0SAvg7wI4mqA37wP8h1ILkghSPd4J+OvIG+B/IM1RcYCmrAjIIdA/jeeyEAztBhkE8g8bb7Q29s7UF1d3VVVVdUN/3bfuXPnz8bGxt7m5ubejo6OwRuwtbWVODk5WchkMotJkyZZ+vn5WU+ePNka/rWxsLCQaHl950DSQPINbcYMSQYq4yWQ7SDPqDuxs7Ozv6ysrL2kpKStsLCw7eLFix3d3d0jvlBra2vJc889ZxsdHS0NDQ2VKhQKuwkTJmjyJH8G2QZyHGTAlMgIAPkXSNhwJ8AT3n/y5Mnmw4cPN506dap9NMrXhpyoqCi72NhYlwULFjhCjzJXc3oxyNsg14ROBrqeW0HeBbHkOuHSpUtt2dnZjUBCy4MHDwzu3UycONHsjTfecFy1apXs2WeflQ5z2p8gGSA7WNdZcGSEg+SAeNMf4G+CCVLu3LnzblFRUTvDE0RGRtpt2bLFIywszEEi4RxiakHiQIqEQgba4i0gH4A81v3Pnz/funnz5jsXLlzo4Gvw9fzzz9t+/PHHk+bMmWPP8TEqLB3kn2yP4S0ZHqyLGE5/cO/evZ7k5OS6zz77rFko0xNxcXFOqampXu7u7lYcH58HeQWkno9k/AWkAERONvb39zNAwL1NmzbVK5XKfkZgcHBwMEtLS5MDMe5mZo85YEjEIn3FJvoiIwrkKIiU7g3x8fHV+fn5bYzAsWjRImlWVpafh4cH3UtwzFsKcpoPZPwd5N8gQy7yxx9/bIuJiamsr6/vZUwEcrncIi8vb8rs2bNpr6sHZDnIt6MdbEcDDOL+QxMBbmoDBFc3TYmIhzYJ7gfvC1zxBuojvP9cVh9GIWMWyNcMMfOLvWz79u11b775Zi1OYTAmCLwvGD9qU1JS6iirYs7qY5ahzdTTjGoa2pEYqAfef//9GhjsGplxAnBKZLt37/aBgZ0MSpSMas6t3BBkeIKUgniRjUlJSTVwYfeZcQZ4AF137drlQzXXgYSA/D6WZKBtPMOoFn0GsW/fvt/Xr19fz4xTwP3L161b58kRh0Swg/uYjBmpNBFffvnl/fFMBOKdd96pRz1QzXNYfY1Jz4hkVCtiEsJ9bQXv4papDta6ANdLSkpKpoLba09NnbygbQyiLRn4A7+Q48Tdu3d7FArFdVNzX0cbh5SVlflTgSGOH4EgrfoyU7tIItBzSkhIqBaJeDwOwRkH1A/R7MXqTy9jRjDIGrLh008/bTCFKY6xQEFBQVtWVhYdFK5h9TgqM4Xjwzl2MHqI2tra7oCAgGvt7e39ouq5gQtW169fD/D29ramvKt5jJolXE094yWSCMR7771XKxKhHrhiiXri8K6WjLRnIFFXGWLzQHFxsXL+/Pm3RHVrh++//34qrhoSTbjJAbcn9evaM/5GEoHrEhBt3hFVrD1wRRP1RuAZVq86m6l3yQPcufHTTz91iirWHqWlpZ2oN6p5g65k4KrdkG01qampd0X16g4OvYWy+tWajATyAHpEG583EPAZqLeLFy/SYcBqbclAd2wl2ZCZmWmU2ViZTGZuCoRw6G8Fq2eNZOBu8MF1CtzP+tVXXxklt+Hs2bPTcEYUNwUImYwjR460gB7JbT2OrJ41khFDD9xjudVSHWxsbMxwavrWrVtBiYmJMnNzYXYU1B9E5vQD/bImMvD4RbLhm2++Mfo+JzBXlhkZGb7l5eX+y5YtsxciIRx6fIHWP00GZgm5PTro6urqx03IfLkhf39/27y8vGklJSXTFAqFjZDIOH36NG7m7iOaUM8KdWSEkgeXL19uN5aJUod58+bZg4cXcPjwYR9PT09B5CWiHi9duvSAvhV1ZAyZhyouLubtzCyMH5LXX3/d9ddffw3avXu3J07O8Z0QDn3OVUdGMNW1eD9NLpVKzTdv3iy/efNm4OrVq52H2T3OCxQVFdH6HNZM4YTW4C4HXErFjCGh2GQwV1YHDx6cfPXq1aciIiIm8vEawbR29PX1kZNVPqzeHyMjkPxiVVVVFx/HC02YMWPGxDNnzjxVWFj4RFBQkDWfrq2zs3OgsrKSzqoN4iJjMnkGJjIKOdCKiopyvHLlSiBEv158iuSBjC6qyVcjGZhZKvRpCEtLS0lCQoI7jCdBycnJbpjLZ+xrun37Nr2PagoXGTLyjPr6+j8ZE4Gjo6PFRx995H3jxo1AzN8z5rVw6NVNIxmYZ82YGHx8fKxzcnKegIF0OqaKGeMaOPTqykXGkCemqanJZLfhhISESM+dO+d/9OhRv6lTp1oZ8rc59CrlImOIPaWWC00OmBK2dOlSl4qKikCcGba3tzdI0Aiu7WOXwkXGkAk4pVLZx4wDoHLwXg3lxre2tvYN1zPIeZ0h2w8dHBzMTZ2IgoKC5nXr1tWC52gwZwV6IK3XNi4yBuhubKr47bffujZs2FBz/Phxg0/3cKzJ9HORMWTxw8XFxcLUSMD6JOnp6fU7d+5sMNbsAodeOXvGkPQvLBMkmiT9g0Ov9zWSIZfLLUWTpH9w6LWBi4wq8gwsnCWaJP3D19eXJqNaIxlYwUw0SfrHk08+SY/gVVxk/EKRYWNlZSXp6ekRzDQ630wSDZyo9Pb2pqsr/MIV9GH+cs0gSxYWktmzZ9sKgQQ0SWCO6gIDA6/xlQgE6hNcW1LnNaQXSwcTZeRBVFSUVAgmKSgoqGLr1q33+L4YFhkZKVWnb5qMH8iDsLAw3pKBJmnJkiU3Fi9eXMnHsYELERERE9Tpm/Z5z5EHwcHBdmjn+PTE8dVL0ma8UCgUUnX65jJTg34vbq/EKpeiSRo9UI/gEFlS8YVaM4XzJN+RDa+++qqTaJJGjxUrVjhQTacYKp2MK6cP05yOPzr4448/eiFq/NkYTyJuu8nPz28WmkniMlGNjY1P2dnZkd7pElLPXGMGopB1tx6u/Dk7O1usXLnSMTs72+AboMPDw2+2tLQIfl0F9UcR0cL2DEadmULgrpCvyYY1a9a4GuMmTIEIxNq1a+md818zHG8lGG7RIpM8mDVrltRYC/hCB+pt5syZMqr5ENe5w5GBpUFLyIbk5GQPUbW6Y9u2bc4cscVVXchApJMHCxYscAoJCZkgqld7oL6io6PdqOa04c5XR8YJRpXRrzrRzIzBktSiirXH/v37XSVDt8WXs3rVmQz0gT+gpkccYmJi7EU1a0ZsbCxaEtrx2caoeUHKiKrq+Pv7XzPG6xWEAszOraysnA5hAZmacIFRJceMuKoOfjGRZBPL9qSnp8tFlQ+PvXv3ulNEoP7WMxreUKPNfpzLtKsbHx/vtnDhQqmo9seB2bhxcXGeHKHCZU3fFWsU6hF+fn6W5eXlU6loG2sUYkKMUtP3td2phrsN3yK7GRZFzM3NnazDW75MGqiHY8eOySkiBli9KbX5G7psGyykYw+ILu2zs7O9RSoY5osvvvCYMWMGHWl/wuqN0TcZDwNxRlVrbxCvvfaaa0ZGxrge0CGecFu+fDmtA9RTki5/R1cyMAXqFdYODiIxMdETa4KPRyKSkpJka9eupa1DHaunnrEkA4GlthfSdjA1NdV748aNsvFEBNyvC9431axk9aNzSfKRbjXHsB4LkXQQ0yWSPXv2+KakpLiPByI+/PBDWVpamq9EIiF1iPp4kRnB6xp0cW2HA5ZaxXctDVmkysnJaYBYpM4Ua6Sj13To0CH32NhYep4O117w3UvHR/q3xXcu6QAsGnPixAk5xFeuHGOp0d+5xLAXgOvmQ0oh4UuisEi7qUTqeB8VFRVTOIhoZy3Et6P9DX2lJ6EvHUoPWhgYwpM0/eDBg15CqHrDBbzuzMxMj/z8/GnOzs5SDmcG7/uUPn7LYG+wxNle3JScl5fXKhQicLngwIED7m5ublzLBhdY91VvhZf1/bRiDVd8gWIKO6ANAmd7c3NzH1ZR4/t6Ol4fjHk+eL0cRAywkfV8fRIxFj2DhNq3HmNd9R07dvx+9uzZB3whAUsjocs6d+5cF4bKiyeCubd0meLgCxkI3BqKq1u4JsKZllZaWtr2+eefG/194OCKSzl2cTwCeoT4PvDtjEDfB04Ca1kdYKiS3iQ6Ojr6Tp482QKkNGGRyrHcQYhJQNHR0XarVq1yAi/JwcbGRl3JCtwl8zZDJRMJmQyG7fZL2KfraXUndnV19WFxRRhf2rA0H9jvjtFkUKHyMVEF803Cw8MnBAcHS6lNyMPNMmCv/i+jYYVOiGSQTgPGJRsZqnrlcMBScljBDAtn1dTU9NTV1fU0Njb2tbS09EKPGrwBW1tbCZYzwmJfXl5eVpjMOH36dHNM3aIyhtQB1/zT2UjaoGbTGGSQwDq68Yyq9rqDEa9DybrkWSBXjHURxibjETCzFicesfQ3TrQZYjoek+Ex/SGPDdqMXnmOL2TQZkzBRra4RSiYyz0eAfAdSLgp4Dw7KJcZ2gwJkQwuYHpCAKOqo+jHqErJubCmjSzD3cWanCZGlRlUzajyrK8xVG0UPkIoZIwLmIkq4A/+L8AACNSo+xyza1oAAAAASUVORK5CYII="

/***/ },

/***/ 1009:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDk3QTBFQUMwQzNFMTFFNDgyOTQ4NDc2NzcwQTA2NTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDk3QTBFQUQwQzNFMTFFNDgyOTQ4NDc2NzcwQTA2NTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0OTdBMEVBQTBDM0UxMUU0ODI5NDg0NzY3NzBBMDY1MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0OTdBMEVBQjBDM0UxMUU0ODI5NDg0NzY3NzBBMDY1MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhgXCg0AAAHoSURBVHja7JlLKERRGMdnPEYe2Xg1SilWsiMKyUaxwMaClceGFCIlJBbCiigpC7GjLISSKMKQYuOxlUImsSI1pPH/6pu6TTNzb83inBnfqV/n3HO+qfube75zzu3avV6vLRpKjC1KioiIiIiIiIiIiIiIiIiIyP8RiQvnxz29fVbCOkE+GPDrt4MOcA3OfJ3zc7PaPRG60QmwCJICjJfx2AGo1HVqxYNlMBIi5hJcgESwBtJ0E0kBW6DVJM4D6sELcPLT00YkCxyCmiDjBWAFlPP1KxjldjvIViVC/+I0mAQlwAWKQ8R3gxawCXK4j8QegAM0qxKhHBgEQ+AY5JnEU3J/gXQwzn2/PBWpVOswtRIsxNBSO8PtRl4UqBxxXRhJG+Iu16mG6fXMdWak7+yOSDyi1HL9AR657TSsYspFPBZiKAf6ub0BfrjtW45vVYnQcnsFTkAVuDeJ7+LjyjsY475Y0MDtfSWHRpQKv2v6Z3dAUZD4BZAMlgzTivaVXPAN1nXJETc/mb0g43d84y6+zjAcTWhjfNIp2T9BHVi1sO9sc6K7TQ6YylYtSuI2MBUihqZfKU+pJvCm7MXKpNAXpGHOhUBHl3NO/htwGvbLj3yxEhERERERERERERERERERERFF5U+AAQDRhlM0hExahgAAAABJRU5ErkJggg=="

/***/ }

});
//# sourceMappingURL=videos.js.map