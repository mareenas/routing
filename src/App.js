import React, {Component} from 'react';
import './App.css';
import {Route} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <div className="header">
                THIS IS SPARTA
            </div>
        )
    }
}

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

class Profile extends Component {
    render() {
        return(
            <div className="profile-page">
                <div className="profile-header" />
                <div className="profile-info">
                    <div className="profile-img">
                        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png" alt="avatar"/>
                    </div>
                    <div className="profile-description">
                        <h3>Илья Муромец</h3>
                        <div>
                            День рождения: 22 декабря <br/>
                            Город: Минск <br/>
                            Образование: БГУ'11 <br/>
                            Веб-сайт: vk.com <br/>
                        </div>
                    </div>
                </div>
                <div className="notes-wrapper">
                    <h3>Мои записи</h3>
                    <form>
                        <textarea name="" id="" placeholder="Что у вас нового..." style={{padding: '5px', width: "98%", height: '50px'}} />
                        <div style={{textAlign: 'right'}}>
                            <input type="button" value="Отправить"/>
                        </div>
                    </form>
                </div>
                <div className="notes-container">
                    <div className="note">
                        <div className="note-pic">
                            <img
                                src="https://marketplace.canva.com/MAB6v7RGMOw/1/thumbnail/canva-robot-electric-avatar-icon-MAB6v7RGMOw.png"
                                alt=""/>
                        </div>
                        <div className="note-message">Message This is message Message This is message Message This is message Message This is message Message
                            This is message Message This is message Message This is message Message This is message Message This is message</div>
                    </div>
                    <div className="note">
                        <div className="note-pic">
                            <img
                                src="https://marketplace.canva.com/MAB6v7RGMOw/1/thumbnail/canva-robot-electric-avatar-icon-MAB6v7RGMOw.png"
                                alt=""/>
                        </div>
                        <div className="note-message">Message</div>
                    </div>
                    <div className="note">
                        <div className="note-pic">
                            <img
                                src="https://marketplace.canva.com/MAB6v7RGMOw/1/thumbnail/canva-robot-electric-avatar-icon-MAB6v7RGMOw.png"
                                alt=""/>
                        </div>
                        <div className="note-message">Message</div>
                    </div>
                </div>
            </div>
        )
    }
}

class Dialogs extends Component {
    render() {
        return(
            <div className="dialogs-wrapper">
                <div className="dialogs-sidebar">
                    <h3>Dialogs</h3>
                    <ul>
                        <li className="chat">Anna</li>
                        <li className="chat">Boris</li>
                        <li className="chat">Carol</li>
                        <li className="chat">Danny</li>
                        <li className="chat">Eugene</li>
                        <li className="chat">Fanny</li>
                        <li className="chat">Gena</li>
                        <li className="chat">Harley</li>
                        <li className="chat">Ivan</li>
                        <li className="chat">John</li>
                    </ul>
                </div>
                <div className="dialog-window">
                    <div className="message-wrapper">
                        <div className="userpic">
                            <img
                                src="https://marketplace.canva.com/MAB6v7RGMOw/1/thumbnail/canva-robot-electric-avatar-icon-MAB6v7RGMOw.png"
                                alt=""
                            />
                            <div className="dialog-name-wrapper">Name 1</div>
                        </div>
                        <div className="user-message">Privet</div>
                    </div>
                    <div className="message-wrapper">
                        <div className="userpic">
                            <img
                                src="https://us.123rf.com/450wm/yupiramos/yupiramos1702/yupiramos170211147/71857291-electric-robot-avatar-character-vector-illustration-design.jpg?ver=6"
                                alt=""
                            />
                            <div className="dialog-name-wrapper">Name 2</div>
                        </div>
                        <div className="user-message">I tebe privet</div>
                    </div>
                    <div className="message-wrapper">
                        <div className="userpic">
                            <img
                                src="https://marketplace.canva.com/MAB6v7RGMOw/1/thumbnail/canva-robot-electric-avatar-icon-MAB6v7RGMOw.png"
                                alt=""
                            />
                            <div className="dialog-name-wrapper">Name 1</div>
                        </div>
                        <div className="user-message">Kak dela?</div>
                    </div>
                    <div className="message-wrapper">
                        <div className="userpic">
                            <img
                                src="https://us.123rf.com/450wm/yupiramos/yupiramos1702/yupiramos170211147/71857291-electric-robot-avatar-character-vector-illustration-design.jpg?ver=6"
                                alt=""
                            />
                            <div className="dialog-name-wrapper">Name 2</div>
                        </div>
                        <div className="user-message">Horosho</div>
                    </div>
                </div>
            </div>
        )
    }
}

class RegisterLogin extends Component {
    render() {
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
    }
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="root-el">
                    <Header />
                    <div className='content-wrapper'>
                        <div className='sidebar-block'>
                            <SideBar/>
                        </div>
                        <div className='content'>
                            <Route exact path="/profile" component={Profile} />
                            <Route exact path="/dialogs" component={Dialogs} />
                            <Route exact path="/" component={RegisterLogin} />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
