import { Link } from "react-router-dom";

const GuestNav = () => {

    return (
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    );

};

export default GuestNav;