import { NavLink, useHistory } from "react-router-dom";

import useUser from '../../../../hooks/useUser.js';

import { logoutUser } from '../../../../services/userService.js';

const UserNav = () => {

    const { user, addUser } = useUser();

    const history = useHistory();

    const onLogoutBtnClick = async (ev) => {

        ev.preventDefault();

        await logoutUser(user.accessToken);

        addUser(null);

        history.push('/');

    };

    return (
        <div id="profile">
            <a href="#">Welcome, {user.username}</a>
            <NavLink to="/profile">My Listings</NavLink>
            <NavLink to="/create">Create Listing</NavLink>
            <NavLink to="/logout" onClick={onLogoutBtnClick}>Logout</NavLink>
        </div>
    );

};

export default UserNav;