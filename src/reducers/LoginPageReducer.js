import {CHANGE_STATUS, LOGIN_ON_CHANGE, PASSWORD_ON_CHANGE, REMEMBER_USER, TOGGLE_FORM} from "../actions";

const statuses = {
    INIT: "INIT",
    ERROR: "ERROR",
    INPROGRESS: "INPROGRESS",
    SUCCESS: "SUCCESS"
};

let initialState = {
    registerFlag: false,
    login: "",
    password: "",
    rememberMe: false,
    status: statuses.INIT
};

export const loginPageReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case TOGGLE_FORM:
            newState.registerFlag = action.isRegister;
            return newState;
        case REMEMBER_USER:
            console.log(action.rememberMe);
            newState.rememberMe = action.rememberMe;
            return newState;
        case LOGIN_ON_CHANGE:
            newState.login = action.login;
            return newState;
        case PASSWORD_ON_CHANGE:
            newState.password = action.password;
            return newState;
        case CHANGE_STATUS:
            newState.status = action.status;
            return newState;
        default:
            return state;
    }
};