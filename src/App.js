import React, {Component} from 'react';
import './App.css';
import {Route} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";
import Moment from 'react-moment';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <Link to="/">THIS IS SPARTA</Link>
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
                        <h3>{this.props.profile.name}</h3>
                        <div>
                            День рождения: <Moment format="DD/MM/YYYY" unix date={this.props.profile.dateOfBirth} /> <br/>
                            Город: {this.props.profile.city} <br/>
                            Образование: {this.props.profile.education} <br/>
                            Веб-сайт: <a href={this.props.profile.webSite}>{this.props.profile.webSite}</a> <br/>
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
                    {this.props.profile.wall.posts.map((post) => {
                        return (
                            <div className="note" key={post.id}>
                                <div className="note-pic">
                                    <img
                                        src={this.props.profile.avatar}
                                        alt=""/>
                                </div>
                                <div className="note-message">{post.text}</div>
                            </div>
                        )
                    })}
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
                        {this.props.dialogs.dialogs.map((dialog) => {
                            return(
                                <li className="chat" key={dialog.id}><img src={dialog.avatar} className="dialog-avatar" alt="avatar"/>{dialog.name}</li>
                            )
                        })}
                    </ul>
                </div>
                <DialogPanel dialogs={this.props.dialogs} chosenDialogIndex={0} profile={this.props.profile}/>
            </div>
        )
    }
}

class DialogPanel extends Component {
    render() {
        let user = this.props.dialogs.dialogs[this.props.chosenDialogIndex];
        let chosenMessages = this.props.dialogs.messages.filter((message) => {return message.userId === user.id});
        return (
            <div className="dialog-window">
                {chosenMessages.map((message) => {
                    return <div className="message-wrapper">
                        <div className="userpic">
                            {message.myMessage ? <img src={this.props.profile.avatar} alt="" /> : <img src={user.avatar} alt="" />}
                            <div className="dialog-name-wrapper">
                                {message.myMessage ? this.props.profile.name : user.name }
                            </div>
                        </div>
                        <div className="user-message">{message.text}</div>
                    </div>
                })}
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
                            <Route exact path="/profile" component={(props) => <Profile {...props} profile={this.props.profile} />} />
                            <Route exact path="/dialogs" component={(props) => <Dialogs {...props} dialogs={this.props.dialogs} profile={this.props.profile} />} />
                            <Route exact path="/" component={RegisterLogin} />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
