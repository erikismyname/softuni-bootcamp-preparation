import { useState, useEffect } from 'react';

import { getAllCars } from '../../services/carService.js';

import CarCard from '../common/CarCard/CarCard.js';

const Catalog = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [cars, setCars] = useState([]);

    useEffect(() => {

        getAllCars()
            .then(cars => {
                setIsLoading(false);
                setCars(cars);
            })
            .catch(err => alert(err));

    }, []);

    const carsListing = (
        cars.length
            ? cars.map(c => <CarCard key={c._id} car={c} />)
            : <p className="no-cars">No cars in database.</p>
    );

    return (
        <section id="car-listings">
            <h1>Car Listings</h1>
            <div className="listings">

                {isLoading ? <p>Loading cars...</p> : carsListing}

            </div>
        </section>
    );

};

export default Catalog;