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

function getRequestOptions(method = 'GET', body, token) {

    const options = {
        method,
        headers: {},
    };

    if (body) {

        request.headers['Content-Type'] = 'application/json';

        options.headers.body = body;

    }

    if (token) {

        options.headers['X-Authorization'] = token;

    }

    return options;

}