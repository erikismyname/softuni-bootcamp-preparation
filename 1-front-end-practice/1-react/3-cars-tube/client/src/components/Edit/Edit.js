import { useState, useEffect } from "react";

import useUser from "../../hooks/useUser.js";

import { getOneCar, updateCar } from '../../services/carService.js';

const Edit = ({ match, history }) => {

    const carId = match.params.carId;

    const { user } = useUser();

    const [car, setCar] = useState({});

    useEffect(() => {

        getOneCar(carId)
            .then(car => setCar(car))
            .catch(err => alert(err));

    }, []);

    const onEditFormSubmit = async (ev) => {

        ev.preventDefault();

        const [brand, model, description, year, imageUrl, price] = [...ev.target].slice(0, -1).map(i => i.value).map(v => v.trim());

        if (!brand || !model || !description || !year || !imageUrl || !price) {

            return alert('All fields are required!');

        } else if (year <= 0) {

            return alert('Year must be a positive number!');

        } else if (price <= 0) {

            return alert('Price must be a positive number!');

        }

        const carData = { brand, model, description, year, imageUrl, price };

        try {

            await updateCar(carId, user.accessToken, carData);

            history.push(`/details/${carId}`);

        } catch (err) {

            alert(err);

        }

    };

    return (
        <section id="edit-listing">
            <div className="container">

                <form id="edit-form" onSubmit={onEditFormSubmit}>
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr />

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" defaultValue={car.brand} />

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" defaultValue={car.model} />

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" defaultValue={car.description} />

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" defaultValue={car.year} />

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" defaultValue={car.imageUrl} />

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" defaultValue={car.price} />

                    <hr />
                    <input type="submit" className="registerbtn" value="Edit Listing" />
                </form>
            </div>
        </section>
    );

};

export default Edit;