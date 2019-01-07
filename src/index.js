import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./store.js";

let renderPage = () => {
    ReactDOM.render(
        <Provider>
            <App store={store} />
        </Provider>, document.getElementById('root')
    );
};

store.subscribe(renderPage);

renderPage();




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
