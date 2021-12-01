import { Link, useHistory } from 'react-router-dom';

import useUser from '../../../../hooks/useUser.js';
import { logoutUser } from '../../../../services/userService.js';

const UserNav = () => {

    const { user, addUser } = useUser();

    const history = useHistory();

    const onLogoutBtnClick = async (ev) => {

        ev.preventDefault();

        try {

            await logoutUser(user.accessToken);

            addUser({});

            history.push('/');

        } catch (err) {

            alert(err);

        }

    };

    return (

        <div id="user">
            <Link to="/create">Create Game</Link>
            <Link to="/logout" onClick={onLogoutBtnClick}>Logout</Link>
        </div>

    );

};

export default UserNav;