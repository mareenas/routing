import React from 'react';
import {Link} from "react-router-dom";
import style from './css/Header.module.css';
import connect from "react-redux/es/connect/connect";
import {logoutFunc} from "../actions";

const Header = (props) => {
    return(
        <div className={style.header}>
            {props.isAuth ? <span className={style.sparta}>{props.login}</span> : <Link to="/">Log in</Link>}
            {props.isAuth && <Link to="/">
                <span className={style.logOutButton}>
                    <input type="button" onClick={props.logoutFunc} value="Log out" disabled={props.status==="INPROGRESS"} />
                </span></Link>}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        status: state.login.status,
        isAuth: state.auth.isAuth,
        login: state.auth.userInfo.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutFunc: () => {
            dispatch(logoutFunc())
        },
    }
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;