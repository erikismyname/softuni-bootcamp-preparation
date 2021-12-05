import { ENDPOINTS } from '../config/constants.js';
import { getRequest, postRequest } from '../api/api.js';

const getAllBookLikes = async (bookId, token) =>
    getRequest(`${ENDPOINTS.like}?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`, token);

const likeBook = async (token, likeData) =>
    postRequest(`${ENDPOINTS.like}`, token, likeData);

const isBookLiked = async (bookId, userId, token) =>
    getRequest(`${ENDPOINTS.like}?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`, token);

export { getAllBookLikes, likeBook, isBookLiked };