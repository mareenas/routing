import {Link} from "react-router-dom";
import React, {Component} from 'react';

class SideBar extends Component {
    render() {
        return(
            <div className="sidebar">
                <ul>
                    <Link to="/profile"><li>Профиль</li></Link>
                    <Link to="/dialogs"><li>Сообщения</li></Link>
                    <li>Новости</li>
                    <li>Музыка</li>
                    <li>Настройки</li>
                </ul>
            </div>
        )
    }
}

export default SideBar;