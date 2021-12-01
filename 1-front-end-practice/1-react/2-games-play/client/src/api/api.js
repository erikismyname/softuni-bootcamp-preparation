import useUser from '../hooks/useUser.js';

async function request(url, options) {

    const response = await fetch(url, options);

    if (!response.ok) {

        const error = await response.json();

        throw new Error(error.message);

    }

    try {

        const data = await response.json();

        return data;

    } catch (err) {

        return response;

    }

}

function getRequestOptions(method = 'GET', body) {

    const options = {
        method,
        headers: {},
    };

    const { user } = useUser();

    const token = user?.accessToken;

    if (token) {

        options.headers['X-Authorization'] = token;

    }

    if (body) {

        request.headers['Content-Type'] = 'application/json';

        options.headers.body = body;

    }

    return options;

}

async function getRequest(url) {

    return request(url, getRequestOptions());

}

async function postRequest(url, body) {

    return request(url, getRequestOptions('POST', body));

}

async function putRequest(url, body) {

    return request(url, getRequestOptions('POST', body));

}

async function deleteRequest(url) {

    return request(url, getRequestOptions('DELETE'));

}

export {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
};