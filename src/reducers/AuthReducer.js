import {SET_LOG_IN_TO_FALSE, SET_LOG_IN_TO_TRUE, SET_LOG_IN_TO_TRUE_2} from "../actions";


let initialState = {
    isAuth: false,
    status: '',
    errors: '',
    message: '',
    captchaUrl: ''
};

export const authReducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case SET_LOG_IN_TO_TRUE:
            newState.isAuth = true;
            return newState;
        case SET_LOG_IN_TO_FALSE:
            newState.isAuth = false;
            return newState;
        default:
            return state;
    }
};