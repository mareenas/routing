import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {authReducer} from "./reducers/AuthReducer";
import {profilePageReducer} from "./reducers/ProfilePageReducer";
import {loginPageReducer} from "./reducers/LoginPageReducer";
import {dialogsPageReducer} from "./reducers/DialogsPageReducer";

const superReducer = combineReducers({
    profile: profilePageReducer,
    dialogs: dialogsPageReducer,
    login: loginPageReducer,
    auth: authReducer
});

const store = createStore(superReducer, applyMiddleware(thunk));
export default store;

