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