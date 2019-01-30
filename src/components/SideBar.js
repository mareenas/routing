import {NavLink} from "react-router-dom";
import React from 'react';
import style from './css/Sidebar.module.css';

const SideBar = () => {
    return(
        <div>
            <ul>
                <NavLink activeClassName={style.activeLink} to="/profile"><li>Профиль</li></NavLink>
                <NavLink activeClassName={style.activeLink} to="/dialogs"><li>Сообщения</li></NavLink>
                <li>Новости</li>
                <li>Музыка</li>
                <li>Настройки</li>
            </ul>
        </div>
    )
};

export default SideBar;