import { Link } from 'react-router-dom';

import { useUser } from '../../context/UserContext.js';

import UserNavigation from "./UserNavigation/UserNavigation.js";
import GuestNavigation from "./GuestNavigation/GuestNavigation.js";

const Navigation = () => {

    const { user } = useUser();

    return (
        <nav>
            <Link to="/all-memes">All Memes</Link>

            {user.username
                ? <UserNavigation />
                : <GuestNavigation />
            }

        </nav>
    );

};

export default Navigation;