import { ENDPOINTS } from '../config/constants.js';
import * as api from '../api/api.js';

async function getAllGames() {

    return api.getRequest(`${ENDPOINTS.game}?sortBy=_createdOn%20desc`);

}

async function getRecentGames() {

    return api.getRequest(`${ENDPOINTS.game}?sortBy=_createdOn%20desc`);

}

async function getOneGame(gameId) {

    return api.getRequest(`${ENDPOINTS.game}/${gameId}`);

}

async function createGame(token, gameData) {

    return api.postRequest(ENDPOINTS.game, token, gameData);

}

async function editGame(gameId, token, gameData) {

    return api.putRequest(`${ENDPOINTS.game}/${gameId}`, token, gameData);

}

async function deleteGame(gameId, token) {

    return api.deleteRequest(`${ENDPOINTS.game}/${gameId}`, token);

}

export {
    getAllGames,
    getRecentGames,
    getOneGame,
    createGame,
    editGame,
    deleteGame,
};