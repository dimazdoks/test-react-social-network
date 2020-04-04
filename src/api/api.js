import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '8aee9fdf-cb03-4bb7-8d65-ebf5c492d913'
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUser (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
};

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status});
    }
};

export const authAPI = {
    getAuthMe () {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login (email, password, rememberMe) {
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout () {
        return instance.delete('auth/login');
    }
};