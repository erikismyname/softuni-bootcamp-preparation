import { Link, useHistory } from 'react-router-dom';

import { logoutUser } from '../../../../services/userService.js';

const UserNav = () => {

    const history = useHistory();

    const onLogoutBtnClick = async () => {

        await logoutUser();

        history.push('/');

    };

    return (

        <div id="user">
            <Link to="/create">Create Game</Link>
            <Link to="/logout" onClick={onLogoutBtnClick}>Logout</Link>
        </div>

    );

};

export default UserNav;