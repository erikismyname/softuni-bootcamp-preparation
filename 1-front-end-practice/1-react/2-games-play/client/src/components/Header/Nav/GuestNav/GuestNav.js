import { Link } from "react-router-dom";

const GuestNav = () => {

    return (

        <div id="guest">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>

    );

};

export default GuestNav;