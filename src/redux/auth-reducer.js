import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'react-learn/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCESS = 'react-learn/auth/GET-CAPTCHA-URL-SUCCESS';

let startState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
};
const authReducer = (state = startState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
export const getCaptchaUrlSuccess = (captchaURL) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaURL}
});
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
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getMe());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaURL());
        }
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
export const getCaptchaURL = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaURL();
    dispatch(getCaptchaUrlSuccess(response.data.url));
};
export default authReducer;