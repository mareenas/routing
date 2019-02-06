import {NavLink} from "react-router-dom";
import React from 'react';
import style from './css/Sidebar.module.css';

const SideBar = () => {
    return(
        <div>
            <ul>
                <NavLink activeClassName={style.activeLink} to="/profile"><li>Профиль</li></NavLink>
                <NavLink activeClassName={style.activeLink} to="/dialogs"><li>Сообщения</li></NavLink>
                <NavLink activeClassName={style.activeLink} to="/friends"><li>Друзья</li></NavLink>
                <NavLink activeClassName={style.activeLink} to="/music"><li>Музыка</li></NavLink>
                <NavLink activeClassName={style.activeLink} to="/news"><li>Новости</li></NavLink>
                <NavLink activeClassName={style.activeLink} to="/settings"><li>Настройки</li></NavLink>
            </ul>
        </div>
    )
};

export default SideBar;