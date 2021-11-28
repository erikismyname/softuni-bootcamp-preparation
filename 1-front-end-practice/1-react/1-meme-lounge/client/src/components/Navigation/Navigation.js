import { Link } from 'react-router-dom';

import UserNavigation from "./UserNavigation/UserNavigation.js";
import GuestNavigation from "./GuestNavigation/GuestNavigation.js";

const Navigation = () => {

    return (
        <nav>
            <Link to="/all-memes">All Memes</Link>
            <UserNavigation />
            <GuestNavigation />
        </nav>
    );

};

export default Navigation;