export const ADD_STATUS = 'ADD_STATUS';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const GET_USER_ID = 'GET_USER_ID';
export const TOGGLE_FORM = 'TOGGLE_FORM';
export const REMEMBER_USER = 'REMEMBER_USER';
export const LOGIN_ON_CHANGE = 'LOGIN_ON_CHANGE';
export const PASSWORD_ON_CHANGE = 'PASSWORD_ON_CHANGE';
export const SET_LOG_IN_TO_TRUE = 'SET_LOG_IN_TO_TRUE';
export const SET_LOG_IN_TO_FALSE = 'SET_LOG_IN_TO_FALSE';
export const CHANGE_STATUS = "CHANGE_STATUS";
export const SET_LOG_IN_TO_TRUE_2 = 'SET_LOG_IN_TO_TRUE_2';

export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message
    }
};
export const getUserId = (dialog) => {
    return {
        type: GET_USER_ID,
        id: dialog.id
    }
};
export const addStatus = (status) => {
    return {
        type: ADD_STATUS,
        status
    }
};
export const toggleForm = (isRegisterFlag) => {
    return {
        type: TOGGLE_FORM,
        isRegister: isRegisterFlag
    }
};
export const saveLogin = (login) => {
    return {
        type: LOGIN_ON_CHANGE,
        login
    }
};
export const savePassword = (password) => {
    return {
        type: PASSWORD_ON_CHANGE,
        password
    }
};
export const saveRememberMe = (rememberMe) => {
    return {
        type: REMEMBER_USER,
        rememberMe
    }
};
export const logIn = (login, password) => {
    return {
        type: SET_LOG_IN_TO_TRUE,
        login,
        password
    }
};
export const setLogInToTrue = () => {
    return {
        type: SET_LOG_IN_TO_TRUE_2,
    }
};
export const logOut = () => {
    return {
        type: SET_LOG_IN_TO_FALSE,
    }
};
export const changeStatus = (status) => {
    return {
        type: CHANGE_STATUS,
        status
    }
};
export const submitButtonClick = () => {
    return (dispatch) => {
        dispatch(changeStatus("in progress"));
        // axios.post()
        setTimeout(() => {dispatch(setLogInToTrue())},
            3000)
    };
};

