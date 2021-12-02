const request = async (url, options) => {

    try {

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

    } catch (err) {

        alert(err.message);

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