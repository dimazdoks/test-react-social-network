import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'react-learn/profile/ADD-POST';
const SET_USERS_PROFILE = 'react-learn/profile/SET-USERS-PROFILE';
const SET_STATUS = 'react-learn/profile/SET-STATUS';
const SAVE_PHOTO_SUCCESS = 'react-learn/profile/SAVE-PHOTO-SUCCESS';

const startState = {
    posts: [
        {message: 'Hi, how are you?', like: 1},
        {message: 'Today is Sunday!', like: 22},
        {message: 'My name is Dima.', like: 88},
        {message: 'I am ok, and you', like: 14}
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = startState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newItem = {
                id: 5,
                message: action.newPostBody,
                like: 13
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newItem]
            };
        case SET_USERS_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        case SAVE_PHOTO_SUCCESS:
            debugger
            return {...state, profile: {...state.profile, photos: action.photos}};
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getProfile = (id) => async (dispatch) => {
    let data = await profileAPI.getProfile(id);
    dispatch(setUsersProfile(data));
};
export const getStatus = (id) => async (dispatch) => {
    let response = await profileAPI.getStatus(id);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0)
        dispatch(setStatus(status));
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0)
        dispatch(savePhotoSuccess(response.data.data.photos));
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    debugger;
    if (response.data.resultCode === 0)
        dispatch(getProfile(userId));
    else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('edit-profile', {_error: message}));
    }
};

export default profileReducer;