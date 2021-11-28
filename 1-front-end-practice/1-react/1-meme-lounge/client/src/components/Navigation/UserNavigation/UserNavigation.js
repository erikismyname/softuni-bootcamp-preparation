import { Link } from 'react-router-dom';

const UserNavigation = () => {

    return (
        <div className="user">
            <Link to="/create-meme">Create Meme</Link>
            <div className="profile">
                <span>Welcome, email here</span>
                <Link to="/my-profile">My Profile</Link>
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    );

};

export default UserNavigation;