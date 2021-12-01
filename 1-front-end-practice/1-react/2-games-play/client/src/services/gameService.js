import { ENDPOINTS } from '../config/constants.js';
import * as api from '../api/api.js';

async function getAllGames() {

    return api.getRequest(`${ENDPOINTS.game}?sortBy=_createdOn%20desc`);

}

async function getRecentGames() {

    return api.getRequest(`${ENDPOINTS.game}?sortBy=_createdOn%20desc&distinct=category`);

}

async function getOneGame(gameId) {

    return api.getRequest(`${ENDPOINTS.game}/${gameId}`);

}

async function createGame(gameData) {

    return api.postRequest(ENDPOINTS.game, gameData);

}

async function editGame(gameId, gameData) {

    return api.putRequest(`${ENDPOINTS.game}/${gameId}`, gameData);

}

async function deleteGame(gameId) {

    return api.deleteRequest(`${ENDPOINTS.game}/${gameId}`);

}

export {
    getAllGames,
    getRecentGames,
    getOneGame,
    createGame,
    editGame,
    deleteGame,
};