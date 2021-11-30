import UserNav from "./UserNav/UserNav.js";
import GuestNav from "./GuestNav/GuestNav.js";

const Nav = () => {

    return (

        <nav>
            <a href="#">All games</a>
            <UserNav />
            <GuestNav />
        </nav>

    );

};

export default Nav;