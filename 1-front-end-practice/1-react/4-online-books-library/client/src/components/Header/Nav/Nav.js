import { Link } from "react-router-dom";

import useUser from "../../../hooks/useUser.js";

import GuestNav from "./GuestNav/GuestNav.js";
import UserNav from "./UserNav/UserNav.js";

const Nav = () => {

    const { user } = useUser();

    return (
        <nav className="navbar">
            <section className="navbar-dashboard">
                <Link to="/dashboard">Dashboard</Link>

                {user ? <UserNav /> : <GuestNav />}

            </section>
        </nav>
    );

};

export default Nav;