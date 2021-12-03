import { ENDPOINTS } from '../config/constants.js';
import * as api from '../api/api.js';

const getAllCars = async () => api.getRequest(`${ENDPOINTS.car}/?sortBy=_createdOn%20desc`);

const getOneCar = async (carId) => api.getRequest(`${ENDPOINTS.car}/${carId}`);

const getMyCars = async (userId, token) => api.getRequest(`${ENDPOINTS.car}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`, token);

const createCar = async (token, carData) => api.postRequest(ENDPOINTS.car, token, carData);

const updateCar = async (carId, token, carData) => api.putRequest(`${ENDPOINTS.car}/${carId}`, token, carData);

const deleteCar = async (carId, token) => api.deleteRequest(`${ENDPOINTS.car}/${carId}`, token);

const filterCarsByYear = async (carYear) => api.getRequest(`${ENDPOINTS.car}/?where=year%3D${carYear}`);

export { getAllCars, getOneCar, getMyCars, createCar, updateCar, deleteCar, filterCarsByYear };