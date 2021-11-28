import { ENDPOINTS } from '../config/constants.js';
import * as api from '../api/api.js';

async function loginUser(userData) {

    return api.postRequest(ENDPOINTS.user + '/login', userData);

}

async function registerUser(userData) {

    return api.postRequest(ENDPOINTS.user + '/register', userData);

}

async function logoutUser(token) {

    return api.getRequest(ENDPOINTS.user + '/logout', token);

}

export {
    loginUser,
    registerUser,
    logoutUser,
};