import { NavLink } from "react-router-dom";

const GuestNav = () => {

    return (
        <div id="guest">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
        </div>
    );

};

export default GuestNav;