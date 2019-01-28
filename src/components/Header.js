import React from 'react';
import {Link} from "react-router-dom";
import style from './css/Header.module.css';
import connect from "react-redux/es/connect/connect";
import {logOut} from "../actions";

const Header = (props) => {
    return(
        <div className={style.header}>
            <Link to="/"><span className={style.sparta}>THIS IS SPARTA</span></Link>
            <Link to="/"><span className={style.logOutButton}><button onClick={props.logOut}>Log out</button></span></Link>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        loginState: state.auth.loginState
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(logOut())
        }

    }
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(Header);

export default ConnectedHeader;