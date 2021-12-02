import { useHistory } from 'react-router';

import { Link } from 'react-router-dom';
import { deleteGame } from '../../../../services/gameService.js';

const ActionBtns = ({ gameId, user }) => {

    const history = useHistory();

    const onDeleteBtnClick = async () => {

        const isConfirmed = window.confirm('Are you sure?');

        if (isConfirmed) {

            try {

                await deleteGame(gameId, user.accessToken);

                history.push('/');

            } catch (err) {

                alert(err);

            }

        }

    };

    return (

        <div className="buttons">
            <Link to={`/edit/${gameId}`} className="button">Edit</Link>
            <button className="button" onClick={onDeleteBtnClick}>Delete</button>
        </div>

    );

};

export default ActionBtns;