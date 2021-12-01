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

function getRequestOptions(method, token, body) {

    const options = {
        method,
        headers: {},
    };

    if (token) {

        options.headers['X-Authorization'] = token;

    }

    if (body) {

        options.headers['Content-Type'] = 'application/json';

        options.body = JSON.stringify(body);

    }

    return options;

}

async function getRequest(url, token) {

    return request(url, getRequestOptions('GET', token));

}

async function postRequest(url, token, body) {

    return request(url, getRequestOptions('POST', token, body));

}

async function putRequest(url, token, body) {

    return request(url, getRequestOptions('POST', token, body));

}

async function deleteRequest(url, token) {

    return request(url, getRequestOptions('DELETE', token));

}

export {
    getRequest,
    postRequest,
    putRequest,
    deleteRequest,
};