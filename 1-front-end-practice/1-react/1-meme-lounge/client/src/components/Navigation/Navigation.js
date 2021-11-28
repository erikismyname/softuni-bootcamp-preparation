import UserNavigation from "./UserNavigation/UserNavigation.js";
import GuestNavigation from "./GuestNavigation/GuestNavigation.js";

const Navigation = () => {

    return (
        <nav>
            <a href="#">All Memes</a>
            <UserNavigation />
            <GuestNavigation />
        </nav>
    );

};

export default Navigation;