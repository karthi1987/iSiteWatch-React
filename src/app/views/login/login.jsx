import React from 'react';
import { browserHistory } from 'react-router';
//utils
import { connectAndMap, ssoCheckToken, rvCheck } from 'utils/utils';
// action creators
import { loadFilters, backdoorSession, clearSession } from './login-actions-reducers';
// shared components
import { _dropdown } from 'app/shared/dropdown/dropdown';
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
                RV: rvCheck(),
                userLogin: '',
                password: ''
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
                userLogin, password
            } = this.state;

            this.props.backdoorSession( userLogin, password );
        }

		handleKeyDown = ( evt ) => {
			if( evt.charCode == 13 ) {
				this.login();
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
                <div>
                    { this.renderLogin() }
                </div>
            );
        }
    }
);

/*
 * 2. LoginForm
 */
const LoginForm = ( { login, _state, handle } ) => {
    return (
        <div className="login">
            <h1>Login</h1>
            <div className="loginForm">
                <div className="form-group">
                    <label>User Name</label>    
                    <input type="text" name="userLogin" placeholder="user login" defaultValue={ _state.userLogin } onKeyPress={ handle.keyDown } onBlur={ handle.input } />
                </div>

                 <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" placeholder="Password" defaultValue={ _state.password } onKeyPress={ handle.keyDown } onBlur={ handle.input } />
                </div>

                <div className="form-group">
                    <button type="button" className="loginButton button button-primary" onClick={ handle.login }>Login</button>
                </div>
            </div>
            {
                login.errorMessage
                &&
                <p className="login-error-message">{ login.errorMessage }</p>
            }
        </div>
    );
};


export default Login;
