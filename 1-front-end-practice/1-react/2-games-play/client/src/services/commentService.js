import { ENDPOINTS } from '..//config/constants.js';
import { getRequest, postRequest } from '../api/api.js';

async function getAllComments(gameId) {

    return getRequest(`${ENDPOINTS.comment}?where=gameId%3D%22${gameId}%22`);

}

async function postComment(commentData, token) {

    return postRequest(ENDPOINTS.comment, token, commentData);

}

export {
    getAllComments,
    postComment,
};