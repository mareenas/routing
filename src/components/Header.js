import React from 'react';
import {Link} from "react-router-dom";
import style from './css/Header.module.css';
import connect from "react-redux/es/connect/connect";
import {logoutFunc} from "../actions";

const Header = (props) => {
    return(
        <div className={style.header}>
            <Link to="/">{props.isAuth ? <span className={style.sparta}>{props.username}</span> : <span>This is sparta</span>}</Link>
            <Link to="/"><span className={style.logOutButton}><input type="button" onClick={props.logoutFunc} value="Log out" disabled={props.status==="INPROGRESS"} /></span></Link>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        loginState: state.auth.loginState,
        status: state.login.status,
        isAuth: state.auth.isAuth,
        username: state.auth.userInfo.userName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutFunc: () => {
            dispatch(logoutFunc())
        }

    }
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;