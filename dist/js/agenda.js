webpackJsonp([8,13],{

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	__webpack_require__(49);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var

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
	exports.push([module.id, ".error-message-box {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 1.5rem;\n  background-color: #ffcfd1;\n  margin-bottom: 1rem;\n  margin-left: 3.125rem; }\n  .error-message-box .message {\n    margin-left: remCalc(8px);\n    line-height: 1;\n    margin-bottom: 0;\n    font-weight: 700;\n    font-size: remCalc(14px); }\n  .error-message-box i {\n    padding-right: 1em;\n    font-size: 2em; }\n\n.Home_cell .error-message-box {\n  margin: 1rem; }\n\n.Home_cell--scorecardmodule .error-message-box,\n.Home_cell--leaderboardmodule .error-message-box {\n  margin: 0px; }\n\n.Home_cell--leaderboardmodule .error-message-box {\n  margin-top: -webkit-calc(1rem - 0.5625rem);\n  margin-top: calc(1rem - 0.5625rem); }\n", ""]);

	// exports


/***/ },

/***/ 49:
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

/***/ 58:
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

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports._dropdown = undefined;var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	__webpack_require__(58);
	var _icons = __webpack_require__(25);var _icons2 = _interopRequireDefault(_icons);
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

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".dropdown-container {\n  border-bottom: 1px solid #ccc;\n  cursor: pointer;\n  font-size: .75rem;\n  height: 1.75rem;\n  position: relative;\n  z-index: 100; }\n  .dropdown-container .icon-check {\n    fill: #cd040b;\n    height: 18px;\n    margin-left: 15px;\n    margin-right: 10px;\n    width: 18px; }\n  .dropdown-container span {\n    font-weight: bold; }\n\n.dropdown-list {\n  background: white;\n  -webkit-box-shadow: 0 12px 18px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 12px 18px rgba(0, 0, 0, 0.2);\n  display: block;\n  position: absolute;\n  top: 0;\n  min-width: 100%; }\n  .dropdown-list ul {\n    margin: 0;\n    max-height: 41rem;\n    overflow-x: hidden;\n    overflow-y: auto;\n    padding: 0; }\n    .dropdown-list ul li span {\n      color: #666;\n      display: block;\n      padding: 10px 15px 10px 43px;\n      white-space: nowrap; }\n    .dropdown-list ul li li span {\n      padding-left: 79px; }\n    .dropdown-list ul li li li span {\n      padding-left: 99px; }\n    .dropdown-list ul span:hover {\n      background-color: #f5f5f5; }\n\n.dropdown-selected-active-label {\n  white-space: nowrap; }\n\n.dropdown-selected-active {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex; }\n  .dropdown-selected-active .dropdown-selected-active-label {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .dropdown-selected-active .icon {\n    -webkit-flex-basis: auto;\n            flex-basis: auto; }\n\n.dropdown-selected {\n  border-bottom: 1px solid #e6e6e6;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  padding: 10px 0; }\n  .dropdown-selected:hover {\n    background-color: #ffffff; }\n  .dropdown-selected .icon {\n    -webkit-flex-basis: auto;\n            flex-basis: auto; }\n  .dropdown-selected .dropdown-selected-label {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n            flex: 1;\n    padding-right: 15px;\n    white-space: nowrap; }\n\n.icon-down-arrow {\n  height: 0.55rem;\n  width: 0.55rem;\n  position: relative;\n  margin-top: 6px;\n  float: right;\n  fill: #d0151b; }\n", ""]);

	// exports


/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*\n\tThis is a mixin which allows an element to have a fixed aspect ratio, but allows the element to NOT have to be floated/etc - the element can stay inside the normal document flow.  It's based on a common workaround which inserts an invisible padding \"before\" meta-element which gives it the desired size (and is floated), and then a subsequent 'clearfix' \"after\" element which makes sure that the bottom of this container stretches far enough to include the entirety of the floated element.\n\n\tTo use this, you'll need to have at least 3 nested divs; they don't need any special classes, but they do need to be the first elements inside their parents.  You apply the mixin to the topmost div, you leave the second div empty, and you put all of your content inside the third div.\n\n\tExpected usage:\n\n\t<div class=\"my-container\">  <-- mixin applied here, on this topmost div\n\t\t<div>\n\t\t\t<div class=\"interior\">\n\t\t\t\t<-- content goes in this div\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\tThen in your scss file:\n\t.my-container {\n\t\t@include aspect-ratio(4.0,3.0,100%);\n\n\t\t.interior {\n\t\t\t//whatever you want\n\t\t}\n\t}\n*/\n/**\n * This is heavily borrowed from how Twitter Bootstrap 4 handles breakpoints.\n *\n * https://github.com/twbs/bootstrap/blob/807a837afe1c5ee2ac5f962658a5741673c04231/scss/mixins/_breakpoints.scss\n */\n/**\n * Finds the next breakpoint up or returns null.\n * @param\t {string} $name\t\t\t\t\t\t\t\tCurrent breakpoint\n * @param\t {list} [$breakpointNames]\t\t\t\t\tAll breakpoints. Defaults to $appBreakpoints names.\n * @return {string|null}\t\t\t\t\t\t\t\tReturns name of next breakpoint or null.\n */\n.filter-bar {\n  min-height: 3rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: row wrap;\n          flex-flow: row wrap; }\n  .filter-bar .form {\n    padding-right: 2em; }\n  .filter-bar .submit-button {\n    padding: 0.75rem 1.0rem;\n    font-size: 0.75rem; }\n    .filter-bar .submit-button.disabled {\n      display: none; }\n\n.filter_modal {\n  margin: 10% auto;\n  width: 80%;\n  background: white;\n  position: relative; }\n  .filter_modal .close-icon {\n    position: absolute;\n    top: 1em;\n    right: 1em;\n    height: 2em;\n    width: 2em;\n    cursor: pointer; }\n    .filter_modal .close-icon i {\n      color: #959595;\n      position: absolute;\n      font-size: 1.5em;\n      padding: 0.05em;\n      top: 52%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n  .filter_modal .filter_wrapper {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: column nowrap;\n            flex-flow: column nowrap;\n    padding-top: 4em;\n    padding-bottom: 4em;\n    padding: 2em; }\n    .filter_modal .filter_wrapper .description {\n      font-weight: bold;\n      min-height: 3em;\n      margin-top: 1em;\n      margin-bottom: 1em;\n      width: 100%;\n      text-align: center; }\n\n.header-filters {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n          flex-direction: row;\n  margin-bottom: .75rem; }\n\n.hide-header-filters {\n  display: none; }\n\n.header-filter {\n  font-weight: 700;\n  margin-right: 1.25em;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 15%;\n          flex: 0 0 15%; }\n\n.header-filter .dropdown-container {\n  font-size: .75rem;\n  height: 1.8em; }\n", ""]);

	// exports


/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(190);
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

/***/ 480:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
	var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _lodash = __webpack_require__(24);
	var _classnames = __webpack_require__(60);var _classnames2 = _interopRequireDefault(_classnames);

	var _utils = __webpack_require__(13);

	var _appStore = __webpack_require__(43);

	var _dropdown2 = __webpack_require__(59);
	var _loader = __webpack_require__(155);

	__webpack_require__(225);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //libs and utils
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

/***/ 493:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};exports.



















































	getAgendaData = getAgendaData;exports.




































	openAgendaSubSheet = openAgendaSubSheet;exports.







	closeAgendaSubSheet = closeAgendaSubSheet;exports.default =










	agenda;var _ajax = __webpack_require__(27);var ajax = _interopRequireWildcard(_ajax);var _endpoints = __webpack_require__(21);var _endpoints2 = _interopRequireDefault(_endpoints);var _appLang = __webpack_require__(19);var _utils = __webpack_require__(13);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];}}newObj.default = obj;return newObj;}}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} /*******************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *   1. Default State
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *   2. Action Types
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *   3. ACtion Creators
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *   4. Reducers
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */ /*******************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  1. Default State
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */var agendaState = { open: false, agendaSheetOpened: false, data: false, agendaSubsheetData: {}, originalHierarchy: {}, hierarchy: {}, drilldown: { channel: {}, region: {}, district: {}, area: {}, office: {} } }; /*******************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       *  2. Action Types
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       */var TYPEs = { AGENDA_DATA: 'agendaViewData', AGENDA_ERROR_REPORT: 'agendaErrorReport', LOAD_AGENDA_DATA: 'loadAgendaViewData', OPEN_AGENDA_SUB_SHEET: 'openAgendaViewSubSheet', CLOSE_AGENDA_SUB_SHEET: 'closeAgendaViewSubSheet', SET_HIERARCHY: 'setHierarchy', CHECK_SESSION: 'checkSession' }; /*******************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             *  3. Action Creators
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */function getAgendaData(hierarchyIds) {var cleanedIds = (0, _utils.cleanHierarchyIds)(hierarchyIds);return function (dispatch) {var type = TYPEs.AGENDA_DATA;dispatch(ajax.loading(type));(0, ajax.default)({ url: _endpoints2.default.AGENDA, data: cleanedIds, success: function success(results) {if (!results.success) {dispatch(ajax.loadingError(type, results.errorMessage));} else {dispatch({ type: TYPEs.LOAD_AGENDA_DATA, data: results.data, hierarchyIds: hierarchyIds });dispatch(ajax.loaded(type));var hasResults = results.data.agendaByMonth.length > 0;dispatch(ajax.handleResultsMessage(type, hasResults, (0, _appLang.ERRORs)().AGENDA_VIEW_NO_RESULTS));}}, fail: function fail(error) {dispatch(ajax.loadingError(type, error.textStatus));} });};}function openAgendaSubSheet(data) {return { type: TYPEs.OPEN_AGENDA_SUB_SHEET, agendaSheetOpened: true, data: data };}function closeAgendaSubSheet() {return { type: TYPEs.CLOSE_AGENDA_SUB_SHEET, agendaSheetOpened: false };} /*******************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *  4. Reducers
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */function agenda() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : agendaState;var action = arguments[1];switch (action.type) {case TYPEs.LOAD_AGENDA_DATA:return _extends({}, state, { data: action.data, error: false, message: null });case TYPEs.AGENDA_ERROR_REPORT:return _extends({}, state, { error: action.error, message: action.message });
	        case TYPEs.OPEN_AGENDA_SUB_SHEET:
	            return _extends({},
	            state, {
	                agendaSheetOpened: action.agendaSheetOpened,
	                agendaSubsheetData: action.data });

	        case TYPEs.CLOSE_AGENDA_SUB_SHEET:
	            return _extends({},
	            state, {
	                agendaSheetOpened: action.agendaSheetOpened });

	        case TYPEs.CHECK_SESSION:
	        case TYPEs.SET_HIERARCHY:
	            return _extends({},
	            state, {
	                hierarchy: action.hierarchy,
	                originalHierarchy: action.hierarchy });


	        case _appLang.FILTER_TYPEs.LOAD_AGENDA_CHANNEL_FILTERS:
	        case _appLang.FILTER_TYPEs.LOAD_AGENDA_REGION_FILTERS:
	        case _appLang.FILTER_TYPEs.LOAD_AGENDA_DISTRICT_FILTERS:
	        case _appLang.FILTER_TYPEs.LOAD_AGENDA_AREA_FILTERS:
	        case _appLang.FILTER_TYPEs.LOAD_AGENDA_OFFICE_FILTERS:

	            var returnObj = _extends({},
	            state, {
	                hierarchy: {
	                    ids: _extends({},
	                    action.hierarchyIds, _defineProperty({},
	                    action.key, action.filters && action.filters.length > 0 ? action.filters[0].id : false)) },


	                drilldown: _extends({},
	                state.drilldown, _defineProperty({},
	                action.key, {
	                    filters: action.filters,
	                    ddKey: action.ddKey,
	                    hideSelectBox: false })) });




	            /* Hide Area and Office, if selectedDropdown is District and the value is ALL */
	            if (returnObj && returnObj.drilldown && action.hierarchyIds) {
	                var district = action.hierarchyIds.district;
	                if (district && district === 'ALL') {
	                    if (returnObj.drilldown.area) {
	                        returnObj.drilldown.area.hideSelectBox = true;
	                    }
	                    if (returnObj.drilldown.office) {
	                        returnObj.drilldown.office.hideSelectBox = true;
	                    }
	                }
	            }

	            return returnObj;

	        case _appLang.FILTER_TYPEs.CLEAR_AGENDA_DRILLDOWN_FILTERS:
	            return _extends({},
	            state, {
	                drilldown: _extends({},
	                state.drilldown, _defineProperty({},
	                action.key, {})) });



	        case _appLang.FILTER_TYPEs.RESET_AGENDA_HIERARCHY_AND_FILTERS:
	            return _extends({},
	            state, {
	                drilldown: agendaState.drilldown,
	                hierarchy: state.originalHierarchy });


	        default:
	            return state;}


	}

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();
	var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _lodash = __webpack_require__(24);
	var _reactAddonsCssTransitionGroup = __webpack_require__(140);var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	var _momentTimezone = __webpack_require__(30);var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

	var _agendaActionsReducers = __webpack_require__(493);

	var _utils = __webpack_require__(13);
	var _webTrack = __webpack_require__(32);var _webTrack2 = _interopRequireDefault(_webTrack);

	var _filtersAgenda = __webpack_require__(480);var _filtersAgenda2 = _interopRequireDefault(_filtersAgenda);
	var _errorMessage = __webpack_require__(37);var _errorMessage2 = _interopRequireDefault(_errorMessage);
	var _icons = __webpack_require__(25);var _icons2 = _interopRequireDefault(_icons);

	__webpack_require__(963);

	var _appLang = __webpack_require__(19);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //libs and utilities
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

/***/ 963:
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