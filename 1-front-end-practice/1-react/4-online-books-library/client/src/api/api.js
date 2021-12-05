const request = async (url, options) => {

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

};

const getRequestOptions = (method, token, body) => {

    const options = {
        method,
        headers: {},
    };

    if (token) options.headers['X-Authorization'] = token;

    if (body) {

        options.headers['Content-Type'] = 'application/json';

        options.body = JSON.stringify(body);

    }

    return options;

}

const getRequest = async (url, token) =>
    request(url, getRequestOptions('GET', token));

const postRequest = async (url, token, body) =>
    request(url, getRequestOptions('POST', token, body));

const putRequest = async (url, token, body) =>
    request(url, getRequestOptions('PUT', token, body));

const deleteRequest = async (url, token) =>
    request(url, getRequestOptions('DELETE', token));

export { getRequest, postRequest, putRequest, deleteRequest };