import { ENDPOINTS } from '../config/constants.js';
import * as api from '../api/api.js';

async function getAllMemes() {

    return api.getRequest(ENDPOINTS.meme + '?sortBy=_createdOn%20desc');

}

async function getOneMeme(memeId) {

    return api.getRequest(ENDPOINTS.meme + `/${memeId}`);

}

async function getMyMemes() {



}

export {
    getAllMemes,
    getOneMeme,
    getMyMemes,
};