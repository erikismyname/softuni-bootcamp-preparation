import { useState, useEffect } from "react";

import CarCard from "../common/CarCard/CarCard.js";

import useUser from '../../hooks/useUser.js';

import { getMyCars } from '../../services/carService.js';

const Profile = () => {

    const { user } = useUser();

    const [cars, setCars] = useState([]);

    useEffect(() => {

        getMyCars(user._id, user.accessToken)
            .then(cars => setCars(cars))
            .catch(err => alert(err));

    }, []);

    return (
        <section id="my-listings">
            <h1>My car listings</h1>
            <div className="listings">

                {cars.length
                    ? cars.map(c => <CarCard key={c._id} car={c} />)
                    : <p className="no-cars"> You haven't listed any cars yet.</p>
                }

            </div>
        </section>
    );

};

export default Profile;