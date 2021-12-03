import { Link, useHistory } from "react-router-dom";

import { deleteCar } from '../../../services/carService.js';

const ActionBtns = ({ carId, token }) => {

    const history = useHistory();

    const onDeleteBtnClick = async (ev) => {

        ev.preventDefault();

        const isConfirmed = window.confirm('Are you sure?');

        if (isConfirmed) {

            try {

                await deleteCar(carId, token);

                history.push('/catalog');

            } catch (err) {

                alert(err);

            }

        }

    };

    return (
        <div className="listings-buttons">
            <Link
                to={`/edit/${carId}`}
                className="button-list"
            >
                Edit
            </Link>
            <Link
                to={`/delete/${carId}`}
                className="button-list"
                onClick={onDeleteBtnClick}
            >
                Delete
            </Link>
        </div>
    );

};

export default ActionBtns;