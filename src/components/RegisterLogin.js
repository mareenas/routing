import React from 'react';
import style from './css/RegisterLogin.module.css';
import connect from "react-redux/es/connect/connect";
import {Redirect} from "react-router";
import {loginFunc, saveLogin, savePassword, saveRememberMe, toggleForm} from "../actions";

const RegisterLogin = (props) => {
    if(props.isAuth) {
        return (
            <Redirect to="/profile" />
        );
    }
    return (
        <div>
            <div className={style.registrationLoginForm}>
                <div className={style.switchFormsContainer}>
                    <div className={style.loginButton} onClick={(e) => {props.toggleForm(e,false)}}>
                        <span className={props.registerFlag ? "" : style.activeTab}>Login</span>
                    </div>
                    <div className={style.registrationButton} onClick={(e) => {props.toggleForm(e, true)}} >
                        <span className={props.registerFlag ? style.activeTab : ""}>Registration</span>
                    </div>
                </div>
                <div className={props.registerFlag ? style.hidden : ""}>
                    <form action="">
                        <div className={style.inputBlock}>
                            <div>
                                <label htmlFor="login-email">Email</label>
                            </div>
                            <input type="email" id="login-email" name="login-email" placeholder="Email" onChange={props.saveLoginToState} value={props.login}/>
                        </div>
                        <div className={style.inputBlock}>
                            <div>
                                <label htmlFor="login-password">Password</label>
                            </div>
                            <input type="password" id="login-password" name="login-password" placeholder="Password" onChange={props.savePassToState} value={props.password}/>
                        </div>
                        <div className={style.bottomContainer}>
                            <div className={style.checkboxWrapper}>
                                <input type="checkbox" id="checkbox-remember-login" onChange={props.saveRememberMe}/>
                                <label htmlFor="checkbox-remember">remember me</label>
                            </div>
                            <div className={style.submitButtonWrapper}>
                                <input
                                    type="button"
                                    value={props.status==="INPROGRESS" ? "..." : "Log In" }
                                    className={style.submitButtonLogin}
                                    onClick={(e) => {props.loginFunc(props.login, props.password, props.rememberMe)}}
                                    disabled={props.status==="INPROGRESS"}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div className={props.registerFlag ? "" : style.hidden}>
                    <form action="">
                        <div className={style.inputBlock}>
                            <div>
                                <label htmlFor="register-email">Email</label>
                            </div>
                            <input type="email" id="register-email" name="register-email" placeholder="Email"/>
                        </div>
                        <div className={style.inputBlock}>
                            <div>
                                <label htmlFor="register-password">Password</label>
                            </div>
                            <input type="password" id="register-password" name="register-password" placeholder="Password"/>
                        </div>
                        <div className={style.bottomContainer}>
                            <div className={style.checkboxWrapper}>
                                <input type="checkbox" id="checkbox-remember-register"/>
                                <label htmlFor="checkbox-remember">i accept rules</label>
                            </div>
                            <div className={style.registerButtonWrapper}>
                                <input type="button" value="Register" className={style.submitButtonRegister}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        registerFlag: state.login.registerFlag,
        login: state.login.login,
        password: state.login.password,
        rememberMe: state.login.rememberMe,

        isAuth: state.auth.isAuth,
        status: state.login.status,
        message: state.auth.message,
        captchaUrl: state.auth.captchaUrl
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleForm: (e, isRegister) => {
            dispatch(toggleForm(isRegister))
        },
        saveLoginToState: (e) => {
            dispatch(saveLogin(e.currentTarget.value))
        },
        savePassToState: (e) => {
            dispatch(savePassword(e.currentTarget.value))
        },
        loginFunc: (login, pass, remember) => {
            dispatch(loginFunc(login, pass, remember));
        },
        saveRememberMe: (e) => {
            dispatch(saveRememberMe(e.currentTarget.checked));
        }
    }
};

const ConnectedRegister = connect(mapStateToProps, mapDispatchToProps)(RegisterLogin);


export default ConnectedRegister;