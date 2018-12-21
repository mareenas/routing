import {Link} from "react-router-dom";
import React from 'react';

const SideBar = () => {
    return(
        <div>
            <ul>
                <Link to="/profile"><li>Профиль</li></Link>
                <Link to="/dialogs"><li>Сообщения</li></Link>
                <li>Новости</li>
                <li>Музыка</li>
                <li>Настройки</li>
            </ul>
        </div>
    )
};

export default SideBar;