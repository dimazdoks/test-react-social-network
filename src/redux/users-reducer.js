import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'react-learn/users/FOLLOW';
const UNFOLLOW = 'react-learn/users/UNFOLLOW';
const SET_USERS = 'react-learn/users/SET-USERS';
const SET_CURRENT_PAGE = 'react-learn/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'react-learn/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'react-learn/users/TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'react-learn/users/TOGGLE-FOLLOWING-IN-PROGRESS';


const startState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgres: []
};

function userReducer(state = startState, action) {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.id, 'id', {followed: false})
            };
        case SET_USERS:
            return {...state, users: [...action.users]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgres:
                    action.progress
                        ? [...state.followingInProgres, action.userId]
                        : state.followingInProgres.filter(id => id !== action.userId)
            };
        default:
            return state
    }
}

export const acceptFollowUser = (userId) => ({type: FOLLOW, id: userId});
export const acceptUnfollowUser = (userId) => ({type: UNFOLLOW, id: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, currentPage: page});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount});
export const setToggleFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleFollowingInProgress = (progress, userId) => ({type: TOGGLE_FOLLOWING_IN_PROGRESS, progress, userId});

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleFollowingInProgress(true, id));
    let data = await apiMethod(id);
    if (data.resultCode === 0) dispatch(actionCreator(id));
    dispatch(toggleFollowingInProgress(false, id));
};
export const followUser = (id) => (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.followUser.bind(usersAPI), acceptFollowUser);
};
export const unfollowUser = (id) => (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.unfollowUser.bind(usersAPI), acceptUnfollowUser);
};

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(setToggleFetching(true));

    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setToggleFetching(false));
};

export default userReducer;