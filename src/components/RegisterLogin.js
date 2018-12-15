import React from 'react';

const RegisterLogin = () => {
    return (
        <div className="registration-login-wrapper">
            <div className="registration-login-form">
                <div className="switch-forms-container">
                    <div className="login-button">Login</div>
                    <div className="registration-button">Registration</div>
                </div>
                <div className="login-form-container hidden">
                    <form action="">
                        <div className="input-block">
                            <div>
                                <label htmlFor="login-email">Email</label>
                            </div>
                            <input type="email" id="login-email" name="login-email" placeholder="Email"/>
                        </div>
                        <div className="input-block">
                            <div>
                                <label htmlFor="login-password">Password</label>
                            </div>
                            <input type="password" id="login-password" name="login-password" placeholder="Password"/>
                        </div>
                        <div className="bottom-container">
                            <div className="checkbox-wrapper">
                                <input type="checkbox" id="checkbox-remember"/>
                                <label htmlFor="checkbox-remember">remember me</label>
                            </div>
                            <div className="submit-button-wrapper">
                                <input type="button" value="Login" className="submit-button-login"/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="register-form-container">
                    <form action="">
                        <div className="input-block">
                            <div>
                                <label htmlFor="register-email">Email</label>
                            </div>
                            <input type="email" id="register-email" name="register-email" placeholder="Email"/>
                        </div>
                        <div className="input-block">
                            <div>
                                <label htmlFor="register-password">Password</label>
                            </div>
                            <input type="password" id="register-password" name="register-password" placeholder="Password"/>
                        </div>
                        <div className="bottom-container">
                            <div className="checkbox-wrapper">
                                <input type="checkbox" id="checkbox-remember"/>
                                <label htmlFor="checkbox-remember">i accept rules</label>
                            </div>
                            <div className="register-button-wrapper">
                                <input type="button" value="Register" className="submit-button-register"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default RegisterLogin;