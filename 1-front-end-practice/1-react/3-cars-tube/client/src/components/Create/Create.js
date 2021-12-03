import useUser from '../../hooks/useUser.js';

import { createCar } from '../../services/carService.js';

const Create = ({ history }) => {

    const { user } = useUser();

    const onCreateFormSubmit = async (ev) => {

        ev.preventDefault();

        const [brand, model, description, year, imageUrl, price] = [...ev.target].slice(0, -1).map(i => i.value).map(e => e.trim());

        if (!brand || !model || !description || !year || !imageUrl || !price) {

            return alert('All fields are required!');

        } else if (year <= 0) {

            return alert('Year must be a positive number!');

        } else if (price <= 0) {

            return alert('Price must be a positive number!');

        }

        const carData = { brand, model, description, year, imageUrl, price };

        try {

            await createCar(user.accessToken, carData);

            history.push('/catalog');

        } catch (err) {

            alert(err);

        }

    };

    return (
        <section id="create-listing">
            <div className="container">
                <form id="create-form" onSubmit={onCreateFormSubmit}>
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create a listing.</p>
                    <hr />

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" />

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" />

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" />

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" />

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" />

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" />

                    <hr />
                    <input type="submit" className="registerbtn" value="Create Listing" />
                </form>
            </div>
        </section>
    );

};

export default Create;