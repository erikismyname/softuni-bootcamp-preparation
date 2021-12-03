import { NavLink } from "react-router-dom";

import useUser from "../../../hooks/useUser.js";

import GuestNav from "./GuestNav/GuestNav.js";
import UserNav from "./UserNav/UserNav.js";

const Nav = () => {

    const { user } = useUser();

    return (
        <nav>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/catalog">All Listings</NavLink>
            <NavLink to="/filter-by-year">By Year</NavLink>

            {user ? <UserNav /> : <GuestNav />}

        </nav>
    );

};

export default Nav;