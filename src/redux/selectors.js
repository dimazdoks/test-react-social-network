import {createSelector} from "reselect";

export const getUsers = state => {
    return state.usersPage.users;
};

// create super selector
// call it's like other seletors: getUsersSuperSelector(state)
export const getUsersSuperSelector = createSelector(getUsers, users => {
    return users.filter(u => true);
});

export const getUsersPageSize = state => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = state => {
    return state.usersPage.totalUsersCount;
};

export const getUserCurrentPage = state => {
    return state.usersPage.currentPage;
};

export const getIsFetching = state => {
    return state.usersPage.isFetching;
};

export const getFollowingInProgres = state => {
    return state.usersPage.followingInProgres;
};


