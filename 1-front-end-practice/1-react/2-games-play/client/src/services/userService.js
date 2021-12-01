import { ENDPOINTS } from '../config/constants.js';
import { getRequest, postRequest } from '../api/api.js';

async function loginUser(userData) {

    return postRequest(ENDPOINTS.user + '/login', userData);

}

async function registerUser(userData) {

    return postRequest(ENDPOINTS.user + '/register', userData);

}

async function logoutUser() {

    return getRequest(ENDPOINTS.user + '/logout');

}

export {
    loginUser,
    registerUser,
    logoutUser,
};