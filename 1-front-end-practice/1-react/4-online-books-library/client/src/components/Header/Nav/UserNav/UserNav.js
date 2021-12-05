import { Link, useHistory } from "react-router-dom";

import useUser from "../../../../hooks/useUser.js";
import { logoutUser } from '../../../../services/userService.js';

const UserNav = () => {

    const history = useHistory();

    const { user, addUser } = useUser();

    const onLogoutBtnClick = async (ev) => {

        ev.preventDefault();

        try {

            await logoutUser(user.accessToken);

            addUser(null);

            history.push('/dashboard');

        } catch (err) {

            alert(err);

        }

    };

    return (
        <div id="user">
            <span>Welcome, email</span>
            <Link className="button" to="/my-books">My Books</Link>
            <Link className="button" to="/create">Add Book</Link>
            <Link
                className="button"
                to="/logout"
                onClick={onLogoutBtnClick}
            >
                Logout
            </Link>
        </div>
    );

};

export default UserNav;