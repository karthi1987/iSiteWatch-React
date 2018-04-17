import React from 'react';
import { browserHistory } from 'react-router';
//utils
import { connectAndMap, ssoCheckToken, rvCheck } from 'utils/utils';
// action creators
import { loadFilters, backdoorSession, clearSession } from './login-actions-reducers';
// shared components
import 'app/views/home/home.scss';
import './login.scss';

/*******************************************************************************
 *  1. Login
 *  2. LoginForm
 */

/*
 * 1. Login
 */
const Login = connectAndMap(
    [ 'app.session', 'views.login' ],
    { loadFilters, backdoorSession, clearSession }
)(
    class Login extends React.Component {
        constructor( props ) {
            super( props );

            this.state = {
                userLogin: '',
                password: '',
                errors: []
            };
        }

        componentWillMount() {
            this.props.clearSession();
        }

        componentWillReceiveProps( nextProps ) {
            if( nextProps.session.active === true ) {
                browserHistory.push( APP_PATH + '/home' );
            }
        }

        handleInput = ( event ) => {
            const name = event.target.name;
            const value = event.target.value;
            this.setState( { [ name ]: value } );
        }

        handleDropdown = ( event, label, id ) => {
            //this.setState( { locationTypeLabel: label, locationType: id } );
        }

        handleLogin = () => {
            const {
                userLogin, password, errors
            } = this.state;

            let formErrors = [];

            //To do: User login issue

            if( !userLogin ) {
                formErrors.push({'key': 'username', 'message': 'Please enter username'});
            }

            if( !password ) {
                formErrors.push({'key': 'password', 'message': 'Please enter password'});
            }

            if( password ) {
                const strongRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}');
                const forbidden = strongRegex.test(password);

                if( !forbidden ) {
                    formErrors.push({'key': 'passwordUnique', 'message': 'Password should be unique and follow the below format'});
                }
            }

            if( formErrors && formErrors.length > 0 ) {
                this.setState({'errors': formErrors});
                return false;
            }


            if( userLogin && password ) {
                this.setState({'errors': []});
                this.props.backdoorSession( userLogin, password );
            }

        }

		handleKeyDown = ( evt ) => {
			if( evt.charCode == 13 ) {
				this.handleLogin();
			}
		}

        renderLogin() {
            const login = this.props.login;

            if( !ssoCheckToken() && !this.state.rvCheck ) {
                return <LoginForm login={ login } 
                        _state={ this.state } 
                        handle={
                            {
                                dropdown: this.handleDropdown,
                                input: this.handleInput,
                                keyDown: this.handleKeyDown,
                                login: this.handleLogin
                            }
                        } />;
            }
        }

        render() {
            return (
                <div className="Home">
                    <div className="module-container">
                        <div className="module-wrapper">
                            <div className="module-grid single">
                                <HomeCell module="loginmodule">
                                    { this.renderLogin() }
                                </HomeCell>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
);

const HomeCell = ( props ) => (
    <div className={ `Home_cell Home_cell--${ props.module }` }>
        <div className="Home_cellInner">
            <div className="Home_cellContent">
                { props.children }
            </div>
        </div>
    </div>
);

/*
 * 2. LoginForm
 */
const LoginForm = ( { login, _state, handle } ) => {
    return (
          <div className="row login-row">
            <div className="col-md-2">
               <img src="../assets/images/logo.png" width="150px" class="user-avatar" />
            </div>
            <div className="col-md-4">
                <div className="login">
                    <h1>
                       Eliminating Paperwork So You Can Get Back To Building
                    </h1>
                    <div>
                        <h2>Sign In</h2>
                    </div>
                    <div className="loginForm">
                        <div className="form-group">
                            <label>User Name</label>    
                            <input type="text" name="userLogin" placeholder="User Name/Email Address" defaultValue={ _state.userLogin } onKeyPress={ handle.keyDown } onBlur={ handle.input } />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type="password" placeholder="Password" defaultValue={ _state.password } onKeyPress={ handle.keyDown } onBlur={ handle.input } />
                        </div>
                        <div className="form-group">
                            <button type="button" className="loginButton button button-primary" onClick={ handle.login }>Login</button>
                        </div>
                    </div>
                    <div className="forgot-password">
                        <a href="#">Forgot Password</a>
                    </div>
                    {
                        login.errorMessage
                        &&
                        <p className="login-error-message">{ login.errorMessage }</p>
                    }
                    <div className="form-errors">
                    {
                        _state.errors
                        && _state.errors.length > 0
                        && _state.errors.map(
                            ( error, index ) =>
                            <div key={ index }>
                                <div>{ error.message }</div>
                                {
                                    error.key === 'passwordUnique'
                                    &&
                                    <div className="error-helpers">
                                        <span>At least 8 characters in length</span>
                                        <span>Lowercase letter</span>
                                        <span>Uppercase letter</span>
                                        <span>Number</span>
                                        <span>Special character</span>
                                    </div>
                                }
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
            <div className="col-md-6">
               <img src="../assets/images/image_4.jpeg" />
            </div>
          </div>
    );
};

export default Login;
