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
    const newState = {...state};
    switch (action.type) {
        case SET_LOG_IN_TO_TRUE:
            newState.isAuth = true;
            return newState;
        case SET_LOG_IN_TO_FALSE:
            newState.isAuth = false;
            return newState;
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    id: action.userId,
                    login: action.userLogin
                }
            };
            // newState.userInfo.userId = action.id;
            // newState.userInfo.login = action.login;
            // return newState;
        default:
            return state;
    }
};