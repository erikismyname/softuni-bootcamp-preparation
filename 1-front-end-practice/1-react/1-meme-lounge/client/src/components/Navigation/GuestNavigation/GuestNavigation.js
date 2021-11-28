import { Link } from 'react-router-dom';

const GuestNavigation = () => {

    return (
        <div className="guest">
            <div className="profile">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            <Link to="/">Home Page</Link>
        </div>
    );

};

export default GuestNavigation;