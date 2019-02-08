import {SET_LOG_IN_TO_FALSE, SET_LOG_IN_TO_TRUE, SET_USER_INFO} from "../actions";


let initialState = {
    isAuth: false,
    userInfo: {
        id: null,
        login: null,
        email: null,
        avatarUrl: "https://marketplace.canva.com/MAB6v7RGMOw/1/thumbnail/canva-robot-electric-avatar-icon-MAB6v7RGMOw.png"
    }
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOG_IN_TO_TRUE:
            return {
                ...state,
                isAuth: true
            };
        case SET_LOG_IN_TO_FALSE:
            return {
                ...state,
                isAuth: false
            };
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    id: action.userId,
                    login: action.userLogin
                }
            };
        default:
            return state;
    }
};