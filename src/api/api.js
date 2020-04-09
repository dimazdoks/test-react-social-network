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
    },
    savePhoto (photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile);

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile (profile) {
        return instance.put(`profile`, profile);
    }
};

export const authAPI = {
    getAuthMe () {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login (email, password, rememberMe, captcha = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha});
    },
    logout () {
        return instance.delete('auth/login');
    }
};

export const securityAPI = {
    getCaptchaURL() {
        return instance.get('security/get-captcha-url');
    }
};