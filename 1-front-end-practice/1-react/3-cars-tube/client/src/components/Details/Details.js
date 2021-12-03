import { useState, useEffect } from 'react';

import useUser from '../../hooks/useUser.js';

import { getOneCar } from '../../services/carService.js';

import CarInfo from './CarInfo/CarInfo.js';
import ActionBtns from './ActionBtns/ActionBtns.js';

const Details = ({ match }) => {

    const carId = match.params.carId;

    const { user } = useUser();

    const [car, setCar] = useState({});

    useEffect(() => {

        getOneCar(carId)
            .then(car => setCar(car))
            .catch(err => alert(err));

    }, []);

    return (
        <section id="listing-details">
            <h1>Details</h1>
            <div className="details-info">

                <CarInfo car={car} />

                {user?._id === car._ownerId
                    ? <ActionBtns carId={carId} token={user?.accessToken} />
                    : ''
                }

            </div>
        </section>
    );

};

export default Details;