import React from 'react';
import style from './css/RegisterLogin.module.css';

const RegisterLogin = () => {
    return (
        <div>
            <div className={style.registrationLoginForm}>
                <div className={style.switchFormsContainer}>
                    <div className={style.loginButton}>Login</div>
                    <div className={style.registrationButton}>Registration</div>
                </div>
                <div className={style.hidden}>
                    <form action="">
                        <div className={style.inputBlock}>
                            <div>
                                <label htmlFor="login-email">Email</label>
                            </div>
                            <input type="email" id="login-email" name="login-email" placeholder="Email"/>
                        </div>
                        <div className={style.inputBlock}>
                            <div>
                                <label htmlFor="login-password">Password</label>
                            </div>
                            <input type="password" id="login-password" name="login-password" placeholder="Password"/>
                        </div>
                        <div className={style.bottomContainer}>
                            <div className={style.checkboxWrapper}>
                                <input type="checkbox" id="checkbox-remember"/>
                                <label htmlFor="checkbox-remember">remember me</label>
                            </div>
                            <div className={style.submitButtonWrapper}>
                                <input type="button" value="Login" className={style.submitButtonLogin}/>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
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
                                <input type="checkbox" id="checkbox-remember"/>
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


export default RegisterLogin;