webpackJsonp([0,13],{

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n/*\n\tThis is a mixin which allows an element to have a fixed aspect ratio, but allows the element to NOT have to be floated/etc - the element can stay inside the normal document flow.  It's based on a common workaround which inserts an invisible padding \"before\" meta-element which gives it the desired size (and is floated), and then a subsequent 'clearfix' \"after\" element which makes sure that the bottom of this container stretches far enough to include the entirety of the floated element.\n\n\tTo use this, you'll need to have at least 3 nested divs; they don't need any special classes, but they do need to be the first elements inside their parents.  You apply the mixin to the topmost div, you leave the second div empty, and you put all of your content inside the third div.\n\n\tExpected usage:\n\n\t<div class=\"my-container\">  <-- mixin applied here, on this topmost div\n\t\t<div>\n\t\t\t<div class=\"interior\">\n\t\t\t\t<-- content goes in this div\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\tThen in your scss file:\n\t.my-container {\n\t\t@include aspect-ratio(4.0,3.0,100%);\n\n\t\t.interior {\n\t\t\t//whatever you want\n\t\t}\n\t}\n*/\n/**\n * This is heavily borrowed from how Twitter Bootstrap 4 handles breakpoints.\n *\n * https://github.com/twbs/bootstrap/blob/807a837afe1c5ee2ac5f962658a5741673c04231/scss/mixins/_breakpoints.scss\n */\n/**\n * Finds the next breakpoint up or returns null.\n * @param\t {string} $name\t\t\t\t\t\t\t\tCurrent breakpoint\n * @param\t {list} [$breakpointNames]\t\t\t\t\tAll breakpoints. Defaults to $appBreakpoints names.\n * @return {string|null}\t\t\t\t\t\t\t\tReturns name of next breakpoint or null.\n */\n.Home {\n  height: 100%;\n  width: 100%;\n  padding: 0 2.1875rem 0 3.125rem; }\n  .Home .module-container {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: row wrap;\n            flex-flow: row wrap;\n    height: 100%;\n    width: 100%; }\n    .Home .module-container .module-wrapper {\n      width: 100%;\n      height: 100%;\n      float: left;\n      margin-right: 1rem; }\n      .Home .module-container .module-wrapper:nth-child(2) {\n        width: 33%;\n        float: left;\n        margin-right: 0; }\n      .Home .module-container .module-wrapper:nth-child(3) {\n        -webkit-box-flex: 0;\n        -webkit-flex: 0 100%;\n                flex: 0 100%;\n        margin-bottom: 0; }\n      .Home .module-container .module-wrapper .module-grid {\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n        -webkit-flex-direction: column;\n                flex-direction: column;\n        -webkit-flex-wrap: wrap;\n                flex-wrap: wrap; }\n        .Home .module-container .module-wrapper .module-grid.double {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: flex;\n          -webkit-box-flex: 0;\n          -webkit-flex: 0 100%;\n                  flex: 0 100%;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n          -webkit-flex-direction: column;\n                  flex-direction: column;\n          min-width: 100%;\n          height: 60.5%;\n          margin-bottom: 1rem; }\n          .Home .module-container .module-wrapper .module-grid.double:nth-of-type(2) {\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -webkit-flex-direction: row;\n                    flex-direction: row;\n            height: 35%;\n            margin-bottom: 0; }\n          .Home .module-container .module-wrapper .module-grid.double .half {\n            display: -webkit-box;\n            display: -webkit-flex;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n            -webkit-flex-direction: row;\n                    flex-direction: row;\n            -webkit-box-flex: 0;\n            -webkit-flex: 0 0 auto;\n                    flex: 0 0 auto;\n            height: 100%;\n            width: 50%;\n            padding-right: 1rem; }\n            .Home .module-container .module-wrapper .module-grid.double .half:last-of-type {\n              padding-right: 0; }\n        .Home .module-container .module-wrapper .module-grid.single {\n          display: -webkit-box;\n          display: -webkit-flex;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n          -webkit-flex-direction: row;\n                  flex-direction: row;\n          width: 100%;\n          height: 100%;\n          -webkit-box-flex: 0;\n          -webkit-flex: 0 100%;\n                  flex: 0 100%; }\n  .Home .Home_cell:after {\n  content: '';\n  display: block;\n  clear: both; }\n  .Home .Home_cell {\n    min-width: 100%;\n    position: relative; }\n    .Home .Home_cell .Home_cellInner {\n      width: 100%;\n      background-color: #FFF; }\n      .Home .Home_cell .Home_cellInner .Home_cellContent {\n        background-color: #FFF;\n        position: absolute;\n        width: 100%;\n        height: 100%; }\n  .Home .Home_cell .background-holder {\n    width: 100%;\n    height: 100%;\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    background-color: #e4e5e3;\n    position: relative; }\n", ""]);

	// exports


/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./home.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./home.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = __webpack_require__(4);var _react2 = _interopRequireDefault(_react);
	var _reactRouter = __webpack_require__(32);

	var _utils = __webpack_require__(12);

	var _loginActionsReducers = __webpack_require__(232);

	__webpack_require__(92);
	__webpack_require__(968);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //utils
	// action creators
	// shared components
	/*******************************************************************************
	 *  1. Login
	 *  2. LoginForm
	 */
	/*
	     * 1. Login
	     */
	var Login = (0, _utils.connectAndMap)(
	['app.session', 'views.login'],
	{ loadFilters: _loginActionsReducers.loadFilters, backdoorSession: _loginActionsReducers.backdoorSession, clearSession: _loginActionsReducers.clearSession })(function (_React$Component) {_inherits(Login, _React$Component);


	    function Login(props) {_classCallCheck(this, Login);var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this,
	        props));_this.


















	        handleInput = function (event) {
	            var name = event.target.name;
	            var value = event.target.value;
	            _this.setState(_defineProperty({}, name, value));
	        };_this.

	        handleDropdown = function (event, label, id) {
	            //this.setState( { locationTypeLabel: label, locationType: id } );
	        };_this.

	        handleLogin = function () {var _this$state =


	            _this.state,userLogin = _this$state.userLogin,password = _this$state.password,errors = _this$state.errors;

	            var formErrors = [];

	            //To do: User login issue

	            if (!userLogin) {
	                formErrors.push({ 'key': 'username', 'message': 'Please enter username' });
	            }

	            if (!password) {
	                formErrors.push({ 'key': 'password', 'message': 'Please enter password' });
	            }

	            if (password) {
	                var strongRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}');
	                var forbidden = strongRegex.test(password);

	                if (!forbidden) {
	                    formErrors.push({ 'key': 'passwordUnique', 'message': 'Password should be unique and follow the below format' });
	                }
	            }

	            if (formErrors && formErrors.length > 0) {
	                _this.setState({ 'errors': formErrors });
	                return false;
	            }


	            if (userLogin && password) {
	                _this.setState({ 'errors': [] });
	                _this.props.backdoorSession(userLogin, password);
	            }

	        };_this.

	        handleKeyDown = function (evt) {
	            if (evt.charCode == 13) {
	                _this.handleLogin();
	            }
	        };_this.state = { userLogin: '', password: '', errors: [] };return _this;}_createClass(Login, [{ key: 'componentWillMount', value: function componentWillMount() {this.props.clearSession();} }, { key: 'componentWillReceiveProps', value: function componentWillReceiveProps(nextProps) {if (nextProps.session.active === true) {_reactRouter.browserHistory.push(APP_PATH + '/home');}} }, { key: 'renderLogin', value: function renderLogin()

	        {
	            var login = this.props.login;

	            if (!(0, _utils.ssoCheckToken)() && !this.state.rvCheck) {
	                return _react2.default.createElement(LoginForm, { login: login,
	                    _state: this.state,
	                    handle:
	                    {
	                        dropdown: this.handleDropdown,
	                        input: this.handleInput,
	                        keyDown: this.handleKeyDown,
	                        login: this.handleLogin } });


	            }
	        } }, { key: 'render', value: function render()

	        {
	            return (
	                _react2.default.createElement('div', { className: 'Home' },
	                    _react2.default.createElement('div', { className: 'module-container' },
	                        _react2.default.createElement('div', { className: 'module-wrapper' },
	                            _react2.default.createElement('div', { className: 'module-grid single' },
	                                _react2.default.createElement(HomeCell, { module: 'loginmodule' },
	                                    this.renderLogin()))))));






	        } }]);return Login;}(_react2.default.Component));



	var HomeCell = function HomeCell(props) {return (
	        _react2.default.createElement('div', { className: 'Home_cell Home_cell--' + props.module },
	            _react2.default.createElement('div', { className: 'Home_cellInner' },
	                _react2.default.createElement('div', { className: 'Home_cellContent' },
	                    props.children))));};





	/*
	                                           * 2. LoginForm
	                                           */
	var LoginForm = function LoginForm(_ref) {var login = _ref.login,_state = _ref._state,handle = _ref.handle;
	    return (
	        _react2.default.createElement('div', { className: 'row login-row' },
	            _react2.default.createElement('div', { className: 'col-md-2' },
	                _react2.default.createElement('img', { src: '../assets/images/logo.png', width: '150px', 'class': 'user-avatar' })),

	            _react2.default.createElement('div', { className: 'col-md-4' },
	                _react2.default.createElement('div', { className: 'login' },
	                    _react2.default.createElement('h1', null, 'Welcome to iSiteWatch',

	                        _react2.default.createElement('p', null, 'Let\'s get started!')),

	                    _react2.default.createElement('div', null,
	                        _react2.default.createElement('h2', null, 'Sign In')),

	                    _react2.default.createElement('div', { className: 'loginForm' },
	                        _react2.default.createElement('div', { className: 'form-group' },
	                            _react2.default.createElement('label', null, 'User Name'),
	                            _react2.default.createElement('input', { type: 'text', name: 'userLogin', placeholder: 'User Name/Email Address', defaultValue: _state.userLogin, onKeyPress: handle.keyDown, onBlur: handle.input })),

	                        _react2.default.createElement('div', { className: 'form-group' },
	                            _react2.default.createElement('label', null, 'Password'),
	                            _react2.default.createElement('input', { name: 'password', type: 'password', placeholder: 'Password', defaultValue: _state.password, onKeyPress: handle.keyDown, onBlur: handle.input })),

	                        _react2.default.createElement('div', { className: 'form-group' },
	                            _react2.default.createElement('button', { type: 'button', className: 'loginButton button button-primary', onClick: handle.login }, 'Login'))),



	                    login.errorMessage &&

	                    _react2.default.createElement('p', { className: 'login-error-message' }, login.errorMessage),

	                    _react2.default.createElement('div', { className: 'form-errors' },

	                        _state.errors &&
	                        _state.errors.length > 0 &&
	                        _state.errors.map(
	                        function (error, index) {return (
	                                _react2.default.createElement('div', { key: index },
	                                    _react2.default.createElement('div', null, error.message),

	                                    error.key === 'passwordUnique' &&

	                                    _react2.default.createElement('div', { className: 'error-helpers' },
	                                        _react2.default.createElement('span', null, 'At least 8 characters in length'),
	                                        _react2.default.createElement('span', null, 'Lowercase letter'),
	                                        _react2.default.createElement('span', null, 'Uppercase letter'),
	                                        _react2.default.createElement('span', null, 'Number'),
	                                        _react2.default.createElement('span', null, 'Special character'))));})))),








	            _react2.default.createElement('div', { className: 'col-md-6' },
	                _react2.default.createElement('img', { src: '../assets/images/image_4.jpeg' }))));



	};exports.default =

	Login;

/***/ },

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*\n   ____      _\n  / ___|___ | | ___  _ __ ___\n | |   / _ \\| |/ _ \\| '__/ __|\n | |__| (_) | | (_) | |  \\__   \\____\\___/|_|\\___/|_|  |___/\n\n */\n/*\n     _\n    / \\   _ __  _ __\n   / _ \\ | '_ \\| '_   / ___ \\| |_) | |_) |\n /_/   \\_\\ .__/| .__/\n         |_|   |_|\n\n */\n/*\n  _____                                        _\n |_   _|   _ _ __   ___   __ _ _ __ __ _ _ __ | |__  _   _\n   | || | | | '_ \\ / _ \\ / _` | '__/ _` | '_ \\| '_ \\| | | |\n   | || |_| | |_) | (_) | (_| | | | (_| | |_) | | | | |_| |\n   |_| \\__, | .__/ \\___/ \\__, |_|  \\__,_| .__/|_| |_|\\__, |\n       |___/|_|          |___/          |_|          |___/\n\n */\n/*\n  _     _       _\n | |   (_)_ __ | | _____\n | |   | | '_ \\| |/ / __|\n | |___| | | | |   <\\__  |_____|_|_| |_|_|\\_\\___/\n\n */\n/*\n  _____     _     _\n |_   _|_ _| |__ | | ___  ___\n   | |/ _` | '_ \\| |/ _ \\/ __|\n   | | (_| | |_) | |  __/\\__    |_|\\__,_|_.__/|_|\\___||___/\n\n */\n.button {\n  cursor: pointer;\n  display: inline-block;\n  border: none;\n  background-color: transparent;\n  font-size: 1rem;\n  padding: 1rem 1.25rem;\n  font-weight: 700;\n  text-align: left; }\n  .button:after {\n    content: \"\\F108\";\n    font-family: VerizonIcons;\n    display: inline-block;\n    vertical-align: middle;\n    padding-left: 1rem;\n    float: right; }\n  .button.button-primary {\n    background-color: #CD040B;\n    color: #FFF; }\n    .button.button-primary:after {\n      color: #FFF; }\n  .button.button-secondary {\n    color: #000; }\n    .button.button-secondary:after {\n      color: #CD040B; }\n  .button.button-expand {\n    width: 100%; }\n\n.login-row {\n  width: 100%;\n  height: 100%;\n  padding: 1.2%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center; }\n\n.login {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center; }\n  .login h1 {\n    /*display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 60%;*/ }\n  .login .loginForm {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n            justify-content: space-between;\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n            align-items: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: column wrap;\n            flex-flow: column wrap;\n    width: 100%;\n    margin-top: 5%; }\n    .login .loginForm .form-group {\n      margin-top: 2%;\n      padding: 0;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n      -webkit-flex-flow: column wrap;\n              flex-flow: column wrap;\n      -webkit-box-pack: center;\n      -webkit-justify-content: center;\n              justify-content: center;\n      -webkit-box-align: center;\n      -webkit-align-items: center;\n              align-items: center;\n      width: 100%;\n      text-align: left; }\n      .login .loginForm .form-group label {\n        display: -webkit-inline-box;\n        display: -webkit-inline-flex;\n        display: inline-flex;\n        width: 82%;\n        -webkit-box-pack: start;\n        -webkit-justify-content: flex-start;\n                justify-content: flex-start;\n        self-aligned: flex-start; }\n    .login .loginForm .dropdown-container,\n    .login .loginForm input,\n    .login .loginForm .loginButton {\n      -webkit-box-flex: 1;\n      -webkit-flex-grow: 1;\n              flex-grow: 1;\n      margin-right: 1rem;\n      min-height: 50px;\n      max-height: 50px;\n      font-size: 0.875rem; }\n    .login .loginForm input {\n      border-top: 1px solid;\n      border-right: 1px solid;\n      border-bottom: 1px solid;\n      border-left: 1px solid;\n      padding-left: 10px;\n      width: 80%; }\n    .login .loginForm .dropdown-container {\n      min-width: 200px;\n      padding-top: 13px; }\n    .login .loginForm .loginButton {\n      padding-top: 14px;\n      margin-top: 5%; }\n    .login .loginForm .multiselect-wrapper {\n      width: 100%; }\n\n.login-error-message {\n  margin-top: 20px;\n  color: #CD040B;\n  font-weight: 700;\n  width: 60%; }\n\n.form-errors {\n  width: 100%;\n  padding: 2% 0 0 7%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-flow: column wrap;\n          flex-flow: column wrap;\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n          align-items: flex-start;\n  color: #CD040B;\n  font-weight: 700; }\n  .form-errors .error-helpers {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-flow: column wrap;\n            flex-flow: column wrap;\n    font-size: 0.8em;\n    font-weight: 500; }\n", ""]);

	// exports


/***/ },

/***/ 968:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(736);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./login.scss", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/index.js!../../../../node_modules/sass-loader/index.js!./login.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }

});
//# sourceMappingURL=login.js.map