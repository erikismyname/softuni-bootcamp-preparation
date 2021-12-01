import { Link } from 'react-router-dom';

import useUser from '../../../hooks/useUser.js';
import UserNav from "./UserNav/UserNav.js";
import GuestNav from "./GuestNav/GuestNav.js";

const Nav = () => {

    const { user } = useUser();

    return (

        <nav>
            <Link to="/catalog">All games</Link>

            {user?.email
                ? <UserNav />
                : <GuestNav />
            }

        </nav >

    );

};

export default Nav;