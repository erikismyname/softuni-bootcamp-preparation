import { ENDPOINTS } from '../config/constants.js';
import * as api from '../api/api.js';

const getAllBooks = async () =>
    api.getRequest(`${ENDPOINTS.book}?sortBy=_createdOn%20desc`);

const getOneBook = async (bookId) =>
    api.getRequest(`${ENDPOINTS.book}/${bookId}`);

const getMyBooks = async (userId, token) =>
    api.getRequest(`${ENDPOINTS.book}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`, token);

const createBook = async (token, bookData) =>
    api.postRequest(`${ENDPOINTS.book}`, token, bookData);

const updateBook = async (bookId, token, bookData) =>
    api.putRequest(`${ENDPOINTS.book}/${bookId}`, token, bookData);

const deleteBook = async (bookId, token) =>
    api.deleteRequest(`${ENDPOINTS.book}/${bookId}`, token);

export { getAllBooks, getOneBook, getMyBooks, createBook, updateBook, deleteBook };