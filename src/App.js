import React from 'react';
import './App.css';
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import RegisterLogin from "./components/RegisterLogin";
import style from './components/css/App.module.css';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={style.rootEl}>
                <Header />
                <div className={style.contentWrapper}>
                    <div className={style.sidebarBlock}>
                        <SideBar/>
                    </div>
                    <div className={style.content}>
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/dialogs" component={Dialogs} />
                        <Route exact path="/" component={RegisterLogin} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
