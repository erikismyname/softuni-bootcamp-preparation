import { ENDPOINTS } from '../config/constants.js';

import * as api from '../api/api.js';

async function getAllMemes() {

    return api.getRequest(ENDPOINTS.meme + '?sortBy=_createdOn%20desc');

}

async function getOneMeme(memeId) {

    return api.getRequest(ENDPOINTS.meme + `/${memeId}`);

}

async function getMyMemes(userId, token) {

    return api.getRequest(ENDPOINTS.meme + `?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`, token);

}

async function createMeme(memeData, token) {

    return api.postRequest(ENDPOINTS.meme, memeData, token);

}

async function editMeme(memeId, memeData, token) {

    return api.putRequest(ENDPOINTS.meme + `/${memeId}`, memeData, token);

}

async function deleteMeme(memeId, token) {

    return api.deleteRequest(ENDPOINTS.meme + `/${memeId}`, token);

}

export {
    getAllMemes,
    getOneMeme,
    getMyMemes,
    createMeme,
    editMeme,
    deleteMeme,
};