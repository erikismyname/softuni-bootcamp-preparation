import { ENDPOINTS } from '../config/constants.js';
import { getRequest, postRequest } from '../api/api.js';

const loginUser = async (userData) => postRequest(`${ENDPOINTS}/login`, null, userData);

const logoutUser = async (token) => getRequest(`${ENDPOINTS}/logout`, token);

const registerUser = async (userData) => postRequest(`${ENDPOINTS}/register`, null, userData);

export { loginUser, logoutUser, registerUser };