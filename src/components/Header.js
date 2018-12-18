import React from 'react';
import {Link} from "react-router-dom";
import style from './css/Header.module.css';

const Header = () => {
    return(
        <div className={style.header}>
            <Link to="/">THIS IS SPARTA</Link>
        </div>
    )
};

export default Header;