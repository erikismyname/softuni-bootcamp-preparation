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

function getRequestOptions(method, body, token) {

    const options = {
        method,
        headers: {},
    };

    if (body) {

        options.headers['Content-Type'] = 'application/json';

        options.body = JSON.stringify(body);

    }

    if (token) {

        options.headers['X-Authorization'] = token;

    }

    return options;

}

async function getRequest(url, token) {

    return request(url, getRequestOptions('GET', null, token));

}

async function postRequest(url, body, token) {

    return request(url, getRequestOptions('POST', body, token));

}

async function putRequest(url, body, token) {

    return request(url, getRequestOptions('PUT', body, token));

}

async function deleteRequest(url, token) {

    return request(url, getRequestOptions('DELETE', null, token))

}

export {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
};