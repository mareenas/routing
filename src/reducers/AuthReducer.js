import {SET_LOG_IN_TO_FALSE, SET_LOG_IN_TO_TRUE, SET_LOG_IN_TO_TRUE_2} from "../actions";


let initialState = {
    login: "lala",
    password: "42",
    loginState: false
};

export const authReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case SET_LOG_IN_TO_TRUE:
            if(action.login === newState.login && action.password === newState.password) {
                newState.loginState = true;
            }
            return newState;
        case SET_LOG_IN_TO_TRUE_2:
            newState.loginState = true;
            console.log("State is "+newState.loginState);
            return newState;
        case SET_LOG_IN_TO_FALSE:
            newState.loginState = false;
            return newState;
        default:
            return state;
    }
};