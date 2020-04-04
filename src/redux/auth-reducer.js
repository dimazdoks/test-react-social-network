import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'react-learn/auth/SET-USER-DATA';

let startState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export const setAuthUsersData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getMe = () => async (dispatch) => {
    let data = await authAPI.getAuthMe();
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthUsersData(id, email, login, true));
    }
};
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getMe());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
};
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUsersData(null, null, null, false));
    }
};
export default authReducer;