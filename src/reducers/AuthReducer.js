import {SET_LOG_IN_TO_FALSE, SET_LOG_IN_TO_TRUE} from "../actions";


let initialState = {
    isAuth: false,
    userInfo: {
        userId: null,
        userName: '',
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
        default:
            return state;
    }
};