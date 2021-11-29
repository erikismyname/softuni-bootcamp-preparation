import { Link, useHistory } from 'react-router-dom';

import { useUser } from '../../../context/UserContext.js';

import { logoutUser } from '../../../services/userService.js';

const UserNavigation = () => {

    const history = useHistory();

    const { user, addUser } = useUser();

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
        <div className="user">
            <Link to="/create-meme">Create Meme</Link>
            <div className="profile">
                <span>Welcome, {user.email}</span>
                <Link to="/my-profile">My Profile</Link>
                <Link to="/logout" onClick={onLogoutBtnClick}>Logout</Link>
            </div>
        </div>
    );

};

export default UserNavigation;