webpackJsonp([1,13],{

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
	var content = __webpack_require__(62);
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

/***/ 62:
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
	var _reactRouter = __webpack_require__(31);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

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




	var _webTrack = __webpack_require__(32);var _webTrack2 = _interopRequireDefault(_webTrack);
	var _webTrackIds = __webpack_require__(117);var _webTrackIds2 = _interopRequireDefault(_webTrackIds);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var React = __webpack_require__(4);var classNames = __webpack_require__(65);


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
	var _classnames = __webpack_require__(65);var _classnames2 = _interopRequireDefault(_classnames);
	var _momentTimezone = __webpack_require__(30);var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

	var _utils = __webpack_require__(13);
	var _webTrack = __webpack_require__(32);var _webTrack2 = _interopRequireDefault(_webTrack);
	var _webTrackIds = __webpack_require__(117);var _webTrackIds2 = _interopRequireDefault(_webTrackIds);
	var _endpoints = __webpack_require__(21);var _endpoints2 = _interopRequireDefault(_endpoints);

	var _videosActionsReducers = __webpack_require__(235);

	var _videoPlayer = __webpack_require__(512);var _videoPlayer2 = _interopRequireDefault(_videoPlayer);
	var _dropdown2 = __webpack_require__(59);
	var _tabs2 = __webpack_require__(161);
	var _errorMessage = __webpack_require__(37);var _errorMessage2 = _interopRequireDefault(_errorMessage);

	__webpack_require__(972);

	var _appLang = __webpack_require__(19);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //libs
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

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAABjCAYAAACPO76VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUFEMDg5Q0Y2NDZCMTFFNEE1NDNEMjQwNzFEQTZDMjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUFEMDg5RDA2NDZCMTFFNEE1NDNEMjQwNzFEQTZDMjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQUQwODlDRDY0NkIxMUU0QTU0M0QyNDA3MURBNkMyMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQUQwODlDRTY0NkIxMUU0QTU0M0QyNDA3MURBNkMyMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtUeMXEAAA3vSURBVHja7F0LUBRX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"

/***/ },

/***/ 1009:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDk3QTBFQUMwQzNFMTFFNDgyOTQ4NDc2NzcwQTA2NTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDk3QTBFQUQwQzNFMTFFNDgyOTQ4NDc2NzcwQTA2NTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0OTdBMEVBQTBDM0UxMUU0ODI5NDg0NzY3NzBBMDY1MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0OTdBMEVBQjBDM0UxMUU0ODI5NDg0NzY3NzBBMDY1MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhgXCg0AAAHoSURBVHja7JlLKERRGMdnPEYe2Xg1SilWsiMKyUaxwMaClceGFCIlJBbCiigpC7GjLISSKMKQYuOxlUImsSI1pPH/6pu6TTNzb83inBnfqV/n3HO+qfube75zzu3avV6vLRpKjC1KioiIiIiIiIiIiIiIiIiIyP8RiQvnxz29fVbCOkE+GPDrt4MOcA3OfJ3zc7PaPRG60QmwCJICjJfx2AGo1HVqxYNlMBIi5hJcgESwBtJ0E0kBW6DVJM4D6sELcPLT00YkCxyCmiDjBWAFlPP1KxjldjvIViVC/+I0mAQlwAWKQ8R3gxawCXK4j8QegAM0qxKhHBgEQ+AY5JnEU3J/gXQwzn2/PBWpVOswtRIsxNBSO8PtRl4UqBxxXRhJG+Iu16mG6fXMdWak7+yOSDyi1HL9AR657TSsYspFPBZiKAf6ub0BfrjtW45vVYnQcnsFTkAVuDeJ7+LjyjsY475Y0MDtfSWHRpQKv2v6Z3dAUZD4BZAMlgzTivaVXPAN1nXJETc/mb0g43d84y6+zjAcTWhjfNIp2T9BHVi1sO9sc6K7TQ6YylYtSuI2MBUihqZfKU+pJvCm7MXKpNAXpGHOhUBHl3NO/htwGvbLj3yxEhERERERERERERERERERERFF5U+AAQDRhlM0hExahgAAAABJRU5ErkJggg=="

/***/ }

});
//# sourceMappingURL=videos.js.map