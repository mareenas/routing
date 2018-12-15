import React from 'react';
import './App.css';
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import RegisterLogin from "./components/RegisterLogin";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="root-el">
                <Header />
                <div className='content-wrapper'>
                    <div className='sidebar-block'>
                        <SideBar/>
                    </div>
                    <div className='content'>
                        <Route exact path="/profile" component={() => <Profile profile={props.profile} />} />
                        <Route exact path="/dialogs" component={() => <Dialogs dialogs={props.dialogs} profile={props.profile} />} />
                        <Route exact path="/" component={RegisterLogin} />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
