import React, {Component} from 'react';
import './App.css';
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import RegisterLogin from "./components/RegisterLogin";


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
